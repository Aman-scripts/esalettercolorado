import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/modules/hero";
import { CalloutBox } from "@/components/modules/callout-box";
import { CityInfoPanel } from "@/components/modules/city-info-panel";
import { InlineCta } from "@/components/modules/inline-cta";
import { FAQAccordion } from "@/components/modules/faq-accordion";
import { RelatedPages } from "@/components/modules/related-pages";
import { ReviewerBox } from "@/components/modules/reviewer-box";
import { JsonLd } from "@/components/seo/json-ld";
import { coloradoCities, CityInfo } from "@/data/locations-data";
import { siteConfig } from "@/data/site-config";
import { Building2, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

interface CitySpokeProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return coloradoCities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: CitySpokeProps): Promise<Metadata> {
  const { slug } = await params;
  const city = coloradoCities.find((c) => c.slug === slug);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/locations/${city.slug}/`,
    },
  };
}

export default async function CitySpokePage({ params }: CitySpokeProps) {
  const { slug } = await params;
  const city = coloradoCities.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  // Cross-silo mandatory internal linking:
  // Must link up to /locations/, across to /rights/ pages
  const relatedLinks = [
    { title: "Colorado City-by-City ESA Guide (Locations Hub)", href: "/locations/", note: "Silo Hub Overview" },
    { title: "The Fair Housing Act and Your ESA", href: "/rights/fair-housing-act/", note: "Federal Protections" },
    { title: "Colorado HB26-1045 Explained", href: "/rights/colorado-hb26-1045-explained/", note: "State Statute" },
    { title: "Pet Deposits, Pet Rent & ESAs in Colorado", href: "/rights/pet-deposits-and-fees/", note: "Fee Exemptions" },
    { title: "ESAs in No-Pet Apartments", href: "/rights/no-pet-apartments/", note: "No-Pet Overrides" },
  ];

  return (
    <>
      <JsonLd
        type="service"
        title={city.h1}
        description={city.metaDescription}
        url={`${siteConfig.url}/locations/${city.slug}/`}
        cityServed={city.name}
      />

      <Breadcrumbs
        items={[
          { label: "Locations", href: "/locations/" },
          { label: city.name },
        ]}
      />

      <Hero
        variant="compact"
        h1={city.h1}
        subhead={`Renting in ${city.name}? Learn how Colorado assistance animal laws protect you from pet rent, pet deposits, and breed bans.`}
        ctaText={`Get Evaluated in ${city.name} ($149)`}
      />

      <article className="section-padding bg-white">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* M9 Quick Answer */}
          <CalloutBox type="quick-answer" title={`Quick Answer: ESA Rights in ${city.name}, Colorado`}>
            {city.quickAnswer}
          </CalloutBox>

          {/* M14 City Info Panel [REQUIRED] */}
          <CityInfoPanel city={city} />

          <div className="space-y-10 text-base text-[#24333B] leading-relaxed mt-10">
            {/* Market Snapshot */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                {city.name} Rental Market Snapshot
              </h2>
              <p>{city.marketSnapshot}</p>
              <p className="mt-3">
                With average rents in {city.name} at {city.rentalStats.avgRent} and average monthly pet fees between {city.rentalStats.monthlyPetRentAvg}, maintaining an emotional support animal accommodation delivers substantial financial protection while keeping you legally safeguarded in your residence.
              </p>
            </section>

            {/* How Property Managers Handle ESA requests */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                How {city.name} Property Managers Handle ESA Requests
              </h2>
              <p>{city.propertyManagerPractices}</p>
              <div className="my-4 p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] space-y-2 text-sm text-[#24333B]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27654F] shrink-0 mt-0.5" />
                  <span>Landlords cannot ask for your medical diagnosis or therapy session notes.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27654F] shrink-0 mt-0.5" />
                  <span>Landlords must accept valid Colorado-licensed telehealth documentation.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27654F] shrink-0 mt-0.5" />
                  <span>Landlords cannot require proprietary certification forms or liability waivers.</span>
                </div>
              </div>
            </section>

            {/* Neighborhood & Local Considerations */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                Neighborhood &amp; Building-Type Considerations
              </h2>
              <p>{city.neighborhoodNotes}</p>
            </section>

            {/* Legal Callout */}
            <CalloutBox type="legal-warning" title={`Colorado HB26-1045 in ${city.county}`}>
              Renters in {city.name} are protected by the Colorado Civil Rights Division (CCRD). If a landlord threatens illegal fees or denies your accommodation, you have the right to file a formal discrimination complaint.
            </CalloutBox>
          </div>

          {/* M4 Inline CTA */}
          <InlineCta
            headline={`Get Your ${city.name} ESA Letter Today`}
            subhead={`Evaluated by Colorado-licensed therapists. Fully valid across all ${city.name} apartment communities.`}
          />

          {/* M8 Related Pages (linking up to /locations/, across to /rights/ pages [REQUIRED]) */}
          <RelatedPages links={relatedLinks} title={`Related ${city.name} & Colorado Housing Guides`} />

          {/* M11 Reviewer Box */}
          <ReviewerBox />
        </div>
      </article>

      {/* City-specific M5 FAQ */}
      <FAQAccordion items={city.faqs} title={`Frequently Asked Questions: ${city.name}`} outputSchema={false} />

      {/* Final CTA */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <InlineCta
          headline={`Start Your ${city.name} Telehealth Assessment`}
          subhead="100% money-back guarantee. Fast 24–48h delivery via secure PDF."
        />
      </div>
    </>
  );
}
