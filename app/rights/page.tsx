import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/modules/hero";
import { SiloChildGrid, SiloChildItem } from "@/components/modules/silo-child-grid";
import { InlineCta } from "@/components/modules/inline-cta";
import { LatestBlog } from "@/components/modules/latest-blog";
import { FAQAccordion } from "@/components/modules/faq-accordion";
import { ReviewerBox } from "@/components/modules/reviewer-box";
import { JsonLd } from "@/components/seo/json-ld";
import { rightsSpokes } from "@/data/rights-data";
import { Scale, Building, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/rights/");

export const metadata: Metadata = buildMetadata(seo);

export default function RightsHubPage() {
  const childGridItems: SiloChildItem[] = rightsSpokes.map((spoke) => ({
    title: spoke.title,
    slug: spoke.slug,
    href: `/rights/${spoke.slug}/`,
    shortDesc: spoke.shortDesc,
    badge: "Colorado Rights Guide",
  }));

  const faqs = [
    {
      question: "Are emotional support animals exempt from Colorado apartment pet rent?",
      answer: "Yes. Under federal HUD guidelines and Colorado HB23-1068, emotional support animals are classified as assistance animals, not pets. Landlords cannot charge pet application fees, pet deposits, or monthly pet rent.",
    },
    {
      question: "Can a Colorado HOA ban an emotional support animal?",
      answer: "No. Federal and state fair housing protections supersede HOA rules, community bylaws, and CC&Rs. An HOA must grant a reasonable accommodation for a legitimate assistance animal.",
    },
    {
      question: "What should I do if a Colorado landlord denies my ESA letter?",
      answer: "Request the denial in writing with statutory justification. If the landlord violates the Fair Housing Act or Colorado C.R.S. 24-34-502, you can file an official discrimination complaint with the Colorado Civil Rights Division (CCRD) or HUD.",
    },
  ];

  return (
    <>
      <JsonLd
        type="article"
        title={seo.h1}
        description={seo.description}
        url={seo.canonical}
      />

      <Breadcrumbs items={[{ label: "Your Rights" }]} />

      <Hero
        variant="compact"
        h1={seo.h1}
        subhead="A comprehensive legal overview of tenant protections under the federal Fair Housing Act, Colorado HB26-1045, and Colorado Civil Rights Division regulations."
        ctaText="Protect Your Rights ($149)"
        bgImage="/images/colorado-happy-tenant-esa.webp"
      />

      {/* Featured Visual Split: Colorado Assistance Animal Rights */}
      <section className="bg-white border-b border-[#D5DFDB] py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col">
              <div className="rounded-3xl overflow-hidden border-2 border-[#D5DFDB] shadow-xl bg-[#E8F0ED] relative flex-1 min-h-[360px] sm:min-h-[420px]">
                <Image
                  src="/images/colorado-happy-tenant-esa.webp"
                  alt="Colorado tenant happily holding apartment keys with her assistance animals in modern Denver home"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-xl text-xs font-semibold text-[#19354A] flex items-center justify-between border border-[#D5DFDB] shadow-sm z-10">
                  <span className="flex items-center gap-1.5 text-[#347C78]">
                    <ShieldCheck className="w-4 h-4" />
                    Exempt from All Pet Fees &amp; Deposits
                  </span>
                  <span className="text-[#52616A] font-mono">HUD FHEO-2020-01</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-bold text-[#347C78] bg-[#E8F0ED] px-3 py-1 rounded-full border border-[#D5DFDB] uppercase tracking-wider inline-block mb-3 self-start">
                Colorado Housing Law
              </span>
              <h2 className="text-h2 text-[#19354A]">
                Zero Pet Rent, Zero Pet Deposits, No Breed Restrictions
              </h2>
              <p className="text-body-large text-[#52616A] mt-3 leading-relaxed">
                Under federal HUD guidelines and Colorado HB26-1045, emotional support animals are legally classified as assistance animals—not pets. Housing providers cannot demand monthly pet rent, charge extra security deposits, or ban animals based on breed or weight limits.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-xs text-[#24333B]">
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>$0 Monthly Pet Rent:</strong> Saves an average of $400–$800 annually.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>$0 Pet Security Deposit:</strong> Prohibits upfront pet deposits.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>No Breed Prohibitions:</strong> Overrides apartment breed bans.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>Full HOA Compliance:</strong> Enforceable across condos and HOAs.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* 200-300 word intro */}
          <div className="space-y-4 text-base text-[#24333B] leading-relaxed">
            <p className="text-lg font-medium text-[#19354A] leading-relaxed">
              In Colorado, tenants with mental or emotional health conditions have robust statutory protections to live with their assistance animals without discrimination, extra charges, or arbitrary lease restrictions.
            </p>
            <p>
              Navigating landlord policies can be stressful, especially when leasing offices cite &ldquo;no pets&rdquo; rules or demand unlawful pet fees. Both federal law under the Fair Housing Act (FHA) and Colorado state legislation—including C.R.S. § 24-34-502 and House Bill 26-1045—prohibit housing providers from treating emotional support animals as standard pets.
            </p>
            <p>
              Whether you are renting a multi-family apartment in Denver, a condo in Boulder with strict HOA covenants, or a suburban rental in Colorado Springs, understanding your rights ensures your documentation is respected and your home remains secure.
            </p>
          </div>

          <div className="my-10 space-y-10 text-base text-[#24333B] leading-relaxed">
            {/* FHA overview */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                1. The Federal Fair Housing Act (FHA)
              </h2>
              <p>
                The Fair Housing Act governs residential rental accommodations across the United States. Under HUD Notice FHEO-2020-01, housing providers must grant reasonable accommodations for assistance animals when a tenant provides reliable documentation verifying an emotional impairment and a disability-related need for the animal.
              </p>
            </section>

            {/* Colorado law overview */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                2. Colorado Law: HB26-1045 &amp; C.R.S. § 24-34-502
              </h2>
              <p>
                Colorado state law reinforces federal standards while requiring that healthcare providers issuing ESA letters hold an active Colorado license and maintain a genuine clinical relationship with the tenant. This protects renters from fraudulent online registry scams while holding landlords accountable.
              </p>
            </section>

            {/* What landlords can and cannot do */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                3. What Colorado Landlords Can and Cannot Do
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-[#F0F7F4] border border-[#27654F]/30">
                  <h3 className="text-lg font-bold text-[#27654F] mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> What Landlords CAN Do:
                  </h3>
                  <ul className="text-base space-y-1.5 text-[#24333B]">
                    <li>• Request a clinical letter from an active Colorado-licensed provider.</li>
                    <li>• Contact the provider to authenticate that the letter is genuine.</li>
                    <li>• Charge for actual physical property damage caused by the animal upon move-out.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-[#FDF0EE] border border-[#A33E35]/30">
                  <h3 className="text-lg font-bold text-[#A33E35] mb-2 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" /> What Landlords CANNOT Do:
                  </h3>
                  <ul className="text-base space-y-1.5 text-[#24333B]">
                    <li>• Cannot charge pet deposits, pet fees, or monthly pet rent.</li>
                    <li>• Cannot demand medical records, diagnostic charts, or therapy notes.</li>
                    <li>• Cannot enforce dog breed bans or weight caps on an individual ESA.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Who enforces */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                4. Enforcement Authorities (HUD &amp; CCRD)
              </h2>
              <p>
                Colorado renters who experience unlawful accommodation denials, retaliatory eviction threats, or unauthorized pet fees have two enforcement bodies available to investigate claims free of charge:
              </p>
              <ul className="text-base mt-2 space-y-1.5 text-[#24333B]">
                <li>• <strong>Colorado Civil Rights Division (CCRD):</strong> Enforces C.R.S. § 24-34-502 across all Colorado municipalities.</li>
                <li>• <strong>U.S. Department of Housing &amp; Urban Development (HUD):</strong> Enforces federal Fair Housing Act compliance.</li>
              </ul>
            </section>
          </div>

          <ReviewerBox />
        </div>
      </article>

      {/* M6 Child Grid [REQUIRED] */}
      <SiloChildGrid
        items={childGridItems}
        title="All 12 Colorado Housing Rights Guides"
        subtitle="Detailed legal breakdowns covering FHA protections, state legislation, landlord communication, and fee exemptions."
        type="rights"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <InlineCta
          headline="Exercise Your Lawful Housing Rights in Colorado"
          subhead="Evaluated by Colorado-licensed clinicians. Complete protection against pet fees and restrictions."
        />
      </div>

      {/* M7 Latest from Blog [REQUIRED] */}
      <LatestBlog categorySlug="rights-housing" title="Latest Housing Rights Articles" />

      {/* M5 FAQ */}
      <FAQAccordion items={faqs} title="Housing Rights FAQ" outputSchema={false} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <InlineCta
          headline="Get Evaluated by a Licensed Colorado Professional"
          subhead="100% money-back guarantee. Full compliance with Colorado HB26-1045."
        />
      </div>
    </>
  );
}
