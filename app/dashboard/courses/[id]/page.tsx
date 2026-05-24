import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  BookOpen,
  Video,
  FileText,
  Headphones,
  ClipboardCheck,
  Lock,
  CheckCircle2,
  Play,
  Calendar,
  Clock,
  ChevronRight,
  Download,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { getCourseById } from "@/lib/course-data"
import { mockCourseModules, mockClassSessions, mockProgressData } from "@/lib/course-materials"
import { notFound } from "next/navigation"

const materialIcons = {
  video: Video,
  pdf: FileText,
  audio: Headphones,
  quiz: ClipboardCheck,
  assignment: FileText,
}

export default async function ActiveCoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const course = getCourseById(id)

  if (!course) {
    notFound()
  }

  const upcomingSessions = mockClassSessions.filter((s) => s.status === "upcoming")
  const completedSessions = mockClassSessions.filter((s) => s.status === "completed")

  return (
    <div className="space-y-6">
      {/* Course Header */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{course.level}</Badge>
            <Badge>{course.type}</Badge>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{course.title}</h1>
          <p className="text-muted-foreground mt-2">{course.longDescription}</p>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <img
                src={course.instructor.image || "/placeholder.svg"}
                alt={course.instructor.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm">{course.instructor.name}</span>
            </div>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {course.duration}
            </span>
          </div>
        </div>
        <Card className="lg:w-80">
          <CardContent className="p-4">
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground">Your Progress</p>
              <p className="text-4xl font-bold text-primary">{mockProgressData.overallProgress}%</p>
            </div>
            <Progress value={mockProgressData.overallProgress} className="h-3 mb-4" />
            <div className="grid grid-cols-2 gap-4 text-center text-sm">
              <div>
                <p className="font-semibold">
                  {mockProgressData.modulesCompleted}/{mockProgressData.totalModules}
                </p>
                <p className="text-muted-foreground">Modules</p>
              </div>
              <div>
                <p className="font-semibold">
                  {mockProgressData.classesAttended}/{mockProgressData.totalClasses}
                </p>
                <p className="text-muted-foreground">Classes</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="materials" className="w-full">
        <TabsList className="bg-secondary">
          <TabsTrigger value="materials">
            <BookOpen className="h-4 w-4 mr-2" />
            Materials
          </TabsTrigger>
          <TabsTrigger value="schedule">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </TabsTrigger>
          <TabsTrigger value="progress">
            <ClipboardCheck className="h-4 w-4 mr-2" />
            Progress
          </TabsTrigger>
        </TabsList>

        {/* Materials Tab */}
        <TabsContent value="materials" className="mt-6">
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {mockCourseModules.map((module) => (
                <AccordionItem
                  key={module.id}
                  value={module.id}
                  className="border rounded-lg px-4 bg-card data-[state=open]:bg-secondary/30"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-4 text-left">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${module.completed ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
                      >
                        {module.completed ? <CheckCircle2 className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                      </div>
                      <div>
                        <h3 className="font-semibold">{module.title}</h3>
                        <p className="text-sm text-muted-foreground">{module.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="space-y-2 ml-14">
                      {module.materials.map((material) => {
                        const Icon = materialIcons[material.type]
                        return (
                          <div
                            key={material.id}
                            className={`flex items-center justify-between p-3 rounded-lg ${material.locked ? "bg-muted/50 opacity-60" : "bg-background hover:bg-secondary/50 cursor-pointer"} transition-colors`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-8 h-8 rounded flex items-center justify-center ${material.completed ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"}`}
                              >
                                {material.locked ? (
                                  <Lock className="h-4 w-4" />
                                ) : material.completed ? (
                                  <CheckCircle2 className="h-4 w-4" />
                                ) : (
                                  <Icon className="h-4 w-4" />
                                )}
                              </div>
                              <div>
                                <p className={`text-sm font-medium ${material.locked ? "text-muted-foreground" : ""}`}>
                                  {material.title}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {material.duration || material.size || material.type}
                                </p>
                              </div>
                            </div>
                            {!material.locked && (
                              <Button variant="ghost" size="sm">
                                {material.type === "video" ? (
                                  <>
                                    <Play className="h-4 w-4 mr-1" /> Watch
                                  </>
                                ) : material.type === "pdf" ? (
                                  <>
                                    <Download className="h-4 w-4 mr-1" /> Download
                                  </>
                                ) : material.type === "quiz" ? (
                                  <>Start Quiz</>
                                ) : (
                                  <>
                                    <Play className="h-4 w-4 mr-1" /> Open
                                  </>
                                )}
                              </Button>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </TabsContent>

        {/* Schedule Tab */}
        <TabsContent value="schedule" className="mt-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Upcoming Classes */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Classes</CardTitle>
                <CardDescription>Your scheduled sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex flex-col items-center justify-center text-primary">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{session.topic}</p>
                        <p className="text-sm text-muted-foreground">
                          {session.date} at {session.time}
                        </p>
                        <p className="text-xs text-muted-foreground">with {session.instructor}</p>
                      </div>
                    </div>
                    {session.date === "Today" && <Button size="sm">Join Now</Button>}
                  </div>
                ))}
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/dashboard/schedule">
                    View Full Schedule <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Completed Classes */}
            <Card>
              <CardHeader>
                <CardTitle>Completed Classes</CardTitle>
                <CardDescription>Review past sessions and notes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {completedSessions.slice(0, 3).map((session) => (
                  <div key={session.id} className="p-4 rounded-lg bg-background border border-border">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium">{session.topic}</p>
                        <p className="text-sm text-muted-foreground">
                          {session.date} at {session.time}
                        </p>
                      </div>
                      <Badge variant="secondary">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Completed
                      </Badge>
                    </div>
                    {session.notes && (
                      <p className="text-sm text-muted-foreground bg-secondary/50 p-2 rounded mt-2">
                        <MessageCircle className="h-3 w-3 inline mr-1" />
                        {session.notes}
                      </p>
                    )}
                    <div className="flex gap-2 mt-3">
                      {session.recording && (
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Video className="h-4 w-4 mr-1" />
                          Recording
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Progress Tab */}
        <TabsContent value="progress" className="mt-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Stats Cards */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">{mockProgressData.quizAverage}%</p>
                  <p className="text-sm text-muted-foreground mt-1">Quiz Average</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">{mockProgressData.classesAttended}</p>
                  <p className="text-sm text-muted-foreground mt-1">Classes Attended</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">{mockProgressData.streak}</p>
                  <p className="text-sm text-muted-foreground mt-1">Day Streak</p>
                </div>
              </CardContent>
            </Card>

            {/* Skill Breakdown */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Skill Breakdown</CardTitle>
                <CardDescription>Your performance across different areas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockProgressData.skillBreakdown.map((skill) => (
                    <div key={skill.skill}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.skill}</span>
                        <span className="text-sm text-muted-foreground">{skill.score}%</span>
                      </div>
                      <Progress value={skill.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
