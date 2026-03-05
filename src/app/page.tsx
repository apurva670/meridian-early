import { WaitlistForm } from "@/components/waitlist-form";
import { StaticBackground } from "@/components/parallax-background";
import { CompassLogo } from "@/components/compass-pointer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 relative">
      {/* Static Background */}
      <StaticBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
          {/* Left spacer */}
          <div />

          {/* Center - Logo */}
          <div className="flex justify-center">
            <CompassLogo />
          </div>

          {/* Right - Controls (hidden on mobile) */}
          <div className="hidden md:flex items-center justify-end">
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="w-full bg-[#FAFAFA]">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    MERIDIAN COMPASS
                  </span>
                  <h1 className="text-2xl md:text-3xl font-light leading-tight text-neutral-900">
                    Private Institutional Market Intelligence — Delivered Daily
                  </h1>
                </div>

                <div className="space-y-6 text-neutral-600 leading-relaxed font-light text-lg">
                  <p>
                    Real-time market structure, positioning, and risk context from a 30-year institutional portfolio manager.
                  </p>
                  <p>
                    The same institutional frameworks I use in managing capital — now shared privately with a focused group of independent traders.
                  </p>
                </div>

                <p className="font-medium text-neutral-900">
                  The channel is active now. Founding members are already inside.
                </p>



              </div>

              {/* Right Column - Form */}
              <div className="flex justify-center md:justify-end">
                <WaitlistForm turnstileSiteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - Objective */}
        <section className="w-full bg-white border-y border-neutral-100">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
            <div className="space-y-12">

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-light text-neutral-900">
                  Objective
                </h2>
                <div className="space-y-4 text-neutral-600 font-light text-lg leading-relaxed">
                  <p>
                    To create an environment that simulates sitting on a real trading desk — learning how to map structure, identify key levels, and trade around them in real time.
                  </p>
                </div>
              </div>

              <div className="pt-12 border-t border-neutral-200">
                <ul className="space-y-4 text-neutral-600 font-light text-lg">
                  <li className="flex gap-3">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span>Real-time context as inflection points develop — not forced daily posts</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span>Clear structure mapping: trend, liquidity, positioning, exhaustion</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span>Institutional frameworks for momentum, divergence, and narrative shifts</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span>Cross-market perspective across BTC, FX, and futures</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span>Private Telegram broadcast (one-way, no group chat noise)</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6 pt-12 border-t border-neutral-200">
                <p className="text-lg text-neutral-600 font-light">
                  No constant posting. No recycled content. No signal chasing.
                </p>
                <div className="space-y-2">
                  <p className="font-medium text-neutral-900 text-xl">
                    This is not a signal service.
                  </p>
                  <p className="text-lg text-neutral-600 font-light">
                    You will learn how to map structure and read positioning in real time.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Section 6 - About Mark */}
        <section className="w-full bg-white border-y border-neutral-100">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
            <div className="space-y-12">

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-light text-neutral-900">
                  ABOUT MARK SCHAEFER
                </h2>
                <div className="text-lg text-neutral-600 font-light leading-relaxed space-y-6">
                  <p>
                    30+ years managing institutional capital across FX, futures, and systematic strategies.
                  </p>

                  <div className="space-y-2">
                    <p><strong>Barclays</strong> — Head British Pound Trader / Market Maker</p>
                    <p><strong>ABN Amro</strong> — Proprietary FX Trading</p>
                    <p><strong>Eagle Trading Systems</strong> — PM, Systematic FX & Futures (managed hundreds of millions)</p>
                    <p><strong>Centiva Capital</strong> — PM, Systematic Currencies</p>
                  </div>

                  <p>
                    Built and managed a currency-only strategy that raised over $300M during the financial crisis and delivered +25% in 2008 and +23% in 2009.
                  </p>

                  <div className="space-y-4 pt-4">
                    <h3 className="text-xl font-medium text-neutral-900">Currently:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Managing capital through systematic currency strategies</li>
                      <li>Providing real-time market intelligence to hedge funds, refiners, and institutional energy clients — covering crude oil, natural gas, and refined products across physical, futures, and options markets</li>
                    </ul>
                  </div>

                  <p className="pt-4">
                    Meridian Compass extends that same real-time structural framework across FX, futures, and crypto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 - Membership */}
        <section className="w-full bg-[#FAFAFA]">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
            <div className="space-y-12">
              <h2 className="text-2xl md:text-3xl font-light text-neutral-900">
                MEMBERSHIP
              </h2>

              <div className="space-y-6 text-xl text-neutral-900 font-light">
                <p>
                  <strong>Standard Membership:</strong> $1,000/month
                </p>
                <p>
                  <strong>Founding Allocation:</strong> $600/month
                </p>

                <ul className="space-y-2 mt-4 text-neutral-600">
                  <li className="flex gap-3">
                    <span className="text-neutral-400">•</span>
                    <span>25 spots total</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-neutral-400">•</span>
                    <span>10 positions filled</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-neutral-400">•</span>
                    <span>15 remaining</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-8 text-xl text-neutral-900 font-light border-t border-neutral-200">
                <h3 className="text-2xl font-medium text-neutral-900 mb-6">REQUEST ACCESS</h3>

                <p>If this aligns with how you approach markets and you're looking for deeper real-time context, request access below.</p>

                <p>Access is selective.</p>
              </div>

              <div className="pt-8 max-w-sm">
                <Link
                  href="/"
                  className="w-full py-4 bg-neutral-900 text-white rounded-md hover:bg-black font-medium transition-colors block text-center shadow-sm"
                >
                  Request Access
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10 - Disclaimer */}
        <section className="w-full bg-[#FAFAFA] border-t border-neutral-200">
          <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 text-xs text-neutral-500 font-light space-y-4 leading-relaxed">
            <p>
              Educational and informational purposes only. Not investment advice. Trading involves risk. Past performance is not indicative of future results.
            </p>
          </div>
        </section>

        {/* Section 11 - Footer */}
        <footer className="w-full bg-white border-t border-neutral-200 text-neutral-900">
          <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-neutral-500 font-light">
            <p>© 2026 Meridian Compass</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
