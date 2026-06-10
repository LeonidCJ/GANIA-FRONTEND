"use client"

import { useState } from "react"
import { GitCompare } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { ComparisonCard, type ComparisonModel } from "@/components/compare/comparison-card"

const models: ComparisonModel[] = [
  {
    id: "dcgan",
    name: "DCGAN",
    tagline: "Deep Convolutional GAN",
    image: "/gallery/gen-1.png",
    metrics: [
      { label: "Diversity", value: 72 },
      { label: "Visual Quality", value: 68 },
    ],
  },
  {
    id: "cyclegan",
    name: "CycleGAN",
    tagline: "Cycle-Consistent GAN",
    image: "/gallery/gen-3.png",
    metrics: [
      { label: "Diversity", value: 64 },
      { label: "Visual Quality", value: 81 },
    ],
  },
  {
    id: "combined",
    name: "Combined Model",
    tagline: "DCGAN + CycleGAN ensemble",
    image: "/gallery/gen-5.png",
    metrics: [
      { label: "Diversity", value: 86 },
      { label: "Visual Quality", value: 89 },
    ],
  },
]

export default function ComparePage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState<string | null>(null)

  const handleCompare = () => {
    setConfirmed(selected)
  }

  const selectedName = models.find((m) => m.id === confirmed)?.name

  return (
    <div className="theme-studio-dark flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <header className="border-b border-border/60 px-8 py-6">
          <h1 className="text-2xl font-semibold tracking-tight text-balance">Compare GAN Models</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Review sample outputs and quantitative metrics side by side, then select your preferred result.
          </p>
        </header>

        <div className="p-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {models.map((model) => (
              <ComparisonCard
                key={model.id}
                model={model}
                selected={selected === model.id}
                onSelect={() => setSelected(model.id)}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <GitCompare className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">Select preferred result</p>
                <p className="text-xs text-muted-foreground">
                  {selected
                    ? `${models.find((m) => m.id === selected)?.name} selected`
                    : "Choose a model card above to mark your preference."}
                </p>
              </div>
            </div>
            <Button size="lg" disabled={!selected} onClick={handleCompare}>
              Compare
            </Button>
          </div>

          {confirmed && (
            <div
              className="mt-4 rounded-lg border border-primary/40 bg-primary/10 px-5 py-4 text-sm text-foreground"
              role="status"
            >
              You preferred <span className="font-semibold">{selectedName}</span>. This choice has been recorded for
              evaluation.
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
