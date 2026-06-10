import { ClipboardCheck } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { EvaluationForm } from "@/components/evaluate/evaluation-form"

export default function EvaluationPage() {
  return (
    <div className="theme-studio-dark flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <header className="border-b border-border/60 px-8 py-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
              <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-balance">Creative Utility Evaluation</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Assess how effectively the generated results supported your creative process.
              </p>
            </div>
          </div>
        </header>

        <div className="p-8">
          <EvaluationForm />
        </div>
      </main>
    </div>
  )
}
