"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Camera, Mail, Phone, MapPin, Calendar, Award, BookOpen, Clock, Save, Edit2 } from "lucide-react"
import { mockUser, mockUserStats, mockEnrolledCourses } from "@/lib/user-data"

const timezones = [
  { value: "UTC", label: "UTC (Coordinated Universal Time)" },
  { value: "EST", label: "EST (Eastern Standard Time)" },
  { value: "PST", label: "PST (Pacific Standard Time)" },
  { value: "GMT", label: "GMT (Greenwich Mean Time)" },
  { value: "IST", label: "IST (India Standard Time)" },
  { value: "AST", label: "AST (Arabia Standard Time)" },
]

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "Ahmed",
    lastName: "Hassan",
    email: "ahmed.hassan@email.com",
    phone: "+1 555-123-4567",
    country: "United States",
    timezone: "EST",
    bio: "Seeking to deepen my understanding of the Quran and Arabic language. Currently focused on Hifz and Tajweed studies.",
  })

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">My Profile</h1>
          <p className="text-muted-foreground mt-1">Manage your personal information and preferences</p>
        </div>
        <Button onClick={() => (isEditing ? handleSave() : setIsEditing(true))} disabled={isSaving}>
          {isEditing ? (
            <>
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? "Saving..." : "Save Changes"}
            </>
          ) : (
            <>
              <Edit2 className="h-4 w-4 mr-2" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:row-span-2">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="relative inline-block">
                <Avatar className="w-28 h-28">
                  <AvatarImage src="/student-avatar-male.jpg" alt={mockUser.name} />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">AH</AvatarFallback>
                </Avatar>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <Camera className="h-4 w-4" />
                  </button>
                )}
              </div>
              <h2 className="text-xl font-bold mt-4">{mockUser.name}</h2>
              <p className="text-muted-foreground">{mockUser.email}</p>
              <Badge className="mt-2">Premium Member</Badge>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{formData.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{formData.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{formData.country}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Member since {mockUser.memberSince}</span>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-secondary rounded-lg">
                <BookOpen className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-xl font-bold">{mockUserStats.coursesEnrolled}</p>
                <p className="text-xs text-muted-foreground">Courses</p>
              </div>
              <div className="p-3 bg-secondary rounded-lg">
                <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-xl font-bold">{mockUserStats.hoursLearned}h</p>
                <p className="text-xs text-muted-foreground">Learned</p>
              </div>
              <div className="p-3 bg-secondary rounded-lg">
                <Award className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-xl font-bold">{mockUserStats.totalClasses}</p>
                <p className="text-xs text-muted-foreground">Classes</p>
              </div>
              <div className="p-3 bg-secondary rounded-lg">
                <span className="text-xl">🔥</span>
                <p className="text-xl font-bold">{mockUserStats.currentStreak}</p>
                <p className="text-xs text-muted-foreground">Day Streak</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your personal details and contact information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={!isEditing}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select
                value={formData.timezone}
                onValueChange={(value) => setFormData({ ...formData, timezone: value })}
                disabled={!isEditing}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {timezones.map((tz) => (
                    <SelectItem key={tz.value} value={tz.value}>
                      {tz.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                disabled={!isEditing}
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        {/* Enrolled Courses */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>My Enrolled Courses</CardTitle>
            <CardDescription>View and manage your current enrollments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockEnrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border"
                >
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{course.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {course.completedClasses} of {course.totalClasses} classes • {course.progress}% complete
                    </p>
                  </div>
                  <Badge
                    variant={course.status === "completed" ? "default" : "secondary"}
                    className={course.status === "completed" ? "bg-green-100 text-green-700" : ""}
                  >
                    {course.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
