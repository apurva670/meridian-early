"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

interface PasswordGateProps {
    children: React.ReactNode;
}

export function PasswordGate({ children }: PasswordGateProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for existing session
        const checkSession = async () => {
            const storedAuth = localStorage.getItem("analytics_auth");
            if (storedAuth) {
                // Verify token with API
                try {
                    const res = await fetch("/api/analytics/auth", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ token: storedAuth }),
                    });

                    if (res.ok) {
                        setIsAuthenticated(true);
                    } else {
                        localStorage.removeItem("analytics_auth");
                    }
                } catch (e) {
                    console.error("Auth check failed", e);
                }
            }
            setLoading(false);
        };

        checkSession();
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/analytics/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("analytics_auth", data.token);
                setIsAuthenticated(true);
            } else {
                setError(data.message || "Invalid password");
            }
        } catch (e) {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-black text-white">
                <div className="animate-pulse">Loading...</div>
            </div>
        );
    }

    if (isAuthenticated) {
        return <>{children}</>;
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-white">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800">
                        <Lock className="h-6 w-6 text-slate-400" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">Protected Analytics</h2>
                    <p className="mt-2 text-sm text-slate-400">
                        Enter password to view analytics dashboard
                    </p>
                </div>

                <form onSubmit={handleLogin} className="mt-8 space-y-6">
                    <div className="space-y-2">
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-slate-800 bg-slate-900/50 text-white placeholder:text-slate-500"
                        />
                        {error && <p className="text-sm text-red-500">{error}</p>}
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-white text-black hover:bg-slate-200"
                    >
                        {loading ? "Verifying..." : "Access Dashboard"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
