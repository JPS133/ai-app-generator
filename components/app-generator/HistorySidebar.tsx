"use client";

import { Search, History } from "lucide-react";
import { useMemo, useState } from "react";
import HistoryCard from "./HistoryCard";

interface Props {
  history: any[];
  onSelect: (app: any) => void;
}

export default function HistorySidebar({
  history,
  onSelect,
}: Props) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return history.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [history, search]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900">

            <History
              className="text-indigo-600 dark:text-indigo-300"
              size={22}
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold dark:text-white">
              Recent Apps
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              {history.length} generated applications
            </p>

          </div>

        </div>

        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
          {history.length}
        </span>

      </div>

      {/* Search */}

      <div className="relative mt-8">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search applications..."
          className="
          w-full
          rounded-2xl
          border
          border-slate-300
          bg-white
          py-3
          pl-11
          pr-4
          text-slate-900

          placeholder:text-slate-400

          focus:border-indigo-500
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500

          dark:border-slate-700
          dark:bg-slate-950
          dark:text-white
          dark:placeholder:text-slate-500
          "
        />

      </div>

      {/* History */}

      <div className="mt-8 max-h-[650px] space-y-4 overflow-y-auto pr-2">

        {filtered.length === 0 ? (

          <div className="rounded-2xl border border-dashed border-slate-300 py-10 text-center dark:border-slate-700">

            <p className="text-slate-500 dark:text-slate-400">

              No applications found.

            </p>

          </div>

        ) : (

          filtered.map((item) => (

            <HistoryCard
              key={item.id}
              app={item}
              onSelect={onSelect}
            />

          ))

        )}

      </div>

    </div>
  );
}