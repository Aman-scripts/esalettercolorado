export interface RightsPage {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  shortDesc: string;
  quickAnswer: string;
  statuteCitation: string;
  sections: {
    title: string;
    content: string;
    subsections?: { title: string; content: string }[];
  }[];
  faqTitle?: string;
  faqSubtitle?: string;
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const rightsSpokes: RightsPage[] = [
  {
    slug: "fair-housing-act",
    title: "Fair Housing Act & Your ESA",
    h1: "The Fair Housing Act and Your ESA in Colorado",
    metaTitle: "Fair Housing Act & Your ESA: Colorado Renter Rights",
    metaDescription: "How the federal Fair Housing Act protects ESA owners in Colorado: reasonable accommodation, covered housing, exemptions, and filing a HUD complaint.",
    shortDesc: "Everything you need to know about the Fair Housing Act and its implications for Colorado ESA owners.",
    quickAnswer: "Under the federal Fair Housing Act (FHA) and Colorado law, emotional support animals (ESAs) are recognized as assistance animals, not pets. Eligible residents may request reasonable housing accommodations, including waivers of pet fees, pet rent, and breed or weight restrictions. Housing providers must assess these requests under applicable law, which may require reliable supporting documentation when the disability-related need is not apparent.",
    statuteCitation: "42 U.S.C. §§ 3601–3619 (Fair Housing Act) & HUD FHEO Notice FHEO-2020-01.",
    sections: [
      {
        title: "What the Fair Housing Act Covers in Colorado",
        content: "The Fair Housing Act is federal law that protects individuals with mental, emotional, or physical disabilities from discrimination in housing. In Colorado, these protections are reinforced by state civil rights statutes enforced by the Colorado Civil Rights Division (CCRD). Under the FHA, landlords and property managers must grant reasonable accommodation requests for assistance animals, which include both trained service dogs and emotional support animals.",
      },
      {
        title: "Reasonable Accommodation Explained",
        content: "A reasonable accommodation is a change in rules, policies, practices, or services that affords an individual with a disability an equal opportunity to use and enjoy a dwelling. For an ESA, this means waiving 'no-pet' clauses, pet deposits, monthly pet rent, and restrictions on animal breed, size, or weight. The landlord cannot ask for your complete medical records or require direct communication with your healthcare provider beyond verifying the authenticity of your letter.",
      },
      {
        title: "Covered vs. Exempt Housing",
        content: "The Fair Housing Act has limited exemptions, including certain owner-occupied buildings with no more than four families and certain single-family homes rented without a real estate broker. These exemptions have additional statutory conditions, including restrictions relating to ownership, so they do not apply to every small landlord or rental property.",
      },
      {
        title: "Enforcement and Filing a HUD or CCRD Complaint",
        content: "If a Colorado housing provider unlawfully rejects your valid ESA documentation, charges illegal fees, or threatens eviction, you have legal recourse. You may file a formal complaint with the Colorado Civil Rights Division (CCRD) or the U.S. Department of Housing and Urban Development (HUD) Office of Fair Housing and Equal Opportunity.",
      },
    ],
    faqs: [
      {
        question: "Does the Fair Housing Act override apartment pet policies?",
        answer: "Yes. Under the FHA, an emotional support animal is considered an assistance animal rather than a pet. Therefore, conventional pet rules such as 'no pets allowed,' breed restrictions, and weight limits do not apply to verified ESAs.",
      },
      {
        question: "Can a landlord charge a pet deposit for an ESA?",
        answer: "No. Landlords are prohibited by federal law from charging pet deposits, application fees, or recurring pet rent for legitimate emotional support animals. However, tenants remain liable for any actual physical damage caused by the animal.",
      },
      {
        question: "What documents do I need to prove my ESA under the FHA?",
        answer: "You only need an official ESA evaluation letter from a licensed mental health professional (LMHP) or physician who holds an active license to practice in Colorado. Registry certificates, badges, and vests are not legally recognized.",
      },
    ],
    relatedSlugs: ["colorado-hb26-1045-explained", "no-pet-apartments", "landlord-denials", "pet-deposits-and-fees"],
  },
  {
    slug: "colorado-hb26-1045-explained",
    title: "Colorado HB26-1045 Explained",
    h1: "Colorado HB26-1045 Explained: ESA Housing Protections",
    metaTitle: "Colorado HB26-1045 Explained: ESA Housing Protections",
    metaDescription: "What Colorado's 2026 assistance animal housing law (HB26-1045) says about ESAs, documentation requests, and tenant and landlord responsibilities.",
    shortDesc: "Key updates on Colorado's assistance-animal housing legislation, provider standards, and verification requirements.",
    quickAnswer: "Colorado HB26-1045 clarifies housing protections and reasonable-accommodation standards for assistance animals. Separately, Colorado law establishes requirements for covered healthcare licensees making assistance-animal determinations, including an in-person meeting and sufficient familiarity with the patient and the disability.",
    statuteCitation: "Colorado House Bill 26-1045; C.R.S. § 24-34-502 & C.R.S. § 18-13-107.3.",
    sections: [
      {
        title: "What the Law Says: Assistance Animals in Colorado",
        content: "HB26-1045 defines assistance animals to include emotional support animals and allows housing providers to request reasonable documentation supporting a disability-related need when that need is not obvious.",
      },
      {
        title: "Documentation a Housing Provider May Request",
        content: "Under HB26-1045, housing providers can request reliable documentation verifying that the tenant has a disability and a disability-related need for the assistance animal. However, the documentation need only come from a licensed professional with knowledge of the tenant's condition. Landlords may not demand psychiatric records, therapy notes, or personal health histories.",
      },
      {
        title: "How It Affects Valid ESA Letters",
        content: "A legitimate ESA recommendation should be based on an appropriate clinical assessment rather than an instant certificate or automated quiz. Colorado law requires covered licensees making assistance-animal determinations to meet with the patient in person, be sufficiently familiar with the patient and the disability, and be legally and professionally qualified to make the determination.",
      },
      {
        title: "Penalties for Misrepresentation",
        content: "Colorado law prohibits intentional misrepresentation of entitlement to an assistance animal for housing when the statutory requirements are met. Under C.R.S. § 18-13-107.3, the offense requires a prior warning and knowledge that the person does not have a disability or that the animal is not an assistance animal. Penalties range from $25 for a first offense to $100-$500 for a third or subsequent offense.",
      },
    ],
    faqTitle: "Frequently Asked Questions About Colorado HB26-1045",
    faqSubtitle: "Get answers to everything surrounding Colorado HB26-1045 and its impact on emotional support animals.",
    faqs: [
      {
        question: "Does Colorado law require an in-person meeting for an ESA determination?",
        answer: "Yes. Under C.R.S. § 12-245-229, covered licensees must meet with the patient in person, be sufficiently familiar with the patient and the disability, and be legally and professionally qualified before making an assistance-animal determination.",
      },
      {
        question: "Does HB26-1045 require my therapist to be licensed in Colorado?",
        answer: "Yes. In-state licensing ensures accountability through the Colorado Department of Regulatory Agencies (DORA). All evaluators at ESA Letter Colorado hold active Colorado licenses.",
      },
      {
        question: "Can landlords call my therapist to verify the letter?",
        answer: "Landlords may contact your healthcare provider solely to authenticate the letter (confirming it was written by the provider for you). They cannot ask about your medical diagnosis, treatment plan, or personal history.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "fake-registries-warning", "landlord-denials"],
  },
  {
    slug: "esa-vs-service-animal",
    title: "ESA vs. Service Animal in Colorado",
    h1: "ESA vs. Service Animal in Colorado: Key Differences",
    metaTitle: "ESA vs Service Animal in Colorado: Key Differences",
    metaDescription: "Compare emotional support animals and service animals in Colorado: legal definitions, training, public access rights, and housing protections.",
    shortDesc: "Understand legal definitions, public access boundaries, and housing rights comparing ESAs and Service Animals.",
    quickAnswer: "Service animals are dogs (or miniature horses) individually trained to perform specific tasks for people with disabilities and have broad public access rights under the ADA. Emotional support animals provide therapeutic comfort through presence; they have comprehensive housing rights under the FHA in Colorado, but do not have public access to restaurants, stores, or transit.",
    statuteCitation: "Americans with Disabilities Act (28 C.F.R. § 35.136) vs. Fair Housing Act (24 C.F.R. § 100.204).",
    sections: [
      {
        title: "Comparison: Service Animal vs. Emotional Support Animal",
        content: "While both categories support individuals with disabilities, their legal classification, training requirements, and public access rights differ fundamentally under Colorado and federal law.",
      },
      {
        title: "Legal Definitions Under ADA, FHA, and Colorado Law",
        content: "Under Title II and Title III of the ADA, only dogs trained to do work or perform tasks for the benefit of an individual with a disability qualify as service animals. Emotional support animals, by contrast, are recognized under the Fair Housing Act and Section 504 of the Rehabilitation Act because their therapeutic presence alleviates symptoms of mental health conditions.",
      },
      {
        title: "Public Access Rights vs. Housing Rights",
        content: "Service animals can accompany their handlers into restaurants, grocery stores, hotels, airplanes, and public transportation. ESAs have protected access to residential housing without fees or breed restrictions, but businesses and public accommodations have no legal obligation to allow ESAs inside.",
      },
    ],
    faqs: [
      {
        question: "Can I bring my ESA into a Colorado restaurant?",
        answer: "No. The Americans with Disabilities Act (ADA) does not grant public access rights to emotional support animals. Only trained service animals are legally permitted in food establishments and non-pet-friendly stores.",
      },
      {
        question: "Does an ESA need specialized task training?",
        answer: "No. Unlike service animals, an emotional support animal does not require task training. Their benefit comes from their continuous companion presence and the emotional bond they share with their handler.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "no-pet-apartments", "fake-registries-warning"],
  },
  {
    slug: "no-pet-apartments",
    title: "ESAs in No-Pet Apartments",
    h1: "ESAs in No-Pet Apartments in Colorado: Your Rights",
    metaTitle: "ESAs in No-Pet Apartments in Colorado: Your Rights",
    metaDescription: "No-pet policies generally do not apply to valid ESAs in Colorado. Learn how to request an accommodation and what documentation to provide.",
    shortDesc: "Learn how Colorado renters can request a reasonable accommodation to live with an emotional support animal in an apartment with a no-pet policy.",
    quickAnswer: "No-pet policies generally cannot prevent a qualified tenant from keeping an assistance animal when a reasonable accommodation is required under federal or Colorado fair housing law. Tenants can request an accommodation and provide reasonable supporting documentation when required. Housing providers must assess the request under applicable law, including any relevant exceptions.",
    statuteCitation: "HUD FHEO-2020-01 & Colorado Revised Statutes § 24-34-502.",
    sections: [
      {
        title: "Why No-Pet Policies Do Not Apply to ESAs",
        content: "Under federal and Colorado fair housing law, an assistance animal may qualify as a reasonable accommodation that allows a tenant with a disability to use and enjoy their home. Housing providers generally must consider such requests even when a property has a no-pet policy, subject to applicable legal exceptions.",
      },
      {
        title: "How to Request an Accommodation",
        content: "Submit a written reasonable accommodation request to your landlord or property management office along with a copy of your Colorado ESA letter. It is best to do this in writing via email or certified mail so that you maintain a clear paper trail.",
      },
      {
        title: "Documentation You Must Provide",
        content: "Provide your letter from a Colorado-licensed therapist or physician. You do not need to provide vet health certificates (beyond standard rabies vaccinations required by Colorado municipal codes) or disclose confidential medical histories.",
      },
    ],
    faqTitle: "FAQs About ESAs in No-Pet Apartments",
    faqs: [
      {
        question: "Can I keep my ESA in an apartment that does not allow pets?",
        answer: "Yes, you may be able to keep your emotional support animal in a no-pet apartment by requesting a reasonable accommodation under the Fair Housing Act and Colorado law. Your eligibility and the landlord's obligations depend on the circumstances and applicable legal requirements.",
      },
      {
        question: "Do I need my landlord's permission to keep an ESA in a no-pet apartment?",
        answer: "You should notify your landlord and request a reasonable accommodation for your ESA. If the disability-related need is not apparent, the landlord may request reasonable supporting documentation. A no-pet policy alone generally is not a valid reason to deny an otherwise qualifying request.",
      },
      {
        question: "Can an apartment reject my ESA just because of a no-pets policy?",
        answer: "No. Denying an ESA solely on the basis of a 'no-pets' rule is a direct violation of the federal Fair Housing Act and Colorado state civil rights statutes.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "landlord-denials", "pet-deposits-and-fees"],
  },
  {
    slug: "hoa-rules",
    title: "HOAs and Emotional Support Animals",
    h1: "HOAs and Emotional Support Animals in Colorado",
    metaTitle: "HOAs and Emotional Support Animals in Colorado",
    metaDescription: "Can a Colorado HOA refuse your ESA? Learn the limits of HOA authority, how to request an accommodation, and what to do if the HOA says no.",
    shortDesc: "Navigate Colorado Homeowners Association rules, CC&Rs, and assistance animal exemptions.",
    quickAnswer: "Colorado HOAs and condo associations are subject to the Fair Housing Act and Colorado fair housing laws. Even if your HOA covenants (CC&Rs) prohibit pets, enforce strict weight limits, or restrict breeds, the HOA must grant an accommodation for a legitimate emotional support animal.",
    statuteCitation: "Colorado Common Interest Ownership Act (CCIOA) C.R.S. § 38-33.3-101 et seq. & FHA.",
    sections: [
      {
        title: "HOA Authority and Its Statutory Limits",
        content: "Homeowners associations possess authority over common elements and property regulations, but that authority is strictly subordinate to state and federal fair housing laws. HOA rules that ban pets or restrict animal sizes cannot override an owner or tenant's civil right to an assistance animal.",
      },
      {
        title: "Submitting an Accommodation to an HOA Board",
        content: "Send your written request directly to the HOA property management company or board of directors. Include your official ESA letter. Keep all communications in writing for your personal records.",
      },
      {
        title: "What to Do If an HOA Refuses or Threatens Fines",
        content: "If an HOA attempts to levy daily fines or threatens legal action over an ESA, inform them in writing that their action constitutes disability discrimination under the Fair Housing Act and Colorado C.R.S. 24-34-502. If they persist, you can file a complaint with the Colorado Civil Rights Division.",
      },
    ],
    faqs: [
      {
        question: "Can my HOA limit my ESA's weight to 25 pounds?",
        answer: "No. Size and weight limitations in HOA covenants do not apply to verified assistance animals under HUD regulations.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "breed-and-size-restrictions", "landlord-denials"],
  },
  {
    slug: "breed-and-size-restrictions",
    title: "Breed and Size Restrictions",
    h1: "ESA Breed & Size Restrictions in Colorado Housing",
    metaTitle: "ESA Breed & Size Restrictions in Colorado Housing",
    metaDescription: "Breed and weight limits usually cannot be applied to ESAs in Colorado. Learn the exceptions, how to respond to pushback, and what to document.",
    shortDesc: "Why landlords cannot enforce breed bans (like Pit Bulls or German Shepherds) or weight caps on ESAs.",
    quickAnswer: "Under federal and Colorado housing law, breed, weight, and size restrictions cannot be applied to emotional support animals. A landlord cannot deny your accommodation simply because your ESA is a Pit Bull, German Shepherd, or weighs over 50 pounds.",
    statuteCitation: "HUD Notice FHEO-2020-01 (Assistance Animals in Housing).",
    sections: [
      {
        title: "Why Breed and Weight Restrictions Are Overridden",
        content: "HUD rules stipulate that assistance animals are evaluated on an individualized basis rather than generalized breed stereotypes. Even if a Colorado apartment complex maintains an aggressive breed ban, that ban is legally suspended for an individual ESA.",
      },
      {
        title: "The Only Legal Exceptions",
        content: "A landlord may only refuse a specific animal if it poses a direct, demonstrable threat to the health or safety of others, or would cause substantial physical damage to the property that cannot be mitigated by reasonable measures. This assessment must be based on objective evidence of the specific animal's actual conduct.",
      },
      {
        title: "Handling Landlord Pushback",
        content: "If a leasing manager claims their insurance company prohibits certain breeds, HUD guidance requires the landlord to seek an insurance waiver or demonstrate that the policy would be cancelled with no replacement available—a standard landlords can rarely meet.",
      },
    ],
    faqs: [
      {
        question: "Can an apartment in Denver ban my 70-pound dog as an ESA?",
        answer: "No. Weight limits cannot be enforced against verified assistance animals under the Fair Housing Act.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "no-pet-apartments", "landlord-denials"],
  },
  {
    slug: "landlord-denials",
    title: "What to Do If a Landlord Denies Your ESA",
    h1: "Landlord Denied Your ESA in Colorado? What to Do",
    metaTitle: "Landlord Denied Your ESA in Colorado? What to Do",
    metaDescription: "Learn which landlord denial reasons are valid for ESAs in Colorado, how to respond in writing, and how to file a CCRD or HUD complaint.",
    shortDesc: "Step-by-step legal recourse when an accommodation request is improperly rejected by a Colorado landlord.",
    quickAnswer: "If your landlord denies your ESA accommodation request, ask for the decision and reasons in writing. Review the explanation against applicable fair housing law and consider responding with relevant documentation or requesting further discussion through the interactive process.",
    statuteCitation: "Colorado Civil Rights Division (CCRD) & 24 C.F.R. § 100.204.",
    sections: [
      {
        title: "Valid vs. Invalid Denial Grounds",
        content: "Housing providers generally cannot deny a qualifying ESA request solely because of a no-pet policy or an animal's breed or size. However, denial may be lawful if the request does not qualify, creates an undue burden, fundamentally alters operations, or the specific animal poses a documented threat or risk of substantial property damage.",
      },
      {
        title: "Steps to Take Immediately Following a Denial",
        content: "1. Request the denial and reasoning in writing.\n2. Consider responding in writing with reasons the denial may violate fair housing law, citing relevant HUD guidance and Colorado law and including supporting documentation.\n3. Keep your ESA letter and provider's contact details available for reasonable verification, while protecting your privacy.",
      },
      {
        title: "Filing a Complaint with HUD and the Colorado Civil Rights Division",
        content: "If you believe your landlord unlawfully denied your ESA accommodation request, you can file a housing discrimination complaint with HUD or the Colorado Civil Rights Division. The agency may investigate the allegations and pursue remedies available under applicable law if discrimination is established.",
      },
    ],
    faqTitle: "FAQs About ESA Accommodation Denials in Colorado",
    faqSubtitle: "Find answers to common questions about ESA accommodation denials in Colorado, including your rights as a tenant and the steps you can take if a landlord refuses your request.",
    faqs: [
      {
        question: "Can a landlord evict me for requesting an ESA accommodation?",
        answer: "A landlord cannot lawfully evict you simply for exercising your fair housing rights. However, ESA protections do not prevent eviction for unrelated lawful reasons. If you believe an eviction is discriminatory or retaliatory, consider contacting HUD or the Colorado Civil Rights Division.",
      },
      {
        question: "Can a landlord ask for additional documentation for an ESA in Colorado?",
        answer: "Yes. If your disability-related need for an ESA is not apparent, a landlord may request reliable supporting information. They generally cannot require your complete medical records or a specific diagnosis.",
      },
      {
        question: "What should I do if my landlord ignores my ESA accommodation request?",
        answer: "Follow up in writing and keep a record of your request and any responses. If the landlord continues to ignore it, consider contacting HUD or the Colorado Civil Rights Division for guidance.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "colorado-hb26-1045-explained", "landlord-request-letter-template"],
  },
  {
    slug: "pet-deposits-and-fees",
    title: "Pet Deposits, Pet Rent and ESAs",
    h1: "Pet Deposits, Pet Rent & ESAs in Colorado",
    metaTitle: "Pet Deposits, Pet Rent & ESAs in Colorado",
    metaDescription: "Can a Colorado landlord charge pet rent or a pet deposit for your ESA? Learn what cannot be charged, when damage costs apply, and how to recover fees.",
    shortDesc: "Financial protections: why emotional support animals are exempt from pet fees, deposits, and monthly rent.",
    quickAnswer: "Landlords in Colorado cannot charge upfront pet deposits, non-refundable pet fees, or ongoing monthly pet rent for emotional support animals. However, tenants are still responsible for paying for any actual damage the animal causes to the apartment upon move-out.",
    statuteCitation: "Fair Housing Act, HUD FHEO-2020-01 guidance, and Colorado HB26-1045.",
    sections: [
      {
        title: "What Fees Cannot Be Charged",
        content: "Housing providers generally cannot charge pet application fees, pet security deposits, or monthly pet rent for an assistance animal approved as a reasonable accommodation. Such charges may unlawfully burden a tenant exercising their fair housing rights.",
      },
      {
        title: "What Can Be Charged (Actual Damages)",
        content: "If your ESA damages baseboards, carpets, or blinds, the landlord may seek compensation for actual damage, subject to applicable law and the rules on ordinary wear and tear.",
      },
      {
        title: "How to Recover Wrongfully Paid Pet Fees in Colorado",
        content: "If your landlord charged pet fees before or after your ESA accommodation request, you can request an accounting and a refund of any fees that were unlawfully charged.",
      },
    ],
    faqTitle: "FAQs About ESA Pet Fees & Deposits in Colorado",
    faqSubtitle: "Know whether ESA owners in Colorado are required to pay pet fees or deposit pet security for their emotional support animal.",
    faqs: [
      {
        question: "Can a landlord require a pet deposit for an ESA in Colorado?",
        answer: "Generally, no. When an emotional support animal qualifies for a reasonable housing accommodation, a landlord in Colorado cannot charge pet deposits for that animal.",
      },
      {
        question: "Do I need to renew my ESA letter to keep my pet-fee exemption in Colorado?",
        answer: "Not necessarily. Federal law does not set a universal annual renewal requirement for ESA documentation. Whether updated information is reasonably needed depends on the circumstances and applicable housing rules.",
      },
      {
        question: "Can my landlord charge a fee for ESA-related cleaning in Colorado?",
        answer: "A landlord generally cannot charge a special cleaning fee just because a tenant has an assistance animal. However, they may seek compensation for actual damage or unusual cleaning costs caused by the animal, subject to applicable law.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "no-pet-apartments", "landlord-denials"],
  },
  {
    slug: "moving-with-an-esa",
    title: "Moving With an ESA",
    h1: "Moving With an Emotional Support Animal in Colorado",
    metaTitle: "Moving With an Emotional Support Animal in Colorado",
    metaDescription: "Moving to a new Colorado rental with your ESA? Learn how your rights carry over, what paperwork a new landlord may request, and a timing checklist.",
    shortDesc: "Guide to securing housing in a new Colorado apartment or rental property with your ESA.",
    quickAnswer: "Your ESA housing rights carry over to every rental in Colorado. When moving, submit your accommodation request and ESA letter before signing the lease or immediately upon application to avoid misunderstandings, ensure no pet fees are written into the lease, and establish documentation upfront.",
    statuteCitation: "Fair Housing Act Reasonable Accommodation Guidelines.",
    sections: [
      {
        title: "Transferring Your Rights to a New Home",
        content: "Your ESA letter is issued to you as an individual, not to a specific building. As long as your letter was issued by a Colorado-licensed professional within the past 12 months, it is valid for your new lease.",
      },
      {
        title: "Timing Your Accommodation Request",
        content: "Best practice is to submit your ESA request after your rental application has been approved or alongside your initial lease review. This prevents covert discrimination during the application phase while ensuring all pet clauses are officially amended.",
      },
    ],
    faqs: [
      {
        question: "Should I mention my ESA on the initial rental application?",
        answer: "You are not legally required to mention an ESA on an application that asks 'Do you have pets?' because an ESA is legally not a pet. However, presenting your accommodation request prior to move-in ensures smooth onboarding.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "no-pet-apartments", "renewal"],
  },
  {
    slug: "college-dorm-esa",
    title: "ESAs in College Dorms",
    h1: "ESAs in Colorado College Dorms & Student Housing",
    metaTitle: "ESAs in Colorado College Dorms & Student Housing",
    metaDescription: "How the Fair Housing Act applies to ESAs in university housing in Colorado, how to request an accommodation, and what schools may ask for.",
    shortDesc: "Navigating student housing and dorm accommodation policies at CU Boulder, CSU, DU, Mines, and UNC.",
    quickAnswer: "The Fair Housing Act applies to university-operated dorms, residence halls, and Greek housing in Colorado. College students with documented mental or emotional disabilities have the right to keep an ESA in their dorm room without paying extra pet housing fees.",
    statuteCitation: "FHA & Section 504 of the Rehabilitation Act of 1973 (29 U.S.C. § 794).",
    sections: [
      {
        title: "University Housing Under the Fair Housing Act",
        content: "Higher education residence halls are considered dwellings under the FHA. Colorado universities—including CU Boulder, Colorado State University, University of Denver, Colorado School of Mines, and UNC—maintain formal disability services processes for ESA dorm approvals.",
      },
      {
        title: "The Campus Request Process",
        content: "Students should contact their campus Disability Services office (often 30–60 days before semester move-in) and submit their Colorado ESA letter. The university will review the documentation and provide roommate notifications.",
      },
    ],
    faqs: [
      {
        question: "Can I take my ESA into college classrooms or the dining hall?",
        answer: "No. ESAs in college settings are restricted to university housing (dorm rooms and surrounding residential grounds). Only service animals can attend classes or enter campus dining facilities.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "esa-vs-service-animal", "anxiety"],
  },
  {
    slug: "fake-registries-warning",
    title: "Why ESA Registries Are Not Valid",
    h1: "ESA Registries Are Not Valid: Colorado Scam Warning",
    metaTitle: "ESA Registries Are Not Valid: Colorado Scam Warning",
    metaDescription: "No official ESA registry exists. Learn how online registries mislead Colorado renters, what a landlord actually needs, and how to verify a provider.",
    shortDesc: "Protect yourself from illegal online registry scams, fake ID badges, and misleading certificate websites.",
    quickAnswer: "There is no such thing as an official ESA registry, government certification, or legally recognized ID card. Websites selling instant registration numbers, badges, or vests are scams that do not provide legal housing protection in Colorado. Landlords and HUD look only for a signed evaluation letter from a licensed mental health professional.",
    statuteCitation: "HUD Notice FHEO-2020-01 (page 11: Internet Certificates) & C.R.S. § 18-13-107.3.",
    sections: [
      {
        title: "How Online ESA Registries Mislead Renters",
        content: "Many commercial websites advertise 'official lifetime ESA registration' for a fast fee. These certificates are completely worthless under federal law. HUD's official 2020 guidance explicitly instructs housing providers that websites selling instant certificates without a clinical relationship are insufficient to establish a disability-related need.",
      },
      {
        title: "What Colorado Landlords Actually Require",
        content: "A legitimate letter must be written on the professional letterhead of a therapist or doctor licensed in Colorado. It must state their license number, date of issue, and confirm that you have an emotional or psychological condition that benefits from an ESA.",
      },
    ],
    faqs: [
      {
        question: "Do I need to register my ESA with the state of Colorado?",
        answer: "No. The State of Colorado does not maintain an ESA registry, nor does any municipal government. Any website claiming to register your animal with the government is fraudulent.",
      },
    ],
    relatedSlugs: ["colorado-hb26-1045-explained", "fair-housing-act", "verify-esa-letter"],
  },
  {
    slug: "landlord-request-letter-template",
    title: "ESA Request Letter to Landlord (Template)",
    h1: "ESA Request Letter to Landlord: Colorado Template",
    metaTitle: "ESA Request Letter to Landlord: Colorado Template",
    metaDescription: "Use this free template to request an ESA accommodation from your Colorado landlord, plus tips on delivery, timing, and what to attach.",
    shortDesc: "Free copy-ready template and instructions for presenting your ESA letter to a Colorado property manager.",
    quickAnswer: "When submitting your ESA letter to a landlord, use a professional, clear written request citing your rights under the Fair Housing Act and Colorado C.R.S. 24-34-502. Our free template includes all legally required elements to ensure rapid processing.",
    statuteCitation: "Fair Housing Act Reasonable Accommodation Request Guidelines.",
    sections: [
      {
        title: "Copy-Ready Colorado Landlord Request Template",
        content: "Subject: Request for Reasonable Accommodation under the Fair Housing Act - [Your Name] - Unit [Your Unit #]\n\nDear [Landlord / Property Manager Name],\n\nI am writing to formally request a reasonable accommodation under the federal Fair Housing Act (42 U.S.C. §§ 3601–3619) and Colorado Revised Statutes § 24-34-502. I have a disability-related need for an emotional support animal (ESA).\n\nAttached is documentation from my licensed mental health professional, [Therapist Name, Credentials, CO License #], confirming my need for an ESA to support my daily functioning and equal enjoyment of my home.\n\nUnder federal HUD guidelines, assistance animals are not pets. Accordingly, I request that all pet restrictions, pet deposits, and monthly pet rent fees be waived for this animal.\n\nThank you for your prompt attention to this matter. I appreciate your cooperation and look forward to your confirmation in writing.\n\nSincerely,\n[Your Name]\n[Your Contact Information]",
      },
      {
        title: "How and When to Deliver the Request",
        content: "Deliver the letter via email so you have an electronic timestamp, or send it by certified mail with return receipt requested. Keep a complete copy of the letter, attachments, and all responses for your personal records.",
      },
    ],
    faqs: [
      {
        question: "How long does a landlord have to respond to my request?",
        answer: "HUD requires housing providers to respond within a reasonable timeframe, generally considered 10 to 14 business days.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "no-pet-apartments", "landlord-denials"],
  },
];
