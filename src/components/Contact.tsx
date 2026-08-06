import { Mail } from "lucide-react";
import { contact } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="questions" className="bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-line-violet/10 text-line-violet">
              <Mail className="h-6 w-6" aria-hidden="true" />
            </span>
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Questions?
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            Reach out to{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-semibold text-line-violet underline decoration-line-violet/30 underline-offset-4 hover:decoration-line-violet"
            >
              {contact.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
