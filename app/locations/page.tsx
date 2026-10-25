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
import { coloradoCities } from "@/data/locations-data";
import { MapPin, Building2, ShieldCheck, CheckCircle2, Mountain, Compass } from "lucide-react";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/locations/");

export const metadata: Metadata = buildMetadata(seo);

export default function LocationsHubPage() {
  const childGridItems: SiloChildItem[] = coloradoCities.map((city) => ({
    title: city.name,
    slug: city.slug,
    href: `/locations/${city.slug}/`,
    shortDesc: city.shortDesc,
    badge: city.rentalStats.avgRent,
  }));

  const faqs = [
    {
      question: "Do ESA housing protections differ by city in Colorado?",
      answer: "No. The federal Fair Housing Act and Colorado HB26-1045 apply equally in every municipality and county across Colorado. However, local rental market dynamics, landlord screening procedures, and student housing rules vary between cities like Denver, Boulder, and Colorado Springs.",
    },
    {
      question: "Can an apartment complex enforce a city breed ban against my ESA?",
      answer: "No. The federal Fair Housing Act preempts municipal pet regulations and breed restrictions. An assistance animal cannot be barred from private housing on the basis of breed alone.",
    },
    {
      question: "Are telehealth ESA evaluations valid across all Colorado counties?",
      answer: "Yes. State-licensed Colorado mental health professionals can legally conduct telehealth assessments for renters in any city, town, or rural area in Colorado.",
    },
  ];

  return (
    <>
      <JsonLd
        type="service"
        title={seo.h1}
        description={seo.description}
        url={seo.canonical}
      />

      <Breadcrumbs items={[{ label: "Colorado Locations" }]} />

      <Hero
        variant="compact"
        h1={seo.h1}
        subhead="Assistance animal protections apply statewide across every rental market. Browse local housing guides, rental statistics, and tenant resources for all 12 major Colorado cities."
        ctaText="Find Your City Guide ($149)"
        bgImage="/images/colorado-apartment-peaceful-esa.webp"
      />

      {/* Visual Showcase: Statewide Colorado Assistance Animal Protections */}
      <section className="bg-white border-b border-[#D5DFDB] py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col">
              <div className="rounded-3xl overflow-hidden border-2 border-[#D5DFDB] shadow-xl bg-[#E8F0ED] relative flex-1 min-h-[360px] sm:min-h-[420px]">
                <Image
                  src="/images/colorado-apartment-peaceful-esa.webp"
                  alt="Colorado mountain apartment living with emotional support animal"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-xl text-xs font-semibold text-[#19354A] flex items-center justify-between border border-[#D5DFDB] shadow-sm z-10">
                  <span className="flex items-center gap-1.5 text-[#347C78]">
                    <Mountain className="w-4 h-4" />
                    Statewide Colorado Coverage
                  </span>
                  <span className="text-[#52616A] font-mono">Front Range &amp; High Country</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-bold text-[#347C78] bg-[#E8F0ED] px-3 py-1 rounded-full border border-[#D5DFDB] uppercase tracking-wider inline-block mb-3 self-start">
                Statewide Jurisdiction
              </span>
              <h2 className="text-h2 text-[#19354A]">
                Equal Rights in Every County &amp; City in Colorado
              </h2>
              <p className="text-body-large text-[#52616A] mt-3 leading-relaxed">
                Whether you live in high-density downtown Denver apartments, student complexes in Boulder and Fort Collins, military communities in Colorado Springs, or mountain towns along the I-70 corridor, Colorado HB26-1045 ensures your assistance animal accommodation cannot be denied based on local municipal rules or pet limits.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-xs text-[#24333B]">
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>Denver &amp; Aurora:</strong> Multi-unit portal compliance.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>Boulder &amp; Fort Collins:</strong> University student accommodations.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>Colorado Springs:</strong> Off-base military housing protections.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>Mountain Towns:</strong> Valid across Summit, Eagle, &amp; Pitkin.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-base text-[#24333B] leading-relaxed">
            <p className="text-lg font-medium text-[#19354A] leading-relaxed">
              Whether you are leasing a high-rise in Downtown Denver, off-campus student apartments near CU Boulder or CSU Fort Collins, or military-adjacent townhomes in Colorado Springs, assistance animal rights are protected statewide under Colorado law.
            </p>
            <p>
              Under Colorado House Bill 26-1045 and C.R.S. § 24-34-502, every housing provider in Colorado must grant reasonable accommodations for legitimate emotional support animals. Landlords cannot charge pet deposits, impose monthly pet rent, or enforce breed restrictions.
            </p>
            <p>
              However, because rental markets, average fees, and property management verification systems differ from city to city, we have prepared dedicated guides with localized housing statistics and tenant resources.
            </p>
          </div>

          <div className="my-10 space-y-8 text-base text-[#24333B] leading-relaxed">
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                1. Statewide Overview: Uniform Legal Standards
              </h2>
              <p>
                Colorado state law does not allow municipalities or county commissioners to weaken federal or state disability rights. A valid ESA letter issued by an active Colorado-licensed therapist is legally binding on landlords in every Colorado city.
              </p>
            </section>

            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                2. What Differs by City: Markets, HOAs, &amp; Screening
              </h2>
              <p>
                While the legal protections are statewide, local market conditions create unique hurdles for renters:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#24333B]">
                <li>• <strong>High-Density Institutional Portals (Denver, Aurora):</strong> Corporate landlords frequently use automated verification portals like PetScreening.com.</li>
                <li>• <strong>College Campuses &amp; Student Housing (Boulder, Fort Collins, Greeley):</strong> High volumes of student requests require early coordination with campus disability offices.</li>
                <li>• <strong>Military &amp; Veteran Rentals (Colorado Springs):</strong> Off-base military rentals are fully subject to FHA rules despite military chain-of-command rules.</li>
              </ul>
            </section>
          </div>

          <ReviewerBox />
        </div>
      </article>

      {/* M6 Silo Child Grid */}
      <SiloChildGrid
        items={childGridItems}
        title="All 12 Colorado City Guides"
        subtitle="Select your city to review local rent averages, pet fee savings, municipal rules, and housing resources."
        type="locations"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <InlineCta
          headline="Get a Colorado ESA Letter Valid in Any Colorado City"
          subhead="Evaluated by active Colorado-licensed clinicians. Accepted across all 64 Colorado counties."
        />
      </div>

      {/* M7 Latest from Blog */}
      <LatestBlog categorySlug="colorado-cities" title="Colorado City Rental Guides &amp; Insights" />

      {/* M5 FAQ */}
      <FAQAccordion items={faqs} title="City Guides FAQ" outputSchema={false} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <InlineCta
          headline="Start Your Colorado Telehealth Intake Today"
          subhead="100% money-back guarantee. Full compliance with Colorado HB26-1045."
        />
      </div>
    </>
  );
}
