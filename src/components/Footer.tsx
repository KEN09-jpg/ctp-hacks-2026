import { navLinks, contact, poweredBy, sponsors2026 } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink py-14 text-white/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-white">CTP Hacks 2026</p>
            <p className="mt-2 text-sm">
              Hosted by <span className="text-white/90">CUNY Tech Prep</span>
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Navigate</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Contact</p>
            <p className="mt-4 text-sm">
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </p>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Powered By</p>
            <ul className="mt-4 space-y-1 text-sm">
              {poweredBy.map((logo) => (
                <li key={logo.name}>{logo.name}</li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              2026 Sponsors
            </p>
            <ul className="mt-4 space-y-1 text-sm">
              {sponsors2026.map((logo) => (
                <li key={logo.name}>{logo.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} CUNY Tech Prep. All rights reserved.</p>
          <p>CTP Hacks 2026 · An MLH Hack Day, powered by Google Gemini</p>
        </div>
      </div>
    </footer>
  );
}
