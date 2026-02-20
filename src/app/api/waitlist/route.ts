import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { readFileSync } from "fs";
import { join } from "path";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, tradingPreference, interestLevel, turnstileToken } = body;

        // Validate required fields
        if (!email || !tradingPreference || !interestLevel) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        // Validate Turnstile Token
        const turnstileSecret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
        if (turnstileSecret) {
            if (!turnstileToken) {
                return NextResponse.json(
                    { message: "Security check required" },
                    { status: 400 }
                );
            }

            const verifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
            const formData = new URLSearchParams();
            formData.append('secret', turnstileSecret);
            formData.append('response', turnstileToken);
            const ip = request.headers.get('x-forwarded-for') as string;
            if (ip) formData.append('remoteip', ip);

            const result = await fetch(verifyUrl, {
                body: formData,
                method: 'POST',
            });

            const outcome = await result.json();
            if (!outcome.success) {
                return NextResponse.json(
                    { message: "Security check failed" },
                    { status: 400 }
                );
            }
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: "Invalid email format" },
                { status: 400 }
            );
        }

        // Check for required environment variables
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        if (!spreadsheetId) {
            console.error("GOOGLE_SHEET_ID is not configured");
            return NextResponse.json(
                { message: "Service not configured" },
                { status: 500 }
            );
        }

        // Load service account credentials from file or env
        let serviceAccountKey;

        try {
            // Try to read from file first (easier for local dev)
            const keyPath = join(process.cwd(), "service-account.json");
            const keyFile = readFileSync(keyPath, "utf-8");
            serviceAccountKey = JSON.parse(keyFile);
        } catch {
            // Fall back to environment variable (for Vercel)
            const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
            if (!credentials) {
                console.error("No service account credentials found");
                return NextResponse.json(
                    { message: "Service not configured" },
                    { status: 500 }
                );
            }
            serviceAccountKey = JSON.parse(credentials);
        }

        // Initialize Google Sheets API
        const auth = new google.auth.GoogleAuth({
            credentials: serviceAccountKey,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        // Map interest level to readable text
        const interestMap: Record<string, string> = {
            yes: "Yes - definitely interested",
            maybe: "Maybe - want to learn more first",
            exploring: "Just exploring",
        };

        // Prepare row data with clean UTC timestamp
        const now = new Date();
        const date = now.toISOString().split('T')[0]; // YYYY-MM-DD
        const time = now.toISOString().split('T')[1].slice(0, 8); // HH:MM:SS
        const timestamp = `${date} ${time} UTC`;

        const rowData = [
            timestamp,
            email,
            tradingPreference,
            interestMap[interestLevel] || interestLevel,
        ];

        // Append to sheet (uses first sheet by default)
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: "'Form Responses 1'!A:D",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [rowData],
            },
        });

        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
