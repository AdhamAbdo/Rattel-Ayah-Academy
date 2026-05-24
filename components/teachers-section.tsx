import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Teacher {
  name: string
  title: string
  shortBio: string
  experience: string
  image: string
  education: string
  specializations: string[]
  approach: string
  quote: string
}

const teachers: Teacher[] = [
  {
    name: "Mr. Ahmed Motawea",
    title: "Certified Qur'an, Arabic & Islamic Studies Teacher",
    shortBio: "Qualified instructor with 4+ years of teaching experience specializing in non-native Arabic speakers",
    experience: "4+ years",
    image: "/avatar-male-teacher.png",
    education: "Graduate of Faculty of Languages & Translation – Islamic Studies (English Section), Al-Azhar University. Professional Diploma in Education (Teaching Methods)",
    specializations: ["Qur'an & Tajweed", "Arabic Language", "Islamic Studies"],
    approach: "Personalized lesson plans, clear explanations in Arabic & English, interactive and engaging learning methods, continuous feedback and progress tracking",
    quote: "Helping students confidently understand, recite, and apply Islamic knowledge in daily life.",
  },
  {
    name: "Ms. Arwa Mohammad",
    title: "Qur'an & Islamic Studies Teacher",
    shortBio: "Enthusiastic educator from Al-Azhar University, experienced in teaching Qur'an recitation with Tajweed",
    experience: "Multiple years",
    image: "/avatar-female-teacher.png",
    education: "Student at Faculty of Languages & Translation – Al-Azhar University",
    specializations: ["Qur'an & Tajweed", "Islamic Studies"],
    approach: "Uses Jannat Al-Qur'an series for children, interactive educational tools like Wordwall, fun and engaging learning activities",
    quote: "Making Islamic learning enjoyable and effective for all ages.",
  },
  {
    name: "Ms. Jomana Alaa Mohammed Ali",
    title: "Qur'an, Arabic & Islamic Studies Teacher",
    shortBio: "Specializes in Islamic Studies and Arabic language learning with focus on understanding before memorization",
    experience: "Professional educator",
    image: "/avatar-female-teacher.png",
    education: "Faculty of Islamic & Arabic Studies – Al-Azhar University. Department of Fundamentals of Religion (Aqeedah, Tafsir & Hadith)",
    specializations: ["Islamic Studies", "Qur'an", "Arabic Language"],
    approach: "Understanding before memorization, interactive dialogue-based learning, building confidence in students, respecting individual learning styles",
    quote: "Building knowledge with understanding, patience, and confidence.",
  },
]

interface TeacherModalProps {
  teacher: Teacher | null
  onClose: () => void
}

function TeacherModal({ teacher, onClose }: TeacherModalProps) {
  if (!teacher) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <CardContent className="p-6">
          <div className="text-right mb-6">
            <button onClick={onClose} className="text-2xl font-bold text-gray-500 hover:text-gray-700">
              ×
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <Image
                src={teacher.image || "/placeholder.svg"}
                alt={teacher.name}
                width={250}
                height={250}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-foreground mb-1">{teacher.name}</h3>
              <p className="text-sm text-primary font-semibold mb-4">{teacher.title}</p>
              <p className="text-sm text-muted-foreground mb-4">Experience: {teacher.experience}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Education</h4>
                <p className="text-sm text-muted-foreground">{teacher.education}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Specializations</h4>
                <div className="flex flex-wrap gap-2">
                  {teacher.specializations.map((spec, i) => (
                    <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Teaching Approach</h4>
                <p className="text-sm text-muted-foreground">{teacher.approach}</p>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm italic text-muted-foreground">"{teacher.quote}"</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function TeachersSection() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null)

  return (
    <section id="teachers" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Teachers Who Inspire</h2>
          <p className="text-lg text-muted-foreground">
            Our teachers are native Arabic speakers and dedicated educators from Al-Azhar University, committed to 
            helping students build confidence in Qur'an, Arabic, and Islamic Studies through engaging and personalized learning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <Card key={index} className="border-border overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative h-64 bg-secondary flex items-center justify-center">
                <Image
                  src={teacher.image || "/placeholder.svg"}
                  alt={teacher.name}
                  width={256}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-card-foreground mb-1 text-lg">{teacher.name}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{teacher.title}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{teacher.shortBio}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setSelectedTeacher(teacher)}
                  className="w-full"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <TeacherModal teacher={selectedTeacher} onClose={() => setSelectedTeacher(null)} />
    </section>
  )
}
