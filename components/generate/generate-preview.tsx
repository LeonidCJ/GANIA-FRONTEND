"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Save, Download, RefreshCw, ImageIcon } from "lucide-react"

type Props = {
  images: string[]
  loading: boolean
  selected: number
  setSelected: (i: number) => void
  onRegenerate: () => void
}

export function GeneratePreview({ images, loading, selected, setSelected, onRegenerate }: Props) {
  const hasImages = images.length > 0
  const previewSrc = hasImages ? images[selected] : null

  return (
    <div className="flex flex-col gap-5">
      <Card className="overflow-hidden border-border/60 bg-card/80 p-5 backdrop-blur">
        <h2 className="text-sm font-semibold text-foreground">Generated Image Preview</h2>
        <div className="mt-4 flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-secondary/30">
          {loading ? (
            <div className="flex flex-col items-center gap-3 text-muted-foreground">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              <p className="text-sm">Synthesizing images…</p>
            </div>
          ) : previewSrc ? (
            <Image
              src={previewSrc || "/placeholder.svg"}
              alt="Generated preview"
              width={640}
              height={360}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-muted-foreground">
              <ImageIcon className="h-10 w-10" aria-hidden="true" />
              <p className="text-sm">Configure settings and click Generate</p>
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <Button variant="secondary" disabled={!hasImages} className="flex-1">
            <Save className="h-4 w-4" aria-hidden="true" />
            Save
          </Button>
          <Button variant="secondary" disabled={!hasImages} className="flex-1">
            <Download className="h-4 w-4" aria-hidden="true" />
            Download
          </Button>
          <Button variant="outline" disabled={loading} onClick={onRegenerate} className="flex-1 bg-transparent">
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            Generate Again
          </Button>
        </div>
      </Card>

      <Card className="border-border/60 bg-card/80 p-5 backdrop-blur">
        <h2 className="text-sm font-semibold text-foreground">Image Gallery</h2>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {hasImages
            ? images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-label={`Select generated image ${i + 1}`}
                  aria-current={selected === i ? "true" : undefined}
                  className={`group relative aspect-square overflow-hidden rounded-lg border transition-all ${
                    selected === i
                      ? "border-primary ring-2 ring-primary/40"
                      : "border-border/60 hover:border-primary/60"
                  }`}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Generated image ${i + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </button>
              ))
            : Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square animate-pulse rounded-lg border border-border/60 bg-secondary/40"
                />
              ))}
        </div>
      </Card>
    </div>
  )
}
