"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, ShieldCheck, Phone, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rightsOpen, setRightsOpen] = useState(false);
  const [conditionsOpen, setConditionsOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <>
      {/* Top Trust Notice Bar */}
      <div className="bg-[#19354A] text-[#F7F5F0] text-xs sm:text-sm py-2 px-3 sm:px-4 border-b border-[#347C78]/30">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2 font-medium min-w-0">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#347C78] shrink-0" />
            <span className="whitespace-nowrap">Official Colorado ESA Evaluations</span>
            <span className="hidden lg:inline text-white/40">•</span>
            <span className="hidden lg:inline text-[#E8F0ED] whitespace-nowrap">Licensed In-State Mental Health Professionals</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold shrink-0">
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-1.5 hover:text-[#347C78] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-[#347C78]" />
              <span>{siteConfig.phone}</span>
            </a>
            <span className="hidden md:inline bg-[#347C78]/40 px-2.5 py-0.5 rounded text-xs sm:text-sm text-[#F7F5F0] whitespace-nowrap">
              Fast 24–48h Turnaround
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#D5DFDB]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group focus-visible:outline-2 focus-visible:outline-[#347C78] shrink-0 py-1"
            aria-label="ESA Letter Colorado Homepage"
          >
            <Image
              src="/esa-letter-colorado-logo-image.webp"
              alt="ESA Letter Colorado - State-Licensed Evaluations"
              width={115}
              height={48}
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5" aria-label="Main Navigation">
            <Link
              href="/how-it-works/"
              className="text-sm font-medium text-[#24333B] hover:text-[#19354A] transition-colors py-2 whitespace-nowrap"
            >
              How It Works
            </Link>

            <Link
              href="/requirements/"
              className="text-sm font-medium text-[#24333B] hover:text-[#19354A] transition-colors py-2 whitespace-nowrap"
            >
              Requirements
            </Link>

            {/* Your Rights Dropdown */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setRightsOpen(true)}
              onMouseLeave={() => setRightsOpen(false)}
            >
              <Link
                href="/rights/"
                className="flex items-center gap-1 text-sm font-medium text-[#24333B] hover:text-[#19354A] transition-colors whitespace-nowrap"
              >
                <span>Your Rights</span>
                <ChevronDown className="w-4 h-4 text-[#52616A] group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              {rightsOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-[#D5DFDB] p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="space-y-0.5">
                    <Link
                      href="/rights/fair-housing-act/"
                      className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#24333B] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                      onClick={() => setRightsOpen(false)}
                    >
                      Fair Housing Act &amp; ESAs
                    </Link>
                    <Link
                      href="/rights/colorado-hb26-1045-explained/"
                      className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#24333B] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                      onClick={() => setRightsOpen(false)}
                    >
                      Colorado HB26-1045 Law
                    </Link>
                    <Link
                      href="/rights/no-pet-apartments/"
                      className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#24333B] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                      onClick={() => setRightsOpen(false)}
                    >
                      No-Pet Apartments Rights
                    </Link>
                    <Link
                      href="/rights/landlord-denials/"
                      className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#24333B] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                      onClick={() => setRightsOpen(false)}
                    >
                      What to Do If Landlord Denies
                    </Link>
                    <Link
                      href="/rights/pet-deposits-and-fees/"
                      className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#24333B] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                      onClick={() => setRightsOpen(false)}
                    >
                      Pet Deposits &amp; Rent Rules
                    </Link>
                  </div>
                  <div className="border-t border-[#D5DFDB] my-1.5" />
                  <Link
                    href="/rights/"
                    className="block px-3.5 py-2.5 rounded-lg text-sm font-semibold text-[#347C78] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                    onClick={() => setRightsOpen(false)}
                  >
                    View All 12 Legal Guides →
                  </Link>
                </div>
              )}
            </div>

            {/* Do I Qualify? Dropdown */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setConditionsOpen(true)}
              onMouseLeave={() => setConditionsOpen(false)}
            >
              <Link
                href="/conditions/"
                className="flex items-center gap-1 text-sm font-medium text-[#24333B] hover:text-[#19354A] transition-colors whitespace-nowrap"
              >
                <span>Do I Qualify?</span>
                <ChevronDown className="w-4 h-4 text-[#52616A] group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              {conditionsOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-[#D5DFDB] p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="space-y-0.5">
                    <Link
                      href="/conditions/anxiety/"
                      className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#24333B] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                      onClick={() => setConditionsOpen(false)}
                    >
                      Anxiety
                    </Link>
                    <Link
                      href="/conditions/depression/"
                      className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#24333B] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                      onClick={() => setConditionsOpen(false)}
                    >
                      Depression
                    </Link>
                    <Link
                      href="/conditions/ptsd/"
                      className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#24333B] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                      onClick={() => setConditionsOpen(false)}
                    >
                      PTSD &amp; Trauma
                    </Link>
                    <Link
                      href="/conditions/adhd/"
                      className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#24333B] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                      onClick={() => setConditionsOpen(false)}
                    >
                      ADHD
                    </Link>
                    <Link
                      href="/conditions/panic-disorder/"
                      className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#24333B] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                      onClick={() => setConditionsOpen(false)}
                    >
                      Panic Disorder
                    </Link>
                  </div>
                  <div className="border-t border-[#D5DFDB] my-1.5" />
                  <Link
                    href="/conditions/"
                    className="block px-3.5 py-2.5 rounded-lg text-sm font-semibold text-[#347C78] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                    onClick={() => setConditionsOpen(false)}
                  >
                    See All 11 Conditions →
                  </Link>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <Link
                href="/locations/"
                className="flex items-center gap-1 text-sm font-medium text-[#24333B] hover:text-[#19354A] transition-colors whitespace-nowrap"
              >
                <span>Locations</span>
                <ChevronDown className="w-4 h-4 text-[#52616A] group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              {locationsOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-[#D5DFDB] p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="space-y-0.5">
                    <Link
                      href="/locations/denver/"
                      className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#24333B] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                      onClick={() => setLocationsOpen(false)}
                    >
                      Denver, CO
                    </Link>
                    <Link
                      href="/locations/colorado-springs/"
                      className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#24333B] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                      onClick={() => setLocationsOpen(false)}
                    >
                      Colorado Springs, CO
                    </Link>
                    <Link
                      href="/locations/aurora/"
                      className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#24333B] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                      onClick={() => setLocationsOpen(false)}
                    >
                      Aurora, CO
                    </Link>
                    <Link
                      href="/locations/fort-collins/"
                      className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#24333B] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                      onClick={() => setLocationsOpen(false)}
                    >
                      Fort Collins, CO
                    </Link>
                    <Link
                      href="/locations/boulder/"
                      className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#24333B] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                      onClick={() => setLocationsOpen(false)}
                    >
                      Boulder, CO
                    </Link>
                  </div>
                  <div className="border-t border-[#D5DFDB] my-1.5" />
                  <Link
                    href="/locations/"
                    className="block px-3.5 py-2.5 rounded-lg text-sm font-semibold text-[#347C78] hover:bg-[#E8F0ED] hover:text-[#19354A] transition-colors"
                    onClick={() => setLocationsOpen(false)}
                  >
                    Browse All 12 Colorado Cities →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog/"
              className="text-sm font-medium text-[#24333B] hover:text-[#19354A] transition-colors py-2 whitespace-nowrap"
            >
              Blog
            </Link>

            <Link
              href="/faq/"
              className="text-sm font-medium text-[#24333B] hover:text-[#19354A] transition-colors py-2 whitespace-nowrap"
            >
              FAQ
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              href={siteConfig.surveyUrl}
              className="btn-primary text-sm font-bold px-5 py-2.5 min-h-[44px] whitespace-nowrap shadow-xs hover:shadow-md"
            >
              Get Your ESA Letter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-[#19354A] hover:bg-[#E8F0ED] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#D5DFDB] px-4 pt-2 pb-6 space-y-3">
            <Link
              href="/how-it-works/"
              className="block py-2 text-base font-medium text-[#24333B] border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/requirements/"
              className="block py-2 text-base font-medium text-[#24333B] border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Requirements
            </Link>
            <Link
              href="/rights/"
              className="block py-2 text-base font-medium text-[#24333B] border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Your Rights (Colorado Laws)
            </Link>
            <Link
              href="/conditions/"
              className="block py-2 text-base font-medium text-[#24333B] border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Do I Qualify? (Conditions)
            </Link>
            <Link
              href="/locations/"
              className="block py-2 text-base font-medium text-[#24333B] border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Colorado Cities
            </Link>
            <Link
              href="/cost/"
              className="block py-2 text-base font-medium text-[#24333B] border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing &amp; Cost
            </Link>
            <Link
              href="/blog/"
              className="block py-2 text-base font-medium text-[#24333B] border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              ESA Blog
            </Link>
            <Link
              href="/faq/"
              className="block py-2 text-base font-medium text-[#24333B] border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Frequently Asked Questions
            </Link>
            <div className="pt-2">
              <Link
                href={siteConfig.surveyUrl}
                className="btn-primary w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Your ESA Letter ($149)
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
