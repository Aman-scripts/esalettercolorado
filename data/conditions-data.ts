export interface ConditionPage {
  slug: string;
  name: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  shortDesc: string;
  quickAnswer: string;
  fromDoc?: boolean;
  howQualifies: string;
  howEsaHelps: string;
  supportPoints?: string[];
  therapistQuestions: string;
  landlordConsiderations: string;
  privacyReminder?: string;
  legalNotice?: string;
  faqTitle?: string;
  faqSubtitle?: string;
  faqs: { question: string; answer: string }[];
  relatedConditions: string[];
}

export const conditionsList: ConditionPage[] = [
  {
    slug: "eligible-animals",
    name: "Eligible Animals",
    title: "Which Animals Can Be Emotional Support Animals?",
    h1: "Which Animals Can Be Emotional Support Animals in Colorado?",
    metaTitle: "Which Animals Can Be Emotional Support Animals?",
    metaDescription: "Dogs, cats, and other animals can be ESAs in Colorado housing. Learn what the law says about animal types, species, and reasonable limits.",
    shortDesc: "Understand which species and domestic animals qualify for emotional support animal accommodations.",
    quickAnswer: "Under federal HUD guidelines and Colorado housing law, dogs and cats are the most common emotional support animals, but other domesticated animals—such as rabbits, birds, guinea pigs, miniature pigs, and ferrets—can also qualify as reasonable accommodations in housing, provided they do not pose a direct safety threat.",
    howQualifies: "Federal HUD regulations (FHEO-2020-01) recognize domestic animals traditionally kept in the home for pleasure rather than commercial purposes as assistance animals when supported by a clinical letter.",
    howEsaHelps: "Small animals and common household pets provide vital sensory grounding, routine stability, companionship, and tactile emotional regulation for handlers dealing with psychiatric conditions.",
    therapistQuestions: "The therapist will ask about what species your companion animal is, how your interaction with the animal eases your symptoms, and whether you can responsibly care for the animal in your residence.",
    landlordConsiderations: "Common household animals cannot be denied based on breed or weight. Exotic animals (such as venomous reptiles or monkeys) face a much higher burden of proof under HUD rules.",
    faqs: [
      {
        question: "Can any breed of dog be an ESA in Colorado?",
        answer: "Yes. All domestic dog breeds, including breeds often restricted by apartments (such as Pit Bulls, Rottweilers, and Dobermans), qualify as ESAs once documentation is verified.",
      },
      {
        question: "Can I have more than one ESA?",
        answer: "Yes, if your licensed therapist determines that each animal provides a distinct therapeutic function and you can accommodate them reasonably in your living space.",
      },
    ],
    relatedConditions: ["anxiety", "depression", "ptsd"],
  },
  {
    slug: "anxiety",
    name: "Anxiety",
    title: "Can You Get an ESA Letter for Anxiety in Colorado?",
    h1: "Can You Get an ESA Letter for Anxiety in Colorado?",
    metaTitle: "Can You Get an ESA Letter for Anxiety in Colorado?",
    metaDescription: "Does Anxiety qualify you for an ESA letter in Colorado? See how a therapist evaluates it and how daily worry and stress affect home life.",
    shortDesc: "How generalized anxiety disorder (GAD), chronic stress, and chronic worry may be considered for an ESA in Colorado.",
    quickAnswer: "Yes, it can. Anxiety may qualify as a disability when it substantially limits a major life activity, such as sleeping or concentrating. Whether an ESA is appropriate is decided through an individual evaluation by a licensed professional, and the housing provider may request reasonable documentation.",
    fromDoc: true,
    howQualifies: "Under the Fair Housing Act and the Colorado Anti-Discrimination Act, a mental impairment is a disability when it substantially limits one or more major life activities. Anxiety can limit sleep, concentration, and emotional well-being.\n\nTo request an ESA accommodation in Colorado, you must establish both a qualifying disability and a disability-related need for the animal. Housing providers may request reliable documentation when the disability or need is not readily apparent. The documentation should support the need for the animal without requiring unnecessary details about your diagnosis or medical history.",
    howEsaHelps: "An ESA may offer comfort, routine, and companionship that help some people manage anxiety symptoms at home.",
    supportPoints: [
      "An ESA may offer calming comfort during anxious moments.",
      "May encourage steady daily routines.",
      "May provide companionship that eases isolation at home.",
    ],
    therapistQuestions: "During your confidential telehealth evaluation, your Colorado-licensed therapist will explore your anxiety triggers, frequency of episodes, how worry impacts your home routine, and how your animal helps you regain calm.",
    landlordConsiderations: "Landlords may request reasonable documentation of your disability-related need, but a disability does not need to be visible to be protected.",
    privacyReminder: "Your ESA letter confirms that you are under the care of a licensed professional and have a disability-related need for an assistance animal. It does not need to disclose your diagnosis or therapy history.",
    legalNotice: "This guide provides educational information regarding assistance animal housing accommodations and does not constitute medical or legal advice. A licensed provider assesses your individual clinical need, and housing providers decide accommodation requests under the Fair Housing Act and the Colorado Anti-Discrimination Act (C.R.S. 24-34-502 and 24-34-502.2, as amended by HB26-1045).",
    faqTitle: "FAQs About ESA Letter for Anxiety in Colorado",
    faqSubtitle: "Get answers to common questions about getting an ESA letter for anxiety in Colorado, including medication, documentation, and what your landlord can see.",
    faqs: [
      {
        question: "Can I get an ESA letter for anxiety in Colorado?",
        answer: "It can be possible. Anxiety may qualify as a disability when it substantially limits a major life activity, such as sleeping or concentrating. A licensed professional evaluates whether an ESA is appropriate for your individual situation.",
      },
      {
        question: "Do I need to take anxiety medication to qualify?",
        answer: "No. Medication is not required for an ESA letter. Your licensed therapist evaluates your symptoms and needs, and your housing provider reviews your accommodation request.",
      },
      {
        question: "Will my landlord see that I have anxiety?",
        answer: "Your ESA letter does not need to disclose your diagnosis or therapy history. A housing provider may request reasonable documentation of your disability-related need, but the letter can confirm that need without naming your condition.",
      },
      {
        question: "Do I need a formal anxiety diagnosis to get an ESA letter?",
        answer: "You do not need prior psychiatric records to apply. A licensed mental health professional assesses whether you have a disability-related need, which is based on how your symptoms affect your daily life.",
      },
    ],
    relatedConditions: ["panic-disorder", "social-anxiety", "depression", "ptsd"],
  },
  {
    slug: "depression",
    name: "Depression",
    title: "Can You Get an ESA Letter for Depression in Colorado?",
    h1: "Can You Get an ESA Letter for Depression in Colorado?",
    metaTitle: "Can You Get an ESA Letter for Depression in Colorado?",
    metaDescription: "Does Depression qualify you for an ESA letter in Colorado? See how a therapist evaluates it and how daily routines with an animal may support functioning.",
    shortDesc: "How major depressive disorder (MDD) and clinical depression may be considered for ESA housing accommodations.",
    quickAnswer: "Yes, it can. Depression may qualify as a disability when it substantially limits a major life activity, such as sleeping or concentrating. Whether an ESA is appropriate is decided through an individual evaluation by a licensed professional, and the housing provider may request reasonable documentation.",
    fromDoc: true,
    howQualifies: "Depression can substantially limit major life activities, including sleep, energy, social interaction, and daily self-care at home.",
    howEsaHelps: "An ESA may offer daily structure through feeding times and walks, along with companionship that helps some people feel less isolated.",
    supportPoints: [
      "May add structure through daily care routines.",
      "May encourage time outdoors and physical activity.",
      "May provide companionship that eases isolation at home.",
    ],
    therapistQuestions: "Your therapist will ask how depressive symptoms affect your daily schedule, energy, and mood, and how your companion animal helps you stay engaged and grounded.",
    landlordConsiderations: "Mental health conditions, including depression, are protected disabilities under fair housing law, and a disability does not need to be visible to be protected. Your landlord may request reasonable documentation of your disability-related need.",
    privacyReminder: "",
    faqTitle: "FAQs About ESA Letter for Depression in Colorado",
    faqSubtitle: "Get answers to common questions about getting an ESA letter for depression in Colorado, including medication, documentation, and what your landlord can see.",
    faqs: [
      {
        question: "Can I get an ESA letter for depression in Colorado?",
        answer: "It can be possible. Depression may qualify as a disability when it substantially limits a major life activity, such as sleeping, concentrating, or caring for yourself. A licensed professional evaluates whether an ESA is appropriate for your individual situation.",
      },
      {
        question: "How can an ESA help with depression?",
        answer: "An ESA may offer daily routine, companionship, and a sense of purpose. The effect varies from person to person, and an ESA is not a substitute for professional treatment.",
      },
      {
        question: "Will my landlord know I have depression?",
        answer: "Your ESA letter does not need to disclose your diagnosis or therapy history. A housing provider may request reasonable documentation of your disability-related need, but the letter can confirm that need without naming your condition.",
      },
      {
        question: "Do I need to be in treatment or take medication to qualify?",
        answer: "No. Medication is not required for an ESA letter, and you do not need prior psychiatric records to apply. A licensed mental health professional evaluates whether you have a disability-related need based on how your symptoms affect your daily life.",
      },
    ],
    relatedConditions: ["anxiety", "bipolar-disorder", "ptsd"],
  },
  {
    slug: "ptsd",
    name: "PTSD",
    title: "Can You Get an ESA Letter for PTSD in Colorado?",
    h1: "Can You Get an ESA Letter for PTSD in Colorado?",
    metaTitle: "Can You Get an ESA Letter for PTSD in Colorado?",
    metaDescription: "Does PTSD qualify you for an ESA letter in Colorado? See how a therapist evaluates it and how an ESA may help with hypervigilance and sleep.",
    shortDesc: "How an ESA may support people living with post-traumatic stress disorder, including military trauma and hypervigilance, in Colorado housing.",
    quickAnswer: "Yes, it can. PTSD may qualify as a disability when it substantially limits a major life activity, such as sleeping or concentrating. Whether an ESA is appropriate is decided through an individual evaluation by a licensed professional, and the housing provider may request reasonable documentation.",
    fromDoc: true,
    howQualifies: "PTSD can affect sleep, emotional regulation, sense of security, and social functioning. It may qualify as a disability under fair housing law when it substantially limits a major life activity.",
    howEsaHelps: "An ESA may offer comfort and companionship that help some people feel safer and more settled at home.",
    supportPoints: [
      "May offer calming comfort during stressful moments.",
      "May help create a sense of safety and routine at home.",
      "May provide companionship that eases isolation.",
    ],
    therapistQuestions: "Your evaluator will conduct a trauma-informed assessment focusing on safety in your home, sleep quality, and how your animal assists you during triggering events.",
    landlordConsiderations: "Housing providers may request reasonable documentation of your disability-related need. Under Colorado law, an emotional support animal does not need task training.",
    privacyReminder: "",
    faqTitle: "FAQs About ESA Letter for PTSD in Colorado",
    faqSubtitle: "Get answers to common questions about getting an ESA letter for PTSD in Colorado, including medication, documentation, and what your landlord can see.",
    faqs: [
      {
        question: "Can I get an ESA letter for PTSD in Colorado?",
        answer: "It can be possible. PTSD may qualify as a disability when it substantially limits a major life activity, such as sleeping or concentrating. A licensed professional evaluates whether an ESA is appropriate for your individual situation.",
      },
      {
        question: "Can veterans and first responders get an ESA letter for PTSD?",
        answer: "Yes, it can be possible. Veterans and first responders are evaluated under the same standard as anyone else: a licensed professional assesses whether you have a disability-related need for an emotional support animal. Your housing provider may request reasonable documentation.",
      },
      {
        question: "Will my landlord know I have PTSD or ask about my trauma?",
        answer: "Your ESA letter does not need to disclose your diagnosis or therapy history. A housing provider may request reasonable documentation of your disability-related need, but the letter can confirm that need without naming your condition or describing your trauma.",
      },
      {
        question: "Does my ESA need to be trained for PTSD?",
        answer: "No. Under Colorado law, an emotional support animal provides solely emotional support to alleviate a symptom or effect of a disability and does not need task training. Service animals, by contrast, must be individually trained to perform specific tasks.",
      },
    ],
    relatedConditions: ["anxiety", "panic-disorder", "depression"],
  },
  {
    slug: "bipolar-disorder",
    name: "Bipolar Disorder",
    title: "Can You Get an ESA Letter for Bipolar Disorder in Colorado?",
    h1: "Can You Get an ESA Letter for Bipolar Disorder in Colorado?",
    metaTitle: "Can You Get an ESA Letter for Bipolar Disorder in Colorado?",
    metaDescription: "Does Bipolar Disorder qualify you for an ESA letter in Colorado? See how a therapist evaluates it and how an ESA may fit a stable daily routine.",
    shortDesc: "How an ESA may support daily routines, mood changes, and sleep for Bipolar I and II.",
    quickAnswer: "Yes, it can. Bipolar I and Bipolar II disorders may qualify as a disability when mood episodes substantially limit a major life activity, such as sleeping, working, or managing daily life at home. Whether an ESA is appropriate is decided through an individual evaluation by a licensed professional, and the housing provider may request reasonable documentation.",
    fromDoc: true,
    howQualifies: "Bipolar disorder can affect sleep, energy, and emotional balance. It may qualify as a disability under fair housing law when it substantially limits a major life activity.",
    howEsaHelps: "An ESA may encourage a regular daily routine through feeding times and walks, which some people find helpful alongside their treatment.",
    supportPoints: [
      "May add structure through daily care routines.",
      "May offer comfort during difficult moods.",
      "May provide companionship that eases isolation.",
    ],
    therapistQuestions: "",
    landlordConsiderations: "Housing providers may request reasonable documentation of your disability-related need. They should evaluate your request individually rather than rely on assumptions about your condition.",
    privacyReminder: "",
    faqTitle: "FAQs About ESA Letter for Bipolar Disorder in Colorado",
    faqSubtitle: "Get answers to common questions about getting an ESA letter for bipolar disorder in Colorado, including medication, documentation, and what your landlord can see.",
    faqs: [
      {
        question: "Can I get an ESA letter for bipolar disorder in Colorado?",
        answer: "Yes. It may be possible. Bipolar I and Bipolar II disorders may qualify as a disability when mood episodes substantially limit a major life activity, such as sleeping, working, or managing daily life at home. A licensed professional evaluates whether an ESA is appropriate for your individual situation.",
      },
      {
        question: "Can an ESA replace my bipolar medication or treatment?",
        answer: "No. An ESA is not a substitute for medication or professional treatment. Talk to your doctor before making any changes to your treatment.",
      },
      {
        question: "Will my landlord know I have bipolar disorder?",
        answer: "Your ESA letter does not need to disclose your diagnosis or therapy history. A housing provider may request reasonable documentation of your disability-related need, but the letter can confirm that need without naming your condition.",
      },
      {
        question: "How can an ESA help with bipolar disorder?",
        answer: "An ESA may encourage a regular daily routine through feeding times and walks and offer comfort and companionship during difficult moods. The effect varies from person to person.",
      },
    ],
    relatedConditions: ["depression", "anxiety", "adhd"],
  },
  {
    slug: "panic-disorder",
    name: "Panic Disorder",
    title: "Can You Get an ESA Letter for Panic Disorder in Colorado?",
    h1: "Can You Get an ESA Letter for Panic Disorder in Colorado?",
    metaTitle: "Can You Get an ESA Letter for Panic Disorder in Colorado?",
    metaDescription: "Does Panic Disorder qualify you for an ESA letter in Colorado? See how a therapist evaluates it and how an ESA may help during and after panic episodes.",
    shortDesc: "How an ESA may support people living with panic attacks and agoraphobia.",
    quickAnswer: "Yes, it can. Panic disorder may qualify as a disability when it substantially limits a major life activity, such as sleeping, working, or being alone at home. Whether an ESA is appropriate is decided through an individual evaluation by a licensed professional, and the housing provider may request reasonable documentation.",
    fromDoc: true,
    howQualifies: "Panic attacks can cause intense physical and psychological distress that, for some people, substantially limits daily activities at home.",
    howEsaHelps: "An ESA may offer comfort through physical presence and companionship during and after stressful moments.",
    supportPoints: [
      "May offer calming comfort during difficult moments.",
      "May help create a sense of safety at home.",
      "May provide companionship that eases isolation",
    ],
    therapistQuestions: "",
    landlordConsiderations: "Landlords may request reasonable documentation of your disability-related need but cannot require you to demonstrate symptoms.",
    privacyReminder: "",
    faqTitle: "FAQs About ESA Letter for Panic Disorder in Colorado",
    faqSubtitle: "Get answers to common questions about getting an ESA letter for panic disorder in Colorado, including medication, documentation, and what your landlord can see.",
    faqs: [
      {
        question: "Can I get an ESA letter for panic disorder in Colorado?",
        answer: "Yes. It may be possible. Panic disorder may qualify as a disability when it substantially limits a major life activity, such as sleeping, working, or being alone at home. A licensed professional evaluates whether an ESA is appropriate for your individual situation.",
      },
      {
        question: "How can an ESA help with panic attacks?",
        answer: "An ESA may offer comfort and companionship during stressful moments. The effect varies from person to person, and an ESA is not a substitute for professional treatment.",
      },
      {
        question: "Will my landlord know I have panic disorder?",
        answer: "Your ESA letter does not need to disclose your diagnosis or therapy history. A housing provider may request reasonable documentation of your disability-related need, but the letter can confirm that need without naming your condition.",
      },
      {
        question: "What will the therapist ask during a panic disorder evaluation?",
        answer: "A licensed professional will usually ask how often your panic attacks occur, what symptoms you experience, and how they affect your sleep, work, and daily life at home. The goal is to assess whether you have a disability-related need for an emotional support animal.",
      },
    ],
    relatedConditions: ["anxiety", "social-anxiety", "ptsd"],
  },
  {
    slug: "social-anxiety",
    name: "Social Anxiety",
    title: "Can You Get an ESA Letter for Social Anxiety in Colorado?",
    h1: "Can You Get an ESA Letter for Social Anxiety in Colorado?",
    metaTitle: "Can You Get an ESA Letter for Social Anxiety in Colorado?",
    metaDescription: "Does Social Anxiety qualify you for an ESA letter in Colorado? See how a therapist evaluates it and how an ESA may support life at home and in the community.",
    shortDesc: "How an ESA may support people living with social anxiety, including in apartment complexes.",
    quickAnswer: "Yes. It can. Social anxiety disorder may qualify as a disability when it substantially limits a major life activity, such as interacting with others or managing daily life at home. Whether an ESA is appropriate is decided through an individual evaluation by a licensed professional, and the housing provider may request reasonable documentation.",
    fromDoc: true,
    howQualifies: "Social anxiety can limit daily functioning for some people, including in shared residential spaces and when interacting with neighbors or building staff.",
    howEsaHelps: "An ESA may offer comfort and companionship that help some people feel less isolated and more at ease at home.",
    supportPoints: [
      "May offer comfort during stressful social situations.",
      "May help create a sense of calm at home.",
      "May provide companionship that eases isolation.",
    ],
    therapistQuestions: "",
    landlordConsiderations: "Housing providers may request reasonable documentation of your disability-related need and engage in a good-faith interactive process, which can usually be done in writing.",
    privacyReminder: "",
    faqTitle: "FAQs About ESA Letter for Social Anxiety in Colorado",
    faqSubtitle: "Get answers to common questions about getting an ESA letter for social anxiety in Colorado, including medication, documentation, and what your landlord can see.",
    faqs: [
      {
        question: "Can I get an ESA letter in Colorado if I have social anxiety disorder?",
        answer: "You may qualify for an ESA letter if social anxiety substantially affects your daily life and an emotional support animal helps address disability-related needs. A Colorado-licensed mental health professional must assess your individual circumstances before determining whether an ESA letter is appropriate.",
      },
      {
        question: "Can an ESA help with social anxiety when living in an apartment complex?",
        answer: "An ESA may provide emotional comfort and help some individuals manage anxiety-related distress at home. If you qualify for a housing accommodation, the Fair Housing Act may protect your right to keep an ESA in a rental property that otherwise restricts pets.",
      },
      {
        question: "Can my Colorado landlord reject my ESA letter because of my social anxiety diagnosis?",
        answer: "A landlord generally cannot deny a valid accommodation request solely because of the type of disability or diagnosis. However, the request must establish a disability-related need for the animal, and housing providers may request reliable supporting documentation when that need is not apparent.",
      },
      {
        question: "Do I need a formal social anxiety diagnosis to qualify for an ESA letter in Colorado?",
        answer: "A diagnosis alone does not guarantee eligibility, and eligibility depends on an individualized clinical assessment. A Colorado-licensed mental health professional must determine whether you have a qualifying disability and whether the animal provides support related to that disability for a housing accommodation.",
      },
    ],
    relatedConditions: ["anxiety", "panic-disorder", "depression"],
  },
  {
    slug: "ocd",
    name: "OCD",
    title: "Can You Get an ESA Letter for OCD in Colorado?",
    h1: "Can You Get an ESA Letter for OCD in Colorado?",
    metaTitle: "Can You Get an ESA Letter for OCD in Colorado?",
    metaDescription: "Does OCD qualify you for an ESA letter in Colorado? See how a therapist evaluates it and how an ESA may sit alongside existing treatment.",
    shortDesc: "How an ESA may support daily routines for people living with obsessive-compulsive disorder.",
    quickAnswer: "Yes. It can. OCD may qualify as a disability when intrusive thoughts and compulsions substantially limit a major life activity, such as sleeping, working, or managing daily life at home. Whether an ESA is appropriate is decided through an individual evaluation by a licensed professional, and the housing provider may request reasonable documentation.",
    fromDoc: true,
    howQualifies: "OCD is a mental health condition recognized in the DSM-5 that can affect daily routines and sleep. It may qualify as a disability under fair housing law when it substantially limits a major life activity.",
    howEsaHelps: "An ESA may offer comfort and companionship, along with a daily care routine, that some people find helpful alongside their treatment.",
    supportPoints: [
      "May offer comfort during difficult moments.",
      "May add structure through daily care routines.",
      "May provide companionship that eases isolation.",
    ],
    therapistQuestions: "",
    landlordConsiderations: "Housing providers may request reasonable documentation of your disability-related need. The letter does not need to describe your specific symptoms or behaviors.",
    privacyReminder: "",
    faqTitle: "FAQs About ESA Letter for OCD in Colorado",
    faqSubtitle: "Get answers to common questions about getting an ESA letter for OCD in Colorado, including medication, documentation, and what your landlord can see.",
    faqs: [
      {
        question: "Can I qualify for an ESA letter in Colorado if I have obsessive-compulsive disorder (OCD)?",
        answer: "Yes. You may qualify if OCD substantially affects your daily life and an emotional support animal helps address your disability-related needs. A Colorado-licensed mental health professional must assess your individual circumstances to determine whether an ESA is appropriate.",
      },
      {
        question: "Can an emotional support animal help someone living with OCD?",
        answer: "An ESA may provide companionship and emotional comfort to some people living with OCD. However, an animal does not replace professional treatment, and its potential role in supporting your well-being depends on your individual needs.",
      },
      {
        question: "Can my Colorado landlord deny my ESA because of my OCD?",
        answer: "A landlord generally cannot deny a reasonable accommodation solely because of the type of disability involved. Under the Fair Housing Act, eligible tenants may request an exception to a no-pet policy, provided they meet the applicable requirements for an ESA accommodation.",
      },
      {
        question: "Do I need an OCD diagnosis to get an ESA letter in Colorado?",
        answer: "An OCD diagnosis alone does not guarantee an ESA letter. A licensed mental health professional must evaluate whether you have a qualifying disability and whether you have a disability-related need for an emotional support animal for housing purposes.",
      },
    ],
    relatedConditions: ["anxiety", "panic-disorder", "adhd"],
  },
  {
    slug: "adhd",
    name: "ADHD",
    title: "Can You Get an ESA Letter for ADHD in Colorado?",
    h1: "Can You Get an ESA Letter for ADHD in Colorado?",
    metaTitle: "Can You Get an ESA Letter for ADHD in Colorado?",
    metaDescription: "Does ADHD qualify you for an ESA letter in Colorado? See how a therapist evaluates it and how an ESA may support routine and focus at home.",
    shortDesc: "How an ESA may support people living with ADHD, including executive dysfunction and emotional regulation, in Colorado housing.",
    quickAnswer: "Yes, it can. ADHD may qualify as a disability when it substantially limits a major life activity, such as concentrating or managing daily tasks. Whether an ESA is appropriate is decided through an individual evaluation by a licensed professional, and the housing provider may request reasonable documentation.",
    fromDoc: true,
    howQualifies: "ADHD may qualify as a disability under fair housing law when it substantially limits a major life activity, such as concentrating or managing essential daily tasks.",
    howEsaHelps: "An ESA may offer predictable daily routines through feeding times and walks, along with comfort during stressful or overwhelming periods.",
    supportPoints: [
      "May add structure through daily care routines.",
      "May provide comfort during overwhelming moments.",
      "May encourage time outdoors and physical activity.",
    ],
    therapistQuestions: "",
    landlordConsiderations: "ADHD and other mental health conditions can be protected disabilities under fair housing law. Your housing provider may request reasonable documentation of your disability-related need.",
    privacyReminder: "",
    faqTitle: "FAQs About ESA Letter for ADHD in Colorado",
    faqSubtitle: "Get answers to common questions about getting an ESA letter for ADHD in Colorado, including medication, documentation, and what your landlord can see.",
    faqs: [
      {
        question: "Can I get an ESA letter for ADHD in Colorado?",
        answer: "It can be possible. ADHD may qualify as a disability when it substantially limits a major life activity, such as concentrating or managing daily tasks. A licensed professional evaluates whether an ESA is appropriate for your individual situation.",
      },
      {
        question: "How can an ESA help with ADHD?",
        answer: "An ESA may add routine through feeding times and walks, along with comfort during overwhelming moments. The effect varies from person to person, and an ESA is not a substitute for professional treatment.",
      },
      {
        question: "Will my landlord know I have ADHD?",
        answer: "Your ESA letter does not need to disclose your diagnosis or therapy history. A housing provider may request reasonable documentation of your disability-related need, but the letter can confirm that need without naming your condition.",
      },
      {
        question: "Do adults and students with ADHD both qualify for an ESA letter?",
        answer: "Age does not decide eligibility. A licensed professional assesses whether you have a disability-related need based on how your symptoms affect your daily life. Students living in university housing request an accommodation through their campus disability services office.",
      },
    ],
    relatedConditions: ["anxiety", "autism-spectrum", "depression"],
  },
  {
    slug: "autism-spectrum",
    name: "Autism Spectrum",
    title: "Can You Get an ESA Letter for Autism Spectrum in Colorado?",
    h1: "Can You Get an ESA Letter for Autism Spectrum in Colorado?",
    metaTitle: "Can You Get an ESA Letter for Autism Spectrum in Colorado?",
    metaDescription: "Does Autism Spectrum qualify you for an ESA letter in Colorado? See how a therapist evaluates it and how an ESA may help with sensory and routine needs.",
    shortDesc: "How an ESA may support sensory regulation and routines for autistic renters in Colorado.",
    quickAnswer: "Yes. It can. Autism may qualify as a disability when it substantially limits a major life activity, such as sleeping, communicating, or managing daily life at home. Whether an ESA is appropriate is decided through an individual evaluation by a licensed professional, and the housing provider may request reasonable documentation.",
    fromDoc: true,
    howQualifies: "Autism is a developmental condition that can affect sensory processing and communication in different ways for different people. It may qualify as a disability under fair housing law when it substantially limits a major life activity.",
    howEsaHelps: "An ESA may offer comfort and companionship, along with a predictable daily routine, that some autistic people find helpful at home.",
    supportPoints: [
      "May offer calming comfort during overwhelming moments.",
      "May add predictable structure through daily care routines.",
      "May provide companionship at home.",
    ],
    therapistQuestions: "Your licensed provider will ask about your sensory experiences, how you function at home, and how an animal's presence may support you.",
    landlordConsiderations: "Colorado law protects people with disabilities, including autistic tenants, from discrimination in housing. Housing providers may request reasonable documentation of your disability-related need and engage in a good-faith interactive process.",
    privacyReminder: "",
    faqTitle: "FAQs About ESA Letter for Autism Spectrum in Colorado",
    faqSubtitle: "Get answers to common questions about getting an ESA letter for Autism Spectrum in Colorado, including medication, documentation, and what your landlord can see.",
    faqs: [
      {
        question: "Can someone with autism qualify for an ESA letter in Colorado?",
        answer: "Yes, a person with autism spectrum disorder (ASD) may qualify for an ESA letter if they have a qualifying disability-related need for an emotional support animal. A Colorado-licensed mental health professional must assess the individual's circumstances and determine whether an ESA is appropriate for housing accommodation.",
      },
      {
        question: "How can an ESA support someone with autism living in Colorado?",
        answer: "An ESA may provide companionship, emotional comfort, and a sense of routine for some autistic individuals. The benefits vary from person to person, and an ESA does not replace professional care or other support services.",
      },
      {
        question: "Can a Colorado landlord deny an ESA because the tenant has autism?",
        answer: "A landlord generally cannot deny a reasonable accommodation solely because of the tenant's disability. Under the Fair Housing Act, eligible tenants may request an exception to a no-pet policy if they have a disability-related need for an ESA. Individual circumstances and applicable legal exceptions still matter.",
      },
      {
        question: "Does an autism diagnosis automatically qualify someone for an ESA letter in Colorado?",
        answer: "No. An autism diagnosis alone does not guarantee an ESA letter. A licensed mental health professional must evaluate whether the person has a qualifying disability and whether the animal provides support related to that disability for a housing accommodation.",
      },
    ],
    relatedConditions: ["adhd", "anxiety", "social-anxiety"],
  },
  {
    slug: "eating-disorders",
    name: "Eating Disorders",
    title: "Can You Get an ESA Letter for Eating Disorders in Colorado?",
    h1: "Can You Get an ESA Letter for Eating Disorders in Colorado?",
    metaTitle: "Can You Get an ESA Letter for Eating Disorders in Colorado?",
    metaDescription: "Does Eating Disorders qualify you for an ESA letter in Colorado? See how a therapist evaluates it and how an ESA may support recovery.",
    shortDesc: "How an ESA may offer emotional support during eating disorder recovery.",
    quickAnswer: "Yes. It can. An eating disorder may qualify as a disability when it substantially limits a major life activity, such as eating, working, or managing daily life at home. Whether an ESA is appropriate is decided through an individual evaluation by a licensed professional, and the housing provider may request reasonable documentation.",
    fromDoc: true,
    howQualifies: "Eating disorders are mental health conditions recognized in the DSM-5. They may qualify as a disability under fair housing law when they substantially limit a major life activity.",
    howEsaHelps: "An ESA may offer comfort and companionship during recovery. It is not a substitute for professional eating disorder treatment.",
    supportPoints: [
      "May offer comfort during difficult moments.",
      "May add structure through daily care routines.",
      "May provide companionship that eases isolation",
    ],
    therapistQuestions: "Your licensed provider will ask about your support structure, how your condition affects daily life at home, and how an animal's presence may support you.",
    landlordConsiderations: "Your health information is protected by applicable privacy laws. Housing providers may request reasonable documentation of your disability-related need, but your ESA letter does not need to disclose your diagnosis or treatment details.",
    privacyReminder: "",
    faqTitle: "FAQs About ESA Letter for Eating Disorders in Colorado",
    faqSubtitle: "Get answers to common questions about getting an ESA letter for eating disorders in Colorado, including medication, documentation, and what your landlord can see.",
    faqs: [
      {
        question: "Can I qualify for an ESA letter in Colorado if I have an eating disorder?",
        answer: "You may qualify if an eating disorder substantially affects your daily life and you have a disability-related need for an emotional support animal. A Colorado-licensed mental health professional must assess your individual circumstances to determine whether an ESA is appropriate for housing accommodation.",
      },
      {
        question: "How can an emotional support animal help someone with an eating disorder?",
        answer: "An ESA may provide companionship, emotional comfort, and support during stressful periods for some individuals living with eating disorders. However, the benefits vary by person, and an ESA does not replace professional treatment or nutritional care.",
      },
      {
        question: "Can a Colorado landlord deny my ESA because of my eating disorder?",
        answer: "A landlord generally cannot deny a reasonable accommodation solely because of the type of disability involved. Under the Fair Housing Act, eligible tenants may request an exception to a no-pet policy if they have a disability-related need for an ESA. Applicable legal exceptions may still apply.",
      },
      {
        question: "Does having an eating disorder automatically qualify me for an ESA letter in Colorado?",
        answer: "No. Having an eating disorder does not automatically qualify you for an ESA letter. A licensed mental health professional must evaluate whether you have a qualifying disability and whether an emotional support animal provides support related to that disability for a housing accommodation.",
      },
    ],
    relatedConditions: ["anxiety", "depression", "ocd"],
  },
];
