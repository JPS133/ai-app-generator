"use client";

import { Download } from "lucide-react";

interface Props {
  data: any;
}

export default function DownloadButton({ data }: Props) {

  function download() {

    const blob = new Blob(
      [JSON.stringify(data, null, 2)],
      {
        type: "application/json",
      }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "app-spec.json";

    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <button
      onClick={download}
      className="
      rounded-xl
      bg-green-600
      px-4
      py-2
      text-white
      hover:bg-green-700
      transition
      "
    >
      <Download size={18} />
    </button>
  );
}