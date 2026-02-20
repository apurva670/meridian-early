import Image from "next/image";

export function Logo() {
    return (
        <div className="flex items-center gap-3">
            <Image
                src="/logo.png"
                alt="Meridian Compass"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 dark:invert"
            />
            <div className="flex items-center gap-1.5">
                <span className="text-xl md:text-2xl font-light tracking-[0.15em] text-neutral-900 dark:text-white">
                    MERIDIAN
                </span>
                <span className="text-xl md:text-2xl font-extralight tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                    COMPASS
                </span>
            </div>
        </div>
    );
}
