import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const images = [
  { src: "/gallery/gen-1.png", model: "DCGAN", time: "2m ago" },
  { src: "/gallery/gen-2.png", model: "CycleGAN", time: "11m ago" },
  { src: "/gallery/gen-3.png", model: "Combined", time: "26m ago" },
  { src: "/gallery/gen-4.png", model: "DCGAN", time: "1h ago" },
  { src: "/gallery/gen-5.png", model: "Combined", time: "2h ago" },
  { src: "/gallery/gen-6.png", model: "CycleGAN", time: "3h ago" },
]

export function RecentGallery() {
  return (
    <section aria-labelledby="gallery-heading">
      <div className="mb-4 flex items-center justify-between">
        <h2 id="gallery-heading" className="text-lg font-semibold tracking-tight text-foreground">
          Recent Generated Images
        </h2>
        <button type="button" className="text-sm font-medium text-primary hover:underline">
          View all
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {images.map((img, i) => (
          <Card key={img.src} className="group overflow-hidden p-0">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={img.src || "/placeholder.svg"}
                alt={`AI-generated image ${i + 1} from ${img.model}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <Badge className="absolute left-2 top-2 bg-background/85 text-foreground backdrop-blur">
                {img.model}
              </Badge>
            </div>
            <div className="px-3 py-2">
              <p className="text-xs text-muted-foreground">{img.time}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
