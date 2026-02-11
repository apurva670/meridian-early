"use client";

import { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface WaitlistFormData {
    email: string;
    tradingPreference: string;
    interestLevel: string;
    turnstileToken: string;
}

async function submitWaitlist(data: WaitlistFormData) {
    const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to submit");
    }

    return response.json();
}

interface WaitlistFormProps {
    turnstileSiteKey?: string;
}

export function WaitlistForm({ turnstileSiteKey }: WaitlistFormProps) {
    const [email, setEmail] = useState("");
    const [tradingPreference, setTradingPreference] = useState("");
    const [interestLevel, setInterestLevel] = useState("");
    const [turnstileToken, setTurnstileToken] = useState("");
    const [formError, setFormError] = useState("");
    const turnstileRef = useRef<TurnstileInstance>(null);

    // ... (keep existing implementation)

    const handleSubmit = (e: React.FormEvent) => {
        // ... (keep existing implementation)
    };

    if (mutation.isSuccess) {
        // ... (keep existing implementation)
    }

    // Use the prop if available, otherwise try env (fallback), otherwise empty
    const siteKey = turnstileSiteKey || process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || "";

    return (
        <Card className="w-full max-w-lg border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm">
            <CardHeader>
                {/* ... */}
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* ... (all inputs) ... */}

                    {/* Turnstile */}
                    <div className="flex justify-center -my-3 scale-75 origin-center h-12 overflow-hidden">
                        {siteKey ? (
                            <Turnstile
                                ref={turnstileRef}
                                siteKey={siteKey}
                                onSuccess={setTurnstileToken}
                                onError={() => setFormError("Security check failed. Please try again.")}
                                onExpire={() => setTurnstileToken("")}
                                options={{
                                    theme: "auto",
                                    size: "compact",
                                }}
                            />
                        ) : (
                            <p className="text-red-500 text-xs">Security check unavailable (Missing Site Key)</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="space-y-2">
                        {/* ... */}
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

{/* Submit Button */ }
<div className="space-y-2">
    <Button
        type="submit"
        disabled={mutation.isPending}
        className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 font-medium"
    >
        {mutation.isPending ? "Submitting..." : "Request Access"}
    </Button>
    <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
        Access is limited
    </p>
</div>
                </form >
            </CardContent >
        </Card >
    );
}
