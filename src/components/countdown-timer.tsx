"use client"

import * as React from "react"

const EVENT_DATE = new Date("2026-08-27T08:00:00+05:30")

function computeTimeLeft() {
  const distance = EVENT_DATE.getTime() - Date.now()
  if (distance <= 0) return null
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  }
}

export function CountdownTimer() {
  // Starts unmounted (server and pre-hydration client render the same "--"
  // placeholder, so there's no hydration mismatch from Date.now() differing
  // between the two). The real value fills in immediately on mount.
  const [mounted, setMounted] = React.useState(false)
  const [timeLeft, setTimeLeft] = React.useState<ReturnType<typeof computeTimeLeft>>(null)
  const [ceremonyArrived, setCeremonyArrived] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const tick = () => {
      const next = computeTimeLeft()
      if (!next) {
        setCeremonyArrived(true)
        setTimeLeft(null)
        return
      }
      setTimeLeft(next)
    }
    tick()
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [])

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
              <div className="font-serif text-3xl md:text-4xl text-foreground font-normal">{item.value}</div>
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

  if (ceremonyArrived) {
    return (
      <div className="text-center py-2">
        <span className="font-serif text-2xl md:text-3xl text-accent uppercase tracking-widest block">
          उड़ान 2026 IS LIVE NOW
        </span>
        <span className="text-xs font-sans text-muted-foreground uppercase tracking-widest mt-1 block">
          Silveria Hall, SGSITS Indore
        </span>
      </div>
    )
  }

  const items = [
    { label: "DAYS", value: timeLeft?.days ?? 0 },
    { label: "HOURS", value: timeLeft?.hours ?? 0 },
    { label: "MINUTES", value: timeLeft?.minutes ?? 0 },
    { label: "SECONDS", value: timeLeft?.seconds ?? 0 },
  ]

  return (
    <div className="flex items-center justify-center space-x-4 md:space-x-8">
      {items.map((item, idx) => (
        <React.Fragment key={item.label}>
          <div className="text-center min-w-[60px]">
            <div className="font-serif text-3xl md:text-4xl text-foreground font-normal tabular-nums">
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
