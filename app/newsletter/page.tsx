import type { Metadata } from "next";
import EmailCapture from "@/components/email-capture";

export const metadata: Metadata = {
  title: "Newsletter - AI for Academic Libraries",
  description:
    "Get notified when new modules publish. No spam, ever. One email when something new is ready.",
};

const upcomingModules = [
  {
    title: "Automating Repetitive Tasks",
    description:
      "The first library automation course for non-programmers. Zapier, Make, AI integrations, and real time-savings.",
    level: "Level 3",
  },
  {
    title: "Agentic AI - What It Means",
    description:
      "What AI agents actually are, how Claude Projects functions as a light agent, and real library use cases.",
    level: "Level 3",
  },
  {
    title: "Vibe Coding for Librarians",
    description:
      "The first practitioner-focused vibe coding curriculum in the library world. Build real library tools without code.",
    level: "Level 3",
  },
  {
    title: "AI & Library Systems Integration",
    description:
      "APIs without jargon. Connecting AI to your ILS and repositories. Build vs. configure vs. ask your vendor.",
    level: "Level 3",
  },
  {
    title: "Your AI Strategy & Next Steps",
    description:
      "Department roadmap, staying current, conference speaking, and building your professional voice.",
    level: "Level 3",
  },
];

export default function NewsletterPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <header className="text-center mb-12">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5 border"
          style={{ backgroundColor: "#E1F5EE", borderColor: "#b2e8d4", color: "#0F6E56" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true" />
          Free newsletter - no spam, ever
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          Get notified when new modules publish
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-xl mx-auto">
          Level 3 modules are in development - vibe coding, workflow automation, agentic AI, and systems integration. Sign up and we&apos;ll send you one email when each one is ready.
        </p>
      </header>

      {/* Form */}
      <div className="max-w-md mx-auto mb-16">
        <EmailCapture />
      </div>

      {/* What's coming */}
      <section>
        <h2 className="text-lg font-bold text-stone-900 mb-6 text-center">
          What&apos;s coming
        </h2>
        <div className="space-y-4">
          {upcomingModules.map((mod) => (
            <div
              key={mod.title}
              className="flex items-start gap-4 p-4 rounded-xl border border-amber-200 bg-amber-50"
            >
              <div
                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold mt-0.5"
                style={{ backgroundColor: "#854F0B" }}
                aria-hidden="true"
              >
                ★
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <h3 className="font-semibold text-stone-900 text-sm">
                    {mod.title}
                  </h3>
                  <span
                    className="text-xs px-1.5 py-0.5 rounded font-medium"
                    style={{ backgroundColor: "#FAEEDA", color: "#854F0B" }}
                  >
                    {mod.level}
                  </span>
                </div>
                <p className="text-sm text-stone-600">{mod.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Assurance */}
      <div className="mt-12 pt-8 border-t border-stone-200 text-center space-y-2">
        <p className="text-sm text-stone-500">
          One email when a new module publishes. No weekly roundups. No promotional content. Unsubscribe anytime with one click.
        </p>
        <p className="text-sm text-stone-500">
          Emails go to the subscriber list only - we don&apos;t share or sell addresses.
        </p>
      </div>
    </div>
  );
}
