import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Award, Target, BookOpen, Clock, Flame, Star } from "lucide-react"
import { mockEnrolledCourses, mockUserStats } from "@/lib/user-data"
import { mockProgressData } from "@/lib/course-materials"

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Progress Tracking</h1>
        <p className="text-muted-foreground mt-1">Monitor your learning journey and achievements</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <Flame className="h-6 w-6" />
              </div>
              <div>
                <p className="text-3xl font-bold">{mockUserStats.currentStreak}</p>
                <p className="text-sm text-primary-foreground/80">Day Streak</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-3xl font-bold text-card-foreground">{mockUserStats.hoursLearned}h</p>
                <p className="text-sm text-muted-foreground">Total Learning</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-3xl font-bold text-card-foreground">{mockUserStats.totalClasses}</p>
                <p className="text-sm text-muted-foreground">Classes Taken</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-3xl font-bold text-card-foreground">{mockProgressData.quizAverage}%</p>
                <p className="text-sm text-muted-foreground">Quiz Average</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Course Progress */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Course Progress
            </CardTitle>
            <CardDescription>Track your advancement in each enrolled course</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {mockEnrolledCourses.map((course) => (
              <div key={course.id} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{course.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {course.completedClasses} of {course.totalClasses} classes
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={course.status === "completed" ? "default" : "secondary"}
                    className={course.status === "completed" ? "bg-green-100 text-green-700" : ""}
                  >
                    {course.status === "completed" ? "Completed" : `${course.progress}%`}
                  </Badge>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weekly Progress Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Weekly Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockProgressData.weeklyProgress.map((week) => (
                <div key={week.week} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{week.week}</span>
                    <span className="font-medium">{week.progress}%</span>
                  </div>
                  <Progress value={week.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skills Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Skills Assessment
          </CardTitle>
          <CardDescription>Your performance across key learning areas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProgressData.skillBreakdown.map((skill) => (
              <div key={skill.skill} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-3">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-secondary"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${skill.score * 2.51} 251`}
                      className="text-primary"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">{skill.score}%</span>
                  </div>
                </div>
                <p className="font-medium">{skill.skill}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "First Module Complete",
                description: "Completed your first learning module",
                icon: "🎯",
                earned: true,
              },
              { title: "2 Week Streak", description: "Studied for 14 days in a row", icon: "🔥", earned: true },
              { title: "Quiz Master", description: "Scored 90%+ on 5 quizzes", icon: "📝", earned: true },
              { title: "Hafiz Journey", description: "Memorize 5 Surahs", icon: "📖", earned: false },
            ].map((achievement) => (
              <div
                key={achievement.title}
                className={`p-4 rounded-lg border text-center ${achievement.earned ? "bg-primary/5 border-primary/20" : "bg-muted/50 border-border opacity-50"}`}
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <h4 className="font-medium text-sm">{achievement.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                {achievement.earned && (
                  <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700">
                    Earned
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
