"use client";

export function StaticBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-105"
                style={{ backgroundImage: "url('/background.jpg')" }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-white/80 dark:from-neutral-950/95 dark:via-neutral-950/90 dark:to-neutral-950/85" />
        </div>
    );
}
