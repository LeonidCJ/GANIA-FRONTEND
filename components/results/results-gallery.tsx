import Image from "next/image"

const items = [
  { src: "/gallery/gen-1.png", model: "Combined", score: 4.6 },
  { src: "/gallery/gen-2.png", model: "CycleGAN", score: 4.3 },
  { src: "/gallery/gen-3.png", model: "Combined", score: 4.8 },
  { src: "/gallery/gen-4.png", model: "DCGAN", score: 3.9 },
  { src: "/gallery/gen-5.png", model: "Combined", score: 4.7 },
  { src: "/gallery/gen-6.png", model: "CycleGAN", score: 4.2 },
]

export function ResultsGallery() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground">Top-Rated Generated Images</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Highest-scoring outputs selected by study participants
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item, i) => (
          <figure key={i} className="group overflow-hidden rounded-lg border border-border">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={`Generated sample ${i + 1} from ${item.model}`}
                fill
                sizes="(min-width: 1024px) 16vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <figcaption className="flex items-center justify-between px-2.5 py-2 text-xs">
              <span className="text-muted-foreground">{item.model}</span>
              <span className="font-medium text-foreground">{item.score.toFixed(1)}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
