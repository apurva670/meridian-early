import { PasswordGate } from "@/components/password-gate";
import { AnalyticsDashboard } from "@/components/analytics-dashboard";

export default function AnalyticsPage() {
    return (
        <div className="min-h-screen bg-black">
            <PasswordGate>
                <div className="container mx-auto py-10 px-4">
                    <AnalyticsDashboard />
                </div>
            </PasswordGate>
        </div>
    );
}
