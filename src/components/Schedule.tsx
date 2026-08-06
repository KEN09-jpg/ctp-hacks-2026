import { schedule } from "../data/content";
import Reveal from "./Reveal";

const lineColor: Record<string, string> = {
  violet: "#5B4FE9",
  amber: "#FF9F45",
  teal: "#22C7B5",
};

export default function Schedule() {
  return (
    <section id="schedule" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-line-teal">Schedule</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Hack Day, stop by stop.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-white/60">
            Thursday, August 27 · CUNY @ Amazon, NYC
          </p>
        </Reveal>

        <ol className="relative mt-14 border-l-2 border-white/10 pl-8 sm:pl-10">
          {schedule.map((stop, i) => (
            <Reveal key={stop.title} as="li" delay={i * 90} className="relative pb-12 last:pb-0">
              <span
                className="absolute -left-[calc(2rem+1px)] top-1 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full ring-4 ring-ink sm:-left-[calc(2.5rem+1px)]"
                style={{ backgroundColor: lineColor[stop.line] }}
                aria-hidden="true"
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                <span className="font-mono text-sm font-semibold tabular-nums text-white/50 sm:w-48 sm:shrink-0">
                  {stop.time}
                </span>
                <span className="font-display text-lg font-medium text-white">{stop.title}</span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
