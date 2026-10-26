import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { InlineCta } from "@/components/modules/inline-cta";
import { ReviewerBox } from "@/components/modules/reviewer-box";
import { JsonLd } from "@/components/seo/json-ld";
import { therapists } from "@/data/therapists-data";
import { siteConfig } from "@/data/site-config";
import { ShieldCheck, ExternalLink, Award, FileBadge, CheckCircle2 } from "lucide-react";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/about-our-therapists/");

export const metadata: Metadata = buildMetadata(seo);

export default function AboutOurTherapistsPage() {
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      name: siteConfig.name,
      url: siteConfig.url,
      member: therapists.map((t) => ({
        "@type": "Person",
        name: t.name,
        jobTitle: t.title,
        description: t.bio,
        knowsAbout: ["Emotional Support Animals", "Psychological Evaluation", "Fair Housing Law"],
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
            <Image
              src="/images/colorado-apartment-peaceful-esa.webp"
              alt=""
              fill
              sizes="100vw"
              quality={80}
              className="object-cover object-center opacity-25"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F7F5F0]/95 via-[#F7F5F0]/90 to-[#F7F5F0]/85" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#347C78]/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#347C78] bg-[#E8F0ED] px-3 py-1 rounded-full border border-[#D5DFDB] mb-3 self-start">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  DORA-Licensed Healthcare Professionals
                </span>
                <h1 className="h1 mb-4">{seo.h1}</h1>
                <p className="body-large text-[#52616A] leading-relaxed">
                  Every ESA evaluation on our platform is conducted by an actively licensed Colorado psychologist, clinical social worker (LCSW), or professional counselor (LPC) registered with the Colorado Division of Professions and Occupations (DORA).
                </p>
                <div className="flex flex-wrap gap-4 mt-6 text-xs text-[#52616A]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#347C78]" />
                    Direct Clinical Assessment
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#347C78]" />
                    Colorado HB26-1045 Compliant
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#347C78]" />
                    Public DORA License Records
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col">
                <div className="rounded-2xl overflow-hidden border-2 border-[#D5DFDB] shadow-lg relative bg-[#E8F0ED] flex-1 min-h-[300px] sm:min-h-[340px]">
                  <Image
                    src="/images/colorado-therapist-consultation.webp"
                    alt="Licensed Colorado mental health professional in telehealth consultation"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    quality={85}
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg text-xs font-semibold text-[#19354A] flex items-center justify-between border border-[#D5DFDB] shadow-xs z-10">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#347C78]" />
                      Telehealth Evaluations
                    </span>
                    <span className="text-[#347C78]">State of Colorado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Provider Profiles */}
        <main className="section-padding py-10 bg-white border-y border-line">
          <div className="max-w-5xl mx-auto">
            <div className="border-b border-line pb-4 mb-10">
              <h2 className="h2">Direct Clinical Evaluators</h2>
            </div>

            <div className="space-y-10">
              {therapists.map((therapist) => (
                <div
                  key={therapist.id}
                  className="card-theme p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start justify-between"
                >
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#19354A] to-[#347C78] text-white font-serif font-bold text-2xl sm:text-3xl flex items-center justify-center shrink-0 shadow-sm ring-4 ring-[#E8F0ED]">
                      {therapist.initials}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="h3 text-navy">{therapist.name}</h3>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-success bg-pale px-2.5 py-0.5 rounded-full border border-line">
                          <CheckCircle2 className="w-3.5 h-3.5 text-success" /> Active CO License
                        </span>
                      </div>
                      <p className="text-base font-semibold text-teal mb-3">{therapist.title}</p>
                      <p className="body-normal text-muted mb-4 max-w-2xl">{therapist.bio}</p>

                      <div className="flex flex-wrap gap-4 text-xs text-muted">
                        <span className="bg-softBlue px-3 py-1 rounded-md border border-line font-mono">
                          License: <strong>{therapist.licenseNumber}</strong>
                        </span>
                        <span className="bg-softBlue px-3 py-1 rounded-md border border-line">
                          Board: <strong>{therapist.licenseType}</strong>
                        </span>
                        <span className="bg-softBlue px-3 py-1 rounded-md border border-line">
                          Experience: <strong>{therapist.yearsExperience}+ Years</strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-line">
                    <a
                      href={therapist.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center justify-center gap-1.5 w-full md:w-auto"
                    >
                      <span>Verify on DORA</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* How Providers Are Vetted & Clinical Review Standards */}
        <section className="section-padding py-16 bg-ivory">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="card-theme">
              <div className="w-12 h-12 rounded-xl bg-softBlue text-teal flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="h3 mb-3">How Our Providers Are Vetted</h3>
              <p className="body-normal text-muted mb-4">
                Before joining our clinical network, every mental health professional undergoes strict primary-source credential verification:
              </p>
              <ul className="text-base space-y-2 text-ink">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span>Direct license verification via the Colorado Department of Regulatory Agencies (DORA).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span>Clear disciplinary standing with zero adverse board actions or sanctions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span>Demonstrated clinical focus on anxiety, depression, trauma, and emotional animal support.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span>Mandatory adherence to Colorado telehealth standards and HIPAA security.</span>
                </li>
              </ul>
            </div>

            <div className="card-theme">
              <div className="w-12 h-12 rounded-xl bg-softBlue text-teal flex items-center justify-center mb-4">
                <FileBadge className="w-6 h-6" />
              </div>
              <h3 className="h3 mb-3">Clinical Review Standards</h3>
              <p className="body-normal text-muted mb-4">
                Our clinicians operate under the highest ethical standards of the American Psychological Association (APA) and National Association of Social Workers (NASW):
              </p>
              <ul className="text-base space-y-2 text-ink">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span>Thorough assessment of functional impairment in major life activities within the residence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span>Validation of nexus between patient mental health disability and animal companionship.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span>Zero auto-approvals or computer-generated letters; every document is individually signed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span>Readiness to provide landlord telephone or written verification when requested.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* M11 Reviewer Box */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ReviewerBox />
        </div>

        {/* M4 Inline CTA */}
        <div className="section-padding pb-16">
          <div className="max-w-4xl mx-auto">
            <InlineCta
              title="Connect with a Verified Colorado Clinician"
              description="Get your housing rights protected today through a secure clinical telehealth assessment."
            />
          </div>
        </div>
      </div>
    </>
  );
}
