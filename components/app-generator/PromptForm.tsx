"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";

interface Props {
  prompt: string;
  setPrompt: (value: string) => void;
  loading: boolean;
  onGenerate: () => void;
}

const suggestions = [
  "Build a College Management System",
  "Build a Food Delivery App",
  "Create an E-Commerce Platform",
  "Hospital Management System",
  "Online Learning Platform",
];

export default function PromptForm({
  prompt,
  setPrompt,
  loading,
  onGenerate,
}: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-8
      shadow-2xl
      transition-all

      dark:border-slate-800
      dark:bg-slate-900
      "
    >
      {/* Header */}

      <div className="mb-8 flex items-center gap-4">

        <div
          className="
          flex h-12 w-12 items-center justify-center
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          text-white
          "
        >
          <Sparkles size={22} />
        </div>

        <div>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Describe Your Idea
          </h2>

          <p className="mt-1 text-slate-500 dark:text-slate-400">
            Tell the AI what application you want to build.
          </p>

        </div>

      </div>

      {/* Prompt */}

      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Example: Build a College Management System with authentication..."
        className="
        min-h-[220px]
        rounded-2xl
        border
        border-slate-300

        bg-white
        text-slate-900

        placeholder:text-slate-400

        focus:border-indigo-500
        focus:ring-2
        focus:ring-indigo-500
        focus:outline-none

        dark:border-slate-700
        dark:bg-slate-950
        dark:text-white
        dark:placeholder:text-slate-500
        "
      />

      {/* Suggestions */}

      <div className="mt-8">

        <p className="mb-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
          Suggestions
        </p>

        <div className="flex flex-wrap gap-3">

          {suggestions.map((item) => (

            <button
              key={item}
              onClick={() => setPrompt(item)}
              type="button"
              className="
              rounded-full
              border
              border-slate-300
              bg-slate-100
              px-4
              py-2
              text-sm
              font-medium
              text-slate-700

              transition-all
              duration-300

              hover:border-indigo-500
              hover:bg-indigo-100
              hover:text-indigo-700

              dark:border-slate-700
              dark:bg-slate-800
              dark:text-slate-200

              dark:hover:border-indigo-500
              dark:hover:bg-indigo-900
              dark:hover:text-indigo-300
              "
            >
              {item}
            </button>

          ))}

        </div>

      </div>

      {/* Button */}

      <Button
        onClick={onGenerate}
        disabled={loading || !prompt.trim()}
        className="
        mt-8
        h-14
        w-full
        rounded-2xl

        bg-gradient-to-r
        from-blue-600
        to-indigo-600

        text-lg
        font-semibold

        transition-all
        duration-300

        hover:scale-[1.02]
        hover:shadow-2xl

        disabled:opacity-60
        "
      >

        {loading ? (

          <div className="flex items-center gap-3">

            <div
              className="
              h-5
              w-5
              animate-spin
              rounded-full
              border-2
              border-white
              border-t-transparent
              "
            />

            Generating Application...

          </div>

        ) : (

          "🚀 Generate Application"

        )}

      </Button>

      {/* Footer */}

      <div className="mt-6 rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">

        <p className="text-center text-sm text-slate-600 dark:text-slate-300">

          💡 AI will automatically generate pages, APIs,
          database schema, components and workflows.

        </p>

      </div>

    </div>
  );
}