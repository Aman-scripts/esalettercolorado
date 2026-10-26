import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/data/site-config";
import { Cookie } from "lucide-react";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/cookie-policy/");

export const metadata: Metadata = buildMetadata(seo);

export default function CookiePolicyPage() {
  return (
    <div className="bg-ivory min-h-screen">
      <Breadcrumbs items={[{ label: "Cookie Policy" }]} />

      <main className="section-padding pt-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="trust-chip mb-3">Browser Preferences</span>
            <h1 className="h1 mb-3">{seo.h1}</h1>
            <p className="body-small text-muted">Last Updated: <strong>October 18, 2026</strong></p>
          </div>

          <div className="card-theme p-6 sm:p-10 space-y-8 body-normal text-ink">
            <div className="p-5 rounded-xl bg-pale border border-line flex items-center gap-3">
              <Cookie className="w-6 h-6 text-teal shrink-0" />
              <p className="text-base text-muted leading-relaxed">
                This Cookie Policy explains how ESA Letter Colorado uses cookies and similar tracking technologies to recognize you when you visit our website.
              </p>
            </div>

            <section>
              <h2 className="h3 mb-3 text-navy">1. What Are Cookies?</h2>
              <p className="leading-relaxed">
                Cookies are small data files placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work efficiently and provide essential reporting information.
              </p>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">2. Types of Cookies We Use</h2>
              <ul className="text-base space-y-3 text-ink">
                <li>
                  <strong>Essential / Strictly Necessary Cookies:</strong> These cookies are critical to provide you with services available through our site, such as authenticating your session and keeping the assessment form secure.
                </li>
                <li>
                  <strong>Performance &amp; Analytics Cookies:</strong> These cookies help us analyze website traffic and visitor interactions so we can improve site speed, navigation, and usability. All analytics data is aggregated and anonymized with zero PHI tracking.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="h3 mb-3 text-navy">3. Managing Your Cookies</h2>
              <p className="leading-relaxed">
                You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject essential cookies, you may still use our website, though your access to certain functionality (such as progress saving during assessment) may be restricted.
              </p>
            </section>

            <section className="border-t border-line pt-6">
              <h2 className="h4 mb-2 text-navy">Contact Us</h2>
              <p className="text-base text-muted">
                If you have questions about our use of cookies, contact us at <a href={`mailto:${siteConfig.email}`} className="text-amber font-semibold">{siteConfig.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
