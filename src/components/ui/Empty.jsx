import React from "react";
import { SearchX } from "lucide-react";

function EmptyState({
  title = "Data tidak ditemukan",
  description = "Coba gunakan kata kunci lain atau ubah filter.",
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 text-gray-500">
      <SearchX className="w-12 h-12 mb-3 text-gray-400" />

      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm mt-1">{description}</p>
    </div>
  );
}

export default EmptyState;