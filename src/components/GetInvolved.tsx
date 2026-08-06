import { Compass, Gavel, Handshake, ArrowUpRight } from "lucide-react";
import { getInvolvedRoles, getInvolvedCta } from "../data/content";
import Reveal from "./Reveal";

const icons = { mentors: Compass, judges: Gavel, sponsors: Handshake };

const lineStyles: Record<string, { ring: string; icon: string; iconBg: string }> = {
  violet: { ring: "hover:border-line-violet/40", icon: "text-line-violet", iconBg: "bg-line-violet/10" },
  teal: { ring: "hover:border-line-teal/40", icon: "text-line-teal", iconBg: "bg-line-teal/10" },
  amber: { ring: "hover:border-line-amber/50", icon: "text-[#B9631A]", iconBg: "bg-line-amber/10" },
};

export default function GetInvolved() {
  return (
    <section id="get-involved" className="bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-line-violet">
            Get Involved
          </span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            CTP Hacks runs on community.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-ink-soft">
            CTP Hacks is made possible through the support of mentors, judges, and sponsors from the technology
            community.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {getInvolvedRoles.map((role, i) => {
            const Icon = icons[role.id as keyof typeof icons];
            const styles = lineStyles[role.line];
            return (
              <Reveal key={role.id} delay={i * 110}>
                <div
                  className={`h-full rounded-3xl border border-mist bg-white p-8 shadow-soft transition-colors duration-300 ${styles.ring}`}
                >
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles.iconBg} ${styles.icon}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{role.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{role.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={330}>
          <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-line-violet/20 bg-gradient-to-br from-ink to-ink-soft p-10 text-center shadow-soft">
            <p className="font-display text-xl font-semibold text-white sm:text-2xl">{getInvolvedCta.label}</p>
            <a
              href={getInvolvedCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
