import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrustBar } from "@/components/modules/trust-bar";
import { ProcessSteps } from "@/components/modules/process-steps";
import { FaqAccordion } from "@/components/modules/faq-accordion";
import { RelatedPages } from "@/components/modules/related-pages";
import { ReviewerBox } from "@/components/modules/reviewer-box";
import { AssessmentForm } from "@/components/modules/assessment-form";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site-config";
import { Clock, ShieldCheck, FileCheck, CheckCircle2, Sparkles, Video, Lock } from "lucide-react";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/how-it-works/");

export const metadata: Metadata = buildMetadata(seo);

const processFaqs = [
  {
    q: "How fast do I receive my ESA letter?",
    a: "Standard clinical evaluation and letter generation takes 24–48 hours once your intake is completed. If your clinician approves the accommodation, your official letter is issued immediately as a secure, signed PDF.",
  },
  {
    q: "Is an in-person appointment required in Colorado?",
    a: "No. Colorado DORA telehealth regulations allow licensed mental health professionals (psychologists, LCSWs, LPCs) to conduct clinical assessments and issue assistance animal documentation remotely via compliant telehealth protocols.",
  },
  {
    q: "What happens if the therapist determines I do not qualify?",
    a: "We offer a 100% money-back guarantee. If our licensed therapist determines an ESA does not fit your clinical criteria or you do not qualify under Fair Housing guidelines, your evaluation fee is fully refunded.",
  },
  {
    q: "Will my landlord accept this letter?",
    a: "Yes. Every letter is issued on official clinical letterhead by an actively licensed Colorado professional containing their state license number, DORA registration details, contact phone, and specific signature, strictly complying with Colorado HB26-1045 and HUD FHA rules.",
  },
];

