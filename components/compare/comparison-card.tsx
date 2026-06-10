"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

type Metric = { label: string; value: number }

export type ComparisonModel = {
  id: string
  name: string
  tagline: string
  image: string
  metrics: Metric[]
}

function MetricBar({ label, value }: Metric) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium text-foreground">{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export function ComparisonCard({
  model,
  selected,
  onSelect,
}: {
  model: ComparisonModel
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "group flex flex-col rounded-xl border bg-card text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        selected
          ? "border-primary ring-2 ring-primary/40"
          : "border-border hover:border-primary/50",
      )}
    >
      <div className="flex items-center justify-between gap-2 px-5 pt-5">
        <div>
          <h3 className="text-base font-semibold tracking-tight text-foreground">{model.name}</h3>
          <p className="text-xs text-muted-foreground">{model.tagline}</p>
        </div>
        <span
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
            selected ? "border-primary bg-primary text-primary-foreground" : "border-border text-transparent",
          )}
          aria-hidden="true"
        >
          <Check className="h-3.5 w-3.5" />
        </span>
      </div>

      <div className="relative mx-5 mt-4 aspect-square overflow-hidden rounded-lg border border-border/60">
        <Image
          src={model.image || "/placeholder.svg"}
          alt={`Sample output from ${model.name}`}
          fill
          sizes="(max-width: 1024px) 100vw, 320px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 p-5">
        {model.metrics.map((m) => (
          <MetricBar key={m.label} {...m} />
        ))}
      </div>
    </button>
  )
}
