"use client"

import { Users, Sparkles, Trophy } from "lucide-react"

const metrics = [
  {
    label: "Participants",
    value: "128",
    sub: "across 3 study cohorts",
    icon: Users,
  },
  {
    label: "Average Creativity Score",
    value: "4.2",
    sub: "out of 5.0",
    icon: Sparkles,
  },
  {
    label: "Preferred GAN Model",
    value: "Combined",
    sub: "57% of participants",
    icon: Trophy,
  },
]

export function MetricCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map(({ label, value, sub, icon: Icon }) => (
        <div key={label} className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">{label}</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary">
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
          </div>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-foreground">{value}</p>
          <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
        </div>
      ))}
    </div>
  )
}
