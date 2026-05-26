"use client";

import { useState } from "react";

// TODO: Replace Formspree endpoint with Supabase integration when database is added.
// When adding Supabase: create a `subscribers` table with columns:
//   email TEXT NOT NULL, audience TEXT, created_at TIMESTAMPTZ DEFAULT now()
// Then replace the fetch() call below with a Supabase insert.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdwdklp";

type AudienceType = "practicing" | "digital" | "both" | "";

interface EmailCaptureProps {
  variant?: "default" | "compact" | "coming-soon";
  moduleTitle?: string;
}

export default function EmailCapture({
  variant = "default",
  moduleTitle,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [audience, setAudience] = useState<AudienceType>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      // TODO: Replace with Supabase insert when database is added
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          audience,
          module: moduleTitle ?? "general",
          source: variant,
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
          style={{ backgroundColor: "#E1F5EE" }}
        >
          <svg
            className="w-5 h-5"
            style={{ color: "#0F6E56" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="font-semibold text-stone-900 mb-1">You&apos;re on the list.</p>
        <p className="text-sm text-stone-500">
          We&apos;ll notify you when new modules publish - no spam, ever.
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
        <label htmlFor="email-compact" className="sr-only">
          Email address
        </label>
        <input
          id="email-compact"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.edu"
          className="w-full sm:flex-1 px-3 py-2 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 bg-white"
          style={{ "--tw-ring-color": "#0F6E56" } as React.CSSProperties}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors disabled:opacity-60"
          style={{ backgroundColor: "#0F6E56" }}
        >
          {status === "loading" ? "..." : "Notify me"}
        </button>
      </form>
    );
  }

  if (variant === "coming-soon") {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
        <p className="text-sm font-medium mb-1" style={{ color: "#854F0B" }}>
          Coming Soon
        </p>
        {moduleTitle && (
          <h3 className="text-lg font-semibold text-stone-900 mb-2">
            {moduleTitle}
          </h3>
        )}
        <p className="text-sm text-stone-600 mb-5">
          This module is in development. Sign up and we&apos;ll notify you when it publishes.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label
              htmlFor="email-coming-soon"
              className="block text-xs font-medium text-stone-600 mb-1"
            >
              Email address
            </label>
            <input
              id="email-coming-soon"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.edu"
              className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 bg-white"
            />
          </div>
          <div>
            <label
              htmlFor="audience-coming-soon"
              className="block text-xs font-medium text-stone-600 mb-1"
            >
              I&apos;m a (optional)
            </label>
            <select
              id="audience-coming-soon"
              value={audience}
              onChange={(e) => setAudience(e.target.value as AudienceType)}
              className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 bg-white text-stone-700"
            >
              <option value="">Select your role</option>
              <option value="practicing">Practicing librarian (reference, instruction)</option>
              <option value="digital">Digital / systems librarian</option>
              <option value="both">Both / other</option>
            </select>
          </div>
          {errorMsg && (
            <p className="text-xs text-red-600" role="alert">
              {errorMsg}
            </p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-2.5 rounded-lg text-sm font-medium text-white transition-colors disabled:opacity-60"
            style={{ backgroundColor: "#854F0B" }}
          >
            {status === "loading" ? "Submitting..." : "Notify me when this publishes"}
          </button>
        </form>
      </div>
    );
  }

  // Default variant
  return (
    <div className="rounded-xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
      <h3 className="text-lg font-semibold text-stone-900 mb-1">
        Stay in the loop
      </h3>
      <p className="text-sm text-stone-600 mb-5">
        New modules publish regularly. No spam - just a note when something new
        is ready.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label
            htmlFor="email-default"
            className="block text-xs font-medium text-stone-600 mb-1"
          >
            Email address
          </label>
          <input
            id="email-default"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.edu"
            className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 bg-white"
          />
        </div>
        <div>
          <label
            htmlFor="audience-default"
            className="block text-xs font-medium text-stone-600 mb-1"
          >
            I&apos;m primarily a (optional)
          </label>
          <select
            id="audience-default"
            value={audience}
            onChange={(e) => setAudience(e.target.value as AudienceType)}
            className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 bg-white text-stone-700"
          >
            <option value="">Select your role</option>
            <option value="practicing">Practicing librarian (reference, instruction)</option>
            <option value="digital">Digital / systems librarian</option>
            <option value="both">Both / other</option>
          </select>
        </div>
        {errorMsg && (
          <p className="text-xs text-red-600" role="alert">
            {errorMsg}
          </p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-2.5 rounded-lg text-sm font-medium text-white transition-colors disabled:opacity-60"
          style={{ backgroundColor: "#0F6E56" }}
        >
          {status === "loading" ? "Submitting..." : "Notify me when modules publish"}
        </button>
        <p className="text-xs text-stone-400 text-center">
          No spam, ever. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
