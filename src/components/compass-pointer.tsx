"use client";

import { useEffect, useRef, useState } from "react";

export function CompassLogo() {
    const [rotation, setRotation] = useState(0);
    const compassRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!compassRef.current) return;

            const rect = compassRef.current.getBoundingClientRect();
            const compassCenterX = rect.left + rect.width / 2;
            const compassCenterY = rect.top + rect.height / 2;

            const deltaX = e.clientX - compassCenterX;
            const deltaY = e.clientY - compassCenterY;
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;

            setRotation(angle);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="flex items-center gap-1.5 md:gap-3">
            {/* MERIDIAN text */}
            <span className="text-sm md:text-xl font-light tracking-[0.15em] md:tracking-[0.2em] text-neutral-900 dark:text-white">
                MERIDIAN
            </span>

            {/* Compass */}
            <div
                ref={compassRef}
                className="relative w-8 h-8 md:w-14 md:h-14"
            >
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-neutral-400 dark:border-neutral-500 bg-white/50 dark:bg-neutral-800/50 md:border-2" />

                {/* Cardinal markers - hidden on mobile */}
                <div className="hidden md:flex absolute inset-0 items-center justify-center">
                    <span className="absolute top-0.5 text-[8px] font-bold text-neutral-900 dark:text-white">N</span>
                    <span className="absolute bottom-0.5 text-[6px] text-neutral-400">S</span>
                    <span className="absolute left-0.5 text-[6px] text-neutral-400">W</span>
                    <span className="absolute right-0.5 text-[6px] text-neutral-400">E</span>
                </div>

                {/* Rotating needle */}
                <div
                    className="absolute inset-0 flex items-center justify-center transition-transform duration-100 ease-out"
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    {/* North (red) */}
                    <div className="absolute w-0.5 h-[35%] bg-gradient-to-t from-transparent to-red-500 rounded-full top-[15%]" />
                    {/* South (dark) */}
                    <div className="absolute w-0.5 h-[35%] bg-gradient-to-b from-transparent to-neutral-500 rounded-full bottom-[15%]" />
                    {/* Center */}
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-neutral-900 dark:bg-white rounded-full" />
                </div>
            </div>

            {/* COMPASS text */}
            <span className="text-sm md:text-xl font-extralight tracking-[0.15em] md:tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                COMPASS
            </span>
        </div>
    );
}
