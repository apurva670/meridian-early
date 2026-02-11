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

        const { searchParams } = new URL(request.url);
        const date_from = searchParams.get('date_from') || '-7d';

        // Fetch trend data (Total Pageviews)
        const trendUrl = `${host}/api/projects/${projectId}/insights/trend/?events=[{"id":"$pageview","name":"$pageview","type":"events"}]&date_from=${date_from}&display=ActionsLineGraph`;

        // Fetch unique visitors
        const visitorsUrl = `${host}/api/projects/${projectId}/insights/trend/?events=[{"id":"$pageview","name":"$pageview","type":"events","math":"dau"}]&date_from=${date_from}&display=ActionsLineGraph`;


        const [trendRes, visitorsRes] = await Promise.all([
            fetch(trendUrl, { headers: { Authorization: `Bearer ${personalApiKey}` } }),
            fetch(visitorsUrl, { headers: { Authorization: `Bearer ${personalApiKey}` } })
        ]);

        if (!trendRes.ok || !visitorsRes.ok) {
            console.error("PostHog API Error", await trendRes.text());
            throw new Error("Failed to fetch from PostHog");
        }

        const trendData = await trendRes.json();
        const visitorsData = await visitorsRes.json();

        return NextResponse.json({
            pageviews: trendData.result?.[0]?.data || [],
            visitors: visitorsData.result?.[0]?.data || [],
            labels: trendData.result?.[0]?.labels || [],
            count: trendData.result?.[0]?.count || 0,
            visitor_count: visitorsData.result?.[0]?.count || 0
        });

    } catch (error) {
        console.error("Analytics proxy error:", error);
        return NextResponse.json(
            { message: "Failed to fetch analytics" },
            { status: 500 }
        );
    }
}