export default function HowItWorksPage() {
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Get an Emotional Support Animal Letter in Colorado",
      description:
        "Step-by-step clinical evaluation process to obtain a valid Colorado ESA housing letter from a licensed mental health professional.",
      step: [
        {
          "@type": "HowToStep",
          name: "Complete Free Pre-Screening",
          text: "Answer brief questions regarding your housing situation, mental health symptoms, and companion animal.",
          url: `${siteConfig.url}/how-it-works/#get-started`,
        },
        {
          "@type": "HowToStep",
          name: "Licensed Therapist Clinical Review",
          text: "A Colorado-licensed mental health professional reviews your intake information under C.R.S. 24-34-502 standards.",
          url: `${siteConfig.url}/how-it-works/#get-started`,
        },
        {
          "@type": "HowToStep",
          name: "Receive Official Signed Letter",
          text: "Download your official Colorado-compliant ESA letter with full clinician credentials and digital verification ID.",
          url: `${siteConfig.url}/how-it-works/#get-started`,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />
      <div className="bg-ivory min-h-screen">
        <Breadcrumbs items={[{ label: "How It Works" }]} />

        {/* M1 Hero (compact) */}
        <section className="relative overflow-hidden section-padding pt-10 pb-16 bg-[#F7F5F0] border-b border-[#D5DFDB]">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <Image
              src="/images/colorado-intake-telehealth.webp"
              alt=""
              fill
              sizes="(max-width: 768px) 200px, 1920px"
              quality={50}
              fetchPriority="high"
              className="object-cover object-center opacity-25"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F7F5F0]/95 via-[#F7F5F0]/90 to-[#F7F5F0]/85 backdrop-blur-[1px]" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#347C78]/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="trust-chip mb-3">Transparent 3-Step Process</span>
            <h1 className="h1 mb-4">{seo.h1}</h1>
            <p className="body-large text-muted max-w-2xl mx-auto">
              Follow our compliant, HIPAA-secure clinical workflow to connect with a licensed Colorado mental health provider and secure your housing rights.
            </p>
          </div>
        </section>

        {/* M3 3-Step Process */}
        <section className="section-padding py-10 bg-white border-y border-line">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="h2 mb-3">Simple, Compliant &amp; Confidential</h2>
              <p className="body-normal text-muted">
                No waiting weeks for office appointments. Get evaluated by a Colorado-licensed therapist from the comfort of home.
              </p>
            </div>
            <ProcessSteps />
          </div>
        </section>

        {/* Visual Feature: At-Home Telehealth Consultation */}
        <section className="section-padding py-16 bg-[#F7F5F0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              <div className="lg:col-span-6 flex flex-col relative">
                <div className="rounded-3xl overflow-hidden border-2 border-[#D5DFDB] shadow-xl bg-white relative flex-1 min-h-[360px] sm:min-h-[420px]">
                  <Image
                    src="/images/colorado-intake-telehealth.webp"
                    alt="Colorado renter completing a confidential telehealth ESA evaluation from their living room"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-xl text-xs font-semibold text-[#19354A] flex items-center justify-between border border-[#D5DFDB] shadow-sm z-10">
                    <span className="flex items-center gap-1.5 text-[#347C78]">
                      <Video className="w-4 h-4" />
                      100% Remote Telehealth Protocol
                    </span>
                    <span className="text-[#52616A] font-mono">DORA Compliant</span>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-3 -right-2 sm:-right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-[#D5DFDB] shadow-md flex items-center gap-2 z-20">
                  <Lock className="w-4 h-4 text-[#347C78]" />
                  <span className="text-[11px] font-bold text-[#19354A]">HIPAA-Compliant &amp; Confidential</span>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-center">
                <span className="text-xs font-bold text-[#347C78] bg-[#E8F0ED] px-3 py-1 rounded-full border border-[#D5DFDB] uppercase tracking-wider inline-block mb-3 self-start">
                  Patient Experience
                </span>
                <h2 className="text-h2 text-[#19354A]">
                  Evaluated from the Comfort of Your Home
                </h2>
                <p className="text-body-large text-[#52616A] mt-3 leading-relaxed">
                  You never have to travel across town, sit in sterile clinical waiting rooms, or stress your companion animal with an office visit. Under Colorado telehealth laws, our licensed clinicians conduct your evaluation via secure, private digital intake and remote consultation.
                </p>

                <div className="text-base space-y-3 mt-6 text-[#24333B]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#347C78] shrink-0 mt-0.5" />
                    <span><strong>Bona Fide Patient-Provider Nexus:</strong> We establish a legitimate clinical relationship recognized under Colorado HB26-1045.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#347C78] shrink-0 mt-0.5" />
                    <span><strong>Licensed Colorado Clinicians Only:</strong> Your evaluator holds an active license with the Colorado Department of Regulatory Agencies (DORA).</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#347C78] shrink-0 mt-0.5" />
                    <span><strong>Full Landlord Defense Guarantee:</strong> If a property manager contacts your clinician for verification, our team verifies your letter promptly.</span>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="#get-started" className="btn-primary inline-flex items-center gap-2">
                    <span>Start Your 5-Minute Assessment ($149)</span>
                    <Sparkles className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline and What to Expect */}
        <section className="section-padding py-16 bg-ivory">
          <div className="max-w-5xl mx-auto">
            <h2 className="h2 text-center mb-12">Timeline &amp; What to Expect</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-theme">
                <div className="w-12 h-12 rounded-xl bg-softBlue text-teal flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="h4 mb-2">Day 1: Intake &amp; Screening</h3>
                <p className="body-small text-muted mb-3">
                  Takes 5–10 minutes online. You share details on how your anxiety, depression, PTSD, or other symptoms affect your daily living.
                </p>
                <div className="text-xs font-semibold text-teal flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> 256-Bit Encrypted
                </div>
              </div>

              <div className="card-theme">
                <div className="w-12 h-12 rounded-xl bg-softBlue text-teal flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="h4 mb-2">Day 1–2: Clinical Evaluation</h3>
                <p className="body-small text-muted mb-3">
                  A Colorado-licensed provider reviews your medical history, clinical indicators, and verifies the therapeutic connection with your animal.
                </p>
                <div className="text-xs font-semibold text-teal flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Active DORA License
                </div>
              </div>

              <div className="card-theme">
                <div className="w-12 h-12 rounded-xl bg-softBlue text-teal flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="h4 mb-2">Day 2: Letter Delivery</h3>
                <p className="body-small text-muted mb-3">
                  Once approved, download your official Colorado letter containing therapist license details, verification ID, and submit it directly to your landlord.
                </p>
                <div className="text-xs font-semibold text-teal flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> 100% Money-Back Guarantee
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* M2 Trust Bar */}
        <TrustBar />

        {/* ID #get-started: Assessment / intake form (Spec Section 8 #66) */}
        <section id="get-started" className="section-padding py-20 bg-softBlue scroll-mt-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="trust-chip mb-3">Confidential Assessment</span>
              <h2 className="h2 mb-3">Begin Your Colorado ESA Evaluation</h2>
              <p className="body-normal text-muted max-w-xl mx-auto">
                Complete this secure questionnaire. No payment is charged until you review your submission options. 100% refund if not approved.
              </p>
            </div>

            {/* In-page Assessment Form with confirmation state & zero PHI in URL */}
            <AssessmentForm />
          </div>
        </section>

        {/* M5 FAQ */}
        <section className="section-padding py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2 text-center mb-10">Frequently Asked Process Questions</h2>
            <FaqAccordion items={processFaqs} />
          </div>
        </section>

        {/* M8 Related pages */}
        <div className="py-12 bg-ivory">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <RelatedPages
              title="Essential Colorado ESA Guides"
              pages={[
                {
                  title: "Colorado ESA Letter Requirements",
                  href: "/requirements/",
                  description: "Full checklist of mandatory elements Colorado landlords look for on valid letters.",
                },
                {
                  title: "ESA Letter Cost in Colorado",
                  href: "/cost/",
                  description: "Transparent pricing breakdown, renewal rates, and why cheap registries fail.",
                },
                {
                  title: "Colorado ESA Laws & Housing Rights",
                  href: "/rights/",
                  description: "Complete guide to Fair Housing Act rights, HB26-1045, and deposit bans.",
                },
              ]}
            />
          </div>
        </div>

        {/* M11 Reviewer Box */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <ReviewerBox />
        </div>

        {/* Final CTA band */}
        <section className="p-12 bg-navy text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif mb-4 text-white">Ready to Protect Your Pet in Colorado Housing?</h2>
            <p className="text-base text-line max-w-xl mx-auto mb-8">
              Join thousands of Colorado tenants living peacefully with their emotional support animals.
            </p>
            <Link href="#get-started" className="btn-primary">
              Start Your Evaluation Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
