import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { password, token } = body;
        const correctPassword = process.env.ANALYTICS_PASSWORD;

        // Simple token verification (in a real app, use JWT)
        if (token) {
            // Just checking if it matches the "secret" token format we generate below
            const isValid = token === `auth_${correctPassword}`;
            if (isValid) {
                return NextResponse.json({ success: true });
            }
            return NextResponse.json({ message: "Invalid session" }, { status: 401 });
        }

        if (password === correctPassword) {
            // In a production app, use use a proper signed JWT
            // For this simple use case, we'll return a basic token
            const token = `auth_${correctPassword}`;
            return NextResponse.json({ success: true, token });
        }

        return NextResponse.json({ message: "Invalid password" }, { status: 401 });
    } catch (error) {
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
