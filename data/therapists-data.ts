export interface Therapist {
  id: string;
  name: string;
  initials: string;
  credentials: string;
  title: string;
  licenseState: string;
  licenseNumber: string;
  licenseType: string;
  verificationUrl: string;
  bio: string;
  avatarUrl: string;
  yearsExperience: number;
}

export const therapists: Therapist[] = [
  {
    id: "dr-elena-vance",
    name: "Dr. Elena Vance, Psy.D., LP",
    initials: "EV",
    credentials: "Psy.D., Licensed Psychologist",
    title: "Lead Clinical Reviewer & Psychologist",
    licenseState: "Colorado",
    licenseNumber: "PSY.0004812",
    licenseType: "State Board of Psychologist Examiners",
    verificationUrl: "https://dpo.colorado.gov/",
    bio: "Dr. Vance is a Colorado-licensed clinical psychologist specializing in anxiety, trauma recovery, and the therapeutic human-animal bond. With over 12 years of clinical practice in Denver, she oversees telehealth evaluation protocols to ensure full compliance with Colorado C.R.S. 24-34-502 and HB26-1045 standards.",
    avatarUrl: "/therapists/elena-vance.jpg",
    yearsExperience: 12,
  },
  {
    id: "marcus-holloway",
    name: "Marcus Holloway, LCSW",
    initials: "MH",
    credentials: "LCSW, Clinical Social Worker",
    title: "Senior Telehealth Evaluator",
    licenseState: "Colorado",
    licenseNumber: "CSW.0993411",
    licenseType: "State Board of Social Work Examiners",
    verificationUrl: "https://dpo.colorado.gov/",
    bio: "Marcus has practiced social work and mental health assessment across the Front Range for 9 years. He has extensive expertise helping individuals with PTSD, panic disorder, and major depressive disorder secure valid housing accommodations under the federal Fair Housing Act.",
    avatarUrl: "/therapists/marcus-holloway.jpg",
    yearsExperience: 9,
  },
  {
    id: "sarah-lindqvist",
    name: "Sarah Lindqvist, LPC",
    initials: "SL",
    credentials: "LPC, Licensed Professional Counselor",
    title: "Adolescent & Adult Mental Health Specialist",
    licenseState: "Colorado",
    licenseNumber: "LPC.0016429",
    licenseType: "State Board of Licensed Professional Counselor Examiners",
    verificationUrl: "https://dpo.colorado.gov/",
    bio: "Sarah is a Boulder-based licensed professional counselor focusing on neurodiversity, ADHD, and emotional regulation. She provides compassionate, evidence-based evaluations for Colorado college students and apartment renters.",
    avatarUrl: "/therapists/sarah-lindqvist.jpg",
    yearsExperience: 8,
  },
];

export const defaultReviewer = {
  name: "Dr. Elena Vance, Psy.D., LP",
  credentials: "Licensed Clinical Psychologist (Colorado Lic #PSY.0004812)",
  title: "Clinical Director & Reviewer",
  reviewedDate: "October 18, 2026",
  verificationUrl: "https://dpo.colorado.gov/",
};
