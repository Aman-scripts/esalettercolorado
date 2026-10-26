export interface BlogCategory {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  pillarLink: string;
  pillarTitle: string;
}

export const blogCategories: BlogCategory[] = [
  {
    slug: "rights-housing",
    name: "ESA Laws & Housing Rights",
    h1: "ESA Housing Rights Articles for Colorado Renters",
    metaTitle: "ESA Housing Rights Articles for Colorado Renters",
    metaDescription: "Articles on ESA housing rights in Colorado: Fair Housing Act, state law, landlord denials, fees, and how to protect your accommodation request.",
    intro: "Learn how federal and Colorado fair housing laws protect your right to live with an emotional support animal without pet rent, deposits, or breed bans.",
    pillarLink: "/rights/",
    pillarTitle: "Colorado ESA Laws & Housing Rights: Complete Guide",
  },
  {
    slug: "qualifying-conditions",
    name: "Qualifying Conditions",
    h1: "Qualifying Conditions for an ESA: Articles & Guides",
    metaTitle: "Qualifying Conditions for an ESA: Articles & Guides",
    metaDescription: "Articles explaining which conditions may support an ESA letter in Colorado and how licensed therapists evaluate your need for an emotional support animal.",
    intro: "Explore how licensed therapists evaluate emotional and psychological symptoms, and how companion animals provide tangible daily therapeutic support.",
    pillarLink: "/conditions/",
    pillarTitle: "Who Qualifies for an Emotional Support Animal in Colorado?",
  },
  {
    slug: "colorado-cities",
    name: "Colorado Cities",
    h1: "Colorado City ESA Guides: Denver, Boulder & More",
    metaTitle: "Colorado City ESA Guides: Denver, Boulder & More",
    metaDescription: "City-specific ESA articles for Denver, Colorado Springs, Boulder, Fort Collins and more, covering local rentals, landlords, and housing resources.",
    intro: "City-specific guides tailored to Colorado renters, navigating local apartment markets, HOA rules, and student housing across the Centennial State.",
    pillarLink: "/locations/",
    pillarTitle: "ESA Letters in Colorado: City-by-City Guide",
  },
  {
    slug: "esa-lifestyle-care",
    name: "ESA Lifestyle & Care",
    h1: "ESA Lifestyle & Pet Care Tips for Colorado Owners",
    metaTitle: "ESA Lifestyle & Pet Care Tips for Colorado Owners",
    metaDescription: "Practical tips for living with an emotional support animal in Colorado: daily care, travel, apartment etiquette, and keeping your ESA healthy.",
    intro: "Practical advice on responsible apartment living, wellness routines, travel regulations, and creating harmonious living spaces with your companion animal.",
    pillarLink: "/conditions/",
    pillarTitle: "Qualifying Conditions & Lifestyle Support",
  },
  {
    slug: "landlord-tenant-guides",
    name: "Landlord & Tenant Guides",
    h1: "Landlord & Tenant ESA Guides for Colorado",
    metaTitle: "Landlord & Tenant ESA Guides for Colorado",
    metaDescription: "Plain-language guides for Colorado tenants and landlords on ESA requests, documentation, communication, and resolving common disputes.",
    intro: "Step-by-step guidance for effective, professional communication between tenants and Colorado property managers regarding assistance animals.",
    pillarLink: "/rights/",
    pillarTitle: "Colorado Housing Laws & Legal Rights",
  },
  {
    slug: "news-policy-updates",
    name: "News & Policy Updates",
    h1: "Colorado ESA News & Policy Updates",
    metaTitle: "Colorado ESA News & Policy Updates",
    metaDescription: "Stay current on Colorado and federal ESA news, law changes, and HUD guidance that affect renters and landlords with emotional support animals.",
    intro: "Breaking news, legislative developments, HUD circulars, and judicial rulings affecting assistance animals and renters across Colorado.",
    pillarLink: "/rights/",
    pillarTitle: "Colorado Housing Laws & Legislation",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  categorySlug: string;
  categoryName: string;
  publishDate: string;
  updatedDate: string;
  authorName: string;
  authorCredentials: string;
  authorVerificationUrl: string;
  readTime: string;
  siloLink: string;
  siloTitle: string;
  sections: {
    heading: string;
    content: string;
  }[];
  relatedPostSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "esa-letter-vs-pet-rent-colorado",
    title: "ESA Letters vs Pet Rent in Colorado: What Landlords Can Charge",
    metaTitle: "ESA vs Pet Rent in Colorado: What Landlords Can Charge",
    metaDescription: "Pet rent and deposits generally don't apply to valid ESAs in Colorado. Learn what landlords can charge, what they can't, and how to respond.",
    categorySlug: "rights-housing",
    categoryName: "ESA Laws & Housing Rights",
    publishDate: "October 10, 2026",
    updatedDate: "October 16, 2026",
    authorName: "Dr. Elena Vance, Psy.D., LP",
    authorCredentials: "Licensed Psychologist (CO #PSY.0004812)",
    authorVerificationUrl: "https://dpo.colorado.gov/",
    readTime: "5 min read",
    siloLink: "/rights/pet-deposits-and-fees/",
    siloTitle: "Pet Deposits, Pet Rent and ESAs in Colorado",
    sections: [
      {
        heading: "Pets vs Assistance Animals Under Colorado Law",
        content: "Under federal HUD guidelines and Colorado HB26-1045, an emotional support animal is categorized as an assistance animal, not a pet. Consequently, standard lease clauses regarding pet fees, non-refundable deposits, and monthly pet surcharges do not legally apply to verified ESAs.",
      },
      {
        heading: "What Fees Landlords Cannot Legally Charge",
        content: "Colorado housing providers cannot charge monthly pet rent ($30–$75/mo), pet application fees, or upfront pet security deposits ($200–$600). Charging these fees against an assistance animal handler violates the Fair Housing Act by imposing a financial penalty on a person with a disability.",
      },
      {
        heading: "Damage Costs That Can Lawfully Apply",
        content: "While landlords cannot charge advance pet fees, tenants remain responsible for any actual physical damage the animal causes to the premises beyond normal wear and tear. If carpet replacement or drywall repair is necessary, costs can be deducted from the standard security deposit.",
      },
    ],
    relatedPostSlugs: ["signs-of-a-fake-esa-letter", "how-long-is-an-esa-letter-valid"],
  },
  {
    slug: "signs-of-a-fake-esa-letter",
    title: "Signs of a Fake ESA Letter (and How Landlords Spot Them)",
    metaTitle: "Signs of a Fake ESA Letter (and How Landlords Spot Them)",
    metaDescription: "Learn the warning signs of a fake ESA letter or registry scam in Colorado, and what a valid letter from a licensed professional should include.",
    categorySlug: "rights-housing",
    categoryName: "ESA Laws & Housing Rights",
    publishDate: "October 8, 2026",
    updatedDate: "October 15, 2026",
    authorName: "Dr. Elena Vance, Psy.D., LP",
    authorCredentials: "Licensed Psychologist (CO #PSY.0004812)",
    authorVerificationUrl: "https://dpo.colorado.gov/",
    readTime: "6 min read",
    siloLink: "/requirements/",
    siloTitle: "Colorado ESA Letter Requirements & Valid Checklist",
    sections: [
      {
        heading: "Red Flags in Fraudulent ESA Letters",
        content: "Commercial websites offering instant approvals in 5 minutes without clinical interaction are immediately recognized as invalid by property managers. Other red flags include letters from out-of-state providers with no Colorado license, missing professional letterhead, and vague boilerplate text.",
      },
      {
        heading: "Registry and Certificate Scams",
        content: "Websites advertising 'official federal registry certificates' or ID badges sell worthless novelty items. HUD specifically instructed housing providers in 2020 that online registration numbers and ID cards do not substantiate a disability accommodation.",
      },
      {
        heading: "How to Verify a Legitimate Provider in Colorado",
        content: "A genuine letter must include the provider's active Colorado license number, professional credentials, contact information, and license type, which any landlord can verify directly through the Colorado Division of Professions and Occupations (DORA) online database.",
      },
    ],
    relatedPostSlugs: ["esa-letter-vs-pet-rent-colorado", "how-long-is-an-esa-letter-valid"],
  },
  {
    slug: "how-long-is-an-esa-letter-valid",
    title: "How Long Is an ESA Letter Valid in Colorado?",
    metaTitle: "How Long Is an ESA Letter Valid in Colorado?",
    metaDescription: "ESA letters do not have a single legal expiration date. See how long landlords expect them to be current and when to renew in Colorado.",
    categorySlug: "rights-housing",
    categoryName: "ESA Laws & Housing Rights",
    publishDate: "October 6, 2026",
    updatedDate: "October 14, 2026",
    authorName: "Marcus Holloway, LCSW",
    authorCredentials: "Clinical Social Worker (CO #CSW.0993411)",
    authorVerificationUrl: "https://dpo.colorado.gov/",
    readTime: "4 min read",
    siloLink: "/renewal/",
    siloTitle: "ESA Letter Renewal in Colorado: When & How to Renew",
    sections: [
      {
        heading: "Is There a Statutory Expiration Date?",
        content: "Federal law does not explicitly assign an expiration date to ESA documentation. However, housing providers and courts broadly apply HUD's standard that medical documentation should reflect the tenant's current functional condition—meaning letters should be dated within the last 12 months.",
      },
      {
        heading: "What Colorado Landlords Expect",
        content: "Most Colorado property managers require annual re-verification upon lease renewal. Providing an up-to-date letter from your licensed therapist guarantees uninterrupted housing protections without administrative disputes.",
      },
      {
        heading: "How the Re-Evaluation Process Works",
        content: "Renewing your letter is typically an abbreviated clinical check-in confirming that your condition continues to benefit from your animal's presence.",
      },
    ],
    relatedPostSlugs: ["esa-letter-vs-pet-rent-colorado", "signs-of-a-fake-esa-letter"],
  },
  {
    slug: "esa-and-college-housing-in-colorado",
    title: "ESAs in Colorado College Housing: What Students Should Know",
    metaTitle: "ESAs in Colorado College Housing: What Students Should Know",
    metaDescription: "Planning to live on campus with an ESA in Colorado? See how the Fair Housing Act applies, when to request, and what schools may ask for.",
    categorySlug: "rights-housing",
    categoryName: "ESA Laws & Housing Rights",
    publishDate: "October 4, 2026",
    updatedDate: "October 12, 2026",
    authorName: "Sarah Lindqvist, LPC",
    authorCredentials: "Licensed Professional Counselor (CO #LPC.0016429)",
    authorVerificationUrl: "https://dpo.colorado.gov/",
    readTime: "5 min read",
    siloLink: "/rights/college-dorm-esa/",
    siloTitle: "ESAs in Colorado College Dorms & Student Housing",
    sections: [
      {
        heading: "FHA Protections in University Residence Halls",
        content: "Dormitories and university apartments at CU Boulder, CSU, DU, Colorado School of Mines, and UNC are covered under the Fair Housing Act. Eligible students cannot be denied housing with an ESA or charged extra dorm fees.",
      },
      {
        heading: "Request Timeline and Documentation",
        content: "Campus disability services typically require accommodation paperwork 30 to 60 days before semester move-in. Submit your Colorado therapist letter early to secure pet-accessible room assignments.",
      },
    ],
    relatedPostSlugs: ["how-to-talk-to-your-landlord-about-your-esa", "esa-letter-vs-pet-rent-colorado"],
  },
  {
    slug: "how-to-talk-to-your-landlord-about-your-esa",
    title: "How to Talk to Your Landlord About Your ESA",
    metaTitle: "How to Talk to Your Landlord About Your ESA",
    metaDescription: "Step-by-step tips for asking your Colorado landlord for an ESA accommodation: what to say, what to send, and how to keep everything in writing.",
    categorySlug: "landlord-tenant-guides",
    categoryName: "Landlord & Tenant Guides",
    publishDate: "October 3, 2026",
    updatedDate: "October 11, 2026",
    authorName: "Marcus Holloway, LCSW",
    authorCredentials: "Clinical Social Worker (CO #CSW.0993411)",
    authorVerificationUrl: "https://dpo.colorado.gov/",
    readTime: "5 min read",
    siloLink: "/rights/no-pet-apartments/",
    siloTitle: "ESAs in No-Pet Apartments in Colorado",
    sections: [
      {
        heading: "Before You Approach Your Landlord",
        content: "Ensure your ESA letter is complete, signed by an active Colorado-licensed therapist, and dated within the past 12 months. Review your lease's pet clauses so you know exactly which terms will be waived.",
      },
      {
        heading: "What to Say in Your Written Request",
        content: "Frame your request professionally as a 'Request for Reasonable Accommodation under the Fair Housing Act.' State clearly that your animal is an assistance animal and attach your provider's letter.",
      },
      {
        heading: "Following Up in Writing",
        content: "Always maintain an electronic paper trail. Avoid verbal agreements and request written confirmation that pet fees have been waived from your rental ledger.",
      },
    ],
    relatedPostSlugs: ["what-landlords-can-ask-about-your-esa", "colorado-esa-law-changes-2026"],
  },
  {
    slug: "what-landlords-can-ask-about-your-esa",
    title: "What Can Colorado Landlords Ask About Your ESA?",
    metaTitle: "What Can Colorado Landlords Ask About Your ESA?",
    metaDescription: "Learn what questions and documents a Colorado landlord may request for an ESA, and which requests, such as medical records or fees, go too far.",
    categorySlug: "landlord-tenant-guides",
    categoryName: "Landlord & Tenant Guides",
    publishDate: "October 2, 2026",
    updatedDate: "October 10, 2026",
    authorName: "Dr. Elena Vance, Psy.D., LP",
    authorCredentials: "Licensed Psychologist (CO #PSY.0004812)",
    authorVerificationUrl: "https://dpo.colorado.gov/",
    readTime: "5 min read",
    siloLink: "/rights/landlord-denials/",
    siloTitle: "What to Do If a Landlord Denies Your ESA",
    sections: [
      {
        heading: "Reasonable Questions Landlords Can Ask",
        content: "Landlords can verify that your healthcare provider is licensed in Colorado and confirm that the letter authenticates a disability-related need for an assistance animal.",
      },
      {
        heading: "Unlawful Questions That Overstep HUD Boundaries",
        content: "Landlords cannot demand medical history, therapy session notes, psychiatric diagnostic details, or require an animal to undergo behavioral testing.",
      },
    ],
    relatedPostSlugs: ["how-to-talk-to-your-landlord-about-your-esa", "colorado-esa-law-changes-2026"],
  },
  {
    slug: "colorado-esa-law-changes-2026",
    title: "Colorado ESA Law Changes in 2026: What Renters Need to Know",
    metaTitle: "Colorado ESA Law Changes in 2026: What Renters Need to Know",
    metaDescription: "A plain-language summary of Colorado's 2026 assistance animal housing law (HB26-1045) and what it may mean for renters with emotional support animals.",
    categorySlug: "news-policy-updates",
    categoryName: "News & Policy Updates",
    publishDate: "October 1, 2026",
    updatedDate: "October 18, 2026",
    authorName: "Dr. Elena Vance, Psy.D., LP",
    authorCredentials: "Licensed Psychologist (CO #PSY.0004812)",
    authorVerificationUrl: "https://dpo.colorado.gov/",
    readTime: "6 min read",
    siloLink: "/rights/colorado-hb26-1045-explained/",
    siloTitle: "Colorado HB26-1045 Explained: Full Legal Overview",
    sections: [
      {
        heading: "What Changed in 2026",
        content: "Colorado HB26-1045 establishes standardized rules for emotional support animal documentation, requiring genuine provider-patient evaluations and clarifying landlords' verification rights while protecting tenants from intrusive medical probing.",
      },
      {
        heading: "Who Is Affected by the Statute",
        content: "All renters seeking assistance animal accommodations in Colorado multi-family properties, townhomes, and condos are affected. It cracks down on out-of-state instant certificate mills while strengthening valid letters from Colorado practitioners.",
      },
    ],
    relatedPostSlugs: ["what-landlords-can-ask-about-your-esa", "signs-of-a-fake-esa-letter"],
  },
  {
    slug: "esa-for-renters-in-denver",
    title: "Renting in Denver With an ESA: A Practical Guide",
    metaTitle: "Renting in Denver With an ESA: A Practical Guide",
    metaDescription: "Looking for a Denver rental with your emotional support animal? Learn how to prepare your documents, approach landlords, and handle common issues.",
    categorySlug: "colorado-cities",
    categoryName: "Colorado Cities",
    publishDate: "September 28, 2026",
    updatedDate: "October 8, 2026",
    authorName: "Marcus Holloway, LCSW",
    authorCredentials: "Clinical Social Worker (CO #CSW.0993411)",
    authorVerificationUrl: "https://dpo.colorado.gov/",
    readTime: "5 min read",
    siloLink: "/locations/denver/",
    siloTitle: "ESA Letters in Denver, CO: Renter Rights Guide",
    sections: [
      {
        heading: "Preparing Your Documents for Denver Landlords",
        content: "Ensure your letter comes from a clinician registered with the Colorado Department of Regulatory Agencies (DORA) with a verifiable Denver or Colorado office address.",
      },
      {
        heading: "Navigating High-Density Denver Apartment Portals",
        content: "Many Denver buildings use automated portals like PetScreening. Submit your therapist letter directly to bypass mandatory pet screening fees.",
      },
    ],
    relatedPostSlugs: ["esa-friendly-apartments-colorado-springs", "esa-letter-vs-pet-rent-colorado"],
  },
  {
    slug: "esa-friendly-apartments-colorado-springs",
    title: "Finding ESA-Friendly Apartments in Colorado Springs",
    metaTitle: "Finding ESA-Friendly Apartments in Colorado Springs",
    metaDescription: "Tips for finding apartments in Colorado Springs that welcome ESAs: what to ask, how to submit your letter, and your rights if a leasing office pushes back.",
    categorySlug: "colorado-cities",
    categoryName: "Colorado Cities",
    publishDate: "September 25, 2026",
    updatedDate: "October 7, 2026",
    authorName: "Sarah Lindqvist, LPC",
    authorCredentials: "Licensed Professional Counselor (CO #LPC.0016429)",
    authorVerificationUrl: "https://dpo.colorado.gov/",
    readTime: "5 min read",
    siloLink: "/locations/colorado-springs/",
    siloTitle: "ESA Letters in Colorado Springs, CO: Renter Rights Guide",
    sections: [
      {
        heading: "What to Ask Colorado Springs Leasing Offices",
        content: "Ask how their management company handles reasonable accommodation requests and request their formal disability coordinator contact information.",
      },
      {
        heading: "Submitting Your Letter in El Paso County",
        content: "Include your therapist's license details and a copy of standard El Paso County rabies vaccination records.",
      },
    ],
    relatedPostSlugs: ["esa-for-renters-in-denver", "esa-letter-vs-pet-rent-colorado"],
  },
  {
    slug: "esa-vs-therapy-animal",
    title: "ESA vs Therapy Animal: What's the Difference?",
    metaTitle: "ESA vs Therapy Animal: What's the Difference?",
    metaDescription: "Emotional support animals, therapy animals, and service animals are not the same. See how each is defined and what rights each has in Colorado.",
    categorySlug: "qualifying-conditions",
    categoryName: "Qualifying Conditions",
    publishDate: "September 22, 2026",
    updatedDate: "October 5, 2026",
    authorName: "Dr. Elena Vance, Psy.D., LP",
    authorCredentials: "Licensed Psychologist (CO #PSY.0004812)",
    authorVerificationUrl: "https://dpo.colorado.gov/",
    readTime: "5 min read",
    siloLink: "/rights/esa-vs-service-animal/",
    siloTitle: "ESA vs Service Animal in Colorado: Full Breakdown",
    sections: [
      {
        heading: "Definitions: ESA vs Therapy Dog vs Service Dog",
        content: "Therapy animals visit hospitals and schools to comfort others and do not possess housing rights. ESAs live with their specific owner to mitigate disability symptoms and are protected under the Fair Housing Act.",
      },
      {
        heading: "Which One Applies to Your Needs",
        content: "If you need an animal to live in your apartment free of pet restrictions to alleviate anxiety or depression, you require an emotional support animal evaluation.",
      },
    ],
    relatedPostSlugs: ["what-if-you-dont-qualify-for-an-esa-letter", "traveling-with-an-esa"],
  },
  {
    slug: "what-if-you-dont-qualify-for-an-esa-letter",
    title: "What If You Don't Qualify for an ESA Letter?",
    metaTitle: "What If You Don't Qualify for an ESA Letter?",
    metaDescription: "A licensed therapist decides whether you qualify for an ESA letter. Learn why some people don't, and what other support options may help.",
    categorySlug: "qualifying-conditions",
    categoryName: "Qualifying Conditions",
    publishDate: "September 19, 2026",
    updatedDate: "October 3, 2026",
    authorName: "Dr. Elena Vance, Psy.D., LP",
    authorCredentials: "Licensed Psychologist (CO #PSY.0004812)",
    authorVerificationUrl: "https://dpo.colorado.gov/",
    readTime: "4 min read",
    siloLink: "/conditions/",
    siloTitle: "Who Qualifies for an ESA in Colorado?",
    sections: [
      {
        heading: "How Clinical Eligibility Is Decided",
        content: "A mental health professional must determine that you have an identifiable impairment that substantially limits major life functions and that an animal provides therapeutic benefit.",
      },
      {
        heading: "Our 100% Money-Back Guarantee",
        content: "If your evaluating therapist determines during your assessment that an ESA is not clinically appropriate for your situation, our service fee is fully refunded.",
      },
    ],
    relatedPostSlugs: ["esa-vs-therapy-animal", "traveling-with-an-esa"],
  },
  {
    slug: "traveling-with-an-esa",
    title: "Traveling With an Emotional Support Animal: What to Know",
    metaTitle: "Traveling With an Emotional Support Animal: What to Know",
    metaDescription: "Airline rules for emotional support animals have changed. Learn what travelers with an ESA should know about flights, hotels, and road trips.",
    categorySlug: "esa-lifestyle-care",
    categoryName: "ESA Lifestyle & Care",
    publishDate: "September 15, 2026",
    updatedDate: "October 1, 2026",
    authorName: "Sarah Lindqvist, LPC",
    authorCredentials: "Licensed Professional Counselor (CO #LPC.0016429)",
    authorVerificationUrl: "https://dpo.colorado.gov/",
    readTime: "5 min read",
    siloLink: "/conditions/",
    siloTitle: "ESA Qualifying Conditions and Guidelines",
    sections: [
      {
        heading: "Current Airline Rules (Air Carrier Access Act)",
        content: "Following Department of Transportation regulatory updates, airlines are no longer required to accept ESAs in passenger cabins for free. Most airlines treat ESAs under standard pet-in-cabin rules and fees.",
      },
      {
        heading: "Hotels and Temporary Vacation Rentals",
        content: "Hotels and short-term rentals (such as Airbnb) fall under Title III of the ADA rather than the Fair Housing Act and may choose whether or not to accommodate emotional support animals.",
      },
    ],
    relatedPostSlugs: ["caring-for-your-emotional-support-animal", "esa-vs-therapy-animal"],
  },
  {
    slug: "caring-for-your-emotional-support-animal",
    title: "Caring for Your Emotional Support Animal in Colorado",
    metaTitle: "Caring for Your Emotional Support Animal in Colorado",
    metaDescription: "Daily care tips for emotional support animals in Colorado: routines, vet care, and being a good neighbor in shared housing.",
    categorySlug: "esa-lifestyle-care",
    categoryName: "ESA Lifestyle & Care",
    publishDate: "September 12, 2026",
    updatedDate: "September 29, 2026",
    authorName: "Sarah Lindqvist, LPC",
    authorCredentials: "Licensed Professional Counselor (CO #LPC.0016429)",
    authorVerificationUrl: "https://dpo.colorado.gov/",
    readTime: "5 min read",
    siloLink: "/rights/",
    siloTitle: "Colorado ESA Laws & Housing Rights",
    sections: [
      {
        heading: "Daily Routine and Emotional Co-Regulation",
        content: "High-altitude Colorado winters and active summers require thoughtful care routines to ensure your animal remains healthy and physically fulfilled.",
      },
      {
        heading: "Being a Good Neighbor in Multi-Family Housing",
        content: "Assistance animals must not create excessive noise, aggressive barking, or unsanitary conditions. Maintaining good pet etiquette preserves your legal protections.",
      },
    ],
    relatedPostSlugs: ["traveling-with-an-esa", "esa-vs-therapy-animal"],
  },
];
