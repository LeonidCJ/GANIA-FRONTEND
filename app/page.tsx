import { Sidebar } from "@/components/sidebar"
import { ModelCards } from "@/components/model-cards"
import { QuickStats } from "@/components/quick-stats"
import { RecentGallery } from "@/components/recent-gallery"
import { Sparkles } from "lucide-react"

export default function Page() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <header className="border-b border-border px-8 py-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-primary">Dashboard</p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground text-balance">
                Welcome back to GANIA
              </h1>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
                Break through creative blocks with AI-generated imagery. Explore, compare, and evaluate
                your generative models in one place.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Generate Images
            </button>
          </div>
        </header>

        <div className="flex flex-col gap-10 px-8 py-8">
          <QuickStats />
          <ModelCards />
          <RecentGallery />
        </div>
      </main>
    </div>
  )
}
