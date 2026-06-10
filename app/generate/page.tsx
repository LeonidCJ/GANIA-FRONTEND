"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { GenerateControls } from "@/components/generate/generate-controls"
import { GeneratePreview } from "@/components/generate/generate-preview"

const sampleImages = [
  "/gallery/gen-1.png",
  "/gallery/gen-2.png",
  "/gallery/gen-3.png",
  "/gallery/gen-4.png",
  "/gallery/gen-5.png",
  "/gallery/gen-6.png",
]

export default function GeneratePage() {
  const [model, setModel] = useState("dcgan")
  const [dataset, setDataset] = useState("cifar-10")
  const [count, setCount] = useState(6)
  const [size, setSize] = useState("128")
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const [selected, setSelected] = useState(0)

  const handleGenerate = () => {
    setLoading(true)
    setImages([])
    setTimeout(() => {
      setImages(sampleImages.slice(0, count))
      setSelected(0)
      setLoading(false)
    }, 1600)
  }

  return (
    <div className="theme-studio-dark flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <header className="border-b border-border/60 px-8 py-6">
          <h1 className="text-2xl font-semibold tracking-tight text-balance">Generate Images</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Synthesize fresh visual concepts from trained GAN models.
          </p>
        </header>

        <div className="grid gap-6 p-8 lg:grid-cols-[380px_1fr]">
          <GenerateControls
            model={model}
            setModel={setModel}
            dataset={dataset}
            setDataset={setDataset}
            count={count}
            setCount={setCount}
            size={size}
            setSize={setSize}
            loading={loading}
            onGenerate={handleGenerate}
          />
          <GeneratePreview
            images={images}
            loading={loading}
            selected={selected}
            setSelected={setSelected}
            onRegenerate={handleGenerate}
          />
        </div>
      </main>
    </div>
  )
}
