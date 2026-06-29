"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-violet-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">

        <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 dark:border-slate-700 dark:bg-slate-800 dark:text-indigo-300">
          🚀 AI Powered Application Generator
        </div>

        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-7xl">
          Build Apps with AI
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600 dark:text-slate-300">
          Generate complete application blueprints including pages,
          components, APIs, database schema and workflows in seconds.
        </p>

      </div>

    </section>
  );
}