import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Model = {
  name: string
  tag: string
  description: string
  accent: string
  metric: string
  metricLabel: string
}

const models: Model[] = [
  {
    name: "DCGAN",
    tag: "Baseline",
    description: "Deep Convolutional GAN generating novel imagery from random latent noise.",
    accent: "bg-chart-1",
    metric: "10k",
    metricLabel: "samples trained",
  },
  {
    name: "CycleGAN",
    tag: "Style Transfer",
    description: "Unpaired image-to-image translation for reimagining existing references.",
    accent: "bg-chart-2",
    metric: "8.4k",
    metricLabel: "translations",
  },
  {
    name: "Combined Model",
    tag: "Hybrid",
    description: "Ensemble of DCGAN synthesis and CycleGAN refinement for richer outputs.",
    accent: "bg-chart-5",
    metric: "92%",
    metricLabel: "preference rate",
  },
]

export function ModelCards() {
  return (
    <section aria-labelledby="models-heading">
      <h2 id="models-heading" className="mb-4 text-lg font-semibold tracking-tight text-foreground">
        Models
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {models.map((model) => (
          <Card key={model.name} className="gap-4 p-5 transition-shadow hover:shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className={cn("h-10 w-1.5 rounded-full", model.accent)} aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground">{model.name}</h3>
                  <Badge variant="secondary" className="mt-1 text-xs">
                    {model.tag}
                  </Badge>
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{model.description}</p>
            <div className="flex items-baseline gap-2 border-t border-border pt-3">
              <span className="text-2xl font-semibold text-foreground">{model.metric}</span>
              <span className="text-xs text-muted-foreground">{model.metricLabel}</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
