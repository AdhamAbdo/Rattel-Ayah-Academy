import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, ChevronRight, PlayCircle, CheckCircle2, PauseCircle } from "lucide-react"
import Link from "next/link"
import { mockEnrolledCourses } from "@/lib/user-data"

export default function MyCoursesPage() {
  const activeCourses = mockEnrolledCourses.filter((c) => c.status === "active")
  const completedCourses = mockEnrolledCourses.filter((c) => c.status === "completed")
  const pausedCourses = mockEnrolledCourses.filter((c) => c.status === "paused")

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">My Courses</h1>
          <p className="text-muted-foreground mt-1">Track and continue your enrolled courses</p>
        </div>
        <Button asChild>
          <Link href="/courses">
            <BookOpen className="h-4 w-4 mr-2" />
            Browse More Courses
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="bg-secondary">
          <TabsTrigger value="active" className="gap-2">
            <PlayCircle className="h-4 w-4" />
            Active ({activeCourses.length})
          </TabsTrigger>
          <TabsTrigger value="completed" className="gap-2">
            <CheckCircle2 className="h-4 w-4" />
            Completed ({completedCourses.length})
          </TabsTrigger>
          <TabsTrigger value="paused" className="gap-2">
            <PauseCircle className="h-4 w-4" />
            Paused ({pausedCourses.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {activeCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-40">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-primary/90 text-primary-foreground mb-2">{course.status}</Badge>
                    <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                    <p className="text-sm text-white/80">{course.arabicTitle}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {course.completedClasses}/{course.totalClasses}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.progress}%
                      </span>
                    </div>
                  </div>
                  <Progress value={course.progress} className="h-2 mb-4" />
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Next: </span>
                      <span className="font-medium">
                        {course.nextClass.date} at {course.nextClass.time}
                      </span>
                    </div>
                    <Button size="sm" asChild>
                      <Link href={`/dashboard/courses/${course.courseId}`}>
                        Continue <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {completedCourses.length > 0 ? (
              completedCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="relative h-40">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 mb-2">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Completed
                      </Badge>
                      <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{course.totalClasses} classes completed</span>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/dashboard/courses/${course.courseId}`}>View Certificate</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <CheckCircle2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No completed courses yet. Keep learning!</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="paused" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {pausedCourses.length > 0 ? (
              pausedCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden opacity-75">
                  <div className="relative h-40">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="mb-2">
                        <PauseCircle className="h-3 w-3 mr-1" />
                        Paused
                      </Badge>
                      <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{course.progress}% completed</span>
                      <Button size="sm">Resume Course</Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <PauseCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No paused courses</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
