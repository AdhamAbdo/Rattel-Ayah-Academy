export interface Course {
  id: string
  slug: string
  title: string
  arabicTitle: string
  description: string
  longDescription: string
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels"
  type: "1-on-1" | "Group"
  duration: string
  sessionsPerWeek: number
  price: number
  originalPrice?: number
  image: string
  features: string[]
  curriculum: {
    title: string
    topics: string[]
  }[]
  instructor: {
    name: string
    title: string
    image: string
  }
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "quran-memorization-hifz",
    title: "Quran Memorization (Hifz)",
    arabicTitle: "حفظ القرآن",
    description: "Memorize the Holy Quran with proper pronunciation and understanding under expert guidance.",
    longDescription:
      "Our comprehensive Hifz program is designed to help students of all ages memorize the Holy Quran with proper Tajweed rules. Under the guidance of certified Al-Azhar scholars, you will embark on a transformative journey to become a Hafiz/Hafiza.",
    level: "All Levels",
    type: "1-on-1",
    duration: "2-4 years",
    sessionsPerWeek: 5,
    price: 99,
    originalPrice: 149,
    image: "/course-cover-hifz.jpg",
    features: [
      "Personalized memorization plan",
      "Daily revision sessions",
      "Progress tracking dashboard",
      "Certified Al-Azhar teachers",
      "Flexible scheduling",
      "Weekly assessments",
    ],
    curriculum: [
      {
        title: "Foundation",
        topics: ["Arabic alphabet mastery", "Basic Tajweed rules", "Short Surahs (Juz Amma)"],
      },
      {
        title: "Intermediate",
        topics: ["Advanced Tajweed", "Longer Surahs memorization", "Revision techniques"],
      },
      {
        title: "Advanced",
        topics: ["Full Quran memorization", "Ijazah preparation", "Teaching methodology"],
      },
    ],
    instructor: {
      name: "Sheikh Ahmad Al-Masri",
      title: "Al-Azhar Certified Quran Teacher",
      image: "/islamic-teacher-portrait-male.jpg",
    },
  },
  {
    id: "2",
    slug: "basic-tajweed",
    title: "Basic Tajweed",
    arabicTitle: "التجويد الأساسي",
    description: "Master the rules of Tajweed and perfect your Quran recitation with detailed phonetic training.",
    longDescription:
      "Learn the science of Tajweed from certified teachers who will guide you through the proper pronunciation of Arabic letters, their articulation points (Makharij), and the characteristics of letters (Sifaat).",
    level: "Beginner",
    type: "Group",
    duration: "3-6 months",
    sessionsPerWeek: 3,
    price: 49,
    originalPrice: 79,
    image: "/course-cover-tajweed.jpg",
    features: [
      "Makharij Al-Huroof (articulation points)",
      "Sifaat Al-Huroof (letter characteristics)",
      "Rules of Noon Sakinah & Tanween",
      "Rules of Meem Sakinah",
      "Madd (elongation) rules",
      "Practice with Quran verses",
    ],
    curriculum: [
      {
        title: "Introduction",
        topics: ["Importance of Tajweed", "Arabic alphabet review", "Basic pronunciation"],
      },
      {
        title: "Articulation Points",
        topics: ["Throat letters", "Tongue letters", "Lip letters", "Nasal letters"],
      },
      {
        title: "Letter Characteristics",
        topics: ["Heavy and light letters", "Echoing letters", "Soft letters"],
      },
    ],
    instructor: {
      name: "Ustadha Fatima Hassan",
      title: "Tajweed Specialist",
      image: "/islamic-teacher-portrait-female-hijab.jpg",
    },
  },
  {
    id: "3",
    slug: "arabic-language",
    title: "Arabic Language",
    arabicTitle: "اللغة العربية",
    description: "Learn Arabic from scratch or advance your skills with our comprehensive language program.",
    longDescription:
      "Whether you're a complete beginner or looking to advance your Arabic skills, our comprehensive program covers Modern Standard Arabic and Quranic Arabic with native speakers.",
    level: "Beginner",
    type: "1-on-1",
    duration: "6-12 months",
    sessionsPerWeek: 3,
    price: 79,
    originalPrice: 119,
    image: "/course-cover-arabic.jpg",
    features: [
      "Native Arabic speakers",
      "Reading and writing skills",
      "Conversational Arabic",
      "Quranic vocabulary",
      "Grammar fundamentals",
      "Interactive exercises",
    ],
    curriculum: [
      {
        title: "Level 1 - Foundations",
        topics: ["Arabic alphabet", "Basic vocabulary", "Simple sentences"],
      },
      {
        title: "Level 2 - Elementary",
        topics: ["Verb conjugations", "Noun patterns", "Daily conversations"],
      },
      {
        title: "Level 3 - Intermediate",
        topics: ["Complex grammar", "Reading comprehension", "Writing skills"],
      },
    ],
    instructor: {
      name: "Ustadh Omar Khalil",
      title: "Arabic Language Expert",
      image: "/arabic-teacher-portrait-male.jpg",
    },
  },
  {
    id: "4",
    slug: "tafseer-classes",
    title: "Tafseer Classes",
    arabicTitle: "دروس التفسير",
    description: "Understand the meanings and interpretations of the Holy Quran with scholarly explanations.",
    longDescription:
      "Dive deep into the meanings of the Quran with our comprehensive Tafseer classes. Learn from scholars who explain the context, reasons for revelation, and scholarly interpretations.",
    level: "Advanced",
    type: "Group",
    duration: "12+ months",
    sessionsPerWeek: 2,
    price: 89,
    originalPrice: 129,
    image: "/course-cover-tafseer.jpg",
    features: [
      "Classical Tafseer texts",
      "Historical context",
      "Linguistic analysis",
      "Scholarly discussions",
      "Q&A sessions",
      "Certificate upon completion",
    ],
    curriculum: [
      {
        title: "Introduction to Tafseer",
        topics: ["Science of Tafseer", "Major Mufassireen", "Methodology"],
      },
      {
        title: "Surah Studies",
        topics: ["Detailed verse analysis", "Themes and lessons", "Application"],
      },
      {
        title: "Advanced Topics",
        topics: ["Comparative Tafseer", "Modern interpretations", "Research skills"],
      },
    ],
    instructor: {
      name: "Dr. Muhammad Al-Azhari",
      title: "Islamic Studies Professor",
      image: "/islamic-scholar-portrait-elderly.jpg",
    },
  },
  {
    id: "5",
    slug: "names-of-allah",
    title: "Names of Allah",
    arabicTitle: "أسماء الله الحسنى",
    description: "Learn and understand the 99 Beautiful Names of Allah and their meanings in your daily life.",
    longDescription:
      "Explore the 99 Beautiful Names of Allah (Asma ul-Husna) and understand how knowing Allah through His names transforms your worship, character, and daily life.",
    level: "All Levels",
    type: "Group",
    duration: "4-6 months",
    sessionsPerWeek: 2,
    price: 59,
    originalPrice: 89,
    image: "/course-cover-names.jpg",
    features: [
      "All 99 names explained",
      "Linguistic meanings",
      "Practical applications",
      "Duas using Allah's names",
      "Weekly reflections",
      "Interactive discussions",
    ],
    curriculum: [
      {
        title: "Understanding Tawheed",
        topics: ["Importance of knowing Allah", "Categories of names", "Etiquette of learning"],
      },
      {
        title: "Names of Majesty",
        topics: ["Al-Rahman, Al-Raheem", "Al-Malik, Al-Quddus", "Al-Aziz, Al-Jabbar"],
      },
      {
        title: "Names of Beauty",
        topics: ["Al-Wadud, Al-Latif", "Al-Ghafoor, Al-Tawwab", "Living by the names"],
      },
    ],
    instructor: {
      name: "Sheikh Yusuf Ibrahim",
      title: "Aqeedah Specialist",
      image: "/islamic-imam-portrait.jpg",
    },
  },
  {
    id: "6",
    slug: "islamic-studies",
    title: "Islamic Studies",
    arabicTitle: "الدراسات الإسلامية",
    description: "Comprehensive program covering Fiqh, Hadith, Seerah, and essential Islamic knowledge.",
    longDescription:
      "A holistic Islamic education covering all essential sciences including Fiqh (jurisprudence), Hadith sciences, Seerah (Prophetic biography), Islamic history, and contemporary Muslim issues.",
    level: "All Levels",
    type: "Group",
    duration: "12+ months",
    sessionsPerWeek: 3,
    price: 99,
    originalPrice: 149,
    image: "/course-cover-islamic.jpg",
    features: [
      "Fiqh of worship",
      "Hadith sciences",
      "Prophetic Seerah",
      "Islamic history",
      "Contemporary issues",
      "Scholar certification",
    ],
    curriculum: [
      {
        title: "Fiqh Essentials",
        topics: ["Purification", "Prayer", "Fasting", "Zakat", "Hajj"],
      },
      {
        title: "Hadith & Seerah",
        topics: ["40 Nawawi", "Hadith sciences intro", "Life of the Prophet"],
      },
      {
        title: "Advanced Studies",
        topics: ["Usul al-Fiqh", "Islamic history", "Contemporary fiqh"],
      },
    ],
    instructor: {
      name: "Dr. Aisha Mahmoud",
      title: "Islamic Studies Scholar",
      image: "/female-islamic-scholar-portrait-hijab.jpg",
    },
  },
  {
    id: "7",
    slug: "advanced-tajweed",
    title: "Advanced Tajweed",
    arabicTitle: "التجويد المتقدم",
    description: "Master advanced Tajweed rules and perfect your Quran recitation at an expert level.",
    longDescription:
      "Build upon your Tajweed foundations with our Advanced Tajweed course. Perfect your recitation technique, master complex rules, and prepare for Ijazah certification with expert guidance from certified Al-Azhar scholars.",
    level: "Advanced",
    type: "1-on-1",
    duration: "6-12 months",
    sessionsPerWeek: 4,
    price: 129,
    originalPrice: 179,
    image: "/course-cover-advanced-tajweed.jpg",
    features: [
      "Complex Tajweed rules mastery",
      "Advanced pronunciation techniques",
      "Ijazah preparation program",
      "Individual recitation assessment",
      "Detailed error correction",
      "Certification upon completion",
    ],
    curriculum: [
      {
        title: "Advanced Rules",
        topics: ["Complex Noon and Meem rules", "Advanced Madd variations", "Qalqalah and Ghunnah refinement"],
      },
      {
        title: "Expert Recitation",
        topics: ["Speed and flow mastery", "Emotional delivery", "Different Qira'at styles"],
      },
      {
        title: "Ijazah Preparation",
        topics: ["Full Quran recitation", "Scholarly assessment", "Teaching qualification"],
      },
    ],
    instructor: {
      name: "Sheikh Ahmed Motawea",
      title: "Al-Azhar Certified Tajweed Master",
      image: "/islamic-teacher-portrait-male.jpg",
    },
  },
]

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug)
}

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id)
}
