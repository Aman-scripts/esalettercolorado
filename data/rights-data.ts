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
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const rightsSpokes: RightsPage[] = [
  {
    slug: "fair-housing-act",
    title: "Fair Housing Act & Your ESA",
    h1: "The Fair Housing Act and Your ESA in Colorado",
    metaTitle: "Fair Housing Act & Your ESA: Colorado Renter Rights [51 chars]",
    metaDescription: "How the federal Fair Housing Act protects ESA owners in Colorado: reasonable accommodation, covered housing, exemptions, and filing a HUD complaint. [148 chars]",
    shortDesc: "Understand federal protections under the FHA for assistance animals in Colorado rental housing.",
    quickAnswer: "Under the federal Fair Housing Act (FHA) and Colorado law, emotional support animals (ESAs) are classified as assistance animals—not pets. Housing providers must grant reasonable accommodations allowing ESAs to live with their handlers free of pet fees, pet rent, and breed or weight restrictions, provided valid documentation from a licensed healthcare provider is submitted.",
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
        content: "Nearly all multi-family apartment complexes, condominiums, rental homes, and campus residences in Colorado are covered under the FHA. Minor statutory exemptions exist for owner-occupied buildings with four or fewer units, and single-family homes rented directly by private owners without a real estate broker who own fewer than three such properties.",
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
    metaTitle: "Colorado HB26-1045 Explained: ESA Housing Protections [53 chars]",
    metaDescription: "What Colorado's 2026 assistance animal housing law (HB26-1045) says about ESAs, documentation requests, and tenant and landlord responsibilities. [145 chars]",
    shortDesc: "Key updates on Colorado's assistance-animal housing legislation, provider standards, and verification requirements.",
    quickAnswer: "Colorado HB26-1045 codifies standards for assistance animal documentation in rental housing. It affirms the rights of tenants with genuine disability-related needs while requiring that ESA letters be issued by healthcare providers holding an active Colorado license who have conducted a bona fide clinical evaluation.",
    statuteCitation: "Colorado House Bill 26-1045; C.R.S. § 24-34-502 & C.R.S. § 18-13-107.3.",
    sections: [
      {
        title: "What the Law Says: Assistance Animals in Colorado",
        content: "HB26-1045 brings statutory clarity to Colorado housing regulations by aligning state definitions with federal HUD guidelines. It explicitly defines assistance animals to include emotional support animals and establishes explicit documentation standards that housing providers may request during the accommodation process.",
      },
      {
        title: "Documentation a Housing Provider May Request",
        content: "Under HB26-1045, housing providers can request reliable documentation verifying that the tenant has a disability and a disability-related need for the assistance animal. However, the documentation need only come from a licensed professional with knowledge of the tenant's condition. Landlords may not demand psychiatric records, therapy notes, or personal health histories.",
      },
      {
        title: "How It Affects Valid ESA Letters",
        content: "To be valid in Colorado under HB26-1045, your ESA letter must be issued by a therapist, counselor, or physician licensed by the Colorado Department of Regulatory Agencies (DORA) who has conducted a comprehensive assessment. Generic instant certificates purchased online without an evaluation fail this legal threshold.",
      },
      {
        title: "Penalties for Misrepresentation",
        content: "Colorado law takes animal misrepresentation seriously under C.R.S. 18-13-107.3. Knowingly misrepresenting an untrained pet as a service dog or purchasing fraudulent ESA certificates to deceive landlords carries civil penalties and undermines legitimate accommodations for people with disabilities.",
      },
    ],
    faqs: [
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
    metaTitle: "ESA vs Service Animal in Colorado: Key Differences [50 chars]",
    metaDescription: "Compare emotional support animals and service animals in Colorado: legal definitions, training, public access rights, and housing protections. [142 chars]",
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
    metaTitle: "ESAs in No-Pet Apartments in Colorado: Your Rights [50 chars]",
    metaDescription: "No-pet policies generally do not apply to valid ESAs in Colorado. Learn how to request an accommodation and what documentation to provide. [138 chars]",
    shortDesc: "How to live with your emotional support animal in Colorado apartments with strict no-pet rules.",
    quickAnswer: "No-pet rules do not apply to emotional support animals in Colorado. Because federal and Colorado fair housing laws classify ESAs as assistance animals rather than pets, landlords must modify their 'no pets' policy as a reasonable accommodation once you present a legitimate ESA letter.",
    statuteCitation: "HUD FHEO-2020-01 & Colorado Revised Statutes § 24-34-502.",
    sections: [
      {
        title: "Why No-Pet Policies Do Not Apply to ESAs",
        content: "Under HUD guidelines and Colorado fair housing statutes, an assistance animal is an auxiliary aid necessary for the tenant to fully enjoy their residence. Therefore, landlords cannot enforce pet bans against individuals with valid ESA documentation.",
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
    faqs: [
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
    metaTitle: "HOAs and Emotional Support Animals in Colorado [46 chars]",
    metaDescription: "Can a Colorado HOA refuse your ESA? Learn the limits of HOA authority, how to request an accommodation, and what to do if the HOA says no. [138 chars]",
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
    metaTitle: "ESA Breed & Size Restrictions in Colorado Housing [49 chars]",
    metaDescription: "Breed and weight limits usually cannot be applied to ESAs in Colorado. Learn the exceptions, how to respond to pushback, and what to document. [142 chars]",
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
    metaTitle: "Landlord Denied Your ESA in Colorado? What to Do [48 chars]",
    metaDescription: "Learn which landlord denial reasons are valid for ESAs in Colorado, how to respond in writing, and how to file a CCRD or HUD complaint. [135 chars]",
    shortDesc: "Step-by-step legal recourse when an accommodation request is improperly rejected by a Colorado landlord.",
    quickAnswer: "If your landlord denies your ESA letter, request the denial in writing with specific statutory justifications. Compare their response against lawful grounds. In most cases, landlords deny requests out of ignorance of Colorado HB26-1045 and FHA laws, which can be quickly resolved with a formal response letter.",
    statuteCitation: "Colorado Civil Rights Division (CCRD) & 24 C.F.R. § 100.204.",
    sections: [
      {
        title: "Valid vs. Invalid Denial Grounds",
        content: "Valid grounds for denial are extremely narrow: owner-occupied 4-unit buildings, demonstrable direct physical threat by the specific animal, or unreasonable structural burden. Invalid grounds include 'no-pet' policies, breed bans, asking for medical charts, or demanding registration cards.",
      },
      {
        title: "Steps to Take Immediately Following a Denial",
        content: "1. Request the denial and reasoning in writing. 2. Send our formal Colorado Landlord Response Letter citing HUD FHEO-2020-01 and C.R.S. 24-34-502. 3. Contact your licensed therapist to ensure they can verify the letter if the landlord calls.",
      },
      {
        title: "Filing a Complaint with HUD and the Colorado Civil Rights Division",
        content: "If the landlord refuses to comply, you can file a formal complaint free of charge with the Colorado Civil Rights Division (CCRD) or HUD. These agencies investigate fair housing discrimination and can levy severe penalties against non-compliant landlords.",
      },
    ],
    faqs: [
      {
        question: "Can a landlord evict me for getting an ESA?",
        answer: "No. Retaliatory eviction against a tenant exercising their fair housing rights is illegal under both federal and Colorado state law.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "colorado-hb26-1045-explained", "landlord-request-letter-template"],
  },
  {
    slug: "pet-deposits-and-fees",
    title: "Pet Deposits, Pet Rent and ESAs",
    h1: "Pet Deposits, Pet Rent & ESAs in Colorado",
    metaTitle: "Pet Deposits, Pet Rent & ESAs in Colorado [41 chars]",
    metaDescription: "Can a Colorado landlord charge pet rent or a pet deposit for your ESA? Learn what cannot be charged, when damage costs apply, and how to recover fees. [150 chars]",
    shortDesc: "Financial protections: why emotional support animals are exempt from pet fees, deposits, and monthly rent.",
    quickAnswer: "Landlords in Colorado cannot charge upfront pet deposits, non-refundable pet fees, or ongoing monthly pet rent for emotional support animals. However, tenants are still responsible for paying for any actual damage the animal causes to the apartment upon move-out.",
    statuteCitation: "HUD FHEO-2020-01 & Colorado HB23-1068 (Pet Rent/Deposit Limits).",
    sections: [
      {
        title: "What Fees Cannot Be Charged",
        content: "Housing providers cannot charge pet application fees, pet security deposits, or monthly pet rent for emotional support animals. Doing so constitutes charging an individual with a disability an extra fee to access housing, which is explicitly prohibited.",
      },
      {
        title: "What Can Be Charged (Actual Damages)",
        content: "If your ESA chews baseboards, stains carpets, or damages blinds, the landlord may deduct the actual cost of repairs from your standard security deposit or invoice you upon move-out.",
      },
      {
        title: "How to Recover Wrongfully Paid Pet Fees in Colorado",
        content: "If your landlord charged pet rent before you submitted your ESA letter, or continued charging after you provided documentation, you can request an accounting and credit for all fees paid since the accommodation request date.",
      },
    ],
    faqs: [
      {
        question: "Can a landlord require a pet deposit for an ESA?",
        answer: "No. Under federal and state law, emotional support animals are not pets, so pet deposits cannot be collected.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "no-pet-apartments", "landlord-denials"],
  },
  {
    slug: "moving-with-an-esa",
    title: "Moving With an ESA",
    h1: "Moving With an Emotional Support Animal in Colorado",
    metaTitle: "Moving With an Emotional Support Animal in Colorado [51 chars]",
    metaDescription: "Moving to a new Colorado rental with your ESA? Learn how your rights carry over, what paperwork a new landlord may request, and a timing checklist. [147 chars]",
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
    metaTitle: "ESAs in Colorado College Dorms & Student Housing [48 chars]",
    metaDescription: "How the Fair Housing Act applies to ESAs in university housing in Colorado, how to request an accommodation, and what schools may ask for. [138 chars]",
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
    metaTitle: "ESA Registries Are Not Valid: Colorado Scam Warning [51 chars]",
    metaDescription: "No official ESA registry exists. Learn how online registries mislead Colorado renters, what a landlord actually needs, and how to verify a provider. [148 chars]",
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
    metaTitle: "ESA Request Letter to Landlord: Colorado Template [49 chars]",
    metaDescription: "Use this free template to request an ESA accommodation from your Colorado landlord, plus tips on delivery, timing, and what to attach. [134 chars]",
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
