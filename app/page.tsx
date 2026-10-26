import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Heart,
  Home as HomeIcon,
  Scale,
  Award,
  Users,
  AlertTriangle,
  Building,
  Check,
  Star,
  Clock,
  Lock,
  Brain,
  SunMedium,
  ShieldAlert,
  Activity,
  Zap,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Hero } from "@/components/modules/hero";
import { TrustBar } from "@/components/modules/trust-bar";
import { ProcessSteps } from "@/components/modules/process-steps";
import { ComparisonTable } from "@/components/modules/comparison-table";
import { PricingBlock } from "@/components/modules/pricing-block";
import { InlineCta } from "@/components/modules/inline-cta";
import { FAQAccordion } from "@/components/modules/faq-accordion";
import { LatestBlog } from "@/components/modules/latest-blog";
import { AssessmentForm } from "@/components/modules/assessment-form";
import { CalloutBox } from "@/components/modules/callout-box";
import { therapists } from "@/data/therapists-data";
import { coloradoCities } from "@/data/locations-data";
import { conditionsList } from "@/data/conditions-data";
import { rightsSpokes } from "@/data/rights-data";
import { allFaqs } from "@/data/faq-data";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const conditionIconMap: Record<string, LucideIcon> = {
  anxiety: Brain,
  depression: SunMedium,
  ptsd: ShieldAlert,
  "bipolar-disorder": Activity,
  "panic-disorder": Zap,
  "social-anxiety": Users,
};

const seo = getPageSeo("/");

export const metadata: Metadata = buildMetadata(seo);

