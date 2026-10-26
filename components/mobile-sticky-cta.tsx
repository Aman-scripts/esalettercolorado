"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-xs sm:text-sm font-bold text-[#19354A] truncate">
            Colorado ESA Letter
          </span>
          <span className="text-[11px] sm:text-xs text-[#52616A] font-medium mt-0.5 truncate">
            $149 • <span className="min-[380px]:hidden">Refund Guarantee</span>
            <span className="hidden min-[380px]:inline">Money-Back Guarantee</span>
          </span>
        </div>
        {/* Not using .btn-primary: its unlayered CSS overrides the compact Tailwind sizing */}
        <Link
          href="/how-it-works/#get-started"
          className="btn-cta inline-flex items-center justify-center rounded-[9px] bg-[#99DDE4] hover:bg-[#7FD1DA] text-[#19354A] font-bold px-4 min-h-[44px] shrink-0 gap-1.5 shadow-sm whitespace-nowrap transition-colors focus-visible:outline-3 focus-visible:outline-[#347C78] focus-visible:outline-offset-2"
        >
          <span>Get Your Letter</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
        </Link>
      </div>
    </div>
  );
}
