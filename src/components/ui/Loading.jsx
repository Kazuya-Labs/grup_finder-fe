import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>

      <p className="mt-3 text-green-600 font-semibold animate-pulse">
        Loading...
      </p>
    </div>
  );
}
