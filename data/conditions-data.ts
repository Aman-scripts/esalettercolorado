export interface ConditionPage {
  slug: string;
  name: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  shortDesc: string;
  quickAnswer: string;
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
    howQualifies: "Depression can substantially limit major life activities, including sleep, energy, social interaction, and daily self-care at home.",
    howEsaHelps: "An ESA may offer daily structure through feeding times and walks, along with companionship that helps some people feel less isolated.",
    supportPoints: [
      "May add structure through daily care routines.",
      "May encourage time outdoors and physical activity.",
      "May provide companionship that eases isolation at home.",
    ],
    therapistQuestions: "Your therapist will ask how depressive symptoms affect your daily schedule, energy, and mood, and how your companion animal helps you stay engaged and grounded.",
    landlordConsiderations: "Mental health conditions, including depression, are protected disabilities under fair housing law, and a disability does not need to be visible to be protected. Your landlord may request reasonable documentation of your disability-related need.",
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
    howQualifies: "PTSD can affect sleep, emotional regulation, sense of security, and social functioning. It may qualify as a disability under fair housing law when it substantially limits a major life activity.",
    howEsaHelps: "An ESA may offer comfort and companionship that help some people feel safer and more settled at home.",
    supportPoints: [
      "May offer calming comfort during stressful moments.",
      "May help create a sense of safety and routine at home.",
      "May provide companionship that eases isolation.",
    ],
    therapistQuestions: "Your evaluator will conduct a trauma-informed assessment focusing on safety in your home, sleep quality, and how your animal assists you during triggering events.",
    landlordConsiderations: "Housing providers may request reasonable documentation of your disability-related need. Under Colorado law, an emotional support animal does not need task training.",
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
    quickAnswer: "Yes. Both Bipolar I and Bipolar II disorders qualify individuals for an ESA letter in Colorado when mood fluctuations, depression, or hypomanic agitation substantially interfere with stable home functioning.",
    howQualifies: "Bipolar disorder disrupts circadian rhythms, energy consistency, and emotional balance, qualifying as an emotional disability under the Fair Housing Act.",
    howEsaHelps: "Animals enforce a predictable circadian routine—waking, feeding, and resting at consistent hours—which psychiatric literature emphasizes as a cornerstone for bipolar stability.",
    therapistQuestions: "Your evaluating professional will discuss your current routine, treatment support, and how an animal helps you anchor daily emotional stability.",
    landlordConsiderations: "Your landlord cannot question your ability to manage your apartment or make assumptions about your diagnosis.",
    faqs: [
      {
        question: "Can an ESA replace my bipolar medication?",
        answer: "No. An ESA is a complementary therapeutic support that works alongside your ongoing psychiatric and medical care.",
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
    quickAnswer: "Yes. Panic disorder characterized by sudden, unexpected panic attacks and anticipatory fear of future attacks qualifies for an ESA letter under Colorado law. An animal's physical contact provides tactile sensory grounding that shortens panic episodes.",
    howQualifies: "Panic attacks cause acute respiratory, cardiovascular, and psychological distress that severely limits an individual's ability to remain alone safely in their residence.",
    howEsaHelps: "Deep pressure therapy from a dog or cat resting on a handler's lap or chest stimulates the parasympathetic nervous system, helping slow heart rate and reduce panic duration.",
    therapistQuestions: "Questions will focus on frequency of attacks, physical symptoms experienced, and how your animal's presence helps restore calm during recovery.",
    landlordConsiderations: "Landlords must grant reasonable accommodation requests without requiring you to demonstrate panic symptoms.",
    faqs: [
      {
        question: "How quickly does deep pressure therapy from an ESA help with panic?",
        answer: "Tactile touch and warmth from a companion animal frequently assist in grounding the autonomic nervous system within minutes of an episode onset.",
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
    quickAnswer: "Yes. Social Anxiety Disorder (SAD) qualifies for an ESA letter in Colorado when persistent fear of social interactions impairs peaceful enjoyment of apartment living, shared residential spaces, and common hallways.",
    howQualifies: "Severe social anxiety limits daily functioning, including navigating multi-unit apartment complexes, common mailrooms, leasing offices, and neighborhood spaces.",
    howEsaHelps: "An ESA provides a non-judgmental, unconditionally loving companion that lowers social isolation and gives handlers confidence when walking through shared building spaces.",
    therapistQuestions: "Your therapist will explore your comfort levels in your living environment, social avoidance patterns, and how an animal provides emotional relief.",
    landlordConsiderations: "Leasing managers cannot demand in-person confrontations or dispute your need for accommodation.",
    faqs: [
      {
        question: "Can my landlord force me to present my ESA in person to an interview board?",
        answer: "No. Demanding that an individual with social anxiety undergo an in-person pet interview or board review is considered an unlawful barrier under the Fair Housing Act.",
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
    quickAnswer: "Yes. Obsessive-Compulsive Disorder (OCD) qualifies individuals for an emotional support animal in Colorado when intrusive thoughts and repetitive compulsions create substantial distress in home life.",
    howQualifies: "OCD is a recognized mental health condition under the DSM-5 that can severely impair daily routines, sleep, and emotional peace in private housing.",
    howEsaHelps: "An animal's needs help redirect mental loops, disrupt obsessive rumination through spontaneous behavior, and encourage exposure to normal household imperfection.",
    therapistQuestions: "Therapists evaluate the nature of your compulsions, how they interfere with your peace of mind at home, and the supportive role your animal fulfills.",
    landlordConsiderations: "Landlords must recognize documentation without probing into specific ritual behaviors or symptoms.",
    faqs: [
      {
        question: "Can an ESA help interrupt obsessive thought cycles?",
        answer: "Yes. Clinical feedback demonstrates that interacting with an animal breaks cognitive hyper-focus and grounds attention in the immediate physical environment.",
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
    quickAnswer: "Yes. Adults and students with ADHD qualify for an emotional support animal in Colorado when executive dysfunction, time blindness, sensory overload, and emotional dysregulation substantially impact daily apartment life.",
    howQualifies: "ADHD is recognized as a neurodevelopmental disability under federal law when it creates chronic difficulties managing essential life tasks, focus, and emotional equilibrium.",
    howEsaHelps: "An ESA provides predictable daily time anchors, tactile stimulation that boosts dopamine and norepinephrine naturally, and soothing sensory input during burnout periods.",
    therapistQuestions: "Evaluators discuss how executive dysfunction affects home management, sleep cycles, and how an animal assists in maintaining structure.",
    landlordConsiderations: "Property managers cannot refuse an ESA letter because ADHD is commonly perceived as an executive rather than psychiatric condition.",
    faqs: [
      {
        question: "How does an ESA help with ADHD executive dysfunction?",
        answer: "The non-negotiable needs of an animal (meals, walks, care) provide urgent external motivation and structural routines that help neurodivergent brains stay grounded.",
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
    quickAnswer: "Yes. Autistic individuals qualify for an ESA letter in Colorado. Companion animals offer deep sensory grounding, predictable social communication, and calming support during sensory overstimulation and shutdowns.",
    howQualifies: "Autism is a recognized developmental condition that impacts sensory processing, social communication, and adaptive living in conventional rental spaces.",
    howEsaHelps: "Pressure from an animal provides soothing proprioceptive feedback, while an animal's predictable, honest affection avoids complex human social ambiguity.",
    therapistQuestions: "Our licensed providers conduct neurodiversity-affirming assessments exploring sensory challenges, home comfort, and companion animal bonds.",
    landlordConsiderations: "Colorado fair housing rules strictly protect autistic tenants requesting assistance animals from unlawful lease exclusions.",
    faqs: [
      {
        question: "Can an ESA assist with sensory overstimulation in an apartment?",
        answer: "Yes. Deep pressure touch, rhythmic fur petting, and consistent companion presence help settle the sensory nervous system following overstimulation.",
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
    quickAnswer: "Yes. Individuals recovering from severe eating disorders (including anorexia, bulimia, and binge eating disorder) qualify for an ESA in Colorado when anxiety and body dysmorphia severely restrict daily health and emotional functioning.",
    howQualifies: "Eating disorders are severe psychiatric illnesses recognized under DSM-5 that significantly limit physical health, nutrition, and daily emotional self-care.",
    howEsaHelps: "An ESA provides companionship during stressful meal times, offers non-judgmental acceptance that counters body dissatisfaction, and breaks cycles of intense isolation.",
    therapistQuestions: "Therapists evaluate your emotional support structure, daily recovery challenges, and the compassionate companionship provided by your animal.",
    landlordConsiderations: "All health records remain strictly confidential between you and your licensed therapist.",
    faqs: [
      {
        question: "Can an ESA assist during mealtime anxiety?",
        answer: "Yes. Sitting with and petting a companion animal during and after meals helps soothe acute anxiety and offers positive emotional distraction.",
      },
    ],
    relatedConditions: ["anxiety", "depression", "ocd"],
  },
];
