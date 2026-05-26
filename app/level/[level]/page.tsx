import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { modules, levelMeta } from "@/content/modules";
import ModuleCard from "@/components/module-card";
import EmailCapture from "@/components/email-capture";

type Level = "foundations" | "applied" | "advanced";

const validLevels: Level[] = ["foundations", "applied", "advanced"];

export function generateStaticParams() {
  return validLevels.map((level) => ({ level }));
}

export async function generateMetadata({
  params,
}: {
  params: { level: string };
}): Promise<Metadata> {
  const level = params.level as Level;
  if (!validLevels.includes(level)) return {};

  const meta = levelMeta[level];
  return {
    title: `${meta.label} - AI for Academic Libraries`,
    description: meta.description,
  };
}

const levelConfig = {
  foundations: {
    accent: "#0F6E56",
    bg: "#E1F5EE",
    border: "#b2e8d4",
    who: "All librarians - both practicing and digital.",
    audience:
      "This level is for everyone. Whether you work at a reference desk or in a systems role, these five modules give you the mental models and skills you need before anything else.",
    prerequisite: null,
    next: "applied",
  },
  applied: {
    accent: "#185FA5",
    bg: "#E6F1FB",
    border: "#b8d5f2",
    who: "Role-split. Some modules for practicing librarians, some for digital librarians, some for both.",
    audience:
      "Level 2 modules are role-specific. Practicing librarians will focus on research support, instruction, and reference. Digital librarians will focus on metadata, cataloging, and systems.",
    prerequisite: "foundations",
    next: "advanced",
  },
  advanced: {
    accent: "#854F0B",
    bg: "#FAEEDA",
    border: "#f0d4a0",
    who: "Both audiences. Technical comfort from Level 2 recommended.",
    audience:
      "Level 3 is where no other library portal goes. These modules cover content that simply doesn't exist elsewhere in the library sector. Coming soon.",
    prerequisite: "applied",
    next: null,
  },
};

export default function LevelPage({ params }: { params: { level: string } }) {
  const level = params.level as Level;
  if (!validLevels.includes(level)) notFound();

  const meta = levelMeta[level];
  const config = levelConfig[level];
  const levelModules = modules.filter((m) => m.level === level);
  const publishedModules = levelModules.filter((m) => m.status === "published");
  const isAdvanced = level === "advanced";

  return (
    <div>
      {/* Level hero */}
      <div
        className="border-b"
        style={{ backgroundColor: config.bg, borderColor: config.border }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex items-center gap-2 mb-3">
            <Link
              href="/curriculum"
              className="text-sm text-stone-500 hover:text-stone-700 transition-colors"
            >
              Curriculum
            </Link>
            <span className="text-stone-300" aria-hidden="true">/</span>
            <span className="text-sm font-medium" style={{ color: config.accent }}>
              {meta.label}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-xl">
              <h1
                className="text-3xl sm:text-4xl font-bold mb-3"
                style={{ color: config.accent }}
              >
                {meta.label}
              </h1>
              <p className="text-stone-700 leading-relaxed text-base">
                {meta.description}
              </p>
            </div>
            <div className="flex-shrink-0 text-sm text-stone-600 space-y-1">
              <p>
                <span className="font-medium">{levelModules.length}</span> modules total
              </p>
              <p>
                <span className="font-medium">{publishedModules.length}</span> available now
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Audience guidance */}
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-5 mb-10">
          <p className="text-sm font-semibold text-stone-700 mb-0.5">Who this level is for</p>
          <p className="text-sm text-stone-600">{config.audience}</p>
        </div>

        {/* Modules */}
        {isAdvanced ? (
          /* Advanced - coming soon state */
          <div>
            <div className="rounded-xl border p-8 mb-8 text-center" style={{ borderColor: config.border, backgroundColor: config.bg }}>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl"
                style={{ backgroundColor: "#854F0B", color: "white" }}
                aria-hidden="true"
              >
                ★
              </div>
              <h2 className="text-xl font-bold text-stone-900 mb-2">
                Level 3 is in development
              </h2>
              <p className="text-stone-600 text-sm max-w-md mx-auto mb-6">
                These five modules cover content no other library portal teaches. Sign up and we&apos;ll notify you when each one publishes.
              </p>
              <EmailCapture variant="compact" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {levelModules.map((m) => (
                <ModuleCard key={m.slug} module={m} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {levelModules.map((m) => (
              <ModuleCard key={m.slug} module={m} />
            ))}
          </div>
        )}

        {/* Navigation between levels */}
        <div className="mt-14 pt-8 border-t border-stone-200 flex flex-col sm:flex-row justify-between gap-4">
          {config.prerequisite && (
            <Link
              href={`/level/${config.prerequisite}`}
              className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition-colors group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {levelMeta[config.prerequisite as Level].label}
            </Link>
          )}
          {config.next && (
            <Link
              href={`/level/${config.next}`}
              className="flex items-center gap-2 text-sm font-medium transition-colors group ml-auto"
              style={{ color: config.accent }}
            >
              {levelMeta[config.next as Level].label}
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
