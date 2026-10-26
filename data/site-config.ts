export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  description: string;
  surveyUrl: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  pricing: {
    single: number;
    renewal: number;
    currency: string;
  };
  disclaimer: string;
}

export const siteConfig: SiteConfig = {
  name: "ESA Letter Colorado",
  domain: "esalettercolorado.com",
  url: "https://esalettercolorado.com",
  description:
    "Get a legitimate Colorado ESA letter from a licensed mental health professional. 100% compliant with Colorado HB26-1045, C.R.S. 24-34-502, and the federal Fair Housing Act.",
  surveyUrl: "https://survey.myesatherapist.com/",
  phone: "(720) 445-5620",
  email: "support@esalettercolorado.com",
  address: {
    street: "1600 Broadway, Suite 1600",
    city: "Denver",
    state: "CO",
    zip: "80202",
    country: "US",
  },
  pricing: {
    single: 149,
    renewal: 129,
    currency: "USD",
  },
  disclaimer:
    "Medical & Legal Disclaimer: ESA Letter Colorado provides telehealth coordination and educational resources connecting Colorado renters with state-licensed mental health professionals. ESA letters are medical recommendations issued solely at the independent professional clinical discretion of your evaluating provider. We do not sell registrations, certifications, or instant approvals. No patient-provider relationship is established until an evaluation is completed and approved.",
};
