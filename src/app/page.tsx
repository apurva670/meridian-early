import { WaitlistForm } from "@/components/waitlist-form";
import { ThemeToggle } from "@/components/theme-toggle";
import { StaticBackground } from "@/components/parallax-background";
import { CompassLogo } from "@/components/compass-pointer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors relative">
      {/* Static Background */}
      <StaticBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
          {/* Left spacer */}
          <div />

          {/* Center - Logo */}
          <div className="flex justify-center">
            <CompassLogo />
          </div>

          {/* Right - Controls (hidden on mobile) */}
          <div className="hidden md:flex items-center justify-end">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-8 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight text-neutral-900 dark:text-white">
                  Trade Like the Institutions Do
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
                  The same frameworks used to manage $100M+ in FX, crypto, and futures — now available to you.
                </p>
              </div>

              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
                30+ years of institutional experience distilled into actionable setups. Learn to read structure, momentum, and market narrative like a professional PM.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>
                    <strong>Limited Spots:</strong> $300/mo <span className="line-through text-neutral-400">$600/mo</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                  <span>Lock in $300/mo for life — Next 25 members only</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                  <span>Opening Q1 2026</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="flex justify-center md:justify-end">
              <WaitlistForm turnstileSiteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY} />
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="max-w-3xl mx-auto px-6 py-12 md:py-20">
          <div className="relative border border-neutral-200 dark:border-neutral-800 rounded-lg p-8 md:p-10 bg-neutral-50/50 dark:bg-neutral-900/30 backdrop-blur-sm">
            {/* Quote Mark */}
            <div className="absolute -top-4 left-8 bg-white dark:bg-neutral-950 px-3">
              <svg className="w-6 h-6 text-neutral-300 dark:text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>
            </div>

            <blockquote className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base md:text-lg italic">
              The Meridian Compass group has been a total game changer to how I look at the markets everyday. Having an insight to how a real portfolio manager who&apos;s managed substantial assets goes about the market every morning. In this group I was taught process and structure in real time without signals so I really learn the market. These insights on bitcoin these past months have been nothing less than perfect. Showing how a true professional sees the market with process and structure.
            </blockquote>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-sm font-medium text-neutral-600 dark:text-neutral-300">
                BD
              </div>
              <div>
                <p className="font-medium text-neutral-900 dark:text-white text-sm">Brian Delahanty</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Member</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-20 mt-8 bg-neutral-950 text-white">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-light tracking-[0.15em]">MERIDIAN</span>
                <span className="text-lg font-extralight tracking-[0.15em] text-neutral-400">COMPASS</span>
              </div>

              {/* Tagline */}
              <div className="text-center hidden md:block">
                <p className="text-neutral-400 text-xs whitespace-nowrap">
                  Institutional Market Frameworks for FX, Crypto & Global Futures
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-end gap-4">
                <Link
                  href="https://twitter.com/schaef45809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/markschaefer4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-4 pt-4 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-neutral-300">
              <p>© 2026 Meridian Compass. All rights reserved.</p>
              {/* Theme toggle for mobile */}
              <div className="md:hidden">
                <ThemeToggle />
              </div>
              <Link
                href="https://www.nandann.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block hover:text-white transition-colors"
              >
                Website by Nandann Creative
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
