import type { Metadata } from "next";
import Link from "next/link";
import { modules, levelMeta } from "@/content/modules";
import ModuleCard from "@/components/module-card";

export const metadata: Metadata = {
  title: "Full Curriculum - 16 Modules Across 3 Levels",
  description:
    "Browse all 16 modules in the AI for Academic Libraries curriculum. Three levels from foundations to advanced - mapped to ACRL AI Competencies and open to both practicing and digital librarians.",
};

const levels = ["foundations", "applied", "advanced"] as const;

export default function CurriculumPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          Full Curriculum
        </h1>
        <p className="text-stone-600 leading-relaxed text-lg">
          16 modules across three levels - from AI basics to building your own tools. Choose your path or work through every module in order.
        </p>
      </div>

      {/* Path selector callout */}
      <div className="grid sm:grid-cols-2 gap-4 mb-14 p-6 rounded-xl bg-stone-50 border border-stone-200">
        <div>
          <h2 className="font-semibold text-stone-900 mb-1.5">
            Not sure where to start?
          </h2>
          <p className="text-sm text-stone-600">
            Modules tagged <span className="font-medium text-violet-700">Practicing</span> focus on reference, instruction, and research support. Modules tagged <span className="font-medium text-cyan-700">Digital</span> focus on metadata, systems, and cataloging. All are tagged for both or one audience.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <Link
            href="/level/foundations"
            className="flex-1 text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white"
            style={{ backgroundColor: "#0F6E56" }}
          >
            Start with Foundations →
          </Link>
          <Link
            href="/module/what-is-ai-for-librarians"
            className="flex-1 text-center px-4 py-2.5 rounded-lg text-sm font-medium border border-stone-300 text-stone-700 hover:border-stone-400 bg-white"
          >
            Jump to Module 01 →
          </Link>
        </div>
      </div>

      {/* Levels */}
      {levels.map((levelKey) => {
        const meta = levelMeta[levelKey];
        const levelModules = modules.filter((m) => m.level === levelKey);
        const publishedCount = levelModules.filter(
          (m) => m.status === "published"
        ).length;

        const levelStyle = {
          foundations: {
            accent: "#0F6E56",
            bg: "#E1F5EE",
            border: "#b2e8d4",
            badge: "bg-green-50 border-green-200 text-green-800",
          },
          applied: {
            accent: "#185FA5",
            bg: "#E6F1FB",
            border: "#b8d5f2",
            badge: "bg-blue-50 border-blue-200 text-blue-800",
          },
          advanced: {
            accent: "#854F0B",
            bg: "#FAEEDA",
            border: "#f0d4a0",
            badge: "bg-amber-50 border-amber-200 text-amber-800",
          },
        }[levelKey];

        return (
          <section key={levelKey} className="mb-16">
            {/* Level header */}
            <div
              className="rounded-xl p-6 mb-7 border"
              style={{
                backgroundColor: levelStyle.bg,
                borderColor: levelStyle.border,
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2
                      className="text-xl font-bold"
                      style={{ color: levelStyle.accent }}
                    >
                      {meta.label}
                    </h2>
                    {levelKey === "advanced" && (
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-md text-white"
                        style={{ backgroundColor: levelStyle.accent }}
                      >
                        ★ First in field
                      </span>
                    )}
                  </div>
                  <p className="text-stone-700 text-sm">{meta.description}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="text-sm font-medium text-stone-700">
                    {publishedCount}/{levelModules.length} modules available
                  </p>
                  {levelKey !== "advanced" && (
                    <Link
                      href={`/level/${levelKey}`}
                      className="text-xs font-medium mt-0.5 inline-block transition-colors"
                      style={{ color: levelStyle.accent }}
                    >
                      View level hub →
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Module grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {levelModules.map((m) => (
                <ModuleCard key={m.slug} module={m} />
              ))}
            </div>
          </section>
        );
      })}

      {/* ACRL footer note */}
      <div className="border-t border-stone-200 pt-8 text-center">
        <p className="text-sm text-stone-500">
          All modules are mapped to the{" "}
          <a
            href="https://www.ala.org/acrl/standards/ai"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-stone-800 transition-colors"
          >
            ACRL AI Competencies for Academic Library Workers (October 2025)
          </a>{" "}
          at the sub-competency level.
        </p>
        <p className="text-xs text-stone-400 italic mt-2">
          Modules and content are subject to change and ongoing updates as the AI landscape evolves.
        </p>
      </div>
    </div>
  );
}
