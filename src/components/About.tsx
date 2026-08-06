import { HeartHandshake, Hammer, GraduationCap, ShieldOff } from "lucide-react";
import Reveal from "./Reveal";

const moves = [
  { icon: ShieldOff, label: "Intimidating environments", stance: "away from" as const },
  { icon: ShieldOff, label: "Hyper-competitive challenges", stance: "away from" as const },
  { icon: ShieldOff, label: "Stressful all-nighters", stance: "away from" as const },
];

const toward = [
  { icon: Hammer, label: "Real building" },
  { icon: GraduationCap, label: "Learning" },
  { icon: HeartHandshake, label: "Collaboration in a supportive environment" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-line-violet">About</span>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Since 2020, CUNY Tech Prep has welcomed its incoming cohort of fellows with CTP Hacks — a learning-first
            hackathon that's a little different from your typical hackathon.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal delay={80}>
            <div className="h-full rounded-3xl border border-mist bg-white p-8 shadow-soft">
              <h3 className="font-display text-lg font-semibold text-ink">CTP Hacks moves away from</h3>
              <ul className="mt-6 space-y-4">
                {moves.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-ink-soft">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist">
                      <Icon className="h-4 w-4 text-ink-soft" aria-hidden="true" />
                    </span>
                    <span className="text-sm sm:text-base">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="h-full rounded-3xl border border-line-violet/20 bg-gradient-to-br from-white to-canvas-dim p-8 shadow-soft">
              <h3 className="font-display text-lg font-semibold text-ink">And moves toward</h3>
              <ul className="mt-6 space-y-4">
                {toward.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-line-violet/10">
                      <Icon className="h-4 w-4 text-line-violet" aria-hidden="true" />
                    </span>
                    <span className="text-sm text-ink-soft sm:text-base">{label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink-soft/80">Plus hands-on experience, start to finish.</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <div className="mt-8 rounded-3xl border border-mist bg-white p-8 shadow-soft sm:p-10">
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              CTP Hacks 2026 is taking place during an exciting moment in technology, with AI tools such as{" "}
              <strong className="font-semibold text-ink">Google Gemini</strong> making it easier and faster to build
              real applications. Fellows will form <strong className="font-semibold text-ink">teams of 4</strong>,
              design AI-powered applications, build using Google Gemini, receive mentorship, and compete for prizes —
              including a chance to win the <strong className="font-semibold text-ink">Best Use of Google Gemini</strong>{" "}
              category.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-mist pt-6">
              <span className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
                MLH Hack Day
              </span>
              <span className="text-sm text-ink-soft">
                CTP Hacks 2026 is officially partnering with Major League Hacking (MLH) as an MLH Hack Day, powered by
                Google Gemini.
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
