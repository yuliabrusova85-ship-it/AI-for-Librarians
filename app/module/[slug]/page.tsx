import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  modules,
  getModuleBySlug,
  levelMeta,
  acrlCompetencyMeta,
} from "@/content/modules";
import { LevelBadge, AudienceBadge, AcrlBadge, GapBadge } from "@/components/badges";
import EmailCapture from "@/components/email-capture";
import type { Level } from "@/lib/types";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const mod = getModuleBySlug(params.slug);
  if (!mod) return {};
  return {
    title: `${mod.title} - AI for Academic Libraries`,
    description: mod.description,
  };
}

const levelAccent: Record<string, string> = {
  foundations: "#0F6E56",
  applied: "#185FA5",
  advanced: "#854F0B",
};

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**"))
      return <strong key={i} className="font-semibold text-stone-900">{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*"))
      return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });
}

function renderBody(text: string) {
  const paragraphs = text.split("\n\n").filter(Boolean);
  return paragraphs.map((para, i) => {
    if (para.includes("\n- ")) {
      const parts = para.split("\n- ");
      return (
        <div key={i} className="mb-5">
          {parts[0] && (
            <p className="text-stone-700 leading-relaxed mb-2">{renderInline(parts[0])}</p>
          )}
          <ul className="space-y-1.5 pl-5">
            {parts.slice(1).map((item, j) => (
              <li key={j} className="text-stone-700 leading-relaxed list-disc">
                {renderInline(item)}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return (
      <p key={i} className="text-stone-700 leading-relaxed mb-5">
        {renderInline(para)}
      </p>
    );
  });
}

export default function ModulePage({ params }: { params: { slug: string } }) {
  const mod = getModuleBySlug(params.slug);
  if (!mod) notFound();

  const accent = levelAccent[mod.level];
  const meta = levelMeta[mod.level as Level];

  const relatedModuleData = mod.relatedModules
    .map((slug) => modules.find((m) => m.slug === slug))
    .filter(Boolean) as typeof modules;

  if (mod.status === "coming-soon") {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <nav className="flex items-center gap-1.5 mb-8 text-sm" aria-label="Breadcrumb">
          <Link href="/curriculum" className="text-stone-400 hover:text-stone-600 transition-colors">
            Curriculum
          </Link>
          <span className="text-stone-300" aria-hidden="true">/</span>
          <Link href={`/level/${mod.level}`} className="text-stone-400 hover:text-stone-600 transition-colors">
            {meta.shortLabel}
          </Link>
          <span className="text-stone-300" aria-hidden="true">/</span>
          <span className="text-stone-600 truncate">{mod.title}</span>
        </nav>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <LevelBadge level={mod.level} />
            <AudienceBadge audience={mod.audience} />
            {mod.isGap && <GapBadge />}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">{mod.title}</h1>
          <p className="text-lg text-stone-600 leading-relaxed">{mod.description}</p>
        </div>

        <div className="card mb-8">
          <h2 className="font-semibold text-stone-900 mb-4">
            What you&apos;ll be able to do after this module
          </h2>
          <ul className="space-y-2">
            {mod.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                <span
                  className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: accent }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                {obj}
              </li>
            ))}
          </ul>
        </div>

        <EmailCapture variant="coming-soon" moduleTitle={mod.title} />

        <div className="mt-8 p-4 rounded-lg bg-stone-50 border border-stone-200">
          <p className="text-xs font-medium text-stone-600 mb-2">
            ACRL AI Competencies covered in this module
          </p>
          <div className="flex flex-wrap gap-2">
            {mod.acrlCompetencies.map((c) => (
              <AcrlBadge key={c} competency={c} />
            ))}
          </div>
          <p className="text-xs text-stone-400 mt-2">
            Sub-competencies: {mod.acrlSubCompetencies.join(", ")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <nav className="flex items-center gap-1.5 mb-8 text-sm" aria-label="Breadcrumb">
        <Link href="/curriculum" className="text-stone-400 hover:text-stone-600 transition-colors">
          Curriculum
        </Link>
        <span className="text-stone-300" aria-hidden="true">/</span>
        <Link href={`/level/${mod.level}`} className="text-stone-400 hover:text-stone-600 transition-colors">
          {meta.shortLabel}
        </Link>
        <span className="text-stone-300" aria-hidden="true">/</span>
        <span className="text-stone-600 truncate">{mod.title}</span>
      </nav>

      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <LevelBadge level={mod.level} />
          <AudienceBadge audience={mod.audience} />
          {mod.isGap && <GapBadge />}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">{mod.title}</h1>
        <div className="flex items-center gap-3 text-sm text-stone-400">
          <span>{mod.estimatedMinutes} min read</span>
          <span aria-hidden="true">·</span>
          <span>Module {String(mod.id).padStart(2, "0")}</span>
        </div>
      </header>

      <div
        className="rounded-xl p-6 mb-10 border"
        style={{ borderColor: `${accent}30`, backgroundColor: `${accent}08` }}
      >
        <h2 className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: accent }}>
          What you&apos;ll be able to do
        </h2>
        <ul className="space-y-2">
          {mod.objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-stone-700">
              <span
                className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: accent }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              {obj}
            </li>
          ))}
        </ul>
      </div>

      {mod.content && (
        <article className="prose-library">
          <div className="border-l-4 pl-5 py-1 mb-8 italic" style={{ borderColor: accent }}>
            <p className="text-stone-700 leading-relaxed m-0">{mod.content.intro}</p>
          </div>

          {mod.content.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-xl font-semibold text-stone-900 mb-4">{section.heading}</h2>
              <div>{renderBody(section.body)}</div>
            </section>
          ))}


          {mod.content.summary && mod.content.summary.length > 0 && (
            <div className="rounded-xl p-6 mt-10 border border-stone-200 bg-stone-50">
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-4">
                Key takeaways
              </p>
              <ul className="space-y-3">
                {mod.content.summary.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: accent }}
                      aria-hidden="true"
                    />
                    <p className="text-sm text-stone-700 leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      )}

      <div className="mt-12 p-5 rounded-xl bg-stone-50 border border-stone-200">
        <h2 className="text-sm font-semibold text-stone-700 mb-3">ACRL AI Competencies covered</h2>
        <div className="flex flex-wrap gap-2 mb-3">
          {mod.acrlCompetencies.map((c) => (
            <span key={c} className="px-3 py-1 rounded-md text-sm font-medium bg-white border border-stone-200 text-stone-700">
              {acrlCompetencyMeta[c].label}
            </span>
          ))}
        </div>
        <p className="text-xs text-stone-400">
          Sub-competencies: {mod.acrlSubCompetencies.join(", ")} ·{" "}
          <a
            href="https://www.ala.org/acrl/standards/ai"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-stone-600 transition-colors"
          >
            ACRL AI Competencies (2025)
          </a>
        </p>
      </div>

      {relatedModuleData.length > 0 && (
        <div className="mt-10">
          <h2 className="text-sm font-semibold text-stone-700 mb-4">Continue learning</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {relatedModuleData.map((related) => (
              <Link
                key={related.slug}
                href={related.status === "coming-soon" ? "/newsletter" : `/module/${related.slug}`}
                className="block p-4 rounded-lg border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all"
              >
                <p className="text-xs text-stone-400 mb-1">Module {String(related.id).padStart(2, "0")}</p>
                <p className="text-sm font-medium text-stone-800 leading-snug">{related.title}</p>
                {related.status === "coming-soon" && (
                  <p className="text-xs text-stone-400 mt-1">Coming soon</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-stone-200 flex justify-between gap-4">
        {mod.id > 1 && (() => {
          const prev = modules.find((m) => m.id === mod.id - 1);
          return prev ? (
            <Link
              href={prev.status === "coming-soon" ? `/level/${prev.level}` : `/module/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition-colors group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="truncate max-w-[140px] sm:max-w-none">{prev.title}</span>
            </Link>
          ) : null;
        })()}

        {mod.id < 16 && (() => {
          const next = modules.find((m) => m.id === mod.id + 1);
          return next ? (
            <Link
              href={next.status === "coming-soon" ? `/newsletter` : `/module/${next.slug}`}
              className="flex items-center gap-2 text-sm font-medium transition-colors group ml-auto"
              style={{ color: accent }}
            >
              <span className="truncate max-w-[140px] sm:max-w-none">{next.title}</span>
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : null;
        })()}
      </div>
    </div>
  );
}
