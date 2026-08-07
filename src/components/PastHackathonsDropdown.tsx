import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { pastHackathons } from "../data/content";

export default function PastHackathonsDropdown() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:text-white"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Past Hackathons
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute left-1/2 top-full z-10 mt-3 w-44 -translate-x-1/2 rounded-2xl border border-white/10 bg-ink/95 p-2 shadow-soft backdrop-blur-md"
        >
          {pastHackathons.map((item) => (
            <li key={item.year} role="none">
              <a
                role="menuitem"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
              >
                CTP Hacks {item.year}
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-white/50" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
