import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/data/site-config";
import Link from "next/link";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/privacy-policy/");

export const metadata: Metadata = buildMetadata(seo);

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-ivory min-h-screen">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <main className="section-padding pt-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* M1 Hero compact */}
          <div className="mb-10">
            <span className="trust-chip mb-3">Legal &amp; Data Protection</span>
            <h1 className="h1 mb-3">{seo.h1}</h1>
            <p className="body-small text-muted">
              Effective Date: <strong>October 1, 2026</strong> | Last Updated: <strong>October 18, 2026</strong>
            </p>
          </div>

          <div className="card-theme p-6 sm:p-10 space-y-8 body-normal text-ink">
            <section>
              <h2 className="h3 mb-3 text-navy">1. Introduction</h2>
              <p className="leading-relaxed">
                At ESA Letter Colorado ("we," "our," or "us"), your personal and health information is safeguarded with strict industry standards. This Privacy Policy details how we collect, process, maintain, and protect information when you visit <strong>esalettercolorado.com</strong> or complete an emotional support animal (ESA) telehealth assessment.
              </p>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">2. Information We Collect</h2>
              <p className="leading-relaxed mb-3">
                We only collect information necessary to facilitate your clinical evaluation and housing accommodation letter:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted">
                <li><strong>Contact Information:</strong> Name, Colorado residential address, phone number, and email.</li>
                <li><strong>Clinical Intake Data:</strong> Responses to our mental health pre-screening assessment, daily functioning challenges, and companion animal details.</li>
                <li><strong>Transaction Records:</strong> Billing details handled through PCI-compliant payment gateways. We never store credit card numbers on our servers.</li>
                <li><strong>Technical Data:</strong> IP address, device type, and non-identifying telemetry for site security and performance.</li>
              </ul>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">3. Protected Health Information (PHI) &amp; HIPAA</h2>
              <p className="leading-relaxed">
                All clinical screening responses and evaluation notes are treated as Protected Health Information under federal HIPAA guidelines and Colorado state privacy regulations. Data is encrypted in transit using TLS 1.3 and at rest with AES-256 encryption. We never append PHI to URLs, marketing tags, or third-party ad networks.
              </p>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">4. How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">Your information is used solely to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted">
                <li>Enable licensed Colorado mental health professionals to conduct clinical reviews.</li>
                <li>Issue compliant, verifiable housing accommodation letters under Colorado C.R.S. 24-34-502.</li>
                <li>Provide document verification when authorized by landlords or housing providers.</li>
                <li>Communicate critical account updates and annual renewal notices.</li>
              </ul>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">5. Sharing of Information</h2>
              <p className="leading-relaxed">
                We do not sell, rent, or trade your personal information. Information is only shared with our licensed Colorado clinicians and secure infrastructure partners who are bound by Business Associate Agreements (BAAs).
              </p>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">6. Your Rights</h2>
              <p className="leading-relaxed">
                Colorado residents have the right to request access to, correction of, or deletion of their non-clinical personal data under the Colorado Privacy Act (CPA).
              </p>
            </section>

            <section className="border-t border-line pt-6">
              <h2 className="h4 mb-2 text-navy">Contact Privacy Officer</h2>
              <p className="text-sm text-muted">
                For questions regarding your privacy rights, email <a href={`mailto:${siteConfig.email}`} className="text-amber font-semibold">{siteConfig.email}</a> or write to our Denver office at {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
