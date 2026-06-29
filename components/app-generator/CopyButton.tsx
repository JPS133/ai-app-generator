"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner";

interface Props {
  data: any;
}

export default function CopyButton({ data }: Props) {

  function copy() {
    navigator.clipboard.writeText(
      JSON.stringify(data, null, 2)
    );

    toast.success("Copied to clipboard");
  }

  return (
    <button
      onClick={copy}
      className="
      rounded-xl
      bg-indigo-600
      px-4
      py-2
      text-white
      hover:bg-indigo-700
      transition
      "
    >
      <Copy size={18} />
    </button>
  );
}