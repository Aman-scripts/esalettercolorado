import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/data/site-config";
import Link from "next/link";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/terms/");

export const metadata: Metadata = buildMetadata(seo);

export default function TermsPage() {
  return (
    <div className="bg-ivory min-h-screen">
      <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />

      <main className="section-padding pt-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="trust-chip mb-3">Service Terms</span>
            <h1 className="h1 mb-3">{seo.h1}</h1>
            <p className="body-small text-muted">
              Effective Date: <strong>October 1, 2026</strong> | Last Updated: <strong>October 18, 2026</strong>
            </p>
          </div>

          <div className="card-theme p-6 sm:p-10 space-y-8 body-normal text-ink">
            <section>
              <h2 className="h3 mb-3 text-navy">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing <strong>esalettercolorado.com</strong> or using our clinical telehealth coordination services, you agree to comply with and be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">2. Description of Services</h2>
              <p className="leading-relaxed">
                ESA Letter Colorado provides a technology platform connecting Colorado residents with independent, state-licensed healthcare providers (including psychologists, licensed clinical social workers, and licensed professional counselors). We do not directly practice medicine or psychology; all clinical determinations, diagnoses, and documentation approvals are made solely by independent licensed providers.
              </p>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">3. Eligibility &amp; Clinical Discretion</h2>
              <p className="leading-relaxed">
                Submission of an assessment form does not guarantee issuance of an ESA letter. Letters are issued only when an evaluating Colorado clinician determines that an emotional support animal is clinically indicated under Fair Housing Act standards. If a provider determines you do not qualify, you are eligible for our full refund under our <Link href="/refund-policy/" className="text-amber underline">Refund Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">4. Truthful Representation &amp; Colorado Law</h2>
              <p className="leading-relaxed">
                You agree to provide true, accurate, and complete information during your intake. Misrepresenting an animal as an assistance animal or fabricating disability documentation is a violation of Colorado state law under C.R.S. 18-13-107.3 and federal housing statutes.
              </p>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">5. Fees and Payment</h2>
              <p className="leading-relaxed">
                The fee for a standard single-animal evaluation and housing letter is $149. Annual renewals are $99. Fees cover clinical review time and letter issuance. There are no recurring subscription fees.
              </p>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">6. Limitation of Liability</h2>
              <p className="leading-relaxed">
                While our letters strictly adhere to Colorado and federal Fair Housing Act standards, individual housing providers, HOAs, or court decisions may review documentation under specific statutory exemptions. We are not liable for legal disputes between landlords and tenants.
              </p>
            </section>

            <section className="border-t border-line pt-6">
              <h2 className="h4 mb-2 text-navy">Questions?</h2>
              <p className="text-base text-muted">
                Contact our legal department at <a href={`mailto:${siteConfig.email}`} className="text-amber font-semibold">{siteConfig.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
