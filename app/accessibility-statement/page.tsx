import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/data/site-config";
import { Eye, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement | ESA Letter Colorado",
  description:
    "ESA Letter Colorado is committed to an accessible website for everyone. Read our WCAG 2.1 AA commitment and how to report issues.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/accessibility-statement/`,
  },
};

export default function AccessibilityStatementPage() {
  return (
    <div className="bg-ivory min-h-screen">
      <Breadcrumbs items={[{ label: "Accessibility Statement" }]} />

      <main className="section-padding pt-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="trust-chip mb-3">WCAG 2.1 AA Standards</span>
            <h1 className="h1 mb-3">Accessibility Statement</h1>
            <p className="body-small text-muted">Last Updated: <strong>October 18, 2026</strong></p>
          </div>

          <div className="card-theme p-6 sm:p-10 space-y-8 body-normal text-ink">
            <div className="p-5 rounded-xl bg-pale border border-line flex items-center gap-3">
              <Eye className="w-6 h-6 text-teal shrink-0" />
              <p className="text-xs text-muted leading-relaxed">
                ESA Letter Colorado is dedicated to ensuring digital accessibility for people of all abilities. We continually improve the user experience for everyone and apply relevant accessibility standards.
              </p>
            </div>

            <section>
              <h2 className="h3 mb-3 text-navy">1. Conformance Status</h2>
              <p className="leading-relaxed">
                We target full conformance with the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>. These guidelines define how to make web content more accessible to people with disabilities, including users relying on screen readers, keyboard-only navigation, and contrast-enhancing tools.
              </p>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">2. Accessibility Measures We Implement</h2>
              <ul className="space-y-2 text-sm text-ink">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span><strong>High Contrast Typography:</strong> Text meets or exceeds 4.5:1 contrast ratios against backgrounds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span><strong>Keyboard Navigability:</strong> All forms, links, buttons, and interactive accordions are fully keyboard navigable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span><strong>Descriptive Text &amp; ARIA:</strong> Informative images include descriptive alt text, and semantic HTML5 heading structures are maintained.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span><strong>Responsive Design:</strong> Clean zooming up to 200% without horizontal scroll or loss of functionality.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">3. Feedback &amp; Assistance</h2>
              <p className="leading-relaxed">
                We welcome your feedback on the accessibility of ESA Letter Colorado. If you encounter accessibility barriers on any page of this website, please let us know:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted mt-2">
                <li>Email: <a href={`mailto:${siteConfig.email}`} className="text-amber font-semibold">{siteConfig.email}</a></li>
                <li>Phone: <a href={`tel:${siteConfig.phone}`} className="text-amber font-semibold">{siteConfig.phone}</a></li>
                <li>Address: {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
