import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const projectId = process.env.POSTHOG_PROJECT_ID;
        const personalApiKey = process.env.POSTHOG_PERSONAL_API_KEY;
        const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

        if (!projectId || !personalApiKey) {
            return NextResponse.json(
                { message: "Analytics not configured" },
                { status: 500 }
            );
        }

        const queryUrl = `${host}/api/projects/${projectId}/query/`;

        // Query for total pageviews (trend)
        const pageviewQuery = {
            "kind": "TrendsQuery",
            "series": [
                {
                    "kind": "EventsNode",
                    "event": "$pageview",
                    "name": "$pageview"
                }
            ],
            "dateRange": {
                "date_from": "-7d"
            },
            "interval": "day"
        };

        // Query for Unique Visitors (DAU)
        const visitorsQuery = {
            "kind": "TrendsQuery",
            "series": [
                {
                    "kind": "EventsNode",
                    "event": "$pageview",
                    "name": "$pageview",
                    "math": "dau"
                }
            ],
            "dateRange": {
                "date_from": "-7d"
            },
            "interval": "day"
        };


        const [trendRes, visitorsRes] = await Promise.all([
            fetch(queryUrl, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${personalApiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: pageviewQuery })
            }),
            fetch(queryUrl, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${personalApiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: visitorsQuery })
            })
        ]);

        if (!trendRes.ok || !visitorsRes.ok) {
            console.error("PostHog API Error", await trendRes.text());
            throw new Error("Failed to fetch from PostHog");
        }

        const trendData = await trendRes.json();
        const visitorsData = await visitorsRes.json();

        return NextResponse.json({
            pageviews: trendData.results?.[0]?.data || [],
            visitors: visitorsData.results?.[0]?.data || [],
            labels: trendData.results?.[0]?.labels || [],
            count: trendData.results?.[0]?.count || 0,
            visitor_count: visitorsData.results?.[0]?.count || 0
        });

    } catch (error) {
        console.error("Analytics proxy error:", error);
        return NextResponse.json(
            { message: "Failed to fetch analytics" },
            { status: 500 }
        );
    }
}
