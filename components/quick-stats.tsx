import { Card } from "@/components/ui/card"
import { ImageIcon, ClipboardCheck, Layers, TrendingUp } from "lucide-react"

const stats = [
  { label: "Images Generated", value: "2,847", icon: ImageIcon, delta: "+184 this week" },
  { label: "Evaluations Completed", value: "412", icon: ClipboardCheck, delta: "+37 this week" },
  { label: "Active Models", value: "3", icon: Layers, delta: "DCGAN · CycleGAN · Hybrid" },
  { label: "Avg. Quality Score", value: "8.6", icon: TrendingUp, delta: "out of 10" },
]

export function QuickStats() {
  return (
    <section aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">
        Quick statistics
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, delta }) => (
          <Card key={label} className="gap-3 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">{label}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-primary">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-tight text-foreground">{value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{delta}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
