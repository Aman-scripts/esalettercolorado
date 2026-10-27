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
  ctaBadge?: string;
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
    faqSubtitle: "Everything you need to know about the Fair Housing Act and its implications for Colorado ESA owners.",
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
        content: "Service animals can accompany their handlers into restaurants, grocery stores, hotels, and public transportation. Air travel is governed separately by the Air Carrier Access Act, which covers trained service dogs. ESAs have protected access to residential housing without fees or breed restrictions, but businesses and public accommodations have no legal obligation to allow ESAs inside.",
      },
    ],
    faqTitle: "FAQs About ESAs vs. Service Animals in Colorado",
    faqSubtitle: "Know everything about how emotional support animal laws and public access differ from service animal laws in Colorado.",
    faqs: [
      {
        question: "Can a Colorado landlord ask for proof that my animal is an ESA or a service animal?",
        answer: "Yes. Depending on the circumstances, a landlord may request reliable documentation supporting an ESA accommodation if the disability-related need is not obvious. For service animals, businesses generally cannot demand documentation or certification under the ADA.",
      },
      {
        question: "Do ESAs in Colorado need to be trained like service animals?",
        answer: "No. ESAs do not need specialized task training to provide emotional support. Service animals, however, must be trained to perform specific tasks related to a person's disability.",
      },
      {
        question: "Can I use an ESA letter in Colorado to take my animal on public transportation?",
        answer: "An ESA letter alone does not grant the same access rights as a service animal. Public transportation providers generally follow ADA rules for service animals, while ESA access depends on the applicable transportation policies and laws.",
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
    ctaBadge: "Professional ESA Evaluations for Housing Accommodation Requests",
    relatedSlugs: ["fair-housing-act", "landlord-denials", "pet-deposits-and-fees"],
  },
  {
    slug: "hoa-rules",
    title: "HOAs and Emotional Support Animals",
    h1: "HOAs and Emotional Support Animals in Colorado",
    metaTitle: "HOAs and Emotional Support Animals in Colorado",
    metaDescription: "Can a Colorado HOA refuse your ESA? Learn the limits of HOA authority, how to request an accommodation, and what to do if the HOA says no.",
    shortDesc: "Learn about Colorado Homeowners Association rules, CC&Rs, and assistance animal accommodation requests.",
    quickAnswer: "Colorado HOAs and condo associations are subject to the Fair Housing Act and Colorado fair housing laws. Even if your HOA covenants (CC&Rs) prohibit pets or restrict size or breed, Colorado law presumes that allowing an assistance animal is a reasonable accommodation, provided the HOA has had the opportunity to engage in the interactive process. The HOA may request reasonable documentation of the disability and the need for the animal.",
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
    faqTitle: "FAQs About ESAs and HOA Rules",
    faqSubtitle: "Learn how HOA rules apply to emotional support animals, including pet restrictions, fees, documentation requirements, and possible reasons for denial.",
    faqs: [
      {
        question: "Can an HOA require an ESA to be registered or certified?",
        answer: "No government-issued ESA registration or certificate is required under the FHA. An HOA may request reliable documentation when legally permitted, but purchasing an ESA certificate, ID card, or online registration alone does not establish eligibility for a housing accommodation.",
      },
      {
        question: "Can an HOA deny an ESA because of complaints from other residents?",
        answer: "Complaints alone do not automatically justify denying an ESA accommodation. However, documented behavior that creates a genuine safety threat, substantial property damage, or other legally valid concern may be considered. The HOA should evaluate the specific facts rather than relying on assumptions about emotional support animals.",
      },
      {
        question: "What should I do if my HOA refuses my ESA request?",
        answer: "Ask the HOA to explain its decision in writing and review the community's governing documents and applicable fair housing protections. You may provide relevant supporting documentation or request reconsideration. If you believe the denial violates fair housing law, you can consider contacting the U.S. Department of Housing and Urban Development (HUD) or a fair housing organization for guidance.",
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
    shortDesc: "Learn why landlords cannot enforce breed bans (like Pit Bulls or German Shepherds) or weight limitations on ESAs in Colorado.",
    quickAnswer: "Under Colorado law, allowing an assistance animal is presumed to be a reasonable accommodation, and the mere presence of an assistance animal is not presumed to be a direct threat. A landlord generally cannot deny a request based on breed, size, or weight alone, but may consider documented, specific harmful conduct by the individual animal.",
    statuteCitation: "Colorado Anti-Discrimination Act (C.R.S. 24-34-502 and 24-34-502.2, as amended by HB26-1045); Fair Housing Act (42 U.S.C. § 3604(f)).",
    sections: [
      {
        title: "Why Breed and Weight Restrictions Are Overridden",
        content: "Assistance animal requests are evaluated individually rather than on breed stereotypes. If a Colorado apartment complex maintains a breed ban, a resident can request a reasonable accommodation to that policy.",
      },
      {
        title: "When a Landlord Can Deny or Question a Request",
        content: "A landlord may request reasonable documentation of the disability and the need for the animal and engage in a good-faith interactive process. A landlord may deny a request for a specific animal that poses a direct threat to the health or safety of others, or would cause substantial physical damage to the property, based on objective evidence of that animal's actual conduct. Tenants remain responsible for actual damage caused by the animal.",
      },
      {
        title: "Handling Landlord Pushback",
        content: "If a leasing manager claims their insurance company prohibits certain breeds, HUD guidance requires the landlord to seek an insurance waiver or show the policy would be canceled with no replacement available, a standard landlords can rarely meet.",
      },
    ],
    faqTitle: "FAQs About Breed & Size Restrictions on ESAs in Colorado",
    faqSubtitle: "Get answers to common questions about breed and size restrictions, reasonable accommodation requests, and assistance animal rights in Colorado housing",
    faqs: [
      {
        question: "Can a Colorado landlord deny an ESA because of its breed?",
        answer: "Generally, no. Under the Fair Housing Act (FHA), a landlord cannot automatically deny an emotional support animal solely because of its breed. Landlords must assess each request individually, including any reliable evidence of a specific safety risk.",
      },
      {
        question: "Can a landlord enforce weight limits against an ESA in Colorado?",
        answer: "A landlord generally cannot rely only on a property's weight restriction to deny a reasonable ESA accommodation. However, the landlord may consider specific, objective evidence that the animal poses a genuine safety threat or substantial risk of property damage.",
      },
      {
        question: "Are pit bulls or other restricted breeds allowed as ESAs in Colorado?",
        answer: "A dog may qualify as an ESA even if it belongs to a breed restricted by a housing policy. Breed alone generally does not determine eligibility for a housing accommodation, but the animal's individual behavior and any documented risks may be relevant.",
      },
      {
        question: "Can an HOA in Colorado reject an ESA because it is too large?",
        answer: "An HOA generally must consider a reasonable accommodation request individually rather than automatically rejecting an ESA because of its size. However, accommodation is not guaranteed, and documented safety concerns or other legally valid reasons may affect the decision.",
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
    quickAnswer: "Colorado law protects assistance animals, including emotional support animals, in housing. Each housing provider evaluates your request separately, so when you move, you will typically need to submit a new accommodation request with supporting documentation. A landlord may request reasonable documentation and engage in a good-faith interactive process.",
    statuteCitation: "Colorado Anti-Discrimination Act (C.R.S. 24-34-502 and 24-34-502.2, as amended by HB26-1045); Fair Housing Act (42 U.S.C. § 3604(f))",
    sections: [
      {
        title: "Transferring Your Rights to a New Home",
        content: "Your ESA letter is issued to you as an individual, not to a specific building, so you can generally provide it to a new housing provider. A new landlord may request reasonable documentation supporting your disability-related need, which can include a current letter (issued within the previous 12 months) from a licensed provider.",
      },
      {
        title: "Timing Your Accommodation Request",
        content: "You can submit an accommodation request at any point, including with your application, after approval, or before move-in. Submit it in writing and keep a copy. Requesting early gives the landlord time to complete the interactive process before you move in.",
      },
    ],
    faqTitle: "FAQs About Moving with an ESA in Colorado",
    faqSubtitle: "Get answers to common questions about requesting an assistance animal accommodation when you move to a new home in Colorado.",
    faqs: [
      {
        question: "Do I need a new ESA letter when moving to a different home in Colorado?",
        answer: "Not necessarily. If your existing ESA documentation is still relevant and supports your disability-related need, you may be able to use it for a new housing accommodation request. The new housing provider may request reliable supporting information when legally permitted.",
      },
      {
        question: "Can my new landlord deny my ESA because the property has a no-pet policy?",
        answer: "Generally, no. Under the Fair Housing Act (FHA), eligible tenants can request a reasonable accommodation for an ESA even when a property has a no-pet policy. The landlord must assess the request individually, and certain legal exceptions may apply.",
      },
      {
        question: "Should I tell my landlord about my ESA before moving into a new Colorado rental?",
        answer: "It is generally helpful to request an accommodation before moving in. This gives the landlord time to review the request and any supporting documentation. Keep a written record of your request and the landlord's response.",
      },
      {
        question: "Can a landlord charge an ESA pet deposit when I move into a new home in Colorado?",
        answer: "Generally, no. A landlord cannot charge a pet deposit or pet fee for an ESA approved as a reasonable accommodation under fair housing law. However, you may still be responsible for actual damage caused by your animal, subject to applicable law.",
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
    quickAnswer: "Residence halls and other on-campus student housing are generally treated as dwellings under the Fair Housing Act. Students with a documented disability can request an assistance animal as a reasonable accommodation in university housing. Each university reviews requests through its own disability services process and may request supporting documentation.",
    statuteCitation: "Fair Housing Act (42 U.S.C. § 3604(f)); Section 504 of the Rehabilitation Act of 1973 (29 U.S.C. § 794), which applies to programs receiving federal financial assistance; Colorado Anti-Discrimination Act (C.R.S. 24-34-502 and 24-34-502.2)",
    sections: [
      {
        title: "University Housing Under the Fair Housing Act",
        content: "Higher education residence halls are generally treated as dwellings under the FHA. Most Colorado universities have a disability services process for assistance animal requests in student housing. Policies differ by school and may have changed after HUD's May 2026 guidance, so check your university's current policy.",
      },
      {
        title: "The Campus Request Process",
        content: "Students should contact their campus Disability Services office as early as possible before move-in, since deadlines vary by university. Most schools have their own request form and may ask for supporting documentation from a licensed provider. The university reviews the request and may notify roommates or neighbors, depending on its policy.",
      },
    ],
    faqTitle: "FAQs About ESAs in College Dorms",
    faqSubtitle: "Find answers to every question regarding emotional support animals in student housing and college dorm accommodations.",
    faqs: [
      {
        question: "Do college dorms have to allow emotional support animals?",
        answer: "Residence halls are generally treated as dwellings under the Fair Housing Act, so students with a documented disability can request an assistance animal as a reasonable accommodation. Each university reviews requests under its own policy, and approval of an untrained ESA is not guaranteed since HUD's May 2026 guidance.",
      },
      {
        question: "How do I request an ESA in a Colorado college dorm?",
        answer: "Contact your campus Disability Services office early, since deadlines and forms vary by university. Submit your request with supporting documentation from a licensed provider, and do not bring the animal until you have written approval.",
      },
      {
        question: "Can my college ask for documentation or deny my request?",
        answer: "Yes. A university may request reasonable documentation of your disability-related need. It may deny or remove an animal that poses a direct threat or causes substantial damage, and you remain responsible for damage the animal causes.",
      },
      {
        question: "Can I bring my ESA to classes or the dining hall?",
        answer: "Generally not. An ESA accommodation covers university housing, usually your assigned room or suite. ADA public access rights in classrooms and dining areas apply to trained service dogs.",
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
    shortDesc: "Learn why online ESA registries, ID badges, and certificates carry no legal status, and what documentation housing providers can actually request.",
    quickAnswer: "There is no official ESA registry, government certification, or legally recognized ID card in Colorado. Registration numbers, badges, and vests do not provide legal housing protection. Under Colorado law, a housing provider may request reasonable documentation of your disability and need for the animal, which is typically a letter from a licensed professional.",
    statuteCitation: "Colorado Anti-Discrimination Act (C.R.S. 24-34-502 and 24-34-502.2, as amended by HB26-1045), which allows housing providers to request reasonable documentation. C.R.S. § 18-13-107.3 addresses intentional misrepresentation of entitlement to an assistance animal.",
    sections: [
      {
        title: "How Online ESA Registries Mislead Renters",
        content: "Many commercial websites advertise 'official lifetime ESA registration' for a fast fee. These certificates do not establish a disability or a disability-related need and carry no legal status. A housing provider may decline documentation that does not come from a licensed professional with knowledge of your condition.",
      },
      {
        title: "What Colorado Landlords Actually Require",
        content: "Housing providers commonly look for a letter on the provider's letterhead that includes the provider's name, license information, and date and confirms a disability-related need for the animal. The letter does not need to disclose a specific diagnosis.",
      },
    ],
    faqTitle: "Frequently Asked Questions About Why ESA Registries Are Not Valid in Colorado",
    faqSubtitle: "Get answers to common questions about ESA registries, certificates, and ID cards in Colorado.",
    faqs: [
      {
        question: "Is there an official ESA registry in Colorado?",
        answer: "No. There is no official state or federal ESA registry in Colorado, and registration is not required. Websites selling registration numbers, certificates, or ID cards do not provide legal housing protection.",
      },
      {
        question: "Do I need an ESA certificate, vest, or ID card for my housing accommodation?",
        answer: "No. Colorado law lets a housing provider request reasonable documentation of your disability and your need for the animal. This is typically a letter from a licensed professional, not a registry certificate, vest, or ID card.",
      },
      {
        question: "What documentation can a Colorado landlord ask for?",
        answer: "A landlord may request reasonable documentation of your disability and disability-related need for the animal, and may engage in a good-faith interactive process. They cannot require a registry listing, and a letter does not need to disclose a specific diagnosis.",
      },
      {
        question: "Is it illegal to misrepresent my pet as an assistance animal in Colorado?",
        answer: "Yes, in some cases. Colorado law (C.R.S. 18-13-107.3) penalizes intentionally misrepresenting an animal as an assistance animal to obtain housing accommodations when the person knows the animal or the disability is not genuine and has previously been warned. Check the current statute for penalties.",
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
    quickAnswer: "When submitting your ESA letter to a landlord, a clear written request helps create a record. This free template references the Fair Housing Act and Colorado law. There is no legally required format for an accommodation request.",
    statuteCitation: "Fair Housing Act (42 U.S.C. § 3604(f)(3)(B)); Colorado Anti-Discrimination Act (C.R.S. 24-34-502 and 24-34-502.2, as amended by HB26-1045).",
    sections: [
      {
        title: "Copy-Ready Colorado Landlord Request Template",
        content: "Subject: Request for Reasonable Accommodation under the Fair Housing Act - [Your Name] - Unit [Your Unit #]\n\nDear [Landlord / Property Manager Name],\n\nI am writing to formally request a reasonable accommodation under the federal Fair Housing Act (42 U.S.C. §§ 3601–3619) and the Colorado Anti-Discrimination Act (C.R.S. §§ 24-34-502 and 24-34-502.2). I have a disability-related need for an assistance animal (an emotional support animal).\n\nAttached is documentation from my licensed mental health professional, [Therapist Name, Credentials, CO License #], confirming my need for an ESA to support my daily functioning and equal enjoyment of my home.\n\nUnder Colorado law, allowing an assistance animal in housing is presumed to be a reasonable accommodation. I request that the pet restrictions in my lease be waived for this animal, and I am happy to discuss any questions you have about this request.\n\nThank you for your prompt attention to this matter. I appreciate your cooperation and look forward to your confirmation in writing.\n\nSincerely,\n[Your Name]\n[Your Contact Information]",
      },
    ],
    faqTitle: "FAQs About ESA Letter Template in Colorado",
    faqSubtitle: "Get answers to everything regarding an ESA letter template in Colorado, what it should include, and what information landlords check first in the ESA letter.",
    faqs: [
      {
        question: "Do I have to use a specific template to request an ESA accommodation in Colorado?",
        answer: "No. There is no legally required format for an accommodation request. A clear written request that identifies you, the animal, and your disability-related need helps create a record for your landlord and for you.",
      },
      {
        question: "What should an ESA request letter to a Colorado landlord include?",
        answer: "Include your name, address or unit number, a request for a reasonable accommodation for an assistance animal, and a reference to the Fair Housing Act and Colorado law. Attach supporting documentation from a licensed professional. You do not need to disclose a specific diagnosis.",
      },
      {
        question: "How should I send my ESA request to my landlord?",
        answer: "Send it by email for an electronic timestamp or by certified mail with return receipt requested. Keep a copy of the request, your attachments, and all responses.",
      },
      {
        question: "How long does a Colorado landlord have to respond to my ESA request?",
        answer: "There is no fixed deadline in the law. A housing provider is expected to respond within a reasonable time. If you do not hear back, follow up in writing.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "no-pet-apartments", "landlord-denials"],
  },
];
