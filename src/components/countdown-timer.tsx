"use client"

import * as React from "react"

export function CountdownTimer() {
  const [mounted, setMounted] = React.useState(false)
  const eventDate = React.useMemo(() => new Date("2026-08-27T09:00:00+05:30"), [])

  const calculateTimeLeft = React.useCallback(() => {
    const now = new Date().getTime()
    const distance = eventDate.getTime() - now

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true }
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
      isExpired: false,
    }
  }, [eventDate])

  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })

  React.useEffect(() => {
    setMounted(true)
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      const updated = calculateTimeLeft()
      setTimeLeft(updated)
      if (updated.isExpired) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [calculateTimeLeft])

  if (!mounted) {
    const items = [
      { label: "DAYS", value: "--" },
      { label: "HOURS", value: "--" },
      { label: "MINUTES", value: "--" },
      { label: "SECONDS", value: "--" },
    ]
    return (
      <div className="flex items-center justify-center space-x-4 md:space-x-8">
        {items.map((item, idx) => (
          <React.Fragment key={item.label}>
            <div className="text-center min-w-[60px]">
              <div className="font-serif text-3xl md:text-4xl text-foreground font-normal">
                {item.value}
              </div>
              <div className="text-[10px] font-sans tracking-[0.2em] text-muted-foreground uppercase mt-1">
                {item.label}
              </div>
            </div>
            {idx < items.length - 1 && (
              <span className="text-accent font-serif text-xl select-none">:</span>
            )}
          </React.Fragment>
        ))}
      </div>
    )
  }

  if (timeLeft.isExpired) {
    return (
      <div className="text-center py-2">
        <span className="font-serif text-2xl md:text-3xl text-accent uppercase tracking-widest block">
          UDAAN 2026 IS LIVE NOW
        </span>
        <span className="text-xs font-sans text-muted-foreground uppercase tracking-widest mt-1 block">
          SGSITS Golden Jubilee Auditorium, Indore
        </span>
      </div>
    )
  }

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
            <div className="font-serif text-3xl md:text-4xl text-foreground font-normal">
              {item.value.toString().padStart(2, "0")}
            </div>
            <div className="text-[10px] font-sans tracking-[0.2em] text-muted-foreground uppercase mt-1">
              {item.label}
            </div>
          </div>
          {idx < items.length - 1 && (
            <span className="text-accent font-serif text-xl select-none">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
