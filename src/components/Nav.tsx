import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Primary">
        <a href="#top" className="group flex items-center gap-2 font-display text-lg font-semibold text-white">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-line-violet to-line-teal">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
          <span>
            CTP <span className="text-line-violet-dim">Hacks</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#get-involved"
          className="hidden rounded-full bg-line-violet px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-line-violet-dim md:inline-block"
        >
          Get Involved
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-ink px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#get-involved"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-line-violet px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Get Involved
          </a>
        </div>
      )}
    </header>
  );
}
