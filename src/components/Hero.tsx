import { Sparkles, Users, Cpu } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink pb-28 pt-36 sm:pb-36 sm:pt-44">
      {/* Animated grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-line-violet/30 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full bg-line-teal/20 blur-[110px]"
        aria-hidden="true"
      />

      {/* Subway-style network lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M -50 620 C 200 560, 320 700, 520 560 S 900 380, 1250 460"
          stroke="#5B4FE9"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="10 14"
          className="animate-[dash_40s_linear_infinite]"
        />
        <path
          d="M -50 200 C 250 260, 380 120, 600 220 S 950 340, 1250 240"
          stroke="#FF9F45"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="10 14"
          className="animate-[dash_46s_linear_infinite_reverse]"
        />
        <path
          d="M -50 420 C 220 380, 420 460, 640 400 S 980 300, 1250 360"
          stroke="#22C7B5"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="10 14"
          className="animate-[dash_52s_linear_infinite]"
        />
        {[
          [520, 560],
          [600, 220],
          [640, 400],
          [900, 380],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" fill="#F6F8FC" opacity="0.85" />
        ))}
      </svg>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-line-violet-dim backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            An official MLH Hack Day, powered by Google Gemini
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            Welcome to CTP Hacks 2026, the learning-first hackathon for{" "}
            <span className="bg-gradient-to-r from-line-violet-dim via-line-teal to-line-amber bg-clip-text text-transparent">
              CUNY Tech Prep
            </span>{" "}
            fellows.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Real building. Real learning. A supportive room, not an intimidating one — where CTP fellows design
            AI-powered applications with Google Gemini alongside mentors from the tech community.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#get-involved"
              className="rounded-full bg-line-violet px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-line-violet-dim"
            >
              Get Involved
            </a>
            <a
              href="#what-to-expect"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10"
            >
              See the event details
            </a>
          </div>
        </Reveal>

        {/* Floating station-sign style chips */}
        <div className="relative mt-20 hidden w-full max-w-3xl justify-between sm:flex">
          <Reveal delay={400}>
            <div className="flex animate-drift items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-left shadow-soft backdrop-blur">
              <Users className="h-5 w-5 shrink-0 text-line-violet-dim" aria-hidden="true" />
              <div>
                <p className="font-display text-sm font-semibold text-white">Teams of 4</p>
                <p className="text-xs text-white/60">Build together</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={520}>
            <div className="mt-8 flex animate-drift-slow items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-left shadow-soft backdrop-blur">
              <Cpu className="h-5 w-5 shrink-0 text-line-teal" aria-hidden="true" />
              <div>
                <p className="font-display text-sm font-semibold text-white">Google Gemini</p>
                <p className="text-xs text-white/60">Powering every build</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={640}>
            <div className="flex animate-drift items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-left shadow-soft backdrop-blur">
              <Sparkles className="h-5 w-5 shrink-0 text-line-amber" aria-hidden="true" />
              <div>
                <p className="font-display text-sm font-semibold text-white">Mentorship</p>
                <p className="text-xs text-white/60">Every step of the way</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -480; }
        }
      `}</style>
    </section>
  );
}
