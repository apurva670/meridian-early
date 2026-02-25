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
                    Real-time market context from a 30-year institutional PM currently providing actionable energy market analysis to refiners, hedge funds, and institutional clients — and who managed a currency-only strategy during the financial crisis, raising several hundred million dollars and delivering high double-digit returns in both 2008 and 2009.
                  </p>
                  <p>
                    The same institutional frameworks — now available to individual traders.
                  </p>
                </div>

                <p className="font-medium text-neutral-900">
                  The channel is active now. Founding members are already inside.
                </p>


                {/* Testimonial */}
                <div className="mt-8 space-y-4 p-8 bg-white border border-neutral-100 shadow-sm rounded-lg">
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">What Members Say</p>
                  <div className="relative">
                    <p className="text-neutral-600 text-sm leading-relaxed italic">
                      &ldquo;The Meridian Compass group has been a total game changer to how I look at the markets everyday. Having an insight to how a real portfolio manager who's managed substantial assets goes about the market every morning. In this group I was taught process and structure in real time without signals so I really learn the market. These insights on bitcoin these past months have been nothing less than perfect.&rdquo;
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-medium text-neutral-600">
                        BD
                      </div>
                      <p className="text-sm font-medium text-neutral-900">Brian Delahanty</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="flex justify-center md:justify-end">
                <WaitlistForm turnstileSiteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - What This Is */}
        <section className="w-full bg-white border-y border-neutral-100">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
            <div className="space-y-12">

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-light text-neutral-900">
                  Real-Time Institutional Analysis — Not Retail Noise
                </h2>
                <div className="space-y-4 text-neutral-600 font-light text-lg leading-relaxed">
                  <p>
                    I currently provide real-time market analysis to hedge funds, refiners, and institutional energy clients.
                  </p>
                  <p>
                    Opening limited private access to the same real-time context — structural
                    setups, positioning reads, and risk frameworks delivered as markets develop.
                  </p>
                  <p className="font-medium text-neutral-900">
                    Not hours later. Not delayed recaps. Real-time professional intelligence.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-neutral-200">
                {/* What members receive */}
                <div className="space-y-6">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                    What members receive:
                  </h3>
                  <ul className="space-y-3 text-neutral-600 font-light">
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Real-time context when actual setups are developing — not forced posts to fill space</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Not just levels — learn HOW to identify structure, positioning, and inflection points yourself</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Institutional frameworks for reading momentum, divergence, and market narrative</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Context across BTC, FX, and futures</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Private Telegram broadcast (one-way, no chat noise)</span>
                    </li>
                  </ul>
                </div>

                {/* Format */}
                <div className="space-y-6">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                    Format:
                  </h3>
                  <ul className="space-y-3 text-neutral-600 font-light">
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Private Telegram channel (broadcast, one-way)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Updates when markets are moving or setups developing</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Could be multiple updates per day or quiet when nothing's there</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>No manufactured content — only when it matters</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3 - What This Is Not */}
        <section className="w-full bg-[#FAFAFA]">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
            <div className="space-y-12">

              <div className="grid md:grid-cols-2 gap-12">
                {/* Not For */}
                <div className="space-y-6">
                  <h3 className="text-xl font-light text-neutral-900">
                    Not for:
                  </h3>
                  <ul className="space-y-3 text-neutral-600 font-light">
                    <li className="flex gap-3">
                      <span className="text-red-500 mt-1">❌</span>
                      <span>Signal services or alert-based trading</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 mt-1">❌</span>
                      <span>Traders new to markets</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 mt-1">❌</span>
                      <span>Those seeking trade replication</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 mt-1">❌</span>
                      <span>Hand-holding or trade-by-trade guidance</span>
                    </li>
                  </ul>
                </div>

                {/* This Is */}
                <div className="space-y-6">
                  <h3 className="text-xl font-light text-neutral-900">
                    This is:
                  </h3>
                  <ul className="space-y-3 text-neutral-600 font-light">
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">✓</span>
                      <span>Market structure analysis</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">✓</span>
                      <span>Positioning context</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">✓</span>
                      <span>Institutional frameworks</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">✓</span>
                      <span>Learning to think like a portfolio manager</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center space-y-4 border-t border-neutral-200 pt-12">
                <p className="font-medium text-neutral-900 text-lg">
                  This is not for beginners or signal chasers.
                </p>
                <p className="font-medium text-neutral-900 text-lg">
                  Learn to read markets in real time — not follow calls.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4 - Why Capacity Is Limited */}
        <section className="w-full bg-white border-y border-neutral-100">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
            <div className="space-y-8 text-neutral-600 font-light text-lg leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-neutral-900 mb-2">
                Why Capacity Is Limited
              </h2>
              <p>
                Not trying to scale this to 500 people.
              </p>
              <p>
                Small professional group. Focused environment.
              </p>
              <div className="space-y-6 pt-4">
                <p className="font-medium text-neutral-900 border-l-2 border-neutral-300 pl-4">
                  Once founding fills (25 members), that rate is gone permanently.
                </p>
                <p className="font-medium text-neutral-900 border-l-2 border-neutral-300 pl-4">
                  Charter tier (next 25) opens at $800/month — also locked forever.
                </p>
                <p className="font-medium text-neutral-900 border-l-2 border-neutral-300 pl-4">
                  After 50 members, entry moves to $1,000/month standard pricing.
                </p>
                <p className="font-medium text-neutral-900 border-l-2 border-neutral-300 pl-4">
                  Once in at a price, that rate stays as long as membership remains continuous.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - Who This Is For */}
        <section className="w-full bg-[#FAFAFA]">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
            <div className="space-y-12">

              <div className="grid md:grid-cols-2 gap-12">
                {/* Ideal Members */}
                <div className="space-y-6">
                  <h3 className="text-xl font-light text-neutral-900">
                    Ideal members:
                  </h3>
                  <ul className="space-y-3 text-neutral-600 font-light">
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Experienced traders who want institutional perspective</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Portfolio managers tracking multiple markets</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Serious independents building real edge</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Macro-focused operators</span>
                    </li>
                  </ul>
                </div>

                {/* Not Ideal */}
                <div className="space-y-6">
                  <h3 className="text-xl font-light text-neutral-900">
                    Not ideal:
                  </h3>
                  <ul className="space-y-3 text-neutral-600 font-light">
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Retail signal seekers</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Passive observers</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Anyone expecting guaranteed profits</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Traders looking for hand-holding</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-center font-medium text-neutral-900 text-lg border-t border-neutral-200 pt-12">
                This is for people who want to level up their process — not outsource their thinking.
              </p>

            </div>
          </div>
        </section>

        {/* Section 6 - About Mark */}
        <section className="w-full bg-white border-y border-neutral-100">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
            <div className="space-y-12">

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-light text-neutral-900">
                  Led by Mark Schaefer
                </h2>
                <p className="text-xl text-neutral-600 font-light leading-relaxed">
                  30+ years managing institutional capital across FX, futures, and systematic strategies.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 pt-8">
                {/* Career */}
                <div className="space-y-6">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                    Career:
                  </h3>
                  <ul className="space-y-4 text-neutral-600 font-light">
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span><strong>Barclays</strong> — Head British Pound Trader/Market Maker</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span><strong>ABN Amro</strong> — Proprietary FX Trading</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <div className="space-y-2">
                        <span><strong>Eagle Trading Systems</strong> — PM Managing Systematic FX and Futures Strategies (hundreds of millions)</span>
                        <ul className="pl-4 space-y-2 text-sm text-neutral-500 border-l px-4 border-neutral-200 mt-2">
                          <li>- Built and managed currency-only strategy that raised over $300M during the financial crisis and delivered +25% in 2008 and +23% in 2009</li>
                          <li>- Managed mean-reversion futures strategy within a predominantly trend-following futures program as a diversifier</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span><strong>Centiva Capital</strong> — PM Systematic Currencies</span>
                    </li>
                  </ul>
                </div>

                {/* Currently */}
                <div className="space-y-6">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                    Currently:
                  </h3>
                  <ul className="space-y-4 text-neutral-600 font-light">
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Providing real-time actionable analysis in the energy markets (crude, refined products, nat gas — futures, options, and CSOs) to hedge funds, refiners, and institutional energy clients</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span>Sharing institutional frameworks for futures, currencies, and crypto independently through Meridian Compass</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-center font-medium text-neutral-900 text-lg border-t border-neutral-200 pt-12">
                I don&apos;t reveal proprietary strategies — but I do share how institutional desks read structure, positioning, and risk in real time.
              </p>

            </div>
          </div>
        </section>

        {/* Section 7 - How It's Delivered */}
        <section className="w-full bg-[#FAFAFA]">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
            <div className="space-y-12">
              <h2 className="text-2xl md:text-3xl font-light text-neutral-900">
                How It&apos;s Delivered
              </h2>

              <div className="space-y-6">
                <p className="text-lg font-medium text-neutral-900">
                  Private Telegram channel
                </p>
                <ul className="space-y-4 text-neutral-600 font-light text-lg">
                  <li className="flex gap-3">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span>Broadcast format (one-way communication)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span>Real-time context as markets develop</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span>No group chat — preserves focus and signal quality</span>
                  </li>
                </ul>
              </div>

              <p className="font-medium text-neutral-900 text-lg border-t border-neutral-200 pt-12">
                Professional market intelligence delivered in real time.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8 - Why Act Now */}
        <section className="w-full bg-white border-y border-neutral-100">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
            <div className="space-y-8 text-neutral-600 font-light text-lg leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-neutral-900 mb-2">
                Why Act Now
              </h2>

              <p>
                Founding tier closes permanently at 25 members.
              </p>

              <div className="space-y-4 pt-4">
                <p className="font-medium text-neutral-900">Once filled:</p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span>Founding rate ($600) never reopens</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span>Charter tier ($750) activates immediately</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span>After 50 total members, entry moves to $900+ with no lock</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 space-y-6">
                <p>
                  10 beta members are already inside and counting toward the 25.
                </p>
                <p>
                  That leaves 15 founding spots.
                </p>
                <p className="font-medium text-neutral-900 border-l-2 border-neutral-300 pl-4">
                  When those fill, the $600 rate is gone permanently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9 - Final CTA */}
        <section className="w-full bg-[#FAFAFA]">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-32 text-center">
            <div className="space-y-12">
              <h2 className="text-2xl md:text-3xl font-light text-neutral-900">
                For Traders Who Want Institutional Context — Not Retail Noise
              </h2>

              <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
                {/* Founding */}
                <div className="p-8 bg-white border border-neutral-200 rounded-lg shadow-sm space-y-6">
                  <p className="font-semibold text-neutral-900 border-b border-neutral-100 pb-4">
                    Founding access secures:
                  </p>
                  <ul className="space-y-3 text-neutral-600 font-light">
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">✓</span>
                      <span>$600/month permanent rate</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">✓</span>
                      <span>Priority status</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">✓</span>
                      <span>Locked forever — never increases</span>
                    </li>
                  </ul>
                </div>

                {/* Charter */}
                <div className="p-8 bg-white border border-neutral-200 rounded-lg shadow-sm space-y-6">
                  <p className="font-semibold text-neutral-900 border-b border-neutral-100 pb-4">
                    Charter access (next 25 members) secures:
                  </p>
                  <ul className="space-y-3 text-neutral-600 font-light">
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">✓</span>
                      <span>$750/month permanent rate</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">✓</span>
                      <span>Opens when Founding closes</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-neutral-900 mt-1">✓</span>
                      <span>Locked forever — never increases</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 max-w-sm mx-auto space-y-4">
                <Link
                  href="/"
                  className="w-full py-4 bg-neutral-900 text-white rounded-md hover:bg-black font-medium transition-colors block text-center"
                >
                  Request Founding Access
                </Link>
                <p className="text-sm text-neutral-500">
                  Admission is selective. Applications reviewed confidentially.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10 - Disclaimer */}
        <section className="w-full bg-[#FAFAFA] border-t border-neutral-200">
          <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 text-xs text-neutral-500 font-light space-y-4 leading-relaxed">
            <p className="font-semibold text-neutral-600 mb-2">IMPORTANT DISCLAIMER</p>
            <p>
              This service is for educational and informational purposes only and does not constitute investment advice, trading recommendations, or solicitation to buy or sell any financial instruments. All content represents the author&apos;s personal analysis and opinions and should not be construed as professional financial advice.
            </p>
            <p>
              Trading futures, currencies, and cryptocurrencies involves substantial risk of loss and is not suitable for all investors. You should carefully consider whether trading is appropriate for you in light of your experience, objectives, financial resources, and other relevant circumstances. Past performance is not indicative of future results.
            </p>
            <p>
              The author may hold positions in markets discussed in this service. Members are solely responsible for their own trading decisions and should conduct their own research and consult with qualified financial advisors before making any investment decisions.
            </p>
            <p>
              By subscribing to Meridian Compass, you acknowledge that you understand these risks and agree that Mark Schaefer and Meridian Compass are not liable for any trading losses or damages that may result from using this information.
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
