import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/data/site-config";
import Link from "next/link";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/refund-policy/");

export const metadata: Metadata = buildMetadata(seo);

export default function RefundPolicyPage() {
  return (
    <div className="bg-ivory min-h-screen">
      <Breadcrumbs items={[{ label: "Refund Policy" }]} />

      <main className="section-padding pt-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="trust-chip mb-3">Guarantee &amp; Satisfaction</span>
            <h1 className="h1 mb-3">{seo.h1}</h1>
            <p className="body-small text-muted">Last Updated: <strong>October 18, 2026</strong></p>
          </div>

          <div className="card-theme p-6 sm:p-10 space-y-8 body-normal text-ink">
            {/* Guarantee Highlight Box */}
            <div className="p-6 rounded-2xl bg-softBlue border border-line flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-teal shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif font-bold text-navy mb-2">100% Clinical Evaluation Guarantee</h2>
                <p className="text-sm text-ink leading-relaxed">
                  We believe no Colorado resident should pay for an ESA assessment if their evaluating mental health professional determines an emotional support animal is not clinically suitable.
                </p>
              </div>
            </div>

            <section>
              <h2 className="h3 mb-3 text-navy">1. When You Are Eligible for a Full Refund</h2>
              <p className="leading-relaxed mb-3">You will receive a prompt 100% refund of your evaluation fee if:</p>
              <ul className="space-y-2 text-sm text-ink">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span>The evaluating Colorado-licensed clinician determines that you do not qualify for an ESA letter based on clinical intake criteria.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span>You cancel your request in writing prior to clinician review.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">2. When Refunds Do Not Apply</h2>
              <p className="leading-relaxed mb-3">Refunds cannot be issued once:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted">
                <li>Your assigned licensed clinician has completed the clinical review and officially issued and signed your ESA letter.</li>
                <li>You provided fraudulent, deceptive, or misrepresented medical or housing information during the evaluation.</li>
                <li>A landlord rejection occurs due to behavioral damage or direct threats posed by the animal, or under statutory landlord exemptions (e.g. owner-occupied buildings with 4 or fewer units).</li>
              </ul>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">3. How to Request a Refund</h2>
              <p className="leading-relaxed">
                To request a refund, simply send an email to <a href={`mailto:${siteConfig.email}`} className="text-amber font-semibold">{siteConfig.email}</a> with your full name, order reference number, and date of application. Refunds are processed back to the original payment method within 3–5 business days.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
