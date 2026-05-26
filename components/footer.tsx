import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: "#0F6E56" }}
                aria-hidden="true"
              >
                AI
              </span>
              <span className="font-semibold text-stone-900 text-sm">
                AI for Academic Libraries
              </span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              A learning portal Aligned with ACRL AI Competencies (2025).
            </p>
          </div>

          {/* Curriculum links */}
          <div>
            <h3 className="text-sm font-semibold text-stone-700 mb-3">
              Curriculum
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/level/foundations"
                  className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
                >
                  Level 1: Foundations
                </Link>
              </li>
              <li>
                <Link
                  href="/level/applied"
                  className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
                >
                  Level 2: Applied
                </Link>
              </li>
              <li>
                <Link
                  href="/level/advanced"
                  className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
                >
                  Level 3: Advanced
                </Link>
              </li>
              <li>
                <Link
                  href="/curriculum"
                  className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
                >
                  Full Curriculum
                </Link>
              </li>
            </ul>
          </div>

          {/* Site links */}
          <div>
            <h3 className="text-sm font-semibold text-stone-700 mb-3">Site</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-stone-400">
            Aligned with{" "}
            <a
              href="https://www.ala.org/acrl/standards/ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-stone-600 transition-colors"
            >
              ACRL AI Competencies for Academic Library Workers (2025)
            </a>{" "}
            and{" "}
            <a
              href="https://www.arl.org/resources/research-libraries-guiding-principles-for-artificial-intelligence/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-stone-600 transition-colors"
            >
              ARL Guiding Principles (2024)
            </a>
            .
          </p>
          <p className="text-xs text-stone-400">
            A practitioner resource from St. Louis, MO
          </p>
        </div>
      </div>
    </footer>
  );
}
