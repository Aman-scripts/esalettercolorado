export interface FAQItem {
  question: string;
  answer: string;
  category: "Basics" | "Qualifying" | "Cost & Refunds" | "Housing Rights" | "Renewal";
}

export const allFaqs: FAQItem[] = [
  {
    category: "Basics",
    question: "What is an emotional support animal (ESA)?",
    answer: "An emotional support animal (ESA) is a companion animal that provides therapeutic benefit, comfort, and emotional stability to an individual with a mental or emotional health condition. Unlike pets, ESAs are recognized as assistance animals under federal and Colorado housing laws.",
  },
  {
    category: "Basics",
    question: "Is an ESA considered a pet in Colorado?",
    answer: "No. Under both the federal Fair Housing Act and Colorado HB26-1045, an emotional support animal is classified as an assistance animal, not a pet. Landlord pet restrictions, pet deposits, and monthly pet rent do not apply to verified ESAs.",
  },
  {
    category: "Basics",
    question: "Do I need to register my ESA on a government database?",
    answer: "No. There is no official government or state registry for emotional support animals in Colorado or anywhere in the United States. Online registries that sell certificates, registration numbers, or badges are scams that offer zero legal protection. The only document landlords legally accept is a signed letter from a state-licensed healthcare provider.",
  },
  {
    category: "Qualifying",
    question: "Who qualifies for an ESA letter in Colorado?",
    answer: "Any Colorado resident who experiences a mental health or emotional condition—such as anxiety, depression, PTSD, panic disorder, ADHD, OCD, or insomnia—that substantially impairs their daily living or emotional functioning in the home may qualify following an evaluation with a licensed therapist.",
  },
  {
    category: "Qualifying",
    question: "What questions will the therapist ask during the evaluation?",
    answer: "The therapist will ask about your current emotional challenges, how your symptoms impact your daily routine and sleep at home, how interacting with your companion animal eases those symptoms, and your general mental health history.",
  },
  {
    category: "Qualifying",
    question: "Which animals can qualify as an ESA?",
    answer: "Dogs and cats are the most common ESAs, but rabbits, birds, guinea pigs, ferrets, and other traditional domesticated household animals can also qualify under federal HUD guidelines.",
  },
  {
    category: "Cost & Refunds",
    question: "How much does a Colorado ESA letter cost?",
    answer: "Our single emotional support animal clinical evaluation and official housing letter is $149 all-inclusive. Annual renewals are $99. There are no recurring monthly fees or surprise charges.",
  },
  {
    category: "Cost & Refunds",
    question: "What is your refund policy if I do not qualify?",
    answer: "We offer a 100% money-back satisfaction guarantee. If your evaluating Colorado-licensed clinician determines that an emotional support animal is not clinically appropriate for your condition, your entire fee is promptly refunded without penalty.",
  },
  {
    category: "Cost & Refunds",
    question: "Why should I avoid 'cheap' $29 online ESA letters?",
    answer: "Websites offering $29 instant letters typically provide automated PDF templates generated without an actual clinical evaluation by a Colorado-licensed professional. Colorado property managers routinely reject these letters, and knowingly submitting fraudulent documentation violates Colorado C.R.S. 18-13-107.3.",
  },
  {
    category: "Housing Rights",
    question: "Can a Colorado landlord reject my ESA because of a 'no pets' policy?",
    answer: "No. Under the Fair Housing Act and Colorado C.R.S. 24-34-502, housing providers must make reasonable accommodations for assistance animals, which overrides conventional 'no pets allowed' rules.",
  },
  {
    category: "Housing Rights",
    question: "Can landlords charge pet rent or pet deposits for an ESA in Colorado?",
    answer: "No. Charging pet security deposits, application fees, or recurring pet rent for an assistance animal is illegal under federal and state fair housing law.",
  },
  {
    category: "Housing Rights",
    question: "Can an apartment ban my ESA based on dog breed or weight?",
    answer: "No. Blanket breed and size bans (including restrictions on Pit Bulls, German Shepherds, or large dogs over 50 lbs) cannot be applied to emotional support animals under HUD rules.",
  },
  {
    category: "Housing Rights",
    question: "Can my landlord contact my therapist?",
    answer: "Landlords may contact your healthcare provider solely to authenticate that the letter was legitimately issued by that provider. They are prohibited by federal privacy laws and fair housing rules from requesting diagnostic details, therapy records, or medical charts.",
  },
  {
    category: "Renewal",
    question: "How long is my Colorado ESA letter valid?",
    answer: "While the Fair Housing Act does not specify an exact expiration date, housing providers and courts require documentation to be current (issued within the preceding 12 months). Providing an annual renewal ensures uninterrupted accommodation rights upon lease renewal.",
  },
  {
    category: "Renewal",
    question: "How does the annual renewal process work?",
    answer: "Renewal is a quick annual telehealth check-in to re-evaluate your ongoing therapeutic need for your animal, after which your clinician issues an updated letter for the upcoming lease period.",
  },
];
