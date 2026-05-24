export interface CourseMaterial {
  id: string
  title: string
  type: "pdf" | "video" | "audio" | "quiz" | "assignment"
  duration?: string
  size?: string
  completed: boolean
  locked: boolean
}

export interface CourseModule {
  id: string
  title: string
  description: string
  materials: CourseMaterial[]
  completed: boolean
}

export interface ClassSession {
  id: string
  date: string
  time: string
  status: "completed" | "upcoming" | "missed"
  topic: string
  notes?: string
  recording?: string
  instructor: string
}

export const mockCourseModules: CourseModule[] = [
  {
    id: "m1",
    title: "Module 1: Introduction to Tajweed",
    description: "Learn the fundamentals of Tajweed and why it's important for Quran recitation",
    completed: true,
    materials: [
      { id: "m1-1", title: "What is Tajweed?", type: "video", duration: "15 min", completed: true, locked: false },
      {
        id: "m1-2",
        title: "History and Importance",
        type: "pdf",
        size: "2.4 MB",
        completed: true,
        locked: false,
      },
      {
        id: "m1-3",
        title: "Arabic Alphabet Review",
        type: "video",
        duration: "20 min",
        completed: true,
        locked: false,
      },
      { id: "m1-4", title: "Module 1 Quiz", type: "quiz", completed: true, locked: false },
    ],
  },
  {
    id: "m2",
    title: "Module 2: Makharij Al-Huroof",
    description: "Understanding the articulation points of Arabic letters",
    completed: false,
    materials: [
      {
        id: "m2-1",
        title: "Introduction to Makharij",
        type: "video",
        duration: "25 min",
        completed: true,
        locked: false,
      },
      {
        id: "m2-2",
        title: "Throat Letters (Halqi)",
        type: "video",
        duration: "30 min",
        completed: true,
        locked: false,
      },
      { id: "m2-3", title: "Tongue Letters", type: "video", duration: "35 min", completed: false, locked: false },
      { id: "m2-4", title: "Practice Worksheet", type: "pdf", size: "1.8 MB", completed: false, locked: false },
      { id: "m2-5", title: "Audio Practice", type: "audio", duration: "10 min", completed: false, locked: false },
      { id: "m2-6", title: "Module 2 Quiz", type: "quiz", completed: false, locked: true },
    ],
  },
  {
    id: "m3",
    title: "Module 3: Sifaat Al-Huroof",
    description: "The characteristics and qualities of Arabic letters",
    completed: false,
    materials: [
      {
        id: "m3-1",
        title: "Introduction to Sifaat",
        type: "video",
        duration: "20 min",
        completed: false,
        locked: true,
      },
      {
        id: "m3-2",
        title: "Heavy and Light Letters",
        type: "video",
        duration: "25 min",
        completed: false,
        locked: true,
      },
      { id: "m3-3", title: "Practice Guide", type: "pdf", size: "3.1 MB", completed: false, locked: true },
    ],
  },
]

export const mockClassSessions: ClassSession[] = [
  {
    id: "s1",
    date: "Dec 1, 2024",
    time: "6:00 PM",
    status: "completed",
    topic: "Makharij - Throat Letters Practice",
    notes: "Excellent progress on ع and ح pronunciation. Practice needed for خ.",
    recording: "https://example.com/recording1",
    instructor: "Ustadha Fatima",
  },
  {
    id: "s2",
    date: "Dec 3, 2024",
    time: "6:00 PM",
    status: "completed",
    topic: "Tongue Letters Introduction",
    notes: "Covered ق and ك differences. Good understanding shown.",
    recording: "https://example.com/recording2",
    instructor: "Ustadha Fatima",
  },
  {
    id: "s3",
    date: "Dec 5, 2024",
    time: "6:00 PM",
    status: "completed",
    topic: "Tongue Letters - Part 2",
    instructor: "Ustadha Fatima",
  },
  {
    id: "s4",
    date: "Today",
    time: "6:00 PM",
    status: "upcoming",
    topic: "Lip and Nasal Letters",
    instructor: "Ustadha Fatima",
  },
  {
    id: "s5",
    date: "Dec 10, 2024",
    time: "6:00 PM",
    status: "upcoming",
    topic: "Makharij Review & Practice",
    instructor: "Ustadha Fatima",
  },
]

export const mockProgressData = {
  overallProgress: 35,
  modulesCompleted: 1,
  totalModules: 5,
  classesAttended: 16,
  totalClasses: 24,
  quizAverage: 88,
  streak: 14,
  weeklyProgress: [
    { week: "Week 1", progress: 20 },
    { week: "Week 2", progress: 35 },
    { week: "Week 3", progress: 50 },
    { week: "Week 4", progress: 65 },
  ],
  skillBreakdown: [
    { skill: "Pronunciation", score: 85 },
    { skill: "Makharij", score: 75 },
    { skill: "Memorization", score: 90 },
    { skill: "Fluency", score: 70 },
  ],
}
