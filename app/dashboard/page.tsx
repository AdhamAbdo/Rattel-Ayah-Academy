import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Clock,
  Flame,
  GraduationCap,
  Calendar,
  Video,
  ArrowRight,
  Bell,
  ChevronRight,
  Users,
} from "lucide-react"
import Link from "next/link"
import { mockEnrolledCourses, mockUpcomingClasses, mockUserStats, mockUser } from "@/lib/user-data"

export default function DashboardPage() {
  const activeCourses = mockEnrolledCourses.filter((c) => c.status === "active")
  const nextClass = mockUpcomingClasses[0]

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Assalamu Alaikum, {mockUser.name.split(" ")[0]}!
          </h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your learning today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="relative bg-transparent">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </Button>
          <Button size="sm" asChild>
            <Link href="/courses">Browse Courses</Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">{mockUserStats.totalClasses}</p>
                <p className="text-sm text-muted-foreground">Classes Taken</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">{mockUserStats.hoursLearned}h</p>
                <p className="text-sm text-muted-foreground">Hours Learned</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <Flame className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">{mockUserStats.currentStreak}</p>
                <p className="text-sm text-muted-foreground">Day Streak</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">{mockUserStats.coursesEnrolled}</p>
                <p className="text-sm text-muted-foreground">Enrolled Courses</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Courses & Schedule */}
        <div className="lg:col-span-2 space-y-6">
          {/* Next Class Banner */}
          {nextClass && (
            <Card className="bg-primary text-primary-foreground overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Video className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/80">Your next class</p>
                      <h3 className="text-lg font-semibold">{nextClass.courseTitle}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-primary-foreground/80">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {nextClass.date} at {nextClass.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {nextClass.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button variant="secondary" asChild>
                    <a href={nextClass.meetingLink} target="_blank" rel="noopener noreferrer">
                      Join Class <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Active Courses */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>My Active Courses</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/courses">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeCourses.map((course) => (
                <Link
                  key={course.id}
                  href={`/dashboard/courses/${course.courseId}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-card-foreground truncate">{course.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {course.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {course.completedClasses} of {course.totalClasses} classes completed
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <Progress value={course.progress} className="h-2 flex-1" />
                      <span className="text-sm font-medium text-muted-foreground">{course.progress}%</span>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Schedule */}
        <div className="space-y-6">
          {/* Upcoming Classes */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Upcoming Classes</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/schedule">
                  <Calendar className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockUpcomingClasses.map((cls, index) => (
                <div
                  key={cls.id}
                  className={`flex items-start gap-3 ${index !== mockUpcomingClasses.length - 1 ? "pb-4 border-b border-border" : ""}`}
                >
                  <img
                    src={cls.instructorImage || "/placeholder.svg"}
                    alt={cls.instructor}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-card-foreground text-sm truncate">{cls.courseTitle}</h4>
                    <p className="text-xs text-muted-foreground">{cls.instructor}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                      <span>
                        {cls.date} • {cls.time}
                      </span>
                      <Badge variant="outline" className="text-xs py-0">
                        <Users className="h-3 w-3 mr-1" />
                        {cls.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href="/dashboard/schedule">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Full Schedule
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href="/dashboard/progress">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Track Progress
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href="/courses">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Explore New Courses
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
