import type React from "react"
import DashboardSidebar from "@/components/dashboard/sidebar"
import DashboardMobileNav from "@/components/dashboard/mobile-nav"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <DashboardMobileNav />
      <main className="lg:pl-64">
        <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">{children}</div>
      </main>
    </div>
  )
}
