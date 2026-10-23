import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/data/site-config";
import { Lock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "HIPAA Notice of Privacy Practices | ESA Letter Colorado",
  description:
    "How protected health information is handled, stored, and disclosed when you complete an ESA evaluation with ESA Letter Colorado.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/hipaa-notice/`,
  },
};

export default function HipaaNoticePage() {
  return (
    <div className="bg-ivory min-h-screen">
      <Breadcrumbs items={[{ label: "HIPAA Notice" }]} />

      <main className="section-padding pt-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="trust-chip mb-3">Healthcare Compliance</span>
            <h1 className="h1 mb-3">HIPAA Notice of Privacy Practices</h1>
            <p className="body-small text-muted">Last Updated: <strong>October 18, 2026</strong></p>
          </div>

          <div className="card-theme p-6 sm:p-10 space-y-8 body-normal text-ink">
            <div className="p-5 rounded-xl bg-pale border border-line flex items-center gap-3">
              <Lock className="w-6 h-6 text-teal shrink-0" />
              <p className="text-xs text-muted leading-relaxed">
                This notice describes how medical and mental health information about you may be used and disclosed and how you can get access to this information. Please review it carefully.
              </p>
            </div>

            <section>
              <h2 className="h3 mb-3 text-navy">1. Our Legal Duty</h2>
              <p className="leading-relaxed">
                ESA Letter Colorado is required by the federal Health Insurance Portability and Accountability Act (HIPAA) to maintain the privacy of your Protected Health Information (PHI), provide this detailed notice of our legal duties and privacy practices, and adhere to the terms currently in effect.
              </p>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">2. Uses &amp; Disclosures for Treatment</h2>
              <p className="leading-relaxed">
                We use and disclose your PHI to facilitate your telehealth assessment by matching you with an appropriately credentialed, state-licensed Colorado therapist. Your intake details are only visible to the clinical director and your assigned evaluating practitioner.
              </p>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">3. Third-Party Disclosures &amp; Landlord Verification</h2>
              <p className="leading-relaxed">
                When housing providers or landlords contact us or use our verification tool, we only disclose minimal confirmation data (provider active licensure, document ID, and date of issuance) with your explicit authorization. <strong>We never disclose your psychiatric diagnosis, specific symptoms, or therapy questionnaires to landlords.</strong>
              </p>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">4. Security Measures</h2>
              <p className="leading-relaxed">
                All digital communications utilize end-to-end TLS 1.3 encryption. Storage of intake data meets NIST and HIPAA security guidelines with strict multi-factor role-based access control. No PHI is ever passed through unencrypted URL parameters or shared with marketing analytics.
              </p>
            </section>

            <section className="border-t border-line pt-6">
              <h2 className="h4 mb-2 text-navy">HIPAA Compliance Contact</h2>
              <p className="text-sm text-muted">
                Questions or concerns regarding our privacy practices should be directed to our Privacy Officer at <a href={`mailto:${siteConfig.email}`} className="text-amber font-semibold">{siteConfig.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
