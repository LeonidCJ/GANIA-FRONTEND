"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { StarRating } from "@/components/evaluate/star-rating"
import { CheckCircle2, Sparkles } from "lucide-react"

const CRITERIA = [
  {
    key: "creativity",
    label: "Creativity Support",
    description: "Did the tool spark new creative directions?",
  },
  {
    key: "inspiration",
    label: "Visual Inspiration",
    description: "How visually inspiring were the generated results?",
  },
  {
    key: "ease",
    label: "Ease of Use",
    description: "How intuitive was the generation workflow?",
  },
  {
    key: "block",
    label: "Helped Overcome Creative Block",
    description: "Did it help you move past a creative block?",
  },
] as const

type CriteriaKey = (typeof CRITERIA)[number]["key"]

export function EvaluationForm() {
  const [ratings, setRatings] = useState<Record<CriteriaKey, number>>({
    creativity: 0,
    inspiration: 0,
    ease: 0,
    block: 0,
  })
  const [comments, setComments] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const totalAnswered = Object.values(ratings).filter((r) => r > 0).length
  const canSubmit = totalAnswered === CRITERIA.length

  function setRating(key: CriteriaKey, value: number) {
    setRatings((prev) => ({ ...prev, [key]: value }))
    setSubmitted(false)
  }

  function handleSubmit() {
    if (!canSubmit) return
    console.log("[v0] Evaluation submitted:", { ratings, comments })
    setSubmitted(true)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      {/* Questionnaire */}
      <Card className="border-border bg-card p-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold text-foreground">Rate your experience</h2>
            <p className="text-sm text-muted-foreground">
              Score each statement from 1 to 5 stars based on your session.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {CRITERIA.map((c) => (
              <StarRating
                key={c.key}
                label={c.label}
                description={c.description}
                value={ratings[c.key]}
                onChange={(v) => setRating(c.key, v)}
              />
            ))}
          </div>

          <Separator className="bg-border" />

          <div className="flex flex-col gap-2">
            <Label htmlFor="comments" className="text-sm font-medium text-foreground">
              Open comments
            </Label>
            <Textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Share any additional thoughts on how the tool supported your creative process..."
              className="min-h-28 resize-none bg-secondary text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Submit Evaluation
            </Button>
            {submitted ? (
              <div className="flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-sm text-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Thank you. Your evaluation has been recorded.</span>
              </div>
            ) : (
              <p className="text-center text-xs text-muted-foreground">
                {totalAnswered} of {CRITERIA.length} criteria rated
              </p>
            )}
          </div>
        </div>
      </Card>

      {/* Preview */}
      <Card className="border-border bg-card p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <h2 className="text-sm font-medium text-foreground">Generated image under review</h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-border">
            <img
              src="/gallery/gen-2.png"
              alt="AI-generated artwork being evaluated"
              className="aspect-square w-full object-cover"
            />
          </div>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-secondary p-3">
              <dt className="text-xs text-muted-foreground">Model</dt>
              <dd className="font-medium text-foreground">Combined Model</dd>
            </div>
            <div className="rounded-lg bg-secondary p-3">
              <dt className="text-xs text-muted-foreground">Dataset</dt>
              <dd className="font-medium text-foreground">CIFAR-10</dd>
            </div>
            <div className="rounded-lg bg-secondary p-3">
              <dt className="text-xs text-muted-foreground">Resolution</dt>
              <dd className="font-medium text-foreground">256 x 256</dd>
            </div>
            <div className="rounded-lg bg-secondary p-3">
              <dt className="text-xs text-muted-foreground">Seed</dt>
              <dd className="font-medium text-foreground">#48217</dd>
            </div>
          </dl>
          <p className="text-pretty text-xs leading-relaxed text-muted-foreground">
            Your evaluation helps measure the creative utility of generative models in supporting designers through
            ideation and creative-block scenarios.
          </p>
        </div>
      </Card>
    </div>
  )
}
