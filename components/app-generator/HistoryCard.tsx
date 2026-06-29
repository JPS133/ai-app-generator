"use client";

import {
  CalendarDays,
  FolderKanban,
  ChevronRight,
} from "lucide-react";

interface Props {
  app: any;
  onSelect: (app: any) => void;
}

export default function HistoryCard({
  app,
  onSelect,
}: Props) {
  return (
    <button
      onClick={() => onSelect(app.appSpec)}
      className="
      w-full
      rounded-2xl
      border
      border-slate-200
      bg-slate-50
      p-5
      text-left
      transition-all
      duration-300

      hover:-translate-y-1
      hover:border-indigo-500
      hover:bg-indigo-50
      hover:shadow-lg

      dark:border-slate-700
      dark:bg-slate-800
      dark:hover:bg-slate-700
      "
    >

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <FolderKanban
            size={20}
            className="text-indigo-500"
          />

          <h3 className="font-semibold text-slate-900 dark:text-white line-clamp-1">
            {app.title}
          </h3>

        </div>

        <ChevronRight
          size={18}
          className="text-slate-400"
        />

      </div>

      <p className="mt-3 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
        {app.prompt}
      </p>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">

        <span>
          {app.appSpec?.pages?.length ?? 0} Pages
        </span>

        <span className="flex items-center gap-1">

          <CalendarDays size={13} />

          {new Date(app.createdAt).toLocaleDateString()}

        </span>

      </div>

    </button>
  );
}