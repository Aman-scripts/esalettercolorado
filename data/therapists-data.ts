// Doctor profiles. Copy is taken verbatim from each provider's approved profile;
// license numbers and states served are intentionally not published.

export interface DoctorStat {
  value: string;
  label: string;
}

export interface Doctor {
  slug: string;
  /** Display name with credential, e.g. "Robert Staaf, LCSW" */
  name: string;
  /** Name used on hub cards */
  cardName: string;
  /** Name used in headings like "Start your journey with Robert" */
  firstName: string;
  title: string;
  /** Subtitle on the profile page when it differs from the hub card title */
  profileTitle?: string;
  photo: string;
  linkedin?: string;

  // Hub card
  hubBio: string;
  evaluationMethod: string;
  focusAreasSummary: string;

  // Profile page
  profileEyebrow: string;
  tagline: string;
  stats: DoctorStat[];
  highlights: DoctorStat[];
  ctaLabel: string;
  aboutEyebrow: string;
  aboutHeading: string;
  aboutIntro: string;
  aboutParagraphs: string[];
  philosophyLabel: string;
  philosophy: string;
  focusEyebrow: string;
  focusHeading: string;
  focusIntro: string;
  focusAreas: string[];
  closingEyebrow: string;
  closingHeading: string;
  closingText: string;
  closingCtaLabel: string;
}

