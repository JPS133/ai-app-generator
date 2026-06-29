"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  LayoutDashboard,
  Layers3,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";

import PromptForm from "@/components/app-generator/PromptForm";
import PreviewCard from "@/components/app-generator/PreviewCard";
import HistorySidebar from "@/components/app-generator/HistorySidebar";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const [appSpec, setAppSpec] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);

  async function loadHistory() {
    try {
      const res = await fetch("/api/apps");

      if (!res.ok) return;

      const data = await res.json();

      setHistory(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    loadHistory();
  }, []);

  async function generateApp() {
    if (!prompt.trim()) {
      toast.error("Please enter an application idea.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      if (!res.ok) {
        throw new Error("Generation failed");
      }

      const data = await res.json();

      setAppSpec(data.appSpec);

      await loadHistory();

      setPrompt("");

      toast.success("Application generated successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Generation failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors">

      <Navbar />

      <Hero />

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}

          <div>

            <PromptForm
              prompt={prompt}
              setPrompt={setPrompt}
              loading={loading}
              onGenerate={generateApp}
            />

          </div>

          {/* RIGHT */}

          <div className="lg:col-span-2 space-y-6">

            <div className="grid md:grid-cols-3 gap-4">

              <div className="rounded-3xl border bg-white dark:bg-slate-900 dark:border-slate-800 p-6 shadow">

                <LayoutDashboard
                  className="text-indigo-500 mb-4"
                  size={30}
                />

                <p className="text-sm text-slate-500">
                  Pages
                </p>

                <h2 className="mt-2 text-4xl font-bold">
                  {appSpec?.pages?.length ?? 0}
                </h2>

              </div>

              <div className="rounded-3xl border bg-white dark:bg-slate-900 dark:border-slate-800 p-6 shadow">

                <Layers3
                  className="text-green-500 mb-4"
                  size={30}
                />

                <p className="text-sm text-slate-500">
                  Components
                </p>

                <h2 className="mt-2 text-4xl font-bold">
                  {appSpec?.pages?.reduce(
                    (sum: number, page: any) =>
                      sum + page.components.length,
                    0
                  ) ?? 0}
                </h2>

              </div>

              <div className="rounded-3xl border bg-white dark:bg-slate-900 dark:border-slate-800 p-6 shadow">

                <CheckCircle2
                  className="text-green-500 mb-4"
                  size={30}
                />

                <p className="text-sm text-slate-500">
                  Status
                </p>

                <h2 className="mt-2 text-3xl font-bold text-green-600">
                  {appSpec ? "Generated" : "Ready"}
                </h2>

              </div>

            </div>

            <PreviewCard app={appSpec} />

          </div>

        </div>

        {/* HISTORY */}

        <div className="mt-14">

          <HistorySidebar
            history={history}
            onSelect={(app) => setAppSpec(app.appSpec)}
          />

        </div>

      </section>

    </main>
  );
}