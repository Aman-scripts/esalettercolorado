import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { VerificationTool } from "@/components/modules/verification-tool";
import { FaqAccordion } from "@/components/modules/faq-accordion";
import { RelatedPages } from "@/components/modules/related-pages";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site-config";
import { ShieldCheck, Lock, FileText, CheckCircle2 } from "lucide-react";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/verify-esa-letter/");

export const metadata: Metadata = buildMetadata(seo);

const landlordFaqs = [
  {
    q: "What information does this tool verify?",
    a: "This tool verifies whether the provided letter ID matches an active, authentic clinical document issued by a Colorado-licensed provider in our network. It confirms the provider's name, active state license number, issuance date, and document status without disclosing private medical diagnoses.",
  },
  {
    q: "Can a landlord request the tenant's full medical records?",
    a: "No. Under HUD Fair Housing Act guidance and federal HIPAA privacy rules, housing providers cannot require tenants to disclose medical charts, therapist case notes, or specific diagnostic classifications.",
  },
  {
    q: "How can I verify the therapist's Colorado license independently?",
    a: "You can verify any Colorado healthcare provider license directly on the official Colorado Department of Regulatory Agencies (DORA) public portal at https://dpo.colorado.gov/ using the clinician's license number listed on the letter.",
  },
  {
    q: "Does this letter comply with Colorado HB26-1045 and C.R.S. 24-34-502?",
    a: "Yes. All letters issued through our network are written and signed by licensed practitioners in good standing who maintain a genuine clinical relationship with the client in accordance with Colorado statutory standards.",
  },
];

export default function VerifyEsaLetterPage() {
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Landlord ESA Letter Verification Portal",
      description: "Secure verification portal for housing providers to validate Colorado emotional support animal letters.",
      url: `${siteConfig.url}/verify-esa-letter/`,
    },
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />
      <div className="bg-ivory min-h-screen">
        <Breadcrumbs items={[{ label: "Verify an ESA Letter" }]} />

        {/* Hero Section */}
        <section className="px-4 pt-6 lg:pt-10 pb-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="trust-chip mb-3">Housing Provider Portal</span>
            <h1 className="h1 mb-4">{seo.h1}</h1>
            <p className="body-large text-muted max-w-2xl mx-auto">
              Housing providers and property managers can verify the authenticity of an official ESA accommodation letter issued through ESA Letter Colorado.
            </p>
          </div>
        </section>

        {/* Verification Form Section */}
        <main className="px-4 pb-10 lg:pb-14">
          <div className="max-w-4xl mx-auto">
            <VerificationTool />
          </div>
        </main>

        {/* What Verification Does and Does Not Confirm (Spec Section 8 #70) */}
        <section className="section-padding py-16 bg-white border-y border-line">
          <div className="max-w-5xl mx-auto">
            <h2 className="h2 text-center mb-12">Verification Scope &amp; Legal Standards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-theme bg-softBlue/50 border-teal/20">
                <div className="flex items-center gap-2 mb-4 text-teal">
                  <CheckCircle2 className="w-6 h-6" />
                  <h3 className="h4 text-navy">What Verification Confirms</h3>
                </div>
                <ul className="text-base space-y-3 text-ink">
                  <li className="flex items-start gap-2">
                    <span className="text-teal font-bold">✓</span>
                    <span>The letter was authored by a state-licensed healthcare provider in Colorado.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal font-bold">✓</span>
                    <span>The provider holds an active, unencumbered license registered with DORA.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal font-bold">✓</span>
                    <span>The document ID corresponds with an actual evaluation in our secure system.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal font-bold">✓</span>
                    <span>The document has not been revoked or tampered with.</span>
                  </li>
                </ul>
              </div>

              <div className="card-theme bg-ivory">
                <div className="flex items-center gap-2 mb-4 text-amber">
                  <Lock className="w-6 h-6" />
                  <h3 className="h4 text-navy">What Verification Does NOT Disclose</h3>
                </div>
                <ul className="text-base space-y-3 text-ink">
                  <li className="flex items-start gap-2">
                    <span className="text-muted font-bold">✗</span>
                    <span>Protected health information (PHI) or private psychological diagnoses.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted font-bold">✗</span>
                    <span>Therapist clinical session notes or private evaluation questionnaires.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted font-bold">✗</span>
                    <span>Personal identification numbers or financial details of the resident.</span>
                  </li>
                </ul>
                <p className="text-xs text-muted mt-4 border-t border-line pt-3">
                  This privacy standard strictly adheres to the federal Health Insurance Portability and Accountability Act (HIPAA) and HUD Fair Housing regulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Landlord FAQ */}
        <section className="section-padding py-16 bg-ivory">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2 text-center mb-10">Landlord Verification Questions</h2>
            <FaqAccordion items={landlordFaqs} />
          </div>
        </section>

        {/* Related Pages */}
        <div className="section-padding py-10 bg-white border-t border-line">
          <div className="max-w-4xl mx-auto">
            <RelatedPages
              title="Helpful Resources for Landlords &amp; Tenants"
              pages={[
                {
                  title: "Colorado ESA Laws & Housing Rights",
                  href: "/rights/",
                  description: "Fair Housing Act standards, landlord exemptions, and accommodation guidelines.",
                },
                {
                  title: "Colorado ESA Letter Requirements",
                  href: "/requirements/",
                  description: "Full checklist of elements required on legitimate Colorado documentation.",
                },
                {
                  title: "Signs of a Fake ESA Letter",
                  href: "/blog/signs-of-a-fake-esa-letter/",
                  description: "How to identify illegitimate certificates, online registries, and instant downloads.",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
