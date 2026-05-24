"use client"

import { useEffect, useState, useRef } from "react"
import { Users, BookOpen, Award, Globe } from "lucide-react"

const stats = [
  { icon: Users, value: 5000, suffix: "+", label: "Students Enrolled" },
  { icon: BookOpen, value: 15, suffix: "+", label: "Courses Available" },
  { icon: Award, value: 50, suffix: "+", label: "Certified Teachers" },
  { icon: Globe, value: 40, suffix: "+", label: "Countries Reached" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = value / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary-foreground">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/80 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
