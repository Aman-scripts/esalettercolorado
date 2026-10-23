import React from "react";
import Link from "next/link";
import { ArrowRight, BookMarked } from "lucide-react";

export interface RelatedLink {
  title: string;
  href: string;
  note?: string;
  description?: string;
}

interface RelatedPagesProps {
  links?: RelatedLink[];
  pages?: RelatedLink[];
  title?: string;
  subtitle?: string;
}

export function RelatedPages({
  links,
  pages,
  title = "Related Guides & Colorado Resources",
  subtitle = "Continue exploring tenant rights, condition qualifications, and assistance animal legal protections.",
}: RelatedPagesProps) {
  const activeLinks = links || pages || [];
  if (activeLinks.length === 0) return null;

  return (
    <div className="card-theme my-8 bg-white border border-[#D5DFDB]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-md bg-[#E8F0ED] text-[#347C78] flex items-center justify-center">
          <BookMarked className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-base font-bold text-[#19354A] leading-tight">{title}</h4>
          {subtitle && <p className="text-xs text-[#52616A]">{subtitle}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {activeLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="flex items-center justify-between p-3.5 rounded-lg border border-[#D5DFDB]/70 hover:border-[#347C78] hover:bg-[#E8F0ED]/40 transition-colors group"
          >
            <div>
              <span className="text-sm font-semibold text-[#19354A] group-hover:text-[#347C78] transition-colors block">
                {link.title}
              </span>
              {(link.note || link.description) && (
                <span className="text-xs text-[#52616A] block mt-0.5">
                  {link.note || link.description}
                </span>
              )}
            </div>
            <ArrowRight className="w-4 h-4 text-[#347C78] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
          </Link>
        ))}
      </div>
    </div>
  );
}
