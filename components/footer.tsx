import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Heart, FileCheck, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="bg-[#19354A] text-[#F7F5F0] pt-16 pb-28 lg:pb-12 border-t border-[#347C78]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Branding & Trust Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#347C78]/30">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center group mb-2" aria-label="ESA Letter Colorado Homepage">
              <div className="bg-white px-3.5 py-2 rounded-xl inline-flex items-center shadow-xs transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/esa-letter-colorado-logo-image.png"
                  alt="ESA Letter Colorado"
                  width={115}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm text-[#D5DFDB] leading-relaxed max-w-md">
              Connecting Colorado renters with state-licensed mental health professionals for legitimate,
              legally compliant emotional support animal housing evaluations under Colorado HB26-1045,
              C.R.S. 24-34-502, and the federal Fair Housing Act.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#E8F0ED]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#347C78]" /> 100% Legal Housing Compliance
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#A65331]" /> Money-Back Guarantee
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white/90">
              Colorado Office &amp; Telehealth
            </h4>
            <div className="space-y-2 text-sm text-[#E8F0ED]">
              <p className="flex items-start gap-2 text-[#E8F0ED]">
                <MapPin className="w-4 h-4 text-[#347C78] shrink-0 mt-0.5" />
                <span className="text-[#E8F0ED]">{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</span>
              </p>
              <p className="flex items-center gap-2 text-[#E8F0ED]">
                <Phone className="w-4 h-4 text-[#347C78] shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`} className="text-[#E8F0ED] hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </p>
              <p className="flex items-center gap-2 text-[#E8F0ED]">
                <Mail className="w-4 h-4 text-[#347C78] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-[#E8F0ED] hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white/90">
              Provider Verification
            </h4>
            <p className="text-sm text-[#E8F0ED] leading-relaxed">
              Every evaluator holds an active Colorado DORA license. Landlords can verify authentic letters 24/7.
            </p>
            <Link
              href="/verify-esa-letter/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F7F5F0] bg-[#347C78] hover:bg-[#347C78]/80 px-3.5 py-2 rounded-md transition-colors"
            >
              <FileCheck className="w-4 h-4" /> Landlord Verification Tool
            </Link>
          </div>
        </div>

        {/* 4 Main Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-[#347C78]/30">
          {/* Column 1: Core Pages */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Core Guides
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E8F0ED]">
              <li>
                <Link href="/what-is-an-esa-letter/" className="hover:text-white transition-colors">
                  What Is an ESA Letter?
                </Link>
              </li>
              <li>
                <Link href="/how-to-get-an-esa-letter-in-colorado/" className="hover:text-white transition-colors">
                  How to Get One in Colorado
                </Link>
              </li>
              <li>
                <Link href="/requirements/" className="hover:text-white transition-colors">
                  Letter Requirements Checklist
                </Link>
              </li>
              <li>
                <Link href="/sample-letter/" className="hover:text-white transition-colors">
                  Sample ESA Letter (Annotated)
                </Link>
              </li>
              <li>
                <Link href="/cost/" className="hover:text-white transition-colors">
                  ESA Letter Cost &amp; Pricing
                </Link>
              </li>
              <li>
                <Link href="/renewal/" className="hover:text-white transition-colors">
                  ESA Letter Renewal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Your Rights */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Your Rights
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E8F0ED]">
              <li>
                <Link href="/rights/fair-housing-act/" className="hover:text-white transition-colors">
                  Fair Housing Act Rights
                </Link>
              </li>
              <li>
                <Link href="/rights/colorado-hb26-1045-explained/" className="hover:text-white transition-colors">
                  Colorado HB26-1045 Explained
                </Link>
              </li>
              <li>
                <Link href="/rights/esa-vs-service-animal/" className="hover:text-white transition-colors">
                  ESA vs Service Animal
                </Link>
              </li>
              <li>
                <Link href="/rights/no-pet-apartments/" className="hover:text-white transition-colors">
                  No-Pet Apartments
                </Link>
              </li>
              <li>
                <Link href="/rights/landlord-denials/" className="hover:text-white transition-colors">
                  What to Do If Landlord Denies
                </Link>
              </li>
              <li>
                <Link href="/rights/pet-deposits-and-fees/" className="hover:text-white transition-colors">
                  Pet Deposits &amp; Pet Rent
                </Link>
              </li>
              <li>
                <Link href="/rights/" className="font-semibold text-[#347C78] hover:text-white transition-colors">
                  Browse All 12 Rights Guides →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Qualifying Conditions */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Qualifying Conditions
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E8F0ED]">
              <li>
                <Link href="/conditions/anxiety/" className="hover:text-white transition-colors">
                  Anxiety
                </Link>
              </li>
              <li>
                <Link href="/conditions/depression/" className="hover:text-white transition-colors">
                  Depression
                </Link>
              </li>
              <li>
                <Link href="/conditions/ptsd/" className="hover:text-white transition-colors">
                  PTSD &amp; Trauma
                </Link>
              </li>
              <li>
                <Link href="/conditions/adhd/" className="hover:text-white transition-colors">
                  ADHD
                </Link>
              </li>
              <li>
                <Link href="/conditions/autism-spectrum/" className="hover:text-white transition-colors">
                  Autism Spectrum
                </Link>
              </li>
              <li>
                <Link href="/conditions/panic-disorder/" className="hover:text-white transition-colors">
                  Panic Disorder
                </Link>
              </li>
              <li>
                <Link href="/conditions/" className="font-semibold text-[#347C78] hover:text-white transition-colors">
                  See All 11 Conditions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Company &amp; Support
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E8F0ED]">
              <li>
                <Link href="/about-our-therapists/" className="hover:text-white transition-colors">
                  About Our Therapists
                </Link>
              </li>
              <li>
                <Link href="/how-it-works/" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/reviews/" className="hover:text-white transition-colors">
                  Reviews &amp; Testimonials
                </Link>
              </li>
              <li>
                <Link href="/verify-esa-letter/" className="hover:text-white transition-colors">
                  Verify an ESA Letter
                </Link>
              </li>
              <li>
                <Link href="/faq/" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-white transition-colors">
                  ESA Colorado Blog
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#E8F0ED]">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/disclaimer/" className="hover:text-white transition-colors">
              Medical &amp; Legal Disclaimer
            </Link>
            <Link href="/refund-policy/" className="hover:text-white transition-colors">
              Refund &amp; Satisfaction Policy
            </Link>
            <Link href="/hipaa-notice/" className="hover:text-white transition-colors">
              HIPAA Notice
            </Link>
            <Link href="/cookie-policy/" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/accessibility-statement/" className="hover:text-white transition-colors">
              Accessibility Statement
            </Link>
          </div>
          <div className="text-[#E8F0ED]">
            © 2026 {siteConfig.name}. All rights reserved.
          </div>
        </div>

        {/* Medical & Legal Disclaimer Notice */}
        <div className="mt-8 pt-6 border-t border-[#347C78]/30 text-sm leading-relaxed text-center md:text-left">
          <p className="text-[#E8F0ED]">
            <strong className="text-white font-semibold">Medical &amp; Legal Disclaimer: </strong>
            <span className="text-[#E8F0ED]">
              ESA Letter Colorado provides telehealth coordination and educational resources connecting Colorado renters with state-licensed mental health professionals. ESA letters are medical recommendations issued solely at the independent professional clinical discretion of your evaluating provider. We do not sell registrations, certifications, or instant approvals. No patient-provider relationship is established until an evaluation is completed and approved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
