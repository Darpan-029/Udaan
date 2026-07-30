"use client"

import * as React from "react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  React.useEffect(() => {
    // Set target date for UDAAN 2026 ceremony: 27 August 2026
    const eventDate = new Date("2026-08-27T09:00:00+05:30")

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate.getTime() - now

      if (distance <= 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const items = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ]

  return (
    <div className="flex items-center justify-center space-x-4 md:space-x-8">
      {items.map((item, idx) => (
        <React.Fragment key={item.label}>
          <div className="text-center min-w-[60px]">
            <div className="font-serif text-3xl md:text-4xl text-[#142338] dark:text-[#FAF8F5] font-normal">
              {item.value.toString().padStart(2, "0")}
            </div>
            <div className="text-[10px] font-sans tracking-[0.2em] text-[#64748B] dark:text-[#94A3B8] uppercase mt-1">
              {item.label}
            </div>
          </div>
          {idx < items.length - 1 && (
            <span className="text-[#C5A059] font-serif text-xl select-none">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
