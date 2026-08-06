import { Users2, Presentation, Trophy, Pizza, PartyPopper } from "lucide-react";
import { hackDayExperience } from "../data/content";
import Reveal from "./Reveal";

const icons = {
  mentor: Users2,
  pitch: Presentation,
  prize: Trophy,
  food: Pizza,
  fun: PartyPopper,
};

export default function HackDayExperience() {
  return (
    <section className="bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            On Hack Day, fellows can expect:
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {hackDayExperience.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 90}>
                <div className="group h-full rounded-2xl border border-mist bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-line-violet/30 hover:shadow-glow">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-line-violet/10 text-line-violet transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
