"use client";

import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MousePointerClick, RefreshCw } from "lucide-react";

interface AnalyticsData {
    pageviews: number[];
    visitors: number[];
    labels: string[];
    count: number;
    visitor_count: number;
}

export function AnalyticsDashboard() {
    const { data, isLoading, error, refetch } = useQuery<AnalyticsData>({
        queryKey: ['analytics-stats'],
        queryFn: async () => {
            const res = await fetch('/api/analytics/stats?date_from=-7d');
            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.message || 'Failed to fetch stats');
            }
            return res.json();
        },
        refetchInterval: 10000, // Poll every 10 seconds for "real-time" feel
    });

    if (isLoading) {
        return <div className="p-8 text-center text-slate-400">Loading analytics...</div>;
    }

    if (error) {
        return (
            <div className="p-8 text-center text-red-400 max-w-md mx-auto">
                <p className="mb-4">Failed to load analytics.</p>
                <div className="text-xs font-mono bg-slate-800 p-4 rounded mb-4 text-left overflow-auto max-h-40">
                    {error instanceof Error ? error.message : "Unknown error"}
                </div>
                <button onClick={() => refetch()} className="underline hover:text-white">Retry</button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight text-white">Dashboard</h2>
                <div className="flex items-center gap-4">
                    <div className="text-xs text-slate-400">
                        Updated: {new Date().toLocaleTimeString()}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                        <RefreshCw className="h-4 w-4 animate-spin" style={{ animationDuration: '3s' }} />
                        Live
                    </div>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-slate-900 border-slate-800">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-slate-200">
                            Total Pageviews (7d)
                        </CardTitle>
                        <MousePointerClick className="h-4 w-4 text-slate-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">
                            {typeof data?.count === 'number' ? data.count.toLocaleString() : '0'}
                        </div>
                        <p className="text-xs text-slate-400">
                            +{(data?.pageviews?.slice(-1)[0] || 0)} today so far
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-slate-900 border-slate-800">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-slate-200">
                            Unique Visitors (7d)
                        </CardTitle>
                        <Users className="h-4 w-4 text-slate-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">
                            {typeof data?.visitor_count === 'number' ? data.visitor_count.toLocaleString() : '0'}
                        </div>
                        <p className="text-xs text-slate-400">
                            Across all pages
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-slate-900 border-slate-800">
                <CardHeader>
                    <CardTitle className="text-slate-200">Traffic Trend (Last 7 Days)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-[200px] w-full flex items-end gap-2 pt-4">
                        {data?.pageviews?.map((val, i) => {
                            const max = Math.max(...(data.pageviews || [1]));
                            const height = val > 0 ? (val / max) * 100 : 0;
                            return (
                                <div key={i} className="group relative flex-1 bg-slate-800 hover:bg-indigo-500 transition-colors rounded-sm" style={{ height: `${height}%` }}>
                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black px-2 py-1 text-xs rounded text-white whitespace-nowrap z-10">
                                        {data.labels[i]}: {val} views
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-500">
                        <span>{data?.labels?.[0]}</span>
                        <span>{data?.labels?.[data?.labels?.length - 1]}</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
