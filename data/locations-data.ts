export interface CityInfo {
  slug: string;
  name: string;
  county: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  shortDesc: string;
  quickAnswer: string;
  rentalStats: {
    avgRent: string;
    renterPct: string;
    petDepositAvg: string;
    monthlyPetRentAvg: string;
  };
  localOrdinances: string;
  localResources: { name: string; url: string; note: string }[];
  marketSnapshot: string;
  propertyManagerPractices: string;
  neighborhoodNotes: string;
  faqs: { question: string; answer: string }[];
}

export const coloradoCities: CityInfo[] = [
  {
    slug: "denver",
    name: "Denver",
    county: "Denver County",
    title: "ESA Letters in Denver, Colorado",
    h1: "ESA Letters in Denver, CO | Renter Rights Guide",
    metaTitle: "ESA Letters in Denver, CO | Renter Rights Guide [47 chars]",
    metaDescription: "Renting in Denver? Learn how ESA rights apply, what Denver landlords and property managers typically ask for, and how to get a valid ESA letter. [144 chars]",
    shortDesc: "Renter protections across LoDo, Capitol Hill, RiNo, Highlands, and Greater Denver.",
    quickAnswer: "In Denver, emotional support animals are fully protected under the federal Fair Housing Act and Colorado HB26-1045. Denver landlords cannot charge pet deposits, pet rent, or enforce the city's historical or building-specific breed restrictions against a verified ESA handler.",
    rentalStats: {
      avgRent: "$1,980 / mo",
      renterPct: "50.4%",
      petDepositAvg: "$300–$500",
      monthlyPetRentAvg: "$35–$60 / mo",
    },
    localOrdinances: "Denver Municipal Code Chapter 8 requires all dogs to be licensed and vaccinated for rabies, but municipal pet limits (such as Denver's 3-dog limit) cannot unreasonably restrict a documented disability accommodation under HUD FHEO-2020-01.",
    localResources: [
      { name: "Denver Department of Housing Stability (HOST)", url: "https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Department-of-Housing-Stability", note: "Denver tenant rights and housing support" },
      { name: "Colorado Civil Rights Division (CCRD) - Denver Office", url: "https://ccrd.colorado.gov/", note: "State fair housing enforcement headquarters" },
      { name: "Denver Community Mediation Program", url: "https://denvergov.org/", note: "Free landlord-tenant dispute mediation" },
    ],
    marketSnapshot: "Denver's rental market features high concentrations of institutional multi-family communities in RiNo, LoDo, Cherry Creek, and the Denver Tech Center. Over 50% of Denver households rent, making assistance animal accommodations a frequent item for leasing offices.",
    propertyManagerPractices: "Large corporate property managers (Greystar, Holland Residential, Equity Residential) in Denver frequently utilize third-party verification portals like PetScreening.com. Under Colorado HB26-1045, they must accept valid Colorado-licensed therapist letters without charging tenants verification fees.",
    neighborhoodNotes: "In high-density historic neighborhoods like Capitol Hill and Congress Park, older brick conversion buildings with strict 'no dog' rules must accommodate valid ESAs.",
    faqs: [
      {
        question: "Can a Denver apartment charge me pet rent if I have an ESA letter?",
        answer: "No. Federal Fair Housing Act rules and Colorado law prohibit Denver landlords from charging pet rent or pet deposits for an emotional support animal.",
      },
      {
        question: "Does Denver's pit bull breed restriction apply to ESAs?",
        answer: "No. The Fair Housing Act preempts local breed restrictions. If your ESA is a pit bull or bully breed mix, a Denver housing provider cannot deny you based on breed.",
      },
    ],
  },
  {
    slug: "colorado-springs",
    name: "Colorado Springs",
    county: "El Paso County",
    title: "ESA Letters in Colorado Springs, Colorado",
    h1: "ESA Letters in Colorado Springs, CO | Renter Rights Guide",
    metaTitle: "ESA Letters in Colorado Springs, CO | Renter Rights Guide [57 chars]",
    metaDescription: "Renting in Colorado Springs? Learn how ESA rights apply, what to know for apartments and military-area rentals, and how to get a valid ESA letter. [146 chars]",
    shortDesc: "Protections for renters near Fort Carson, Peterson SFB, Downtown, and Briargate.",
    quickAnswer: "Colorado Springs renters and military families are protected under the Fair Housing Act and Colorado law. Landlords, HOA boards, and private landlords near military installations cannot refuse a valid ESA letter from a Colorado-licensed mental health professional.",
    rentalStats: {
      avgRent: "$1,620 / mo",
      renterPct: "42.1%",
      petDepositAvg: "$250–$400",
      monthlyPetRentAvg: "$30–$50 / mo",
    },
    localOrdinances: "El Paso County and City of Colorado Springs animal code requires rabies vaccinations. Off-base private military housing operators are fully subject to FHA accommodation laws.",
    localResources: [
      { name: "Colorado Springs Housing Authority", url: "https://csha.us/", note: "Public housing and voucher compliance" },
      { name: "Silver Key Coalition", url: "https://www.silverkey.org/", note: "Senior and disabled housing resources" },
    ],
    marketSnapshot: "Colorado Springs has a high concentration of military service members, veterans, and defense personnel living near Fort Carson, the Air Force Academy, and Peterson Space Force Base. Many service members utilize ESAs to manage service-related trauma and stress.",
    propertyManagerPractices: "Property management companies in northern Colorado Springs and Briargate frequently manage HOA-controlled townhomes. In every case, federal assistance animal protections override restrictive HOA pet caps.",
    neighborhoodNotes: "Downtown, Broadmoor, and Powers corridor apartments must promptly evaluate written accommodation requests.",
    faqs: [
      {
        question: "Do off-base apartments in Colorado Springs have to accept my ESA?",
        answer: "Yes. All civilian off-base rental properties in Colorado Springs are bound by the Fair Housing Act and must accommodate valid emotional support animals.",
      },
    ],
  },
  {
    slug: "aurora",
    name: "Aurora",
    county: "Arapahoe & Adams Counties",
    title: "ESA Letters in Aurora, Colorado",
    h1: "ESA Letters in Aurora, CO | Renter Rights Guide",
    metaTitle: "ESA Letters in Aurora, CO | Renter Rights Guide [47 chars]",
    metaDescription: "Renting in Aurora? Learn how ESA rights apply, how large apartment communities handle requests, and how to get a valid ESA letter. [130 chars]",
    shortDesc: "Tenant guidelines near Anschutz Medical Campus, City Center, and Southeast Aurora.",
    quickAnswer: "In Aurora, assistance animals are exempt from all pet restrictions and municipal breed limits under federal and Colorado fair housing laws. Whether renting near the CU Anschutz Medical Campus or in single-family residential communities, your ESA rights are guaranteed.",
    rentalStats: {
      avgRent: "$1,780 / mo",
      renterPct: "43.8%",
      petDepositAvg: "$300–$450",
      monthlyPetRentAvg: "$35–$55 / mo",
    },
    localOrdinances: "Aurora previously had a municipal breed ban that was overturned. Furthermore, federal FHA law always exempts individual assistance animals from municipal and building breed policies.",
    localResources: [
      { name: "Aurora Housing Authority", url: "https://aurorahousing.org/", note: "Subsidized and fair housing compliance" },
      { name: "Colorado Legal Services - Adams/Arapahoe", url: "https://www.coloradolegalservices.org/", note: "Low-income tenant representation" },
    ],
    marketSnapshot: "Aurora features major medical institutions, biotech hubs, and sprawling multi-unit master-planned developments. Many healthcare workers and students residing near Anschutz rely on ESAs for emotional decompression.",
    propertyManagerPractices: "Leasing offices in Aurora typically process accommodation paperwork within 7 to 10 days upon receiving an in-state licensed therapist letter.",
    neighborhoodNotes: "Suburban communities around Cherry Creek State Park and Nine Mile Station must comply fully with HUD reasonable accommodation guidelines.",
    faqs: [
      {
        question: "Can an Aurora landlord charge me an application fee for my ESA?",
        answer: "No. Charging fees to process an assistance animal accommodation is illegal under the Fair Housing Act.",
      },
    ],
  },
  {
    slug: "fort-collins",
    name: "Fort Collins",
    county: "Larimer County",
    title: "ESA Letters in Fort Collins, Colorado",
    h1: "ESA Letters in Fort Collins, CO | Renter Rights Guide",
    metaTitle: "ESA Letters in Fort Collins, CO | Renter Rights Guide [53 chars]",
    metaDescription: "Renting in Fort Collins? Learn how ESA rights apply, how student housing near CSU handles requests, and how to get a valid ESA letter. [134 chars]",
    shortDesc: "Student and renter rights near Colorado State University, Old Town, and Midtown.",
    quickAnswer: "Fort Collins renters and Colorado State University (CSU) students have protected ESA rights under federal and Colorado law. On-campus dorms and off-campus student complexes must grant reasonable accommodations without charging extra animal rent or security deposits.",
    rentalStats: {
      avgRent: "$1,720 / mo",
      renterPct: "47.2%",
      petDepositAvg: "$250–$400",
      monthlyPetRentAvg: "$30–$50 / mo",
    },
    localOrdinances: "Fort Collins municipal rules require dog licensing through Larimer County Humane Society. The city's famous 'U+2' occupancy limit cannot be used as a pretense to deny an assistance animal.",
    localResources: [
      { name: "CSU Student Disability Center", url: "https://disabilitycenter.colostate.edu/", note: "University housing accommodation office" },
      { name: "Fort Collins Housing Authority (Housing Catalyst)", url: "https://housingcatalyst.com/", note: "Local housing resources" },
    ],
    marketSnapshot: "As home to CSU, Fort Collins has a dynamic student and academic rental population. Student housing operators frequently handle high volumes of assistance animal accommodation requests.",
    propertyManagerPractices: "Off-campus apartment complexes near Prospect and Shields cannot steer students into inferior units because they have an ESA.",
    neighborhoodNotes: "Old Town Victorians and modern student apartment towers must adhere to identical FHA standards.",
    faqs: [
      {
        question: "Does CSU housing allow emotional support animals in dorms?",
        answer: "Yes. Students can request an ESA in residence halls by submitting their Colorado-licensed provider letter through the Student Disability Center.",
      },
    ],
  },
  {
    slug: "boulder",
    name: "Boulder",
    county: "Boulder County",
    title: "ESA Letters in Boulder, Colorado",
    h1: "ESA Letters in Boulder, CO | Renter Rights Guide",
    metaTitle: "ESA Letters in Boulder, CO | Renter Rights Guide [48 chars]",
    metaDescription: "Renting in Boulder? Learn how ESA rights apply, what to know in a high-cost, student-heavy market, and how to get a valid ESA letter. [133 chars]",
    shortDesc: "Comprehensive guide for CU Boulder students, faculty, and renters on the Hill and Table Mesa.",
    quickAnswer: "In Boulder's competitive, high-cost rental market, emotional support animals provide essential therapeutic support. Landlords in Boulder cannot use pet policies, HOA restrictions, or competitive application conditions to reject tenants who present valid Colorado ESA documentation.",
    rentalStats: {
      avgRent: "$2,250 / mo",
      renterPct: "52.3%",
      petDepositAvg: "$350–$600",
      monthlyPetRentAvg: "$45–$75 / mo",
    },
    localOrdinances: "City of Boulder animal ordinances require voice and sight tags for open spaces, but residential dwellings are governed by the federal Fair Housing Act.",
    localResources: [
      { name: "CU Boulder Disability Services", url: "https://www.colorado.edu/disabilityservices/", note: "Residence hall accommodations" },
      { name: "Boulder Community Mediation Service", url: "https://bouldercolorado.gov/", note: "Tenant and landlord resolution" },
    ],
    marketSnapshot: "With over 52% of Boulder residents renting and historically low vacancy rates, housing providers often have strict rules. However, federal fair housing rules protect tenants with legitimate healthcare provider letters.",
    propertyManagerPractices: "Boulder property managers are experienced with assistance animal requests but closely scrutinize documentation to ensure providers hold valid Colorado DORA licenses.",
    neighborhoodNotes: "From University Hill to North Boulder, ESA handlers cannot be excluded from rentals or charged monthly pet fees.",
    faqs: [
      {
        question: "Can a Boulder landlord deny an ESA because the apartment is small?",
        answer: "No. Small square footage does not constitute a valid legal reason to deny a reasonable accommodation for an assistance animal.",
      },
    ],
  },
  {
    slug: "lakewood",
    name: "Lakewood",
    county: "Jefferson County",
    title: "ESA Letters in Lakewood, Colorado",
    h1: "ESA Letters in Lakewood, CO | Renter Rights Guide",
    metaTitle: "ESA Letters in Lakewood, CO | Renter Rights Guide [49 chars]",
    metaDescription: "Renting in Lakewood? Learn how ESA rights apply, how Lakewood apartments and condos handle requests, and how to get a valid ESA letter. [135 chars]",
    shortDesc: "Renter protections near Belmar, West Colfax, and Green Mountain.",
    quickAnswer: "Lakewood renters are fully protected by Colorado HB26-1045 and the Fair Housing Act. Multi-family complexes in Belmar and throughout Jefferson County must waive all pet deposits, fees, and pet restrictions for documented emotional support animals.",
    rentalStats: {
      avgRent: "$1,750 / mo",
      renterPct: "44.6%",
      petDepositAvg: "$300–$450",
      monthlyPetRentAvg: "$35–$55 / mo",
    },
    localOrdinances: "Jefferson County and Lakewood animal regulations enforce standard leash laws in public areas; indoor private residential accommodations are covered under FHA.",
    localResources: [
      { name: "Metro West Housing Solutions", url: "https://mwhsolutions.org/", note: "Lakewood housing authority" },
      { name: "Colorado Civil Rights Division", url: "https://ccrd.colorado.gov/", note: "Fair housing complaints" },
    ],
    marketSnapshot: "Lakewood combines modern apartment developments near Belmar with established townhome and condominium associations along Green Mountain and Alameda Avenue.",
    propertyManagerPractices: "Property managers must process accommodation requests without imposing administrative screening fees on assistance animal handlers.",
    neighborhoodNotes: "Condominium HOAs in Lakewood cannot enforce pet weight limitations against valid ESAs.",
    faqs: [
      {
        question: "Can a Lakewood condo HOA fine me for having an ESA?",
        answer: "No. Fining a tenant or owner for an assistance animal is an unlawful violation of fair housing statutes.",
      },
    ],
  },
  {
    slug: "pueblo",
    name: "Pueblo",
    county: "Pueblo County",
    title: "ESA Letters in Pueblo, Colorado",
    h1: "ESA Letters in Pueblo, CO | Renter Rights Guide",
    metaTitle: "ESA Letters in Pueblo, CO | Renter Rights Guide [47 chars]",
    metaDescription: "Renting in Pueblo? Learn how ESA rights apply, what to know about local rentals, and how to get a valid ESA letter. [115 chars]",
    shortDesc: "Tenant rights and assistance animal accommodations in Southern Colorado.",
    quickAnswer: "Pueblo tenants have full statutory protection for emotional support animals under Colorado state and federal laws. Landlords in Pueblo must accept legitimate ESA documentation from Colorado-licensed therapists without charging extra fees.",
    rentalStats: {
      avgRent: "$1,220 / mo",
      renterPct: "41.9%",
      petDepositAvg: "$200–$350",
      monthlyPetRentAvg: "$25–$40 / mo",
    },
    localOrdinances: "Pueblo animal control regulations require rabies vaccination. All residential landlords are subject to C.R.S. 24-34-502.",
    localResources: [
      { name: "Housing Authority of the City of Pueblo", url: "https://hapueblo.org/", note: "Pueblo housing authority" },
      { name: "Colorado Legal Services - Pueblo", url: "https://www.coloradolegalservices.org/", note: "Regional legal assistance" },
    ],
    marketSnapshot: "Pueblo features an accessible rental market with many independent landlords and private duplex/single-family rentals alongside multi-family communities.",
    propertyManagerPractices: "Private landlords in Pueblo must follow federal guidelines, waiving pet prohibitions when presented with legitimate medical letters.",
    neighborhoodNotes: "From Belmont to the Historic Arkansas Riverwalk district, tenants are entitled to reasonable accommodations.",
    faqs: [
      {
        question: "Does my Pueblo landlord have to accept an out-of-state ESA letter?",
        answer: "Colorado HB26-1045 establishes that healthcare providers must hold a valid Colorado license to issue legally recognized ESA housing letters.",
      },
    ],
  },
  {
    slug: "greeley",
    name: "Greeley",
    county: "Weld County",
    title: "ESA Letters in Greeley, Colorado",
    h1: "ESA Letters in Greeley, CO | Renter Rights Guide",
    metaTitle: "ESA Letters in Greeley, CO | Renter Rights Guide [48 chars]",
    metaDescription: "Renting in Greeley? Learn how ESA rights apply, how rentals near the University of Northern Colorado handle requests, and how to get a valid ESA letter. [152 chars]",
    shortDesc: "Protections for UNC students, university housing, and Weld County renters.",
    quickAnswer: "Renting in Greeley? Whether in University of Northern Colorado (UNC) student apartments or family residential neighborhoods, emotional support animals cannot be excluded by pet policies or subjected to pet rent.",
    rentalStats: {
      avgRent: "$1,450 / mo",
      renterPct: "43.2%",
      petDepositAvg: "$250–$400",
      monthlyPetRentAvg: "$30–$45 / mo",
    },
    localOrdinances: "Weld County animal licensing ordinances apply; HUD assistance animal rules govern residential rental properties.",
    localResources: [
      { name: "Greeley Urban Renewal Authority (GURA)", url: "https://greeleygov.com/", note: "Municipal housing oversight" },
      { name: "UNC Disability Resource Center", url: "https://www.unco.edu/disability-resource-center/", note: "Campus accommodation protocols" },
    ],
    marketSnapshot: "Greeley's rental landscape includes a strong student demographic near UNC along with agricultural and industrial professionals in western Weld County.",
    propertyManagerPractices: "Student apartment complexes around 10th Avenue must respect FHA guidance and may not charge monthly animal surcharges.",
    neighborhoodNotes: "Both multi-family complexes and private rental houses must follow Colorado assistance animal statutes.",
    faqs: [
      {
        question: "Can UNC students have an ESA in university residence halls?",
        answer: "Yes. The Fair Housing Act applies to university housing, and UNC students can request an ESA accommodation through campus disability services.",
      },
    ],
  },
  {
    slug: "longmont",
    name: "Longmont",
    county: "Boulder County",
    title: "ESA Letters in Longmont, Colorado",
    h1: "ESA Letters in Longmont, CO | Renter Rights Guide",
    metaTitle: "ESA Letters in Longmont, CO | Renter Rights Guide [49 chars]",
    metaDescription: "Renting in Longmont? Learn how ESA rights apply, how Longmont apartments and HOAs handle requests, and how to get a valid ESA letter. [133 chars]",
    shortDesc: "Assistance animal laws in Longmont, Prospect, and St. Vrain Valley communities.",
    quickAnswer: "Longmont residents have clear legal protections for emotional support animals. Housing providers and HOA communities in Longmont must accommodate documented ESAs without pet rent or breed exclusions.",
    rentalStats: {
      avgRent: "$1,790 / mo",
      renterPct: "39.4%",
      petDepositAvg: "$300–$500",
      monthlyPetRentAvg: "$35–$60 / mo",
    },
    localOrdinances: "City of Longmont municipal animal codes require proper care and licensing, while housing accommodations are governed by C.R.S. 24-34-502.",
    localResources: [
      { name: "Longmont Housing Authority", url: "https://longmonthousing.org/", note: "Community housing support" },
      { name: "Colorado Civil Rights Division", url: "https://ccrd.colorado.gov/", note: "Civil rights enforcement" },
    ],
    marketSnapshot: "Longmont serves as a thriving hub between Boulder and Fort Collins, offering modern apartment communities along Highway 119 and Ken Pratt Boulevard.",
    propertyManagerPractices: "Property managers in Longmont regularly receive ESA requests and are legally obligated to review Colorado-licensed documentation in good faith.",
    neighborhoodNotes: "Prospect New Town and historic Downtown Longmont rental properties are fully subject to fair housing accommodation rules.",
    faqs: [
      {
        question: "Can my Longmont landlord require DNA testing for my ESA dog?",
        answer: "No. Requiring DNA testing or charging fees for dog breed identification for an assistance animal is an unlawful barrier under the Fair Housing Act.",
      },
    ],
  },
  {
    slug: "arvada",
    name: "Arvada",
    county: "Jefferson & Adams Counties",
    title: "ESA Letters in Arvada, Colorado",
    h1: "ESA Letters in Arvada, CO | Renter Rights Guide",
    metaTitle: "ESA Letters in Arvada, CO | Renter Rights Guide [47 chars]",
    metaDescription: "Renting in Arvada? Learn how ESA rights apply, how Arvada rentals and HOA communities handle requests, and how to get a valid ESA letter. [137 chars]",
    shortDesc: "Renter protections in Olde Town Arvada, Lake Arbor, and West Arvada.",
    quickAnswer: "Renters in Arvada enjoy full protection for emotional support animals under Colorado civil rights laws. Landlords cannot deny a documented ESA due to pet policies or charges.",
    rentalStats: {
      avgRent: "$1,820 / mo",
      renterPct: "28.5%",
      petDepositAvg: "$300–$450",
      monthlyPetRentAvg: "$35–$55 / mo",
    },
    localOrdinances: "Arvada City Code regulates public leashing; inside private dwellings, FHA assistance animal protections supersede local pet limits.",
    localResources: [
      { name: "Arvada Housing Authority", url: "https://arvadaco.gov/", note: "Municipal housing programs" },
      { name: "Colorado Legal Services", url: "https://www.coloradolegalservices.org/", note: "Tenant fair housing aid" },
    ],
    marketSnapshot: "Arvada features a blend of historic charm in Olde Town and newer residential developments near the G Line commuter rail.",
    propertyManagerPractices: "Management teams at transit-oriented developments in Arvada must promptly accommodate verified assistance animals.",
    neighborhoodNotes: "West Arvada townhome communities and HOAs cannot enforce pet bans against valid ESA holders.",
    faqs: [
      {
        question: "Can an Arvada HOA prevent me from having an ESA dog?",
        answer: "No. Federal and Colorado fair housing laws supersede HOA bylaws and covenants.",
      },
    ],
  },
  {
    slug: "westminster",
    name: "Westminster",
    county: "Adams & Jefferson Counties",
    title: "ESA Letters in Westminster, Colorado",
    h1: "ESA Letters in Westminster, CO | Renter Rights Guide",
    metaTitle: "ESA Letters in Westminster, CO | Renter Rights Guide [52 chars]",
    metaDescription: "Renting in Westminster? Learn how ESA rights apply, how Westminster apartment communities handle requests, and how to get a valid ESA letter. [141 chars]",
    shortDesc: "Tenant guidelines in Downtown Westminster, Westminster Promenade, and Standley Lake.",
    quickAnswer: "Westminster renters are protected under the Fair Housing Act and Colorado HB26-1045. Landlords cannot charge pet deposits or rent for valid emotional support animals.",
    rentalStats: {
      avgRent: "$1,810 / mo",
      renterPct: "37.2%",
      petDepositAvg: "$300–$500",
      monthlyPetRentAvg: "$35–$60 / mo",
    },
    localOrdinances: "Municipal animal codes require rabies vaccination and standard licensing. FHA mandates reasonable housing accommodations.",
    localResources: [
      { name: "Jefferson County Housing Authority", url: "https://jcha.org/", note: "Regional housing support" },
      { name: "Colorado Civil Rights Division", url: "https://ccrd.colorado.gov/", note: "Statewide enforcement" },
    ],
    marketSnapshot: "Downtown Westminster is experiencing significant growth with new high-density apartment communities near US-36.",
    propertyManagerPractices: "Apartment communities near the Promenade and RTD park-and-rides regularly approve valid Colorado therapist ESA letters.",
    neighborhoodNotes: "Both modern luxury communities and older duplexes must comply with non-discrimination laws.",
    faqs: [
      {
        question: "Can a Westminster landlord charge extra rent for an ESA cat?",
        answer: "No. Assistance animals, including emotional support cats, are exempt from all pet rent charges.",
      },
    ],
  },
  {
    slug: "centennial",
    name: "Centennial",
    county: "Arapahoe County",
    title: "ESA Letters in Centennial, Colorado",
    h1: "ESA Letters in Centennial, CO | Renter Rights Guide",
    metaTitle: "ESA Letters in Centennial, CO | Renter Rights Guide [51 chars]",
    metaDescription: "Renting in Centennial? Learn how ESA rights apply, how suburban HOA and townhome communities handle requests, and how to get a valid ESA letter. [144 chars]",
    shortDesc: "Suburban housing rights across Southglenn, DTC, and Cherry Creek School District rentals.",
    quickAnswer: "Centennial renters in apartment communities, condos, and single-family rentals are protected under Colorado Fair Housing laws. Landlords must waive pet restrictions and pet rent for verified ESAs.",
    rentalStats: {
      avgRent: "$1,890 / mo",
      renterPct: "24.8%",
      petDepositAvg: "$350–$500",
      monthlyPetRentAvg: "$40–$65 / mo",
    },
    localOrdinances: "Arapahoe County animal control oversees pet licensing, while federal and state fair housing statutes govern assistance animals in housing.",
    localResources: [
      { name: "Arapahoe County Housing Authority", url: "https://www.arapahoegov.com/", note: "County housing assistance" },
      { name: "Colorado Civil Rights Division", url: "https://ccrd.colorado.gov/", note: "Fair housing complaints" },
    ],
    marketSnapshot: "Centennial features established suburban neighborhoods with a mix of private residential rentals, townhomes, and upscale apartment communities near Streets at SouthGlenn.",
    propertyManagerPractices: "Private landlords and HOA boards in Centennial must process reasonable accommodation requests in accordance with federal HUD standards.",
    neighborhoodNotes: "Townhome HOAs cannot enforce community animal bans or weight caps on emotional support animals.",
    faqs: [
      {
        question: "Can a private landlord in Centennial refuse an ESA?",
        answer: "Unless the landlord qualifies for a rare statutory exemption (such as an owner-occupied 4-unit building), they must legally accept your valid ESA letter.",
      },
    ],
  },
];
