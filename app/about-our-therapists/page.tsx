import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { doctors } from "@/data/therapists-data";
import { siteConfig } from "@/data/site-config";
import { ShieldCheck, CheckCircle2, Video, Stethoscope, ArrowRight, Info } from "lucide-react";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/about-our-therapists/");

export const metadata: Metadata = buildMetadata(seo);

const processSteps = [
  {
    title: "Start Evaluation",
    text: "Begin your secure online evaluation through our HIPAA-compliant platform.",
  },
  {
    title: "Get Matched",
    text: "We connect you with a licensed professional authorized to practice in your state.",
  },
  {
    title: "Receive Decision",
    text: "Your therapist provides their independent clinical assessment.",
  },
];

const disclosures = [
  "Providers listed are independent professionals, not employees making platform decisions",
  "Provider availability varies by state",
  "Evaluations are conducted based on state licensure requirements",
  "ESA approval is never guaranteed",
  `${siteConfig.name} does not influence clinical decisions or documentation outcomes`,
];

export default function AboutOurTherapistsPage() {
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      name: siteConfig.name,
      url: siteConfig.url,
      member: doctors.map((d) => ({
        "@type": "Person",
        name: d.name,
        jobTitle: d.title,
        description: d.hubBio,
        image: `${siteConfig.url}${d.photo}`,
        url: `${siteConfig.url}/about-our-therapists/${d.slug}/`,
        ...(d.linkedin && { sameAs: [d.linkedin] }),
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />
      <div className="bg-ivory min-h-screen">
        <Breadcrumbs items={[{ label: "About Our Therapists" }]} />

        {/* Hero Section */}
        <section className="relative overflow-hidden section-padding pt-10 pb-16 bg-[#F7F5F0] border-b border-[#D5DFDB]">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#347C78]/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#347C78] bg-[#E8F0ED] px-3 py-1 rounded-full border border-[#D5DFDB] mb-3">
                  <ShieldCheck className="w-4 h-4" />
                  Trusted Nationwide
                </span>
                <h1 className="h1 mb-4">{seo.h1}</h1>
                <p className="body-large text-[#52616A] leading-relaxed">
                  {siteConfig.name} works with a network of independent, state-licensed mental health
                  professionals who conduct emotional support animal (ESA) evaluations through secure
                  telehealth sessions.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    { value: "15+", label: "Years Experience" },
                    { value: "100%", label: "Licensed" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white border border-[#D5DFDB] rounded-xl px-4 py-2.5">
                      <span className="block font-serif text-2xl text-[#19354A] leading-tight">{stat.value}</span>
                      <span className="block text-sm text-[#52616A]">{stat.label}</span>
                    </div>
                  ))}
                  <div className="bg-white border border-[#D5DFDB] rounded-xl px-4 py-2.5 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#27654F]" />
                    <span className="text-base font-semibold text-[#19354A]">Verified Licensed Pros</span>
                  </div>
                </div>
              </div>

              {/* Doctor photo stack */}
              <div className="lg:col-span-5">
                <div className="flex justify-center lg:justify-end -space-x-6">
                  {doctors.map((d) => (
                    <div
                      key={d.slug}
                      className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-[#E8F0ED] ring-4 ring-white shadow-md"
                    >
                      <Image
                        src={d.photo}
                        alt={d.name}
                        fill
                        sizes="144px"
                        quality={90}
                        priority
                        className="object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <main className="section-padding py-14 bg-white border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-sm font-bold uppercase tracking-wider text-[#2A6763]">Our Team</span>
              <h2 className="h2 mt-2 mb-3">Our Licensed Mental Health Professionals</h2>
              <p className="body-normal text-[#52616A]">
                Below are our licensed professionals who may conduct evaluations on our platform. Provider
                availability may vary by state and scheduling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {doctors.map((d) => (
                <article key={d.slug} className="card-theme p-0 overflow-hidden flex flex-col">
                  <div className="relative aspect-square bg-[#E8F0ED]">
                    <Image
                      src={d.photo}
                      alt={d.name}
                      fill
                      sizes="(min-width: 768px) 330px, 100vw"
                      quality={90}
                      className="object-cover object-top"
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-sm font-semibold text-[#27654F] bg-white/95 px-2.5 py-0.5 rounded-full border border-[#D5DFDB]">
                      <CheckCircle2 className="w-4 h-4" /> Verified
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="h4">{d.cardName}</h3>
                    <p className="text-base font-semibold text-[#2A6763] mb-3">{d.title}</p>
                    <p className="body-normal text-[#52616A] mb-4">{d.hubBio}</p>

                    <dl className="space-y-2 text-base mb-6 mt-auto">
                      <div className="flex gap-2">
                        <Video className="w-4 h-4 text-[#347C78] shrink-0 mt-1" />
                        <div>
                          <dt className="text-sm font-semibold text-[#19354A]">Evaluation Method</dt>
                          <dd className="text-[#52616A]">{d.evaluationMethod}</dd>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Stethoscope className="w-4 h-4 text-[#347C78] shrink-0 mt-1" />
                        <div>
                          <dt className="text-sm font-semibold text-[#19354A]">Focus Areas</dt>
                          <dd className="text-[#52616A]">{d.focusAreasSummary}</dd>
                        </div>
                      </div>
                    </dl>

                    <div className="flex flex-col gap-2">
                      <a href={siteConfig.surveyUrl} className="btn-primary w-full">
                        Book Appointment →
                      </a>
                      <Link href={`/about-our-therapists/${d.slug}/`} className="btn-secondary w-full">
                        View Profile →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>

        {/* The Process */}
        <section className="section-padding py-14 bg-ivory">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-sm font-bold uppercase tracking-wider text-[#2A6763]">The Process</span>
              <h2 className="h2 mt-2 mb-3">How You&apos;re Matched With a Provider</h2>
              <p className="body-normal text-[#52616A]">
                When you begin an evaluation, you are matched with a licensed mental health professional
                authorized in your state.
              </p>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processSteps.map((step, i) => (
                <li key={step.title} className="card-theme">
                  <span className="w-10 h-10 rounded-full bg-[#19354A] text-white font-bold text-lg flex items-center justify-center mb-4">
                    {i + 1}
                  </span>
                  <h3 className="h4 mb-2">{step.title}</h3>
                  <p className="body-normal text-[#52616A]">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Transparency */}
        <section className="section-padding py-14 bg-white border-y border-line">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
            <div className="text-center mb-8">
              <span className="text-sm font-bold uppercase tracking-wider text-[#2A6763]">Transparency</span>
              <h2 className="h2 mt-2 mb-3">Important Provider Disclosure</h2>
              <p className="body-normal text-[#52616A]">How our network of independent professionals operates.</p>
            </div>
            <ul className="card-theme space-y-3">
              {disclosures.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-[#24333B]">
                  <Info className="w-5 h-5 text-[#347C78] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Learn More */}
        <section className="section-padding py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 text-center">
            <h2 className="h2 mb-3">Learn More About ESA Evaluations</h2>
            <p className="body-normal text-[#52616A] mb-6">
              Explore our related pages or begin an evaluation when you&apos;re ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={siteConfig.surveyUrl} className="btn-primary">
                Start Your Evaluation Now <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
              <Link href="/what-is-an-esa-letter/" className="btn-secondary">
                ESA Letter Online →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
