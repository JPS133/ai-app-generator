"use client";

import { Layers3, LayoutDashboard, Database, Server } from "lucide-react";
import CopyButton from "./CopyButton";
import DownloadButton from "./DownloadButton";
import EmptyState from "./EmptyState";
import PageCard from "./PageCard";

interface Props {
  app: any;
}

export default function PreviewCard({ app }: Props) {
  if (!app) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <EmptyState />
      </div>
    );
  }

  const componentCount =
    app.pages?.reduce(
      (total: number, page: any) =>
        total + page.components.length,
      0
    ) ?? 0;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all dark:border-slate-800 dark:bg-slate-900">

      {/* Header */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

        <div>

          <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
            AI Generated Blueprint
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
            {app.title}
          </h2>

          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
            {app.description}
          </p>

        </div>

        <div className="flex gap-3">

          <CopyButton data={app} />

          <DownloadButton data={app} />

        </div>

      </div>

      {/* Stats */}

      <div className="mt-10 grid gap-4 sm:grid-cols-3">

        <div className="rounded-2xl bg-indigo-50 p-5 dark:bg-slate-800">

          <LayoutDashboard
            className="mb-3 text-indigo-600"
            size={26}
          />

          <p className="text-sm text-slate-500">
            Pages
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {app.pages?.length}
          </h3>

        </div>

        <div className="rounded-2xl bg-green-50 p-5 dark:bg-slate-800">

          <Layers3
            className="mb-3 text-green-600"
            size={26}
          />

          <p className="text-sm text-slate-500">
            Components
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {componentCount}
          </h3>

        </div>

        <div className="rounded-2xl bg-purple-50 p-5 dark:bg-slate-800">

          <Database
            className="mb-3 text-purple-600"
            size={26}
          />

          <p className="text-sm text-slate-500">
            APIs
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {app.apis?.length ?? 0}
          </h3>

        </div>

      </div>

      {/* Pages */}

      <div className="mt-12">

        <h3 className="mb-5 flex items-center gap-2 text-2xl font-bold dark:text-white">

          <Server size={24} />

          Application Pages

        </h3>

        <div className="grid gap-5">

          {app.pages?.map((page: any) => (

            <PageCard
              key={page.route}
              page={page}
            />

          ))}

        </div>

      </div>

    </div>
  );
}