"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Radar,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  XAxis,
  YAxis,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const satisfactionData = [
  { week: "W1", score: 3.4 },
  { week: "W2", score: 3.7 },
  { week: "W3", score: 3.9 },
  { week: "W4", score: 4.1 },
  { week: "W5", score: 4.3 },
  { week: "W6", score: 4.5 },
]

const creativityData = [
  { dimension: "Ideation", value: 82 },
  { dimension: "Inspiration", value: 88 },
  { dimension: "Exploration", value: 74 },
  { dimension: "Flexibility", value: 79 },
  { dimension: "Block Relief", value: 91 },
]

const modelData = [
  { model: "DCGAN", quality: 68, diversity: 72 },
  { model: "CycleGAN", quality: 81, diversity: 64 },
  { model: "Combined", quality: 89, diversity: 86 },
]

function ChartCard({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  )
}

export function ResultsCharts() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <ChartCard title="User Satisfaction" description="Mean satisfaction rating over the study period">
        <ChartContainer
          config={{ score: { label: "Satisfaction", color: "var(--chart-1)" } }}
          className="h-[240px] w-full"
        >
          <AreaChart data={satisfactionData} margin={{ left: 4, right: 12, top: 8 }}>
            <defs>
              <linearGradient id="fillScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-score)" stopOpacity={0.5} />
                <stop offset="95%" stopColor="var(--color-score)" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="week" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis domain={[3, 5]} tickLine={false} axisLine={false} tickMargin={8} width={28} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              dataKey="score"
              type="monotone"
              stroke="var(--color-score)"
              strokeWidth={2}
              fill="url(#fillScore)"
            />
          </AreaChart>
        </ChartContainer>
      </ChartCard>

      <ChartCard title="Creativity Support" description="Self-reported support across creative dimensions">
        <ChartContainer
          config={{ value: { label: "Support", color: "var(--chart-2)" } }}
          className="h-[240px] w-full"
        >
          <RadarChart data={creativityData}>
            <ChartTooltip content={<ChartTooltipContent />} />
            <PolarGrid stroke="var(--border)" />
            <PolarAngleAxis dataKey="dimension" tick={{ fontSize: 11 }} />
            <Radar
              dataKey="value"
              stroke="var(--color-value)"
              fill="var(--color-value)"
              fillOpacity={0.35}
              strokeWidth={2}
            />
          </RadarChart>
        </ChartContainer>
      </ChartCard>

      <ChartCard
        title="Model Comparison"
        description="Visual quality vs. output diversity by model"
      >
        <ChartContainer
          config={{
            quality: { label: "Visual Quality", color: "var(--chart-1)" },
            diversity: { label: "Diversity", color: "var(--chart-2)" },
          }}
          className="h-[240px] w-full lg:h-[260px]"
        >
          <BarChart data={modelData} margin={{ left: 4, right: 12, top: 8 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="model" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis domain={[0, 100]} tickLine={false} axisLine={false} tickMargin={8} width={28} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="quality" fill="var(--color-quality)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="diversity" fill="var(--color-diversity)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </ChartCard>

      <ChartCard title="Score Distribution" description="Creativity score frequency among participants">
        <ChartContainer
          config={{ score: { label: "Participants", color: "var(--chart-2)" } }}
          className="h-[240px] w-full lg:h-[260px]"
        >
          <BarChart
            data={[
              { bucket: "1", count: 4 },
              { bucket: "2", count: 11 },
              { bucket: "3", count: 27 },
              { bucket: "4", count: 49 },
              { bucket: "5", count: 37 },
            ]}
            margin={{ left: 4, right: 12, top: 8 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="bucket" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} width={28} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="count" fill="var(--color-score)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </ChartCard>
    </div>
  )
}
