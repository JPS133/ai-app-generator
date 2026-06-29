"use client";

interface Props {
  page: any;
}

export default function PageCard({
  page,
}: Props) {
  return (
    <div className="rounded-2xl border p-5">

      <h3 className="font-bold text-lg">
        {page.name}
      </h3>

      <p className="text-slate-500">
        {page.route}
      </p>

      <div className="mt-3 text-sm">
        Components:
        {" "}
        {page.components.length}
      </div>

    </div>
  );
}