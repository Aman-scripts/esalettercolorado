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
  therapistQuestions: string;
  landlordConsiderations: string;
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
    shortDesc: "How generalized anxiety disorder (GAD), chronic stress, and chronic worry qualify for an ESA in Colorado.",
    quickAnswer: "Yes. Generalized anxiety disorder and severe chronic anxiety frequently qualify individuals for an emotional support animal in Colorado. When anxiety significantly impairs major life activities such as sleeping, concentrating, or maintaining emotional stability, an animal's calming presence can serve as a recognized therapeutic intervention.",
    howQualifies: "Under the Americans with Disabilities Act and Fair Housing Act, a mental health impairment qualifies as a disability when it substantially limits one or more major life activities. Chronic anxiety often limits restful sleep, concentration, and emotional well-being.",
    howEsaHelps: "An ESA provides physiological co-regulation, interrupting panic spirals, lowering elevated cortisol levels through petting, and offering unconditional security during severe episodes.",
    therapistQuestions: "During your confidential telehealth evaluation, your Colorado-licensed therapist will explore your anxiety triggers, frequency of episodes, how worry impacts your home routine, and how your animal helps you regain calm.",
    landlordConsiderations: "Landlords cannot demand to know the severity of your anxiety, request psychiatric treatment notes, or deny an accommodation because anxiety is an 'invisible disability.'",
    faqs: [
      {
        question: "Do I need to be taking anti-anxiety medication to qualify?",
        answer: "No. Prescription medication is not a prerequisite for an ESA letter. Qualification is based solely on your therapist's clinical evaluation of your symptoms and needs.",
      },
      {
        question: "Will my landlord see that I have anxiety?",
        answer: "No. A legally compliant ESA letter states that you are under the care of a licensed provider and have a disability-related need for an animal. It does not disclose your specific psychiatric diagnosis.",
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
    shortDesc: "How major depressive disorder (MDD) and clinical depression qualify for ESA housing accommodations.",
    quickAnswer: "Yes. Major depressive disorder and persistent depressive conditions are among the most recognized qualifying criteria for an emotional support animal in Colorado. Caring for an animal encourages healthy daily routines, combats isolation, and provides tangible emotional stability.",
    howQualifies: "Clinical depression substantially limits major life activities, including motivation, energy levels, sleep patterns, social interaction, and daily self-care in home environments.",
    howEsaHelps: "An ESA establishes a reliable anchor to the day: regular feeding times, outdoor walks, physical contact, and non-judgmental companionship that directly disrupts patterns of emotional withdrawal.",
    therapistQuestions: "Your therapist will ask how depressive symptoms affect your daily schedule, energy, and mood, and how your companion animal helps you stay engaged and grounded.",
    landlordConsiderations: "Your landlord must treat your depression-related accommodation request with the same legal respect as a physical disability accommodation.",
    faqs: [
      {
        question: "How does an ESA help with depressive episodes?",
        answer: "Caring for an animal provides purpose, tactile soothing, routine structure, and social engagement that clinical research consistently links to improved emotional resilience.",
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
    shortDesc: "Post-traumatic stress disorder, military trauma, and hypervigilance accommodations for Colorado renters.",
    quickAnswer: "Yes. Post-traumatic stress disorder (PTSD) qualifies individuals for emotional support animals in Colorado. ESAs provide a reassuring presence that helps alleviate hypervigilance, night terrors, flashback-related panic, and acute distress for veterans, first responders, and survivors.",
    howQualifies: "PTSD impairs sleep, emotional regulation, sense of security, and social functioning, meeting the criteria for a protected psychological impairment under federal and state housing statutes.",
    howEsaHelps: "An ESA offers constant grounding, disrupts intrusive thought cycles, signals safety during times of acute distress, and assists handlers in resting comfortably in their apartments.",
    therapistQuestions: "Your evaluator will conduct a trauma-informed assessment focusing on safety in your home, sleep quality, and how your animal assists you during triggering events.",
    landlordConsiderations: "Housing providers are prohibited from asking about the trauma underlying your PTSD diagnosis or demanding service-dog task certifications for an ESA.",
    faqs: [
      {
        question: "Can Colorado veterans get an ESA letter for PTSD?",
        answer: "Yes. Many Colorado veterans in Denver, Colorado Springs, and across the state utilize emotional support animals to maintain stability and peaceful home environments.",
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
    shortDesc: "Stabilizing daily schedules, mood shifts, and sleep cycles with an ESA for Bipolar I and II.",
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
    shortDesc: "Overcoming debilitating panic attacks and acute agoraphobic episodes with a certified ESA.",
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
    shortDesc: "Managing acute social phobia, fear of judgment, and apartment complex interactions.",
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
    shortDesc: "Obsessive-compulsive disorder symptoms, intrusive thought disruption, and grounding routines.",
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
    shortDesc: "Attention-Deficit/Hyperactivity Disorder, executive dysfunction, and emotional regulation.",
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
    shortDesc: "Sensory regulation, meltdown prevention, and routine stabilization for autistic renters in Colorado.",
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
    shortDesc: "Emotional stability, mealtime grounding, and body dysmorphia support during recovery.",
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
