import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Medical & Legal Disclaimer | ESA Letter Colorado",
  description:
    "Important disclaimer: ESA Letter Colorado content is informational and is not medical or legal advice. Read the full notice here.",
  alternates: {
    canonical: `${siteConfig.url}/disclaimer/`,
  },
  openGraph: {
    title: "Medical & Legal Disclaimer | ESA Letter Colorado",
    description:
      "Important disclaimer: ESA Letter Colorado content is informational and is not medical or legal advice. Read the full notice here.",
    url: `${siteConfig.url}/disclaimer/`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="bg-ivory min-h-screen">
      <Breadcrumbs items={[{ label: "Disclaimer" }]} />

      <main className="section-padding pt-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="trust-chip mb-3">Notice</span>
            <h1 className="h1 mb-3">Medical &amp; Legal Disclaimer</h1>
            <p className="body-small text-muted">Last Updated: <strong>October 18, 2026</strong></p>
          </div>

          <div className="card-theme p-6 sm:p-10 space-y-8 body-normal text-ink">
            <section>
              <h2 className="h3 mb-3 text-navy">1. Not Medical or Psychiatric Advice</h2>
              <p className="leading-relaxed">
                The content on <strong>esalettercolorado.com</strong>—including text, graphics, guides, blog posts, and FAQs—is provided solely for educational and informational purposes. It does not constitute medical advice, psychological diagnosis, or clinical treatment plans. Engaging with this website does not form a patient-therapist relationship until you complete an official clinical intake and are evaluated by an assigned licensed healthcare provider.
              </p>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">2. Emergency &amp; Crisis Services</h2>
              <p className="leading-relaxed bg-pale p-4 rounded-xl border border-line">
                <strong>If you are in immediate crisis or experiencing thoughts of self-harm, please do not use this website.</strong> Call or text the National Suicide and Crisis Lifeline at <strong>988</strong>, or call <strong>911</strong> immediately. Colorado residents can also access 24/7 support through Colorado Crisis Services by calling <strong>1-844-493-8255</strong> or texting "TALK" to 38255.
              </p>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">3. Not Legal Counsel</h2>
              <p className="leading-relaxed">
                While our articles reference statutes such as the federal Fair Housing Act (FHA), the Americans with Disabilities Act (ADA), Colorado HB26-1045, and C.R.S. 24-34-502, ESA Letter Colorado is not a law firm and does not provide legal representation or legal advice. Renters facing landlord disputes or eviction actions should consult a qualified Colorado tenant rights attorney or contact the Colorado Civil Rights Division (CCRD).
              </p>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">4. No Animal Registration or Certification</h2>
              <p className="leading-relaxed">
                Neither federal nor Colorado state law recognizes or requires "official ESA certificates," "registration numbers," "ID tags," or "working vests." Our service connects you with a licensed mental health professional who evaluates your need and provides an official letter in accordance with HUD guidelines.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
