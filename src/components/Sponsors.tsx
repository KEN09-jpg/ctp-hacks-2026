import { poweredBy, sponsors2026, pastSponsors, type SponsorLogo } from "../data/content";
import Reveal from "./Reveal";

function LogoTile({ logo, size = "md" }: { logo: SponsorLogo; size?: "md" | "sm" }) {
  const dims = size === "sm" ? "h-16 w-32 sm:h-20 sm:w-40" : "h-20 w-40 sm:h-24 sm:w-52";
  const content = (
    <div
      className={`flex ${dims} items-center justify-center rounded-2xl border border-mist bg-white px-4 shadow-soft transition-shadow hover:shadow-glow`}
    >
      {logo.logoSrc ? (
        <img src={logo.logoSrc} alt={logo.name} className="max-h-full max-w-full object-contain" />
      ) : (
        <span className="text-center text-xs font-semibold uppercase tracking-wide text-ink-soft/70 sm:text-sm">
          {logo.name}
        </span>
      )}
    </div>
  );

  if (logo.href) {
    return (
      <a href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={logo.name}>
        {content}
      </a>
    );
  }
  return content;
}

function LogoGroup({ title, logos, size = "md" }: { title: string; logos: SponsorLogo[]; size?: "md" | "sm" }) {
  if (logos.length === 0) return null;
  return (
    <div>
      <p className="text-center font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft/60 sm:text-left">
        {title}
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-4 sm:justify-start">
        {logos.map((logo) => (
          <LogoTile key={logo.name} logo={logo} size={size} />
        ))}
      </div>
    </div>
  );
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-canvas-dim py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Who makes CTP Hacks possible.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-14">
          <Reveal delay={80}>
            <LogoGroup title="Powered By" logos={poweredBy} />
          </Reveal>
          <Reveal delay={160}>
            <LogoGroup title="2026 Sponsors" logos={sponsors2026} />
          </Reveal>
          {pastSponsors.length > 0 && (
            <Reveal delay={240}>
              <LogoGroup title="Previous Sponsors" logos={pastSponsors} size="sm" />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
