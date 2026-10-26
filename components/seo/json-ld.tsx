import React from "react";
import { siteConfig } from "@/data/site-config";

interface JsonLdProps {
  data?: Record<string, unknown> | Record<string, unknown>[] | unknown;
  type?: "organization" | "article" | "howto" | "service";
  title?: string;
  description?: string;
  url?: string;
  publishDate?: string;
  authorName?: string;
  cityServed?: string;
}

export function JsonLd({
  data,
  type = "organization",
  title,
  description,
  url,
  publishDate,
  authorName,
  cityServed,
}: JsonLdProps) {
  if (data) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    );
  }

  let schemaData: Record<string, unknown> = {};

  if (type === "organization") {
    schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${siteConfig.url}/#organization`,
          name: siteConfig.name,
          url: siteConfig.url,
          logo: `${siteConfig.url}/esa-letter-colorado-logo-image.webp`,
          telephone: siteConfig.phone,
          email: siteConfig.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.city,
            addressRegion: siteConfig.address.state,
            postalCode: siteConfig.address.zip,
            addressCountry: siteConfig.address.country,
          },
        },
        {
          "@type": "WebSite",
          "@id": `${siteConfig.url}/#website`,
          url: siteConfig.url,
          name: siteConfig.name,
          description: siteConfig.description,
          publisher: {
            "@id": `${siteConfig.url}/#organization`,
          },
        },
      ],
    };
  } else if (type === "article") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: description,
      url: url,
      datePublished: publishDate || "2026-10-10",
      dateModified: "2026-10-18",
      author: {
        "@type": "Person",
        name: authorName || "Dr. Elena Vance, Psy.D., LP",
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/esa-letter-colorado-logo-image.webp`,
        },
      },
    };
  } else if (type === "howto") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: title || "How to Get an ESA Letter in Colorado",
      description: description,
      step: [
        {
          "@type": "HowToStep",
          name: "Complete Pre-Screening Assessment",
          text: "Fill out a confidential 5-minute telehealth intake questionnaire about your symptoms and animal bond.",
          url: `${siteConfig.url}/how-it-works/#get-started`,
        },
        {
          "@type": "HowToStep",
          name: "Licensed Therapist Clinical Evaluation",
          text: "A Colorado-licensed mental health professional conducts your clinical telehealth review under Colorado HB26-1045 standards.",
          url: `${siteConfig.url}/about-our-therapists/`,
        },
        {
          "@type": "HowToStep",
          name: "Receive Official Signed ESA Letter",
          text: "Once approved, receive your compliant Colorado ESA letter on provider letterhead with verifiable license credentials.",
          url: `${siteConfig.url}/sample-letter/`,
        },
      ],
    };
  } else if (type === "service") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Colorado ESA Letter Telehealth - ${cityServed || "Colorado"}`,
      description: description,
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      areaServed: {
        "@type": "City",
        name: cityServed || "Denver",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "ESA Telehealth Evaluations",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "New Colorado ESA Letter",
            },
            price: siteConfig.pricing.single,
            priceCurrency: siteConfig.pricing.currency,
          },
        ],
      },
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