export const doctors: Doctor[] = [
  {
    slug: "robert-staaf",
    name: "Robert Staaf, LCSW",
    cardName: "Robert Staaf",
    firstName: "Robert",
    title: "Licensed Clinical Social Worker",
    profileTitle: "Licensed Clinical Social Worker & Therapist",
    photo: "/Robert_Staff_Dr.webp",
    linkedin: "https://www.linkedin.com/in/robert-staaf-b57b53333/",

    hubBio:
      "Robert Staaf, LCSW is an Independent Clinical Social Worker and Therapist. Mr. Staaf has extensive experience in psychotherapy and child and family welfare. He is a pet owner and an animal lover, and an advocate for highlighting how animals can be utilized in mental health treatment.",
    evaluationMethod: "Video or Phone",
    focusAreasSummary: "Anxiety, Stress-related concerns, Emotional well-being",

    profileEyebrow: "Therapist Profile",
    tagline:
      "Independent Clinical Social Worker and Therapist, dedicated to providing compassionate, evidence-based mental health care to individuals and families.",
    stats: [
      { value: "6", label: "Focus Areas" },
      { value: "LCSW", label: "Credential" },
    ],
    highlights: [
      { value: "6", label: "Specialization Areas" },
      { value: "LCSW", label: "Clinical Credentials" },
      { value: "Evidence-Based", label: "Therapeutic Care" },
    ],
    ctaLabel: "Schedule Consultation",
    aboutEyebrow: "Get to Know Robert",
    aboutHeading: "About me & my approach",
    aboutIntro:
      "A glimpse into who I am as a therapist, and the philosophy that shapes how I support every individual and family I work with.",
    aboutParagraphs: [
      "I am an Independent Clinical Social Worker and Therapist. With extensive experience in psychotherapy and child and family welfare, I am dedicated to providing compassionate, evidence-based mental health care to individuals and families.",
      "As a pet owner and animal lover, I am passionate about highlighting how animals can be utilized in mental health treatment. I believe in the healing power of the human-animal bond and integrate this understanding into my therapeutic approach.",
    ],
    philosophyLabel: "My Philosophy",
    philosophy:
      "My therapeutic approach is client-centered and evidence-based, tailored to meet the unique needs of each individual and family while creating a safe, supportive environment for lasting positive change.",
    focusEyebrow: "Areas of Focus",
    focusHeading: "Where I can help you",
    focusIntro:
      "My clinical experience covers a range of mental health and therapeutic support services designed to help individuals and families improve emotional well-being and quality of life.",
    focusAreas: [
      "Individual Psychotherapy",
      "Child and Family Welfare",
      "Family Therapy",
      "Mental Health Counseling",
      "Animal-Assisted Therapy",
      "Clinical Social Work",
    ],
    closingEyebrow: "Ready to Begin?",
    closingHeading: "Start your journey with Robert",
    closingText:
      "Take the first step towards positive change. Schedule a consultation today and discover how compassionate, evidence-based therapy can help you achieve your mental health goals.",
    closingCtaLabel: "Schedule Consultation",
  },
  {
    slug: "leslie-k-gamble",
    name: "Leslie K. Gamble, LICSW",
    cardName: "Leslie K. Gamble",
    firstName: "Leslie",
    title: "Licensed Independent Clinical Social Worker",
    photo: "/Leslie_kgamble_Dr.webp",
    linkedin: "https://www.linkedin.com/in/leslie-gamble-727571366",

    hubBio:
      "Leslie Gamble is a licensed therapist with 13 years of experience primarily in the healthcare field, working with individuals of all ages as well as couples and families. She values flexible, patient-focused care and believes in setting clear treatment goals early. Leslie also implements practical homework assignments to help clients continue their progress outside of sessions.",
    evaluationMethod: "Video or Phone",
    focusAreasSummary: "Anxiety, Depression, PTSD, ESA Evaluations",

    profileEyebrow: "Therapist Profile",
    tagline:
      "Compassionate therapist with 13+ years of experience helping individuals, couples, and families navigate mental wellness through evidence-based, patient-focused care.",
    stats: [
      { value: "13+", label: "Years" },
      { value: "7", label: "Focus Areas" },
    ],
    highlights: [
      { value: "13+ Years", label: "of Clinical Experience" },
      { value: "7", label: "Specialization Areas" },
      { value: "LICSW", label: "Clinical Credentials" },
    ],
    ctaLabel: "Schedule Consultation",
    aboutEyebrow: "Get to Know Leslie",
    aboutHeading: "About me & my approach",
    aboutIntro:
      "A glimpse into who I am as a therapist, and the philosophy that shapes how I support every person I work with.",
    aboutParagraphs: [
      "I have been a therapist for about 13 years. My background is primarily in the healthcare field. I have treated all age ranges as well as some couples and families. I embrace the idea of being able to help someone in need through therapy. I like the ability to be flexible with my time while focusing on the patient's needs. I like giving homework. :)",
      "It helps to continue working on the focus of treatment outside sessions. Identifying treatment goals early also helps to guide the therapeutic interaction; we can focus on what the patient hopes to accomplish in therapy.",
    ],
    philosophyLabel: "My Philosophy",
    philosophy:
      "My goal is to provide compassionate, ethical, and accessible mental health support for individuals seeking ESA evaluations.",
    focusEyebrow: "Areas of Focus",
    focusHeading: "Where I can help you",
    focusIntro:
      "My clinical training and experience cover a range of mental wellness areas. These are the issues I most commonly support.",
    focusAreas: [
      "Anxiety",
      "Depression",
      "PTSD",
      "Stress Management",
      "Mental Wellness Support",
      "ESA Evaluations",
      "Housing ESA Documentation",
    ],
    closingEyebrow: "Ready to Begin?",
    closingHeading: "Start your journey with Leslie",
    closingText:
      "Take the first step towards positive change. Schedule a consultation today and discover how compassionate, evidence-based therapy can help you achieve your mental health goals.",
    closingCtaLabel: "Schedule Consultation",
  },
  {
    slug: "gaurav-patel",
    name: "Gaurav Patel, MD",
    cardName: "Gaurav Patel, MD",
    firstName: "Dr. Patel",
    title: "Family Medicine Physician",
    photo: "/Gaurav_patel_Dr.webp",
    linkedin: "https://www.linkedin.com/in/gaurav-patel-m-d-b5565916",

    hubBio:
      "Dr. Gaurav Patel is a board-certified family medicine physician with experience providing evidence-based care across inpatient, urgent care, outpatient, and telemedicine settings. He has cared for patients in both rural and suburban communities across the United States, combining clinical assessment, diagnostic expertise, and patient education to support individual health needs.",
    evaluationMethod: "Telemedicine or In-Person",
    focusAreasSummary: "Depressive Disorders, Anxiety-Related Conditions, Chronic Health Conditions",

    profileEyebrow: "Board-Certified Physician Profile",
    tagline:
      "Board-certified family medicine physician with experience providing evidence-based, patient-focused care across inpatient, urgent care, outpatient, and telemedicine settings.",
    stats: [
      { value: "15+", label: "Years" },
      { value: "10+", label: "Focus Areas" },
    ],
    highlights: [
      { value: "15+ Years", label: "of Clinical Experience" },
      { value: "10+", label: "Key Condition Areas" },
      { value: "MD", label: "Medical Credential" },
    ],
    ctaLabel: "Start Your Evaluation",
    aboutEyebrow: "Meet Dr. Patel",
    aboutHeading: "About Dr. Gaurav Patel",
    aboutIntro:
      "A glimpse into who Dr. Patel is as a physician, and the approach that shapes how he cares for every patient.",
    aboutParagraphs: [
      "Dr. Gaurav Patel is a board-certified family medicine physician with experience providing evidence-based care across inpatient, urgent care, outpatient, and telemedicine settings. He has cared for patients in both rural and suburban communities across the United States. His approach combines clinical assessment, diagnostic expertise, and patient education to support individual health needs.",
      "Dr. Patel also has a strong interest in medical education and understands the importance of accessible, patient-focused care throughout the treatment process.",
    ],
    philosophyLabel: "My Patient Care Philosophy",
    philosophy:
      "I focus on evidence-based, patient-centered care, combining careful evaluation with clear communication and clinical judgment. My goal is to understand each patient's needs and provide thoughtful, accessible care across different healthcare settings.",
    focusEyebrow: "Areas of Evaluation",
    focusHeading: "Conditions Dr. Patel Reviews",
    focusIntro:
      "Dr. Patel considers each patient's medical history, symptoms, functional needs, and overall health when conducting an evaluation. His clinical approach is informed by evidence-based medicine and individualized patient assessment. Where relevant, he considers the patient's health needs alongside applicable clinical and state-specific requirements.",
    focusAreas: [
      "Depressive Disorders",
      "Anxiety-Related Conditions",
      "Chronic Health Conditions",
      "Stress-Related Symptoms",
      "Sleep-Related Concerns",
      "Other Qualifying Health Conditions",
    ],
    closingEyebrow: "Ready to Take the Next Step?",
    closingHeading: "Explore Your ESA Evaluation With Dr. Patel",
    closingText:
      "Take the next step with a personalized telehealth consultation. Dr. Patel will review your concerns, health history, and individual circumstances as part of the evaluation process.",
    closingCtaLabel: "Begin Your Evaluation",
  },
];

export function getDoctor(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}

export const defaultReviewer = {
  name: "Robert Staaf, LCSW",
  credentials: "Licensed Clinical Social Worker",
  title: "Clinical Reviewer",
  reviewedDate: "October 18, 2026",
  profileUrl: "/about-our-therapists/robert-staaf/",
};