export default function HomePage() {
  const homeFaqs = allFaqs.slice(0, 8);
  const topConditions = conditionsList.filter(c => c.slug !== "eligible-animals").slice(0, 6);
  const priorityCities = coloradoCities.slice(0, 6);

  return (
    <>
      {/* 1. M1 Hero (full) */}
      <Hero
        variant="full"
        h1={seo.h1}
        subhead="Secure a verifiable emotional support animal letter compliant with Colorado HB26-1045, C.R.S. 24-34-502, and the federal Fair Housing Act. Live with your companion animal free of pet rent, pet deposits, or breed restrictions."
        ctaText="Get Your Colorado ESA Letter ($149)"
        ctaHref="/how-it-works/#get-started"
      />

      {/* 2. M2 Trust Bar */}
      <TrustBar />

      {/* 3. Stats Strip */}
      <section className="bg-[#19354A] text-white py-10 border-b border-[#347C78]/30">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F5F0]">100%</span>
              <p className="text-xs sm:text-sm text-[#D5DFDB] mt-1">Colorado DORA Licensed</p>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F5F0]">$0</span>
              <p className="text-xs sm:text-sm text-[#D5DFDB] mt-1">Pet Rent &amp; Deposits</p>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F5F0]">24–48h</span>
              <p className="text-xs sm:text-sm text-[#D5DFDB] mt-1">Digital Delivery Time</p>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F5F0]">840+</span>
              <p className="text-xs sm:text-sm text-[#D5DFDB] mt-1">Verified Colorado Renters</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. M3 3-Step Process */}
      <ProcessSteps expanded={true} />

      {/* 5. Why Choose Us */}
      <section className="section-padding bg-white border-b border-[#D5DFDB]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-h2 text-[#19354A]">
              Why Colorado Renters Trust Our Clinical Team
            </h2>
            <p className="text-body-large text-[#52616A] mt-2">
              Unlike generic online certificate mills, our evaluations are conducted exclusively by licensed Colorado mental health professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-theme bg-[#F7F5F0]">
              <div className="w-12 h-12 rounded-xl bg-[#E8F0ED] text-[#347C78] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#19354A] mb-2">
                Colorado HB26-1045 Compliant
              </h3>
              <p className="text-base text-[#52616A] leading-relaxed">
                Colorado&apos;s assistance animal laws require providers to hold in-state licensing and conduct thorough clinical assessments. Our letters meet every statutory standard.
              </p>
            </div>

            <div className="card-theme bg-[#F7F5F0]">
              <div className="w-12 h-12 rounded-xl bg-[#E8F0ED] text-[#347C78] flex items-center justify-center mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#19354A] mb-2">
                Direct Landlord Verification
              </h3>
              <p className="text-base text-[#52616A] leading-relaxed">
                Every letter includes a verifiable Document ID, allowing Colorado landlords and property managers to authenticate your documentation 24/7 without exposing private health records.
              </p>
            </div>

            <div className="card-theme bg-[#F7F5F0]">
              <div className="w-12 h-12 rounded-xl bg-[#E8F0ED] text-[#347C78] flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#19354A] mb-2">
                Full Money-Back Guarantee
              </h3>
              <p className="text-base text-[#52616A] leading-relaxed">
                If your evaluating clinician determines during your assessment that an ESA is not clinically appropriate for your situation, you receive an immediate, 100% refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. H2: What Is an ESA Letter? (Summary) */}
      <section className="section-padding bg-[#F7F5F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 text-[#19354A]">
                What Is an ESA Letter and How Does It Work in Colorado?
              </h2>
              <p className="text-body-large text-[#52616A] mt-4 leading-relaxed">
                An Emotional Support Animal (ESA) letter is a formal medical recommendation issued by a licensed mental health professional (LMHP) or physician. It confirms that the handler has a diagnosed mental or emotional health condition and that the animal provides therapeutic relief that alleviates symptoms.
              </p>
              <div className="text-base space-y-3 mt-6 text-[#24333B]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#347C78] shrink-0 mt-0.5" />
                  <span><strong>Housing Classification:</strong> ESAs are classified as assistance animals under the Fair Housing Act, not pets.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#347C78] shrink-0 mt-0.5" />
                  <span><strong>Fee Exemptions:</strong> Landlords cannot charge pet security deposits, move-in pet fees, or monthly pet rent.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#347C78] shrink-0 mt-0.5" />
                  <span><strong>Policy Overrides:</strong> Valid letters override &ldquo;no pets&rdquo; rules and breed or weight restrictions.</span>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <Link href="/what-is-an-esa-letter/" className="btn-secondary gap-2">
                  <span>Read Full Renter Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/sample-letter/" className="text-xs font-bold text-[#347C78] hover:underline">
                  View Annotated Sample Letter →
                </Link>
              </div>
            </div>

            <div className="card-theme bg-white border-2 border-[#D5DFDB] shadow-md p-8">
              <h3 className="font-serif text-xl font-bold text-[#19354A] mb-4">
                What an ESA Letter Is NOT:
              </h3>
              <div className="text-base space-y-4 text-[#52616A]">
                <div className="p-3.5 rounded-lg bg-[#FDF0EE] border border-[#A33E35]/30 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#A33E35] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#A33E35] block">Not a Lifetime Online Registry</strong>
                    Online registries selling ID badges, vests, or digital certificates are scams. Landlords will reject them.
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-[#FDF0EE] border border-[#A33E35]/30 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#A33E35] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#A33E35] block">Not a Public Access Pass</strong>
                    ESAs have housing rights under the FHA, but do not have ADA public access to restaurants, stores, or flights.
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-[#FDF0EE] border border-[#A33E35]/30 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#A33E35] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#A33E35] block">Not an Automated Instant PDF</strong>
                    A valid letter requires a clinical evaluation by a healthcare provider licensed by the State of Colorado.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Narrative Banner: Colorado Tenant Housing Rights */}
      <section className="relative overflow-hidden py-20 bg-[#19354A] text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/colorado-happy-tenant-esa.webp"
            alt="Colorado tenant enjoying apartment living with their emotional support animals"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8F0ED] bg-[#347C78]/50 border border-[#347C78] px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#E8F0ED]" />
              Federal &amp; Colorado State Law
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Keep Your Companion Animal by Your Side Without Pet Rent or Weight Limits
            </h2>
            <p className="text-base sm:text-lg text-[#D5DFDB] mt-4 leading-relaxed">
              In Colorado, emotional support animals are classified as assistance animals under the Fair Housing Act and HB26-1045. Housing providers cannot deny your accommodation based on breed, size, or building pet quotas.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/how-it-works/#get-started" className="btn-primary shadow-lg">
                Get Your ESA Evaluation ($149)
              </Link>
              <Link
                href="/rights/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#E8F0ED] underline underline-offset-4"
              >
                <span>Explore Colorado Tenant Rights</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. M10 Comparison Table: ESA vs Service Animal vs Pet */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonTable />
        </div>
      </section>

      {/* 8. H2: Do You Qualify? Condition Grid */}
      <section className="section-padding bg-[#F7F5F0] border-t border-[#D5DFDB]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-h2 text-[#19354A]">
              Who Qualifies for an Emotional Support Animal in Colorado?
            </h2>
            <p className="text-body-large text-[#52616A] mt-2">
              Any mental, emotional, or psychological condition that significantly limits daily home functioning can qualify for an ESA accommodation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topConditions.map((cond) => {
              const CondIcon = conditionIconMap[cond.slug] || Brain;

              return (
                <Link
                  key={cond.slug}
                  href={`/conditions/${cond.slug}/`}
                  className="card-theme group hover:border-[#347C78] hover:shadow-md transition-all duration-200 flex flex-col justify-between bg-white"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#E8F0ED] text-[#19354A] flex items-center justify-center group-hover:bg-[#347C78] group-hover:text-white transition-all duration-200 shadow-2xs">
                        <CondIcon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-[#19354A] bg-[#E8F0ED] px-2.5 py-1 rounded-full border border-[#D5DFDB]">
                        Mental Health
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#19354A] group-hover:text-[#347C78] transition-colors">
                      {cond.name}
                    </h3>
                    <p className="text-base text-[#52616A] mt-2 line-clamp-3 leading-relaxed">
                      {cond.shortDesc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#D5DFDB]/60 flex items-center justify-between text-xs font-semibold text-[#347C78] group-hover:text-[#19354A]">
                    <span>Learn How {cond.name} Qualifies</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/conditions/" className="btn-secondary gap-2">
              <span>View All 11 Qualifying Conditions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Meet the Therapists */}
      <section className="section-padding bg-white border-t border-[#D5DFDB]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-h2 text-[#19354A]">
              Meet Our Colorado-Licensed Mental Health Clinicians
            </h2>
            <p className="text-body-large text-[#52616A] mt-2">
              Evaluations are conducted by licensed psychologists, clinical social workers, and professional counselors with verifiable Colorado DORA credentials.
            </p>
          </div>

          {/* Telehealth Clinician Spotlight Banner */}
          <div className="card-theme bg-gradient-to-br from-[#F7F5F0] via-white to-[#E8F0ED] p-6 sm:p-8 mb-12 border-2 border-[#D5DFDB] shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-5 flex flex-col">
                <div className="rounded-2xl overflow-hidden border border-[#D5DFDB] shadow-md relative flex-1 min-h-[300px] sm:min-h-[340px] bg-[#E8F0ED]">
                  <Image
                    src="/images/colorado-therapist-consultation.webp"
                    alt="Licensed Colorado mental health professional conducting a telehealth ESA consultation"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg text-xs font-semibold text-[#19354A] flex items-center justify-between border border-[#D5DFDB] shadow-xs z-10">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#347C78]" />
                      Direct 1-on-1 Clinical Assessment
                    </span>
                    <span className="text-[#347C78]">CO DORA</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-xs font-bold text-[#347C78] bg-[#E8F0ED] px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                  Colorado HB26-1045 Standard
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#19354A]">
                  Real Clinical Telehealth Evaluations — Never Automated Quizzes
                </h3>
                <p className="text-base text-[#52616A] mt-3 leading-relaxed">
                  Unlike illegitimate online certificate mills that sell instant PDFs or lifetime registry cards, Colorado law requires a bona fide patient-provider relationship. Our evaluators are state-licensed clinicians (LPC, LCSW, LMFT, PsyD) who assess your real mental health needs and stand behind your letter if a landlord requests legal verification.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 text-xs text-[#24333B]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                    <span>Active DORA credentials on public record</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                    <span>Direct phone/video telehealth consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                    <span>Compliant with C.R.S. 24-34-502 &amp; FHA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                    <span>Direct clinician email &amp; phone on letterhead</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {therapists.map((therapist) => (
              <div key={therapist.id} className="card-theme bg-[#F7F5F0] flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#19354A] to-[#347C78] text-white font-serif font-bold text-lg flex items-center justify-center mb-4 shadow-xs ring-4 ring-[#E8F0ED]">
                    {therapist.initials}
                  </div>
                  <h3 className="text-lg font-bold text-[#19354A]">
                    {therapist.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#347C78] mt-0.5">
                    {therapist.credentials}
                  </p>
                  <p className="text-sm text-[#52616A] mt-1 font-mono">
                    {therapist.licenseNumber} ({therapist.licenseState})
                  </p>
                  <p className="text-base text-[#52616A] mt-3 leading-relaxed">
                    {therapist.bio}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#D5DFDB] flex items-center justify-between text-xs">
                  <span className="text-[#27654F] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> DORA Verified
                  </span>
                  <a
                    href={therapist.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#347C78] hover:underline font-semibold"
                  >
                    Verify License →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/about-our-therapists/" className="btn-secondary">
              Learn More About Our Clinical Standards
            </Link>
          </div>
        </div>
      </section>

      {/* 10. H2: Your Housing Rights in Colorado */}
      <section className="section-padding bg-[#F7F5F0] border-t border-[#D5DFDB]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-h2 text-[#19354A]">
              Colorado Assistance Animal Laws &amp; Housing Rights
            </h2>
            <p className="text-body-large text-[#52616A] mt-2">
              Understand the legal framework protecting Colorado renters under federal HUD guidelines and Colorado House Bill 26-1045.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-theme bg-white">
              <Scale className="w-8 h-8 text-[#347C78] mb-3" />
              <h3 className="text-lg font-bold text-[#19354A] mb-2">Fair Housing Act (FHA)</h3>
              <p className="text-base text-[#52616A] leading-relaxed">
                Federal law establishes that assistance animals are auxiliary aids. Landlords are legally required to provide reasonable accommodation in housing.
              </p>
              <Link href="/rights/fair-housing-act/" className="text-xs font-bold text-[#347C78] mt-4 inline-block hover:underline">
                Read FHA Protections →
              </Link>
            </div>

            <div className="card-theme bg-white">
              <Building className="w-8 h-8 text-[#347C78] mb-3" />
              <h3 className="text-lg font-bold text-[#19354A] mb-2">Colorado HB26-1045</h3>
              <p className="text-base text-[#52616A] leading-relaxed">
                Colorado&apos;s updated assistance animal statute mandates that letters be issued by clinicians with active Colorado licenses, protecting legitimate tenants.
              </p>
              <Link href="/rights/colorado-hb26-1045-explained/" className="text-xs font-bold text-[#347C78] mt-4 inline-block hover:underline">
                Explore HB26-1045 →
              </Link>
            </div>

            <div className="card-theme bg-white">
              <ShieldCheck className="w-8 h-8 text-[#347C78] mb-3" />
              <h3 className="text-lg font-bold text-[#19354A] mb-2">No Pet Fees or Rent</h3>
              <p className="text-base text-[#52616A] leading-relaxed">
                Landlords cannot charge pet security deposits or monthly pet rent for emotional support animals under HUD guidelines and Colorado HB23-1068.
              </p>
              <Link href="/rights/pet-deposits-and-fees/" className="text-xs font-bold text-[#347C78] mt-4 inline-block hover:underline">
                Pet Deposit Rules →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. M13 Pricing Snapshot */}
      <PricingBlock />

      {/* 12. Mid-Page Inline CTA */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <InlineCta
          headline="Protect Your Rental Housing Rights in Colorado Today"
          subhead="Join over 840 verified Colorado renters living peacefully with their assistance animals without unlawful pet fees."
          buttonText="Get Your Colorado ESA Letter ($149)"
        />
      </div>

      {/* 13. H2: Cities Served Grid */}
      <section className="section-padding bg-white border-y border-[#D5DFDB]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-h2 text-[#19354A]">
                Colorado Cities Served
              </h2>
              <p className="text-body-large text-[#52616A] mt-2">
                Our telehealth evaluations cover renters across every municipality in Colorado.
              </p>
            </div>
            <Link
              href="/locations/"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#347C78] hover:text-[#19354A] transition-colors shrink-0"
            >
              <span>View All 12 City Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {priorityCities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}/`}
                className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] hover:border-[#347C78] hover:bg-[#E8F0ED] transition-all group text-center"
              >
                <h3 className="font-serif font-bold text-base text-[#19354A] group-hover:text-[#347C78] transition-colors">
                  {city.name}
                </h3>
                <span className="text-sm text-[#52616A] mt-1 block">
                  {city.rentalStats.avgRent}
                </span>
                <span className="text-sm text-[#347C78] font-semibold mt-2 inline-block">
                  Renter Guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Real Client Reviews & Social Proof */}
      <section className="section-padding bg-[#F7F5F0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-h2 text-[#19354A]">
              Colorado Tenant Testimonials
            </h2>
            <p className="text-body-large text-[#52616A] mt-2">
              Real stories from Colorado renters who successfully secured their ESA housing accommodations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-theme bg-white">
              <div className="flex text-[#A65331] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-base text-[#24333B] leading-relaxed italic">
                &ldquo;My Denver property manager originally tried to charge $50/mo pet rent plus a $400 deposit for my Golden Retriever. Dr. Vance&apos;s letter was verified the next day, and every fee was completely waived.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-[#D5DFDB] text-xs">
                <span className="font-bold text-[#19354A] block">Michael R.</span>
                <span className="text-[#52616A]">RiNo, Denver • Renter</span>
              </div>
            </div>

            <div className="card-theme bg-white">
              <div className="flex text-[#A65331] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-base text-[#24333B] leading-relaxed italic">
                &ldquo;Living in an apartment near Fort Carson, I needed an ESA evaluation for severe PTSD symptoms. Marcus was compassionate, professional, and knowledgeable about Colorado housing statutes.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-[#D5DFDB] text-xs">
                <span className="font-bold text-[#19354A] block">Sarah K.</span>
                <span className="text-[#52616A]">Colorado Springs • Veteran Renter</span>
              </div>
            </div>

            <div className="card-theme bg-white">
              <div className="flex text-[#A65331] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-base text-[#24333B] leading-relaxed italic">
                &ldquo;As a CU Boulder student, finding pet-friendly housing was nearly impossible. This evaluation was fast, respectful, and accepted without issue by my off-campus leasing office.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-[#D5DFDB] text-xs">
                <span className="font-bold text-[#19354A] block">Tyler B.</span>
                <span className="text-[#52616A]">Boulder, CO • Student</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Conversion Intake Assessment Form */}
      <section id="get-started" className="section-padding bg-white border-t border-[#D5DFDB] scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <AssessmentForm />
        </div>
      </section>

      {/* 16. M5 FAQ Section */}
      <FAQAccordion
        items={homeFaqs}
        title="Frequently Asked Questions"
        subtitle="Common questions about Colorado ESA documentation, therapist evaluations, and landlord rights."
      />

      {/* 17. M7 Latest from the Blog */}
      <LatestBlog limit={3} />

      {/* 18. Final CTA Band */}
      <section className="bg-[#19354A] text-white py-16 sm:py-20 border-t border-[#347C78]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            Live in Your Colorado Home With Peace of Mind
          </h2>
          <p className="text-base sm:text-lg text-[#D5DFDB] mt-4 max-w-2xl mx-auto leading-relaxed">
            Get evaluated by a state-licensed mental health professional today. 100% money-back guarantee, full legal compliance under HB26-1045, and fast 24–48 hour delivery.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
            <Link
              href="/how-it-works/#get-started"
              className="btn-primary text-base px-6 sm:px-8 py-3.5 sm:py-4 shadow-lg hover:shadow-xl w-full sm:w-auto gap-2 text-center justify-center"
            >
              <span className="leading-snug">Get Your Colorado ESA Letter ($149)</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
            <Link
              href="/how-it-works/"
              className="btn-cta w-full sm:w-auto inline-flex items-center justify-center min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 rounded-[9px] font-bold text-white bg-white/10 hover:bg-white/20 border-2 border-white/60 hover:border-white transition-all shadow-sm text-center"
            >
              <span className="text-white font-bold">How It Works</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
