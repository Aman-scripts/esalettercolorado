"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past ~350px (after hero)
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-3 sm:px-4 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] bg-white border-t border-[#D5DFDB] shadow-[0_-4px_20px_rgba(0,0,0,0.12)] animate-in slide-in-from-bottom-2 duration-200">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col min-w-0">
          <span className="text-xs sm:text-sm font-bold text-[#19354A] flex items-center gap-1.5 whitespace-nowrap">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#347C78] shrink-0" />
            <span className="truncate">Colorado ESA Letter</span>
          </span>
          <span className="text-[11px] sm:text-xs text-[#52616A] whitespace-nowrap font-medium mt-0.5">
            $149 • Money-Back Guarantee
          </span>
        </div>
        <Link
          href="/how-it-works/#get-started"
          className="btn-primary text-xs sm:text-sm py-2 px-3.5 sm:px-4 min-h-[42px] shrink-0 font-bold gap-1.5 shadow-sm whitespace-nowrap"
        >
          <span>Get Your Letter</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
        </Link>
      </div>
    </div>
  );
}
