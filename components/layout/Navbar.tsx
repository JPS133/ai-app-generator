"use client";

import Link from "next/link";
import { Sparkles} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="
        sticky top-0 z-50
        border-b border-slate-200/60
        bg-white/80
        backdrop-blur-xl
        dark:bg-slate-950/80
        dark:border-slate-800
      "
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              text-white
              shadow-lg
            "
          >
            <Sparkles size={20} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              AI App Generator
            </h1>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Powered by Groq AI
            </p>
          </div>
        </Link>

        {/* Navigation */}

        <div className="hidden items-center gap-6 md:flex">

          <Link
            href="/"
            className="
              text-sm
              font-medium
              text-slate-600
              transition
              hover:text-indigo-600
              dark:text-slate-300
              dark:hover:text-indigo-400
            "
          >
            Home
          </Link>

          <Link
            href="/"
            className="
              text-sm
              font-medium
              text-slate-600
              transition
              hover:text-indigo-600
              dark:text-slate-300
              dark:hover:text-indigo-400
            "
          >
            Generate
          </Link>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              text-sm
              font-medium
              text-slate-600
              transition
              hover:text-indigo-600
              dark:text-slate-300
              dark:hover:text-indigo-400
            "
          >
            GitHub
          </a>

          <ThemeToggle />

        </div>

        {/* Mobile */}

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
}