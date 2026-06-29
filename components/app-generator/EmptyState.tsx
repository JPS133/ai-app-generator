"use client";

import { Sparkles } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">

      <Sparkles
        size={60}
        className="text-indigo-500 mb-6"
      />

      <h2 className="text-2xl font-bold">
        No Preview Yet
      </h2>

      <p className="mt-3 text-slate-500 max-w-md">
        Generate an application and the complete preview will appear here.
      </p>

    </div>
  );
}