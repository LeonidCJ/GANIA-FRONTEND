"use client"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Sparkles, Loader2 } from "lucide-react"

const models = [
  { value: "dcgan", label: "DCGAN", desc: "Deep convolutional GAN" },
  { value: "cyclegan", label: "CycleGAN", desc: "Unpaired image translation" },
  { value: "combined", label: "Combined Model", desc: "Hybrid ensemble" },
]

type Props = {
  model: string
  setModel: (v: string) => void
  dataset: string
  setDataset: (v: string) => void
  count: number
  setCount: (v: number) => void
  size: string
  setSize: (v: string) => void
  loading: boolean
  onGenerate: () => void
}

export function GenerateControls({
  model,
  setModel,
  dataset,
  setDataset,
  count,
  setCount,
  size,
  setSize,
  loading,
  onGenerate,
}: Props) {
  return (
    <div className="flex flex-col gap-5">
      <Card className="border-border/60 bg-card/80 p-5 backdrop-blur">
        <h2 className="text-sm font-semibold text-foreground">Model Selection</h2>
        <RadioGroup value={model} onValueChange={setModel} className="mt-4 gap-2">
          {models.map((m) => (
            <Label
              key={m.value}
              htmlFor={m.value}
              className="flex cursor-pointer items-center gap-3 rounded-lg border border-border/60 bg-secondary/40 px-3 py-3 transition-colors hover:bg-secondary/70 has-[:checked]:border-primary has-[:checked]:bg-primary/15"
            >
              <RadioGroupItem id={m.value} value={m.value} />
              <span className="flex flex-col">
                <span className="text-sm font-medium text-foreground">{m.label}</span>
                <span className="text-xs text-muted-foreground">{m.desc}</span>
              </span>
            </Label>
          ))}
        </RadioGroup>
      </Card>

      <Card className="border-border/60 bg-card/80 p-5 backdrop-blur">
        <h2 className="text-sm font-semibold text-foreground">Dataset Selection</h2>
        <Select value={dataset} onValueChange={setDataset}>
          <SelectTrigger className="mt-4 w-full bg-secondary/40">
            <SelectValue placeholder="Choose a dataset" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cifar-10">CIFAR-10</SelectItem>
            <SelectItem value="apple2orange">Apple2Orange</SelectItem>
            <SelectItem value="custom">Custom Dataset</SelectItem>
          </SelectContent>
        </Select>
      </Card>

      <Card className="border-border/60 bg-card/80 p-5 backdrop-blur">
        <h2 className="text-sm font-semibold text-foreground">Generation Settings</h2>
        <div className="mt-4 flex flex-col gap-5">
          <div>
            <div className="flex items-center justify-between">
              <Label className="text-sm text-foreground">Number of images</Label>
              <span className="text-sm font-medium text-primary">{count}</span>
            </div>
            <Slider
              className="mt-3"
              value={[count]}
              onValueChange={(v) => setCount(v[0])}
              min={1}
              max={12}
              step={1}
            />
          </div>
          <div>
            <Label className="text-sm text-foreground">Image size</Label>
            <Select value={size} onValueChange={setSize}>
              <SelectTrigger className="mt-3 w-full bg-secondary/40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="64">64 × 64</SelectItem>
                <SelectItem value="128">128 × 128</SelectItem>
                <SelectItem value="256">256 × 256</SelectItem>
                <SelectItem value="512">512 × 512</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      <Button
        size="lg"
        onClick={onGenerate}
        disabled={loading}
        className="h-12 w-full text-base font-semibold"
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Generating…
          </>
        ) : (
          <>
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            Generate
          </>
        )}
      </Button>
    </div>
  )
}
