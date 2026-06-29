import { prisma } from "@/lib/prisma";

export default async function AppsPage() {
  const apps = await prisma.app.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-4xl font-bold mb-8">
        Generated Applications
      </h1>

      <div className="grid gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            className="rounded-lg bg-white p-6 shadow"
          >
            <h2 className="text-2xl font-semibold">
              {app.title}
            </h2>

            <p className="mt-2 text-gray-600">
              {app.prompt}
            </p>

            <p className="mt-4 text-sm text-gray-500">
              {new Date(app.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}