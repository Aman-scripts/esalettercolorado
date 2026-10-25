import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Search, Home, FileText, MapPin, Heart, ArrowRight } from "lucide-react";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/404/");

// Next.js already emits <meta name="robots" content="noindex"> on 404s; drop ours so
// the page keeps a single robots tag (follow is the crawler default)
export const metadata: Metadata = { ...buildMetadata(seo), robots: undefined };

export default function NotFound() {
  return (
    <div className="section-padding bg-[#F7F5F0] min-h-[70vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <span className="font-serif text-7xl sm:text-8xl font-bold text-[#347C78] block">
          404
        </span>
        <h1 className="text-h1 mt-2 text-[#19354A]">
          {seo.h1}
        </h1>
        <p className="text-body-large text-[#52616A] mt-3">
          The Colorado assistance animal guide or page you are looking for may have been moved, renamed, or is temporarily unavailable.
        </p>

        {/* Quick Nav Cards */}
        <div className="my-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <Link
            href="/"
            className="p-3.5 rounded-xl bg-white border border-[#D5DFDB] hover:border-[#347C78] transition-colors group"
          >
            <Home className="w-5 h-5 text-[#347C78] mb-1.5" />
            <span className="text-sm font-bold text-[#19354A] block group-hover:text-[#347C78]">
              Homepage
            </span>
            <span className="text-sm text-[#52616A]">Return to start</span>
          </Link>

          <Link
            href="/rights/"
            className="p-3.5 rounded-xl bg-white border border-[#D5DFDB] hover:border-[#347C78] transition-colors group"
          >
            <FileText className="w-5 h-5 text-[#347C78] mb-1.5" />
            <span className="text-sm font-bold text-[#19354A] block group-hover:text-[#347C78]">
              Your Rights
            </span>
            <span className="text-sm text-[#52616A]">FHA &amp; HB26-1045</span>
          </Link>

          <Link
            href="/conditions/"
            className="p-3.5 rounded-xl bg-white border border-[#D5DFDB] hover:border-[#347C78] transition-colors group"
          >
            <Heart className="w-5 h-5 text-[#347C78] mb-1.5" />
            <span className="text-sm font-bold text-[#19354A] block group-hover:text-[#347C78]">
              Do I Qualify?
            </span>
            <span className="text-sm text-[#52616A]">11 conditions</span>
          </Link>

          <Link
            href="/locations/"
            className="p-3.5 rounded-xl bg-white border border-[#D5DFDB] hover:border-[#347C78] transition-colors group"
          >
            <MapPin className="w-5 h-5 text-[#347C78] mb-1.5" />
            <span className="text-sm font-bold text-[#19354A] block group-hover:text-[#347C78]">
              Locations
            </span>
            <span className="text-sm text-[#52616A]">12 CO cities</span>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/how-it-works/#get-started" className="btn-primary gap-2">
            <span>Get Your ESA Letter ($149)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
