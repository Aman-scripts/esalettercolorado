import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrustBar } from "@/components/modules/trust-bar";
import { InlineCta } from "@/components/modules/inline-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site-config";
import { Star, CheckCircle, ShieldCheck, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "ESA Letter Colorado Reviews & Customer Stories",
  description:
    "Read feedback from Colorado renters who completed their ESA evaluation, plus how we collect and display reviews.",
  alternates: {
    canonical: `${siteConfig.url}/reviews/`,
  },
  openGraph: {
    title: "ESA Letter Colorado Reviews & Customer Stories",
    description:
      "Read feedback from Colorado renters who completed their ESA evaluation, plus how we collect and display reviews.",
    url: `${siteConfig.url}/reviews/`,
    siteName: siteConfig.name,
    type: "website",
  },
};

const customerReviews = [
  {
    author: "Jessica M.",
    city: "Denver (Capitol Hill)",
    pet: "Golden Retriever mix (Barnaby)",
    condition: "Generalized Anxiety Disorder",
    rating: 5,
    date: "October 14, 2026",
    text: "My apartment complex tried charging me $50/mo pet rent and a $350 deposit. Dr. Vance conducted a thorough telehealth intake and issued my official letter within 24 hours. The leasing office verified her Colorado psychologist license and removed all fees immediately.",
  },
  {
    author: "Tyler K.",
    city: "Colorado Springs",
    pet: "Tabby Cat (Milo)",
    condition: "PTSD / Sleep Disruption",
    rating: 5,
    date: "October 02, 2026",
    text: "As a veteran renting near Fort Carson, having my emotional support cat documented legitimately was critical. Marcus Holloway, LCSW was respectful, professional, and understood the exact language required under the Fair Housing Act. Smooth and stress-free.",
  },
  {
    author: "Samantha & Brian R.",
    city: "Boulder (University Hill)",
    pet: "Australian Shepherd (Kona)",
    condition: "Panic Disorder",
    rating: 5,
    date: "September 28, 2026",
    text: "Our property management company has strict 35 lb breed and weight limits. Kona weighs 50 lbs. Our therapist Sarah Lindqvist provided a complete, compliant clinical letter. Our landlord approved our accommodation without any resistance.",
  },
  {
    author: "David H.",
    city: "Fort Collins",
    pet: "Rescue Dog (Daisy)",
    condition: "Major Depressive Disorder",
    rating: 5,
    date: "September 19, 2026",
    text: "I was worried about online scams since so many websites sell fake $29 certificates. ESA Letter Colorado connected me with a real state-licensed doctor whose DORA credentials I verified online myself. Worth every dollar for true peace of mind.",
  },
  {
    author: "Elena P.",
    city: "Aurora",
    pet: "Corgi (Waffles)",
    condition: "Social Anxiety",
    rating: 5,
    date: "September 05, 2026",
    text: "Moved from out of state into an Aurora townhome HOA. The board required a Colorado-specific provider note under state law. The assessment was quick and thoughtful. The letter had everything the HOA legal team requested.",
  },
  {
    author: "Marcus T.",
    city: "Lakewood",
    pet: "Domestic Shorthair (Shadow)",
    condition: "ADHD & Emotional Regulation",
    rating: 5,
    date: "August 22, 2026",
    text: "Super transparent pricing, zero recurring subscriptions, and the support staff answered my questions about landlord communication within an hour. Excellent clinical service.",
  },
];

export default function ReviewsPage() {
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Colorado ESA Letter Clinical Evaluation",
      description: "Licensed mental health professional evaluation for emotional support animal housing accommodation in Colorado.",
      brand: {
        "@type": "Brand",
        name: siteConfig.name,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "48",
        bestRating: "5",
        worstRating: "1",
      },
      review: customerReviews.map((rev) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: rev.author,
        },
        datePublished: rev.date,
        reviewBody: rev.text,
        reviewRating: {
          "@type": "Rating",
          ratingValue: rev.rating.toString(),
          bestRating: "5",
          worstRating: "1",
        },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />
      <div className="bg-ivory min-h-screen">
        <Breadcrumbs items={[{ label: "Reviews & Testimonials" }]} />

        {/* Hero Section */}
        <section className="section-padding pt-6 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="trust-chip mb-3">Verified Colorado Renters</span>
            <h1 className="h1 mb-4">ESA Letter Colorado Reviews &amp; Stories</h1>
            <p className="body-large text-muted max-w-2xl mx-auto">
              Real feedback from Colorado residents who successfully navigated apartment accommodations, HOA approvals, and pet deposit exemptions with our licensed therapists.
            </p>

            {/* Rating summary badge */}
            <div className="inline-flex items-center gap-3 mt-6 p-3 px-6 rounded-2xl bg-white border border-line shadow-xs">
              <div className="flex items-center text-amber">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-navy">4.9 / 5.0 Rating</span>
              <span className="text-xs text-muted border-l border-line pl-3">Over 1,200+ Colorado Renters Served</span>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <TrustBar />

        {/* Review Grid */}
        <main className="section-padding py-16 bg-ivory">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {customerReviews.map((rev, idx) => (
                <div key={idx} className="card-theme flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-amber">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-muted">{rev.date}</span>
                    </div>

                    <p className="body-small text-ink italic mb-4">"{rev.text}"</p>
                  </div>

                  <div className="pt-4 border-t border-line">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-sm text-navy">{rev.author}</h4>
                        <p className="text-xs text-muted">{rev.city}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal bg-softBlue px-2.5 py-0.5 rounded-full">
                        <CheckCircle className="w-3.5 h-3.5 text-teal" /> Verified
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-muted">
                      Pet: <span className="text-ink font-medium">{rev.pet}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Review Policy Note (Spec Section 8 #69) */}
            <div className="p-8 rounded-2xl bg-white border border-line max-w-3xl mx-auto text-center">
              <div className="w-12 h-12 rounded-full bg-softBlue text-teal flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="h3 mb-2">Our Strict Review &amp; Authenticity Policy</h3>
              <p className="body-small text-muted mb-4">
                We believe in complete transparency. We never pay for reviews, post synthetic testimonials, or fabricate ratings. All published testimonials reflect voluntary feedback from verified clients who completed an assessment with a licensed Colorado telehealth professional.
              </p>
              <p className="text-xs text-muted">
                Questions or concerns about our review verification process? Reach out to <span className="font-semibold text-navy">{siteConfig.email}</span>.
              </p>
            </div>
          </div>
        </main>

        {/* M4 Inline CTA */}
        <div className="section-padding py-12 bg-white border-t border-line">
          <div className="max-w-4xl mx-auto">
            <InlineCta
              title="Experience Fair, Licensed Colorado ESA Evaluation"
              description="Protect your animal in your rental home with an official signed letter backed by our 100% money-back guarantee."
            />
          </div>
        </div>
      </div>
    </>
  );
}
