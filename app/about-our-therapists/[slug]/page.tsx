import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { doctors, getDoctor } from "@/data/therapists-data";
import { siteConfig } from "@/data/site-config";
import { getPageSeo, pageMetadata } from "@/lib/seo";
import { CheckCircle2, Quote, ArrowRight } from "lucide-react";

interface DoctorProfileProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: DoctorProfileProps): Promise<Metadata> {
  const { slug } = await params;
  if (!getDoctor(slug)) return {};
  return pageMetadata(`/about-our-therapists/${slug}/`);
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

// params is URL data, so it's read inside Suspense to keep the App Shell URL-independent
export default function DoctorProfilePage({ params }: DoctorProfileProps) {
  return (
    <Suspense fallback={null}>
      <DoctorProfile params={params} />
    </Suspense>
  );
}

async function DoctorProfile({ params }: DoctorProfileProps) {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) notFound();

  const seo = getPageSeo(`/about-our-therapists/${doctor.slug}/`);
  const pageUrl = `${siteConfig.url}/about-our-therapists/${doctor.slug}/`;

  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: pageUrl,
      name: seo.title,
      mainEntity: {
        "@type": "Person",
        name: doctor.name,
        jobTitle: doctor.title,
        description: doctor.aboutParagraphs[0],
        image: `${siteConfig.url}${doctor.photo}`,
        url: pageUrl,
        knowsAbout: doctor.focusAreas,
        ...(doctor.linkedin && { sameAs: [doctor.linkedin] }),
        worksFor: { "@type": "MedicalOrganization", name: siteConfig.name, url: siteConfig.url },
      },
    },
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />
      <div className="bg-ivory min-h-screen">
        <Breadcrumbs
          items={[
            { label: "About Our Therapists", href: "/about-our-therapists/" },
            { label: doctor.cardName },
          ]}
        />

        {/* Profile Hero */}
        <section className="relative overflow-hidden section-padding pt-10 pb-16 bg-[#F7F5F0] border-b border-[#D5DFDB]">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#347C78]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <span className="text-sm font-bold uppercase tracking-wider text-[#2A6763]">{doctor.profileEyebrow}</span>
                <h1 className="h1 mt-2 mb-2">{seo.h1}</h1>
                <p className="text-lg font-semibold text-[#2A6763] mb-3">{doctor.profileTitle ?? doctor.title}</p>
                <p className="body-large text-[#52616A] leading-relaxed">{doctor.tagline}</p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {doctor.stats.map((stat) => (
                    <div key={stat.label} className="bg-white border border-[#D5DFDB] rounded-xl px-4 py-2.5">
                      <span className="block font-serif text-2xl text-[#19354A] leading-tight">{stat.value}</span>
                      <span className="block text-sm text-[#52616A]">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <a href={siteConfig.surveyUrl} className="btn-primary">
                    {doctor.ctaLabel} <ArrowRight className="w-4 h-4 ml-1.5" />
                  </a>
                  {doctor.linkedin && (
                    <a
                      href={doctor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary gap-2"
                    >
                      <LinkedInIcon className="w-4 h-4" /> LinkedIn
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden bg-[#E8F0ED] border-2 border-[#D5DFDB] shadow-lg">
                  <Image
                    src={doctor.photo}
                    alt={doctor.name}
                    fill
                    sizes="(min-width: 1024px) 384px, 90vw"
                    quality={90}
                    priority
                    fetchPriority="high"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 px-3 py-1.5 rounded-lg text-sm font-semibold text-[#19354A] flex items-center justify-between border border-[#D5DFDB]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#27654F]" /> Verified
                    </span>
                    <span className="text-[#2A6763]">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights strip */}
        <section className="bg-[#19354A]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {doctor.highlights.map((h) => (
              <div key={h.label}>
                <span className="block font-serif text-2xl text-white">{h.value}</span>
                <span className="block text-base text-[#D5DFDB]">{h.label}</span>
              </div>
            ))}
          </div>
        </section>

        <main>
          {/* About */}
          <section className="section-padding py-14 bg-white border-b border-line">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
              <span className="text-sm font-bold uppercase tracking-wider text-[#2A6763]">{doctor.aboutEyebrow}</span>
              <h2 className="h2 mt-2 mb-3">{doctor.aboutHeading}</h2>
              <p className="body-large text-[#52616A] mb-6">{doctor.aboutIntro}</p>
              <div className="space-y-4">
                {doctor.aboutParagraphs.map((p) => (
                  <p key={p.slice(0, 32)} className="body-normal">{p}</p>
                ))}
              </div>

              <blockquote className="mt-8 rounded-2xl bg-[#E8F0ED] border border-[#D5DFDB] p-6 sm:p-8">
                <Quote className="w-8 h-8 text-[#347C78] mb-3" aria-hidden="true" />
                <p className="text-lg font-bold text-[#19354A] mb-2">{doctor.philosophyLabel}</p>
                <p className="body-normal text-[#24333B]">{doctor.philosophy}</p>
              </blockquote>
            </div>
          </section>

          {/* Areas of Focus */}
          <section className="section-padding py-14 bg-ivory">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-sm font-bold uppercase tracking-wider text-[#2A6763]">{doctor.focusEyebrow}</span>
                <h2 className="h2 mt-2 mb-3">{doctor.focusHeading}</h2>
                <p className="body-normal text-[#52616A]">{doctor.focusIntro}</p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {doctor.focusAreas.map((area) => (
                  <li key={area} className="card-theme flex items-center gap-3 py-5">
                    <CheckCircle2 className="w-5 h-5 text-[#347C78] shrink-0" />
                    <span className="text-base font-semibold text-[#19354A]">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Closing CTA */}
          <section className="section-padding py-14 bg-white border-t border-line">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-[#2A6763]">{doctor.closingEyebrow}</span>
              <h2 className="h2 mt-2 mb-3">{doctor.closingHeading}</h2>
              <p className="body-normal text-[#52616A] mb-6">{doctor.closingText}</p>
              <a href={siteConfig.surveyUrl} className="btn-primary">
                {doctor.closingCtaLabel} <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
