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
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-[#D5DFDB] shadow-lg animate-in slide-in-from-bottom-2 duration-200">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#19354A] flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#347C78]" /> Colorado ESA Letter
          </span>
          <span className="text-sm text-[#52616A]">$149 • Money-Back Guarantee</span>
        </div>
        <Link
          href="/how-it-works/#get-started"
          className="btn-primary text-sm py-2.5 px-4 min-h-[44px] shrink-0 font-bold gap-1.5 shadow-sm"
        >
          <span>Get Your Letter</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
