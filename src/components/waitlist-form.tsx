"use client";

import { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface WaitlistFormData {
    email: string;
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
    const [turnstileToken, setTurnstileToken] = useState("");
    const [formError, setFormError] = useState("");
    const turnstileRef = useRef<TurnstileInstance>(null);

    const mutation = useMutation({
        mutationFn: submitWaitlist,
        onSuccess: () => {
            setEmail("");
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
        if (!turnstileToken) {
            setFormError("Please complete the security check");
            return;
        }

        mutation.mutate({ email, turnstileToken });
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

    const siteKey = turnstileSiteKey || process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || "";

    return (
        <Card className="w-full max-w-lg border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/50 backdrop-blur-sm shadow-sm">
            <div className="border-b border-neutral-200 px-6 py-4">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    FOUNDING ALLOCATION — LIMITED RELEASE
                </h2>
            </div>
            <CardContent className="pt-6">
                <div className="space-y-6 mb-8 text-neutral-800 text-sm">
                    <div>
                        <p className="font-semibold text-neutral-900 mb-1">25 Founding Members</p>
                        <ul className="list-none space-y-0.5 text-neutral-600">
                            <li>10 already inside</li>
                            <li>15 positions remaining</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold text-neutral-900 mb-1">Founding rate: $600/month</p>
                        <ul className="list-none space-y-0.5 text-neutral-600">
                            <li>Locked permanently</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold text-neutral-900 mb-1">Charter Tier — Next 25 members</p>
                        <ul className="list-none space-y-0.5 text-neutral-600">
                            <li>$800/month</li>
                            <li>Opens when Founding closes</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-neutral-600">After 50 total members: $1,000/month standard pricing.</p>
                    </div>

                    <p className="font-medium text-neutral-900 border-t border-neutral-100 pt-6">
                        Once in at a price, that rate stays as long as membership remains continuous.
                    </p>
                </div>

                <div className="pt-2">
                    <form onSubmit={handleSubmit} className="space-y-5">
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

                        {formError && (
                            <p className="text-red-500 text-sm">{formError}</p>
                        )}

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
