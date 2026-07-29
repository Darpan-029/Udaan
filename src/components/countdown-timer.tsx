"use client"

import * as React from "react"
import { Clock } from "lucide-react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  React.useEffect(() => {
    // Set event date to 30 days from now for demo
    const eventDate = new Date()
    eventDate.setDate(eventDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate.getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center justify-center space-x-4">
      <Clock className="h-6 w-6 text-primary" />
      <div className="flex space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              {value.toString().padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground capitalize">
              {unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
