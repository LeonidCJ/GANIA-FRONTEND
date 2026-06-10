import { Sidebar } from "@/components/sidebar"
import { MetricCards } from "@/components/results/metric-cards"
import { ResultsCharts } from "@/components/results/results-charts"
import { ResultsGallery } from "@/components/results/results-gallery"

export default function ResultsPage() {
  return (
    <div className="theme-studio-dark flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <header className="border-b border-border/60 px-8 py-6">
          <h1 className="text-2xl font-semibold tracking-tight text-balance">Research Results</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Aggregated study analytics on creativity support and GAN model performance.
          </p>
        </header>

        <div className="flex flex-col gap-6 p-8">
          <MetricCards />
          <ResultsCharts />
          <ResultsGallery />
        </div>
      </main>
    </div>
  )
}
