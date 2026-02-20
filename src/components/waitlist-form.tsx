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



    const mutation = useMutation({
        mutationFn: submitWaitlist,
        onSuccess: () => {
            setEmail("");
            setTradingPreference("");
            setInterestLevel("");
            setTurnstileToken("");
            setFormError("");
            turnstileRef.current?.reset();
        },
        onError: (error: Error) => {
            setFormError(error.message);
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormError("");

        if (!email) {
            setFormError("Email is required");
            return;
        }
        if (!tradingPreference) {
            setFormError("Please select what you primarily trade");
            return;
        }
        if (!interestLevel) {
            setFormError("Please select your interest level");
            return;
        }
        if (!turnstileToken) {
            setFormError("Please complete the security check");
            return;
        }


        mutation.mutate({ email, tradingPreference, interestLevel, turnstileToken });
    };

    if (mutation.isSuccess) {
        return (
            <Card className="w-full max-w-lg border-neutral-200 bg-white shadow-sm">
                <CardContent className="pt-8 pb-8 text-center">
                    <div className="mb-4">
                        <svg
                            className="mx-auto h-12 w-12 text-neutral-900"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        You&apos;re on the list
                    </h3>
                    <p className="text-neutral-500">
                        We&apos;ll be in touch when we launch in Q1 2026.
                    </p>
                </CardContent>
            </Card>
        );
    }

    // Use the prop if available, otherwise try env (fallback), otherwise empty
    const siteKey = turnstileSiteKey || process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || "";

    return (
        <Card className="w-full max-w-lg border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm">
            <div className="border-b border-neutral-200 px-6 py-4">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    FOUNDING ALLOCATION — LIMITED RELEASE
                </h2>
            </div>
            <CardContent className="pt-6">
                {/* Text Block */}
                <div className="space-y-6 mb-8 text-neutral-800 text-sm">
                    <div>
                        <p className="font-semibold text-neutral-900 mb-1">25 Founding Members</p>
                        <ul className="list-disc pl-5 space-y-0.5 text-neutral-600">
                            <li>10 already inside</li>
                            <li>15 positions remaining</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold text-neutral-900 mb-1">Founding rate: $600/month</p>
                        <ul className="space-y-0.5 text-neutral-600">
                            <li>✓ Locked permanently</li>
                            <li>✓ Never increases</li>
                            <li>✓ Founding status</li>
                        </ul>
                    </div>

                    <p className="text-neutral-600">
                        When the 25 founding spots are filled, admission moves to the Charter tier.
                    </p>

                    <div>
                        <p className="font-semibold text-neutral-900 mb-1">Charter Tier — Next 25 members</p>
                        <ul className="list-disc pl-5 space-y-0.5 text-neutral-600">
                            <li>$750/month</li>
                            <li>Locked permanently</li>
                            <li>Opens when Founding closes</li>
                        </ul>
                    </div>

                    <p className="text-neutral-600 border-t border-neutral-100 pt-6">
                        After 50 total members, entry pricing moves to $900+ with no rate lock.
                    </p>
                </div>

                <div className="pt-2">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-neutral-700">
                                Email Address <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-neutral-900"
                            />
                        </div>

                        {/* Trading Preference */}
                        <div className="space-y-3">
                            <Label className="text-neutral-700">
                                What do you primarily trade? <span className="text-red-500">*</span>
                            </Label>
                            <RadioGroup
                                value={tradingPreference}
                                onValueChange={setTradingPreference}
                                className="space-y-2"
                            >
                                {["Crypto", "FX", "Futures"].map((option) => (
                                    <div key={option} className="flex items-center space-x-3">
                                        <RadioGroupItem
                                            value={option}
                                            id={`trade-${option}`}
                                            className="border-neutral-300 text-neutral-900"
                                        />
                                        <Label
                                            htmlFor={`trade-${option}`}
                                            className="text-neutral-600 cursor-pointer"
                                        >
                                            {option}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>

                        {/* Interest Level */}
                        <div className="space-y-3">
                            <Label className="text-neutral-700">
                                Interest level: <span className="text-red-500">*</span>
                            </Label>
                            <RadioGroup
                                value={interestLevel}
                                onValueChange={setInterestLevel}
                                className="space-y-2"
                            >
                                {[
                                    { value: "yes", label: "Definitely interested" },
                                    { value: "maybe", label: "Want to learn more" },
                                    { value: "exploring", label: "Just exploring" },
                                ].map((option) => (
                                    <div key={option.value} className="flex items-center space-x-3">
                                        <RadioGroupItem
                                            value={option.value}
                                            id={`interest-${option.value}`}
                                            className="border-neutral-300 text-neutral-900"
                                        />
                                        <Label
                                            htmlFor={`interest-${option.value}`}
                                            className="text-neutral-600 cursor-pointer"
                                        >
                                            {option.label}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>

                        {/* Error Message */}
                        {formError && (
                            <p className="text-red-500 text-sm">{formError}</p>
                        )}

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
                            <Button
                                type="submit"
                                disabled={mutation.isPending}
                                className="w-full bg-neutral-900 text-white hover:bg-black font-medium"
                            >
                                {mutation.isPending ? "Submitting..." : "Request Founding Access"}
                            </Button>
                            <p className="text-center text-xs mt-3 text-neutral-500 px-2 leading-relaxed">
                                Access is limited. Most applicants speak with Mark briefly before entry.
                            </p>
                        </div>
                    </form>
                </div>
            </CardContent>
        </Card>
    );
}
