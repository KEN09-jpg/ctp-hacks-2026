import { Video, MapPin, ArrowRight } from "lucide-react";
import { eventDays } from "../data/content";
import Reveal from "./Reveal";

const lineStyles = {
  violet: {
    ring: "ring-line-violet/25",
    dot: "bg-line-violet",
    tag: "bg-line-violet/10 text-line-violet",
    icon: "text-line-violet",
  },
  amber: {
    ring: "ring-line-amber/25",
    dot: "bg-line-amber",
    tag: "bg-line-amber/10 text-[#B9631A]",
    icon: "text-[#B9631A]",
  },
};

export default function WhatToExpect() {
  return (
    <section id="what-to-expect" className="bg-canvas-dim py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-line-violet">
            What to Expect
          </span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Two days, one journey.
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-8 lg:grid-cols-2">
          {/* connecting line between the two cards on desktop */}
          <div
            className="absolute left-1/2 top-1/2 hidden h-px w-16 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-line-violet to-line-amber lg:block"
            aria-hidden="true"
          />

          {eventDays.map((day, i) => {
            const styles = lineStyles[day.line];
            const Icon = day.format === "Virtual" ? Video : MapPin;
            return (
              <Reveal key={day.id} delay={i * 140}>
                <div className={`h-full rounded-3xl bg-white p-8 shadow-soft ring-1 ${styles.ring} sm:p-10`}>
                  <div className="flex items-center gap-3">
                    <span className={`h-3 w-3 rounded-full ${styles.dot}`} aria-hidden="true" />
                    <span className="font-mono text-xs uppercase tracking-widest text-ink-soft/70">
                      Stop {i + 1} of 2
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{day.name}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-soft">
                    <span>{day.date}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Icon className={`h-4 w-4 ${styles.icon}`} aria-hidden="true" />
                      {day.format}
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-ink-soft">{day.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {day.tags.map((tag) => (
                      <li key={tag} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${styles.tag}`}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={280}>
          <p className="mt-8 flex items-center gap-2 text-sm text-ink-soft/80">
            <ArrowRight className="h-4 w-4 text-line-violet" aria-hidden="true" />
            Level Up Day prepares fellows; Hack Day is where they build.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
