/**
 * ─────────────────────────────────────────────────────────────
 *  SITE DATA — STATIC CONTENT (no backend)
 * ─────────────────────────────────────────────────────────────
 *  Every piece of text/content on the site lives here.
 *  Edit this file to update the website — no code changes needed.
 *  Replace the placeholder values with real clinic data.
 *  SEO: site.url is the live Vercel domain (shreedhar-homoeopathic-clinic.vercel.app).
 * ─────────────────────────────────────────────────────────────
 */

export type Testimonial = {
  name: string;
  condition: string;
  quote: string;
  rating: number;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Timing = {
  day: string;
  hours: string;
};

export type TreatmentArea = {
  title: string;
  detail: string;
};

export type DiseaseSymptomGroup = {
  title: string;
  about?: string;
  symptoms: string[];
};

export type DiseaseInfo = {
  slug: string;
  name: string;
  examples?: string;
  about: string;
  groups?: DiseaseSymptomGroup[];
  symptoms?: string[];
  note?: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Shreedhar Homoeopathic Clinic",
  shortName: "Shreedhar Clinic",
  tagline: "जीवेत शरदः शतम्",
  doctor: {
    name: "Dr. Sumant Zankat",
    title: "B.H.M.S, M.D — Homoeopathic Physician",
    qualification: "B.H.M.S, M.D (Repertory)",
    location: "Rajkot, Gujarat, India",
    experience: "7+ years of practice",
  },
  description:
    "Shreedhar Homoeopathic Clinic in Rajkot, Gujarat — classical homoeopathy by Dr. Sumant Zankat (B.H.M.S, M.D). Personalised, safe and gentle treatment for the whole family, addressing the root cause of illness.",
  url: "https://shreedhar-homoeopathic-clinic.vercel.app",
  keywords: [
    "homoeopathy",
    "homeopathy",
    "homoeopathic clinic",
    "homoeopathic doctor Rajkot",
    "Dr. Sumant Zankat",
    "classical homoeopathy",
    "homeopathic treatment Rajkot",
    "homoeopathic physician Gujarat",
    "chronic disease homoeopathy",
    "skin disease homoeopathy Rajkot",
  ],
  openingDate: "19.04.2026",
  phone: "+91 70435 44213",
  phoneHref: "tel:+917043544213",
  whatsapp: "+91 70435 44213",
  whatsappHref: "https://wa.me/917043544213",
  whatsappDigits: "917043544213",
  email: "",
  emailHref: "",
  hoursSummary: "Mon–Sat · 4:00 – 8:30 PM",
  address: {
    line1: "203, Business Corner, Indira Circle",
    line2: "Rajkot",
    city: "Gujarat 360007",
  },
  mapQuery: "Business Corner, 203, Indira Circle, Rajkot, Gujarat 360007",
  established: 2026,
  yearsExperience: 7,
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Achievements", href: "/achievements" },
  { label: "Diseases", href: "/diseases" },
  { label: "Contact", href: "/contact" },
];

export const headerCta = {
  label: "Book Now",
  href: "/contact",
} as const;

export const hero = {
  eyebrow: "Homoeopathic Care",
  title: "Gentle healing for your whole family",
  highlight: "whole family",
  subtitle:
    "Classical homoeopathy with a personalised, patient-first approach. Treat the root cause, not just the symptoms.",
  primaryCta: { label: "Book an Appointment", href: "/contact" },
  secondaryCta: { label: "Disease Information", href: "/diseases" },
  callLabel: "Prefer to call?",
} as const;

export const aboutDoctor = {
  eyebrow: "About the Doctor",
  title: "A doctor who listens before prescribing",
  bio: [
    "A dedicated, results-focused Homoeopathic Physician with over 7 years of active clinical experience. Holds an M.D. postgraduate degree specialising in Repertory and possesses extensive expertise in classical repertorization.",
    "Skillfully combines robust diagnostic abilities with thorough patient management. Experienced in handling chronic and complex cases through classical homoeopathic methods and modern repertory strategies.",
    "Has successfully treated numerous genetic, rare, and chronic diseases effectively and in accordance with homoeopathic principles.",
  ],
  qualifications: [
    { degree: "M.D (Homoeopathy) — Repertory", detail: "Postgraduate specialisation in Repertory & classical repertorization" },
    { degree: "B.H.M.S", detail: "Bachelor of Homoeopathic Medicine & Surgery" },
  ],
  facts: [
    { label: "Qualification", value: "B.H.M.S, M.D (Repertory)" },
    { label: "Experience", value: "7+ years of practice" },
    { label: "Location", value: "Rajkot, Gujarat" },
    { label: "Specialty", value: "Classical Homoeopathy" },
  ],
  highlights: [
    "Classical homoeopathy for all ages",
    "Personalised, non-toxic remedies",
    "Long-term health & prevention focus",
    "Honest, patient-first guidance",
  ],
  philosophy: {
    title: "The art of classical homoeopathy",
    description:
      "Every prescription follows the classical principles of homoeopathy — treating the person as a whole, not just the disease.",
    points: [
      "Extensive expertise in classical repertorization",
      "Skilled in chronic & complex case management",
      "Successfully treats genetic, rare & chronic diseases",
      "Gentle, non-toxic remedies for the whole family",
    ],
  },
  cta: {
    title: "Meet Dr. Sumant Zankat",
    subtitle: "Book a consultation and start your journey towards natural, lasting health.",
    buttonLabel: "Book an Appointment",
  },
} as const;

export const timings: Timing[] = [
  { day: "Mon – Sat", hours: "4:00 PM – 8:30 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const treatmentAreas: TreatmentArea[] = [
  {
    title: "Skin Diseases",
    detail: "Ringworm, Psoriasis, Vitiligo / Leucoderma, Eczema and other skin conditions",
  },
  {
    title: "Digestive Disorders",
    detail: "Gas, Acidity, Constipation and other digestive-system disorders",
  },
  {
    title: "Bone & Joint Problems",
    detail: "Knee problems, Back pain and other bone-related disorders",
  },
  {
    title: "Chronic Diseases",
    detail: "Diabetes, High Blood Pressure, Thyroid disorders, Obesity and other chronic diseases",
  },
  {
    title: "Respiratory Disorders",
    detail: "Asthma, Allergies and other respiratory disorders",
  },
  {
    title: "Mental Health",
    detail: "Depression, Insomnia (difficulty sleeping) and other mental-health-related problems",
  },
  {
    title: "Hair Problems",
    detail: "Alopecia (hair loss), Hair fall and other hair-related disorders",
  },
  {
    title: "ENT Disorders",
    detail: "Ear, Nose and Throat (ENT) disorders",
  },
  {
    title: "Childhood Diseases",
    detail: "Delayed growth in children, Stye, Tonsil problems and various childhood diseases",
  },
  {
    title: "Women's Health",
    detail: "Irregular Menstruation, Infertility, Insufficient Breast Milk, PCOD / PCOS, Recurrent Miscarriage and other women's health problems",
  },
  {
    title: "Blood Disorders",
    detail: "Low Blood Count (Anemia) and other blood-related disorders",
  },
  {
    title: "Nervous-System Disorders",
    detail: "Sciatica, Paralysis and nervous-system disorders",
  },
  {
    title: "Infections",
    detail: "Worm Infections, Appendicitis, Hernia",
  },
  {
    title: "General Complaints",
    detail: "Varicose Veins, Frequent Vomiting, Mouth Ulcers",
  },
  {
    title: "Urological & Piles",
    detail: "Prostate Inflammation / Enlargement, Hemorrhoids (Piles)",
  },
  {
    title: "Kidney & Liver",
    detail: "Kidney Stones, Gallstones and kidney- and liver-related diseases",
  },
  {
    title: "Ear & Hearing",
    detail: "Ear Discharge and Hearing Loss",
  },
];

export const diseases: DiseaseInfo[] = [
  {
    slug: "skin-diseases",
    name: "Skin Diseases",
    examples: "Ringworm, Psoriasis, Eczema, Vitiligo and other common skin disorders",
    about:
      "Skin diseases can affect the skin's color, texture, moisture, or appearance. They may be caused by infections, immune-system problems, allergies, or other factors.",
    symptoms: [
      "Itching or irritation",
      "Redness or inflammation",
      "Dry, cracked or scaly skin",
      "Circular/ring-shaped rashes in fungal infections",
      "White or lighter patches of skin in vitiligo",
    ],
  },
  {
    slug: "digestive-disorders",
    name: "Gas, Acidity & Digestive Disorders",
    about:
      "Digestive disorders affect the stomach or intestines and can include acid reflux, indigestion, constipation and excessive gas.",
    symptoms: [
      "Abdominal pain or discomfort",
      "Bloating and excessive gas",
      "Heartburn or acid reflux",
      "Constipation or irregular bowel movements",
      "Nausea or indigestion",
    ],
  },
  {
    slug: "bone-joint-problems",
    name: "Knee, Back & Bone/Joint Problems",
    about:
      "Musculoskeletal problems can involve the joints, bones, muscles, ligaments or spine. Arthritis, injuries and age-related changes are common causes.",
    symptoms: [
      "Knee or back pain",
      "Joint stiffness",
      "Difficulty walking or bending",
      "Swelling around a joint",
      "Reduced range of movement",
    ],
  },
  {
    slug: "metabolic-chronic-diseases",
    name: "Diabetes, High Blood Pressure, Thyroid Disorders & Obesity",
    about:
      "These are common metabolic or hormonal conditions. They can develop gradually and sometimes cause few noticeable symptoms initially.",
    groups: [
      {
        title: "Diabetes",
        symptoms: ["Increased thirst", "Frequent urination", "Fatigue", "Blurred vision"],
      },
      {
        title: "High Blood Pressure",
        symptoms: ["Often no noticeable symptoms", "Headache (in severe cases)", "Dizziness", "Vision problems"],
      },
      {
        title: "Thyroid Disorders",
        symptoms: ["Weight changes", "Fatigue", "Feeling unusually hot/cold", "Changes in heart rate"],
      },
      {
        title: "Obesity",
        symptoms: ["Excessive body weight", "Breathlessness with activity", "Joint strain", "Fatigue"],
      },
    ],
  },
  {
    slug: "asthma-allergies",
    name: "Asthma & Allergies",
    about:
      "Asthma affects the airways and can cause episodes of breathing difficulty. Allergies occur when the immune system reacts excessively to substances such as dust, pollen, foods or certain medications.",
    symptoms: [
      "Shortness of breath",
      "Wheezing",
      "Coughing",
      "Sneezing or runny nose",
      "Itchy/watery eyes",
    ],
  },
  {
    slug: "mental-health",
    name: "Depression, Anxiety/Stress & Sleep Problems",
    about:
      "Mental-health conditions can affect mood, thinking, sleep, energy and everyday functioning. Depression and anxiety are different conditions but can occur together.",
    symptoms: [
      "Persistent sadness or low mood",
      "Excessive worry or nervousness",
      "Loss of interest in usual activities",
      "Difficulty sleeping or excessive sleeping",
      "Fatigue or difficulty concentrating",
    ],
  },
  {
    slug: "hair-loss-alopecia",
    name: "Hair Loss & Alopecia",
    about:
      "Hair loss can be temporary or long-lasting and may result from genetics, hormonal changes, nutritional deficiencies, autoimmune conditions, stress or other medical causes.",
    symptoms: [
      "Excessive hair shedding",
      "Thinning of hair",
      "Receding hairline",
      "Round/patchy areas of hair loss",
      "Itching or scaling of the scalp in some conditions",
    ],
  },
  {
    slug: "ent-disorders",
    name: "Ear, Nose & Throat (ENT) Disorders",
    about:
      "ENT conditions affect the ears, nose, throat and related structures. They include infections, allergies, sinus problems and other disorders.",
    symptoms: [
      "Earache or ear blockage",
      "Reduced hearing",
      "Runny or blocked nose",
      "Sinus pressure or headache",
      "Sore throat or difficulty swallowing",
    ],
  },
  {
    slug: "childhood-disorders",
    name: "Childhood Disorders",
    examples: "Developmental/growth problems, stye, tonsil problems and other childhood conditions",
    about:
      "Children's health problems can range from minor infections to developmental or growth-related conditions. The cause and appropriate treatment vary considerably.",
    symptoms: [
      "Delayed physical or developmental milestones",
      "Fever or recurrent infections",
      "Swollen or painful tonsils",
      "Red, swollen eyelid/stye",
      "Poor appetite or difficulty gaining weight",
    ],
  },
  {
    slug: "women-health",
    name: "Women's Health Problems",
    about:
      "These conditions can involve hormonal, reproductive or pregnancy-related problems. PCOS/PCOD, for example, can affect ovulation and menstrual cycles.",
    symptoms: [
      "Irregular or missed periods",
      "Heavy or unusually light periods",
      "Difficulty becoming pregnant",
      "Acne or increased facial/body hair, particularly with PCOS",
      "Recurrent pregnancy loss",
    ],
    note: "Infertility and recurrent miscarriage have many possible causes and require proper medical evaluation.",
  },
  {
    slug: "anemia-low-blood-count",
    name: "Anemia / Low Blood Count",
    about:
      "Anemia occurs when the blood does not have enough healthy red blood cells or hemoglobin to carry adequate oxygen to the body's tissues.",
    symptoms: [
      "Fatigue and weakness",
      "Pale skin",
      "Shortness of breath",
      "Dizziness or light-headedness",
      "Headache",
    ],
  },
  {
    slug: "nervous-system-disorders",
    name: "Sciatica, Paralysis & Nervous-System Disorders",
    about:
      "Nervous-system disorders can affect the brain, spinal cord or peripheral nerves. Sciatica specifically involves irritation or compression of the sciatic nerve.",
    symptoms: [
      "Numbness or tingling",
      "Muscle weakness",
      "Burning or shooting pain, especially down the leg with sciatica",
      "Problems with balance or coordination",
      "Loss of movement in paralysis",
    ],
    note: "Sudden paralysis, facial drooping, speech difficulty or sudden weakness can be signs of a stroke and require emergency medical attention.",
  },
  {
    slug: "worms-appendicitis-hernia",
    name: "Worm Infections, Appendicitis & Hernia",
    about: "These are three different conditions.",
    groups: [
      {
        title: "Worm Infections",
        about: "Parasitic worms can infect the digestive tract.",
        symptoms: [
          "Abdominal discomfort",
          "Diarrhea or altered bowel habits",
          "Weight loss",
          "Itching around the anus, especially at night",
          "Fatigue",
        ],
      },
      {
        title: "Appendicitis",
        about: "Inflammation of the appendix that can become an emergency.",
        symptoms: [
          "Pain that often begins near the navel and moves to the lower right abdomen",
          "Increasing abdominal pain",
          "Nausea or vomiting",
          "Fever",
          "Loss of appetite",
        ],
      },
      {
        title: "Hernia",
        about: "Occurs when tissue pushes through a weak area in the surrounding muscle or tissue.",
        symptoms: [
          "Visible or palpable lump/bulge",
          "Pain or discomfort, especially with coughing or lifting",
          "Pressure or heaviness",
          "Burning/aching around the bulge",
        ],
      },
    ],
  },
  {
    slug: "varicose-vomiting-ulcers",
    name: "Varicose Veins, Frequent Vomiting & Mouth Ulcers",
    about: "These are also different conditions.",
    groups: [
      {
        title: "Varicose Veins",
        about: "Enlarged, twisted veins, usually in the legs.",
        symptoms: [
          "Bulging/twisted veins",
          "Aching or heaviness in the legs",
          "Leg swelling",
          "Itching around affected veins",
          "Muscle cramps",
        ],
      },
      {
        title: "Frequent Vomiting",
        about: "Repeated vomiting can have many causes, including infections, digestive disorders, medications and other medical conditions.",
        symptoms: ["Repeated vomiting", "Nausea", "Abdominal discomfort", "Dehydration", "Weakness or dizziness"],
      },
      {
        title: "Mouth Ulcers",
        about: "Small painful sores that develop inside the mouth.",
        symptoms: [
          "Painful round/oval sore",
          "Burning or tingling before the sore appears",
          "Difficulty eating spicy or acidic foods",
          "Pain while speaking or brushing",
          "Usually a white/yellow center with a red border",
        ],
      },
    ],
  },
  {
    slug: "prostate-piles",
    name: "Prostate Problems & Hemorrhoids (Piles)",
    about: "These are two different conditions.",
    groups: [
      {
        title: "Prostate Problems",
        about: "Common prostate conditions include benign prostate enlargement (BPH), prostatitis and prostate cancer.",
        symptoms: [
          "Frequent urination",
          "Difficulty starting urination",
          "Weak or interrupted urine stream",
          "Urgent need to urinate",
          "Getting up frequently at night to urinate",
        ],
      },
      {
        title: "Hemorrhoids (Piles)",
        about: "Swollen veins around the anus or lower rectum.",
        symptoms: [
          "Bleeding during bowel movements",
          "Anal itching",
          "Pain or discomfort",
          "Swelling or a lump near the anus",
          "Difficulty/discomfort during bowel movements",
        ],
      },
    ],
  },
  {
    slug: "kidney-gallstones",
    name: "Kidney Stones, Gallstones & Kidney/Liver Disorders",
    about: "These are also different conditions.",
    groups: [
      {
        title: "Kidney Stones",
        about: "Hard deposits that form inside the kidneys.",
        symptoms: [
          "Severe pain in the side/back",
          "Pain spreading toward the lower abdomen or groin",
          "Blood in urine",
          "Nausea or vomiting",
          "Pain or burning during urination",
        ],
      },
      {
        title: "Gallstones",
        about: "Hardened deposits that form in the gallbladder.",
        symptoms: [
          "Sudden pain in the upper-right abdomen",
          "Pain after eating, particularly fatty meals",
          "Nausea or vomiting",
          "Pain spreading to the back or right shoulder",
          "Indigestion or bloating",
        ],
      },
      {
        title: "Kidney/Liver Disorders",
        about: "Symptoms vary significantly depending on the underlying condition.",
        symptoms: [
          "Fatigue",
          "Swelling of legs or abdomen",
          "Changes in urine",
          "Abdominal discomfort",
          "Yellowing of the skin or eyes in some liver conditions",
        ],
      },
    ],
  },
  {
    slug: "ear-discharge-hearing-loss",
    name: "Ear Discharge & Hearing Loss",
    about:
      "Ear discharge may occur because of an ear infection, perforated eardrum or other ear condition. Hearing loss can be temporary or permanent.",
    symptoms: [
      "Fluid/pus/blood coming from the ear",
      "Reduced hearing",
      "Ear pain",
      "Ringing in the ear (tinnitus)",
      "Feeling of pressure or blockage",
    ],
    note: "Sudden hearing loss should be assessed urgently by a medical professional.",
  },
  {
    slug: "cancer-complex-diseases",
    name: "Cancer & Other Serious/Complex Diseases",
    about:
      "Cancer is a broad group of diseases in which abnormal cells grow uncontrollably and may invade surrounding tissues or spread to other parts of the body. Symptoms depend heavily on the type and stage of cancer.",
    symptoms: [
      "Unexplained weight loss",
      "Persistent or unusual lump/swelling",
      "Unexplained bleeding",
      "Persistent pain",
      "Long-lasting cough or changes in bowel/bladder habits",
    ],
    note: "These symptoms do not necessarily mean cancer. However, persistent or unexplained symptoms should be evaluated by a qualified doctor. Cancer treatment depends on the specific type and stage and may include surgery, radiation therapy, chemotherapy, targeted therapy, immunotherapy or other treatments.",
  },
];

export const diseasesPage = {
  eyebrow: "Disease Information",
  title: "Diseases & their symptoms",
  description:
    "Understand common conditions, their causes and symptoms. Click any disease to view detailed information.",
  listTitle: "All Diseases",
  aboutLabel: "About",
  symptomsLabel: "Common Symptoms",
  examplesLabel: "Examples",
  noteLabel: "Important",
  prevLabel: "Previous",
  nextLabel: "Next",
  backLabel: "All Diseases",
  searchLabel: "Search diseases, symptoms or keywords",
  searchPlaceholder: "Search diseases, symptoms, keywords…",
  conditionSingular: "condition",
  conditionPlural: "conditions",
  noResultsTitle: "No matching conditions found",
  noResultsText:
    "Try a different keyword — for example a symptom, body part, or disease name. You can also contact the clinic directly for guidance.",
} as const;

export const testimonials: Testimonial[] = [
  {
    name: "Placeholder Name",
    condition: "Treated for Asthma",
    quote:
      "Placeholder testimonial — replace with a real patient story describing their experience and outcome.",
    rating: 5,
  },
  {
    name: "Placeholder Name 2",
    condition: "Treated for Skin Issue",
    quote:
      "Placeholder testimonial — replace with a real patient story describing their experience and outcome.",
    rating: 5,
  },
  {
    name: "Placeholder Name 3",
    condition: "Treated for PCOD",
    quote:
      "Placeholder testimonial — replace with a real patient story describing their experience and outcome.",
    rating: 5,
  },
];

export const faqs: Faq[] = [
  {
    question: "What is homoeopathy?",
    answer:
      "Homoeopathy is a natural system of medicine that treats the person as a whole, using highly diluted remedies to stimulate the body's own healing ability.",
  },
  {
    question: "Are homoeopathic remedies safe for children?",
    answer:
      "Yes. Homoeopathic remedies are gentle, non-toxic and safe for all ages, including infants and children.",
  },
  {
    question: "Can homoeopathy be taken alongside other medication?",
    answer:
      "In most cases yes. Advise is always given on a case-by-case basis after a full consultation.",
  },
  {
    question: "How long does treatment take?",
    answer:
      "Acute issues often respond quickly. Chronic conditions improve progressively over weeks to months depending on the individual.",
  },
];

export const aboutHomoeopathy = {
  eyebrow: "What is Homoeopathy?",
  title: "A science of 'similar' healing",
  highlight: "similia simillibus curantur",
  paragraphs: [
    "Homoeo — meaning similar. Homoeopathy is an advanced but principle-based system, not only scientific but also artistic. This science is based on similia simillibus curantur.",
    "It was established in 1795 by Dr. Samuel Hahnemann, a physician. A medicine functions through dynamization; consequently, very minute doses are prescribed. Homoeopathy encompasses various theories, including the vital principle, chronic miasm, and dilution, among others.",
    "Homoeopaths have adhered to these principles for over 200 years, successfully treating millions of patients. From 1795 to the present day, this science has employed a holistic approach, promoting the notion that an individual can be free from disease and maintain a healthy state.",
  ],
  conclusion: "Homoeopathy advocates for rapid, gentle, and enduring restoration of health.",
  facts: [
    { label: "Establishment of homoeopathy.", value: "1795" },
    { label: "Founder of homoeopathy", value: "Dr. Samuel Hahnemann" },
    { label: "Principle", value: "Similia simillibus curantur" },
    { label: "Over 200 years of practice.", value: "200+ years" },
  ],
} as const;

export const achievements = {
  eyebrow: "Achievements",
  title: "Research, surveys & publications",
  description:
    "A record of research work and published studies contributing to the advancement of classical homoeopathy.",
  publications: {
    title: "Publications in Journals",
    items: [
      { title: "The Efficacy of LM Potency in Intermittent Fever", journal: "", link: "https://share.google/BZcNQqamJf7MnANNG" },
      { title: "Effectual Treatment in Case of Cough", journal: "", link: "https://www.homeopathy360.com/effectual-treatment-in-case-of-cough/" },
      {
        title: "Effectiveness of 50 Millesimal Potency in Chronic Disease",
        journal: "International Journal of Homoeopathic Sciences",
        link: "https://share.google/eyijwMNthlBGhXzpO",
      },
    ],
  },
  gallery: {
    eyebrow: "Before & After",
    title: "Real treatment results",
    description:
      "Photos of conditions treated at the clinic, showing the visible results of homoeopathic treatment.",
  },
} as const;

export const contact = {
  eyebrow: "Contact Us",
  title: "Book your consultation",
  subtitle:
    "Call, WhatsApp or visit the clinic. We're happy to answer your questions before your first appointment.",
  infoTitle: "Contact Information",
  hoursTitle: "Clinic Hours",
  form: {
    title: "Send us a message",
    subtitle: "Fill in the form and we'll connect with you on WhatsApp.",
    nameLabel: "Full name",
    namePlaceholder: "Your full name",
    phoneLabel: "Phone number",
    phonePlaceholder: "Your phone number",
    messageLabel: "Message",
    messagePlaceholder: "How can we help you?",
    submitLabel: "Send via WhatsApp",
  },
  mapTitle: "Find Us",
} as const;
