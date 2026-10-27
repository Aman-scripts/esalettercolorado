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
      question: "Are emotional support animals protected in Colorado housing?",
      answer: "Yes. Colorado law (HB26-1045) defines emotional support animals as assistance animals, and allowing one in housing is presumed to be a reasonable accommodation. Complaints can be filed with the Colorado Civil Rights Division.",
    },
    {
      question: "Can a Colorado landlord or HOA ban assistance animals completely?",
      answer: "No. Under Colorado law, a complete prohibition of assistance animals in housing is presumed to be discriminatory. Housing providers can still request reasonable documentation and engage in a good-faith interactive process.",
    },
    {
      question: "What documentation can a Colorado housing provider ask for?",
      answer: "A housing provider may request reasonable documentation of your disability and your disability-related need for the animal, unless the disability or need is obvious. You do not need to disclose a specific diagnosis.",
    },
    {
      question: "Am I responsible if my assistance animal causes damage?",
      answer: "Yes. Housing providers may still hold tenants responsible for actual damage caused by an assistance animal. However, an animal's mere presence is not presumed to be a direct threat or to cause substantial damage.",
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
                  sizes="(min-width: 1024px) 650px, 100vw"
                  quality={90}
                  priority
                  fetchPriority="high"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-xl text-xs font-semibold text-[#19354A] flex items-center border border-[#D5DFDB] shadow-sm z-10">
                  <span className="flex items-center gap-1.5 text-[#347C78]">
                    <ShieldCheck className="w-4 h-4" />
                    Exempt from All Pet Fees &amp; Deposits
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="text-h2 text-[#19354A]">
                Know Your Colorado Assistance Animal Rights
              </h2>
              <h3 className="text-lg font-bold text-[#19354A] mt-4">
                Colorado Assistance Animal Housing Protections
              </h3>
              <p className="text-body-large text-[#52616A] mt-3 leading-relaxed">
                Under Colorado HB26-1045, emotional support animals are defined as assistance animals, and allowing an assistance animal in housing is presumed to be a reasonable accommodation. Housing providers may request reasonable documentation and may hold tenants responsible for actual damage caused by the animal.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-xs text-[#24333B]">
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>State-Law Protection:</strong> ESAs are protected under Colorado law.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>Ban Presumed Unlawful:</strong> Blanket no-animal policies presumed discriminatory.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>Defined in Statute:</strong> ESAs are now defined as assistance animals.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>State Enforcement:</strong> Complaints go to the Colorado Civil Rights Division.</span>
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
              In Colorado, tenants with a disability, including mental or emotional health conditions, can request a reasonable accommodation to live with an assistance animal under the Colorado Anti-Discrimination Act.
            </p>
            <p>
              Dealing with landlord policies can be stressful, especially when leasing offices cite &ldquo;no pets&rdquo; rules or question assistance animal requests. Colorado law (C.R.S. §§ 24-34-502 and 24-34-502.2, as amended by HB26-1045) treats a complete prohibition of assistance animals in housing as presumptively discriminatory. Federal Fair Housing Act enforcement for untrained emotional support animals has narrowed since HUD rescinded its 2020 guidance in May 2026.
            </p>
          </div>

          <div className="my-10 space-y-10 text-base text-[#24333B] leading-relaxed">
            {/* FHA overview */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                1. The Federal Fair Housing Act (FHA)
              </h2>
              <p>
                The Fair Housing Act prohibits disability discrimination in most housing, including refusing reasonable accommodations in housing policies. Certain housing, such as some owner-occupied buildings with four or fewer units, is exempt. HUD rescinded its 2020 assistance animal guidance in May 2026 and now pursues federal complaints only for individually trained animals. State law continues to protect emotional support animals in Colorado.
              </p>
            </section>

            {/* Colorado law overview */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                2. Colorado Law: HB26-1045 &amp; C.R.S. § 24-34-502
              </h2>
              <p>
                HB26-1045 amended the Colorado Anti-Discrimination Act to define assistance animals and emotional support animals, to presume that permitting an assistance animal is a reasonable accommodation, and to allow housing providers to request reasonable documentation of a disability and disability-related need. It also provides that an animal&apos;s mere presence is not presumed to be a direct threat.
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
                    <li>• Request reasonable documentation of your disability and need for the animal, unless the disability or need is obvious.</li>
                    <li>• Engage in a good-faith interactive process.</li>
                    <li>• Hold you responsible for actual damage caused by the animal.</li>
                    <li>• Deny a request for a specific animal based on documented, specific harmful conduct.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-[#FDF0EE] border border-[#A33E35]/30">
                  <h3 className="text-lg font-bold text-[#A33E35] mb-2 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" /> What Landlords CANNOT Do:
                  </h3>
                  <ul className="text-base space-y-1.5 text-[#24333B]">
                    <li>• Prohibit assistance animals completely (presumed discriminatory under Colorado law).</li>
                    <li>• Presume an assistance animal is a direct threat or will cause substantial damage based on its mere presence.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Who enforces */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                4. Enforcement Authorities (HUD &amp; CCRD)
              </h2>
              <ul className="text-base space-y-1.5 text-[#24333B]">
                <li>• <strong>U.S. Department of Housing &amp; Urban Development (HUD):</strong> Accepts Fair Housing Act complaints, but currently pursues only cases involving individually trained animals.</li>
                <li>• <strong>Colorado Civil Rights Division (CCRD):</strong> Enforces the Colorado Anti-Discrimination Act, including housing protections for assistance animals.</li>
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
      <FAQAccordion
        items={faqs}
        title="FAQs About Colorado Housing Rights"
        subtitle="Learn how reasonable accommodation requests, documentation, and state law apply to renters and homeowners in Colorado."
        outputSchema={false}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <InlineCta
          headline="Get Evaluated by a Licensed Colorado Professional"
          subhead="100% money-back guarantee. Full compliance with Colorado HB26-1045."
        />
      </div>
    </>
  );
}
