export interface EnrolledCourse {
  id: string
  courseId: string
  title: string
  arabicTitle: string
  image: string
  progress: number
  nextClass: {
    date: string
    time: string
    instructor: string
  }
  totalClasses: number
  completedClasses: number
  status: "active" | "paused" | "completed"
}

export interface UpcomingClass {
  id: string
  courseTitle: string
  date: string
  time: string
  duration: string
  instructor: string
  instructorImage: string
  meetingLink: string
  type: "1-on-1" | "group"
}

export interface UserStats {
  totalClasses: number
  hoursLearned: number
  currentStreak: number
  coursesEnrolled: number
}

// Mock data for demonstration
export const mockEnrolledCourses: EnrolledCourse[] = [
  {
    id: "ec-1",
    courseId: "1",
    title: "Quran Memorization (Hifz)",
    arabicTitle: "حفظ القرآن",
    image: "/islamic-calligraphy-quran-memorization-hifz-course.jpg",
    progress: 35,
    nextClass: {
      date: "Today",
      time: "6:00 PM",
      instructor: "Sheikh Ahmad",
    },
    totalClasses: 120,
    completedClasses: 42,
    status: "active",
  },
  {
    id: "ec-2",
    courseId: "2",
    title: "Basic Tajweed",
    arabicTitle: "التجويد الأساسي",
    image: "/images/image.png",
    progress: 68,
    nextClass: {
      date: "Tomorrow",
      time: "4:00 PM",
      instructor: "Ustadha Fatima",
    },
    totalClasses: 24,
    completedClasses: 16,
    status: "active",
  },
  {
    id: "ec-3",
    courseId: "5",
    title: "Names of Allah",
    arabicTitle: "أسماء الله الحسنى",
    image: "/images/image.png",
    progress: 100,
    nextClass: {
      date: "Completed",
      time: "",
      instructor: "Sheikh Yusuf",
    },
    totalClasses: 20,
    completedClasses: 20,
    status: "completed",
  },
]

export const mockUpcomingClasses: UpcomingClass[] = [
  {
    id: "uc-1",
    courseTitle: "Quran Memorization (Hifz)",
    date: "Today",
    time: "6:00 PM",
    duration: "45 min",
    instructor: "Sheikh Ahmad Al-Masri",
    instructorImage: "/islamic-teacher-portrait-male.jpg",
    meetingLink: "https://zoom.us/j/123456789",
    type: "1-on-1",
  },
  {
    id: "uc-2",
    courseTitle: "Basic Tajweed",
    date: "Tomorrow",
    time: "4:00 PM",
    duration: "60 min",
    instructor: "Ustadha Fatima Hassan",
    instructorImage: "/islamic-teacher-portrait-female-hijab.jpg",
    meetingLink: "https://zoom.us/j/987654321",
    type: "group",
  },
  {
    id: "uc-3",
    courseTitle: "Quran Memorization (Hifz)",
    date: "Wednesday",
    time: "6:00 PM",
    duration: "45 min",
    instructor: "Sheikh Ahmad Al-Masri",
    instructorImage: "/islamic-teacher-portrait-male.jpg",
    meetingLink: "https://zoom.us/j/123456789",
    type: "1-on-1",
  },
]

export const mockUserStats: UserStats = {
  totalClasses: 78,
  hoursLearned: 52,
  currentStreak: 14,
  coursesEnrolled: 3,
}

export const mockUser = {
  name: "Ahmed Hassan",
  email: "ahmed.hassan@email.com",
  avatar: "/student-avatar-male.jpg",
  memberSince: "January 2024",
}
