import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqAccordion } from "@/components/modules/faq-accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site-config";
import { Mail, Phone, MapPin, Clock, ShieldAlert, Send } from "lucide-react";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/contact/");

export const metadata: Metadata = buildMetadata(seo);

const contactFaqs = [
  {
    q: "How quickly does support respond?",
    a: "Our Colorado customer support and clinical coordination team replies to all email and web inquiries within 1 business day (often within 2–4 hours during regular hours).",
  },
  {
    q: "Should I submit my medical records through this form?",
    a: "No. Do not submit sensitive Protected Health Information (PHI) or personal medical records through this public contact form. Health evaluations are only conducted through our secure, HIPAA-compliant assessment portal.",
  },
  {
    q: "Can I speak directly with my evaluating clinician?",
    a: "If you have specific clinical questions or require follow-up during your evaluation, our clinical director coordinates secure communication through your telehealth portal.",
  },
];

export default function ContactPage() {
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact ESA Letter Colorado",
      description: "Get in touch with ESA Letter Colorado support team.",
      url: `${siteConfig.url}/contact/`,
      mainEntity: {
        "@type": "Organization",
        name: siteConfig.name,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.zip,
          addressCountry: "US",
        },
      },
    },
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />
      <div className="bg-ivory min-h-screen">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        {/* Hero Section */}
        <section className="section-padding pt-6 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="trust-chip mb-3">Support &amp; Inquiries</span>
            <h1 className="h1 mb-4">{seo.h1}</h1>
            <p className="body-large text-muted max-w-2xl mx-auto">
              Have questions about Colorado housing laws, the assessment process, or landlord communication? We are here to help.
            </p>
          </div>
        </section>

        {/* Contact Form & Office Info */}
        <main className="section-padding py-10 bg-white border-y border-line">
          <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-10">
            {/* Left: Contact Form */}
            <div className="md:col-span-7">
              <div className="card-theme p-6 sm:p-8">
                <h2 className="h3 mb-2">Send Us a Message</h2>
                <p className="body-small text-muted mb-6">
                  Fill out the form below. Please note: for privacy reasons, do not include medical diagnoses or health records here.
                </p>

                {/* No PHI Warning Notice (Spec Section 8 #71) */}
                <div className="p-4 rounded-xl bg-pale border border-line mb-6 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  <p className="text-xs text-ink leading-relaxed">
                    <strong>HIPAA Notice:</strong> This general inquiry form is not intended for confidential clinical details. To complete a confidential assessment, please visit our <a href="/how-it-works/#get-started" className="text-amber font-semibold underline">secure evaluation portal</a>.
                  </p>
                </div>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-navy mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g., Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl border border-line bg-ivory focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal text-sm"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-navy mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="alex@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-line bg-ivory focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-navy mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="(303) 555-0192"
                        className="w-full px-4 py-2.5 rounded-xl border border-line bg-ivory focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-navy mb-1.5">
                      Topic
                    </label>
                    <select
                      id="contact-subject"
                      className="w-full px-4 py-2.5 rounded-xl border border-line bg-ivory focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal text-sm"
                    >
                      <option>General Question</option>
                      <option>Landlord Verification Question</option>
                      <option>Billing or Refund Inquiry</option>
                      <option>Letter Renewal Inquiry</option>
                      <option>Other Question</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-navy mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="How can our Colorado team help you?"
                      className="w-full px-4 py-2.5 rounded-xl border border-line bg-ivory focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal text-sm"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Support Hours & Info */}
            <div className="md:col-span-5 space-y-6">
              <div className="card-theme">
                <h3 className="h4 mb-4">Direct Contact Information</h3>
                <ul className="text-base space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-softBlue text-teal flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-muted block">Support Email</span>
                      <a href={`mailto:${siteConfig.email}`} className="font-semibold text-navy hover:text-amber">
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-softBlue text-teal flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-muted block">Phone Support</span>
                      <a href={`tel:${siteConfig.phone}`} className="font-semibold text-navy hover:text-amber">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-softBlue text-teal flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-muted block">Colorado Clinical Headquarters</span>
                      <span className="font-medium text-ink">
                        {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-softBlue text-teal flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-muted block">Support Hours</span>
                      <span className="font-medium text-ink">
                        Monday – Friday: 8:00 AM – 6:00 PM MT<br />
                        Saturday: 9:00 AM – 2:00 PM MT
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-ivory border border-line">
                <h4 className="font-bold text-sm text-navy mb-2">Need an Immediate Assessment?</h4>
                <p className="body-small text-muted mb-4">
                  Assessments are accessible 24/7 online. Complete your pre-screening questionnaire to begin immediately.
                </p>
                <a href="/how-it-works/#get-started" className="btn-secondary w-full text-center block">
                  Go to Assessment Portal
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Short FAQ */}
        <section className="section-padding py-16 bg-ivory">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2 text-center mb-10">Frequently Asked Inquiries</h2>
            <FaqAccordion items={contactFaqs} />
          </div>
        </section>
      </div>
    </>
  );
}
