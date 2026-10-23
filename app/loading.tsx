import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center py-20 px-4">
      <div className="relative w-12 h-12">
        <div className="w-12 h-12 rounded-full border-3 border-[#D5DFDB] border-t-[#347C78] animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center text-[#19354A] font-bold text-xs">
          CO
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-[#52616A] animate-pulse">
        Loading Colorado ESA information...
      </p>
    </div>
  );
}
