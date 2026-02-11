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

export function WaitlistForm() {
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
            <Card className="w-full max-w-lg border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm">
                <CardContent className="pt-8 pb-8 text-center">
                    <div className="mb-4">
                        <svg
                            className="mx-auto h-12 w-12 text-neutral-900 dark:text-white"
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
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                        You&apos;re on the list
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400">
                        We&apos;ll be in touch when we launch in Q1 2026.
                    </p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full max-w-lg border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm">
            <CardHeader>
                <CardTitle className="text-2xl text-neutral-900 dark:text-white">Join the Waitlist</CardTitle>
                <CardDescription className="text-neutral-500 dark:text-neutral-400">
                    Get early access when we launch in Q1 2026
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Field */}
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-neutral-700 dark:text-neutral-200">
                            Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-neutral-900 dark:focus:border-white focus:ring-neutral-900 dark:focus:ring-white"
                        />
                    </div>

                    {/* Trading Preference */}
                    <div className="space-y-3">
                        <Label className="text-neutral-700 dark:text-neutral-200">
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
                                        className="border-neutral-400 dark:border-neutral-600 text-neutral-900 dark:text-white"
                                    />
                                    <Label
                                        htmlFor={`trade-${option}`}
                                        className="text-neutral-600 dark:text-neutral-300 cursor-pointer"
                                    >
                                        {option}
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>

                    {/* Interest Level */}
                    <div className="space-y-3">
                        <Label className="text-neutral-700 dark:text-neutral-200">
                            Are you interested in founding member pricing at $300/month?{" "}
                            <span className="text-red-500">*</span>
                        </Label>
                        <RadioGroup
                            value={interestLevel}
                            onValueChange={setInterestLevel}
                            className="space-y-2"
                        >
                            {[
                                { value: "yes", label: "Yes - definitely interested" },
                                { value: "maybe", label: "Maybe - want to learn more first" },
                                { value: "exploring", label: "Just exploring" },
                            ].map((option) => (
                                <div key={option.value} className="flex items-center space-x-3">
                                    <RadioGroupItem
                                        value={option.value}
                                        id={`interest-${option.value}`}
                                        className="border-neutral-400 dark:border-neutral-600 text-neutral-900 dark:text-white"
                                    />
                                    <Label
                                        htmlFor={`interest-${option.value}`}
                                        className="text-neutral-600 dark:text-neutral-300 cursor-pointer"
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
                        {process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY ? (
                            <Turnstile
                                ref={turnstileRef}
                                siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}
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
                            className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 font-medium"
                        >
                            {mutation.isPending ? "Submitting..." : "Request Access"}
                        </Button>
                        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                            Access is limited
                        </p>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
