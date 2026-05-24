import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video, Users, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
import { mockUpcomingClasses } from "@/lib/user-data"
import { mockClassSessions } from "@/lib/course-materials"

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const currentWeek = [
  { day: "Sun", date: 8, hasClass: false },
  { day: "Mon", date: 9, hasClass: true },
  { day: "Tue", date: 10, hasClass: false },
  { day: "Wed", date: 11, hasClass: true },
  { day: "Thu", date: 12, hasClass: false },
  { day: "Fri", date: 13, hasClass: true },
  { day: "Sat", date: 14, hasClass: false },
]

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">My Schedule</h1>
          <p className="text-muted-foreground mt-1">View and manage your upcoming classes</p>
        </div>
        <Button>
          <Calendar className="h-4 w-4 mr-2" />
          Request Reschedule
        </Button>
      </div>

      {/* Week Calendar */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>December 2024</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent">
              Today
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {currentWeek.map((item, index) => (
              <div
                key={item.day}
                className={`text-center p-3 rounded-lg cursor-pointer transition-colors ${
                  item.date === 8
                    ? "bg-primary text-primary-foreground"
                    : item.hasClass
                      ? "bg-secondary hover:bg-secondary/80"
                      : "hover:bg-secondary/50"
                }`}
              >
                <p className="text-xs font-medium mb-1">{item.day}</p>
                <p className="text-lg font-semibold">{item.date}</p>
                {item.hasClass && (
                  <div
                    className={`w-2 h-2 rounded-full mx-auto mt-1 ${item.date === 8 ? "bg-primary-foreground" : "bg-primary"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Today's Classes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              Today's Classes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockUpcomingClasses
              .filter((c) => c.date === "Today")
              .map((cls) => (
                <div key={cls.id} className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{cls.courseTitle}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {cls.time} ({cls.duration})
                        </span>
                        <Badge variant="outline">
                          <Users className="h-3 w-3 mr-1" />
                          {cls.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={cls.instructorImage || "/placeholder.svg"}
                      alt={cls.instructor}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">{cls.instructor}</p>
                      <p className="text-xs text-muted-foreground">Your Instructor</p>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <a href={cls.meetingLink} target="_blank" rel="noopener noreferrer">
                      <Video className="h-4 w-4 mr-2" />
                      Join Class
                    </a>
                  </Button>
                </div>
              ))}
            {mockUpcomingClasses.filter((c) => c.date === "Today").length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No classes scheduled for today</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Upcoming This Week */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming This Week</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockUpcomingClasses.slice(1).map((cls) => (
              <div key={cls.id} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="w-14 h-14 rounded-lg bg-background flex flex-col items-center justify-center border border-border">
                  <p className="text-xs text-muted-foreground">
                    {cls.date === "Tomorrow" ? "Tue" : cls.date.slice(0, 3)}
                  </p>
                  <p className="text-lg font-bold">{cls.date === "Tomorrow" ? "10" : "11"}</p>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{cls.courseTitle}</h4>
                  <p className="text-sm text-muted-foreground">
                    {cls.time} • {cls.duration}
                  </p>
                  <p className="text-xs text-muted-foreground">{cls.instructor}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Class History */}
      <Card>
        <CardHeader>
          <CardTitle>Class History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Topic</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Instructor</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Recording</th>
                </tr>
              </thead>
              <tbody>
                {mockClassSessions
                  .filter((s) => s.status === "completed")
                  .map((session) => (
                    <tr key={session.id} className="border-b border-border last:border-0">
                      <td className="py-3 px-4">
                        <p className="font-medium">{session.date}</p>
                        <p className="text-sm text-muted-foreground">{session.time}</p>
                      </td>
                      <td className="py-3 px-4">{session.topic}</td>
                      <td className="py-3 px-4">{session.instructor}</td>
                      <td className="py-3 px-4">
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Attended
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        {session.recording ? (
                          <Button variant="ghost" size="sm" asChild>
                            <a href={session.recording}>
                              <Video className="h-4 w-4 mr-1" />
                              Watch
                            </a>
                          </Button>
                        ) : (
                          <span className="text-muted-foreground text-sm">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
