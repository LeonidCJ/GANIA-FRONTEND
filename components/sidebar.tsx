"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Sparkles, GitCompare, ClipboardCheck, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Generate Images", icon: Sparkles, href: "/generate" },
  { label: "Compare Models", icon: GitCompare, href: "/compare" },
  { label: "Evaluation", icon: ClipboardCheck, href: "/evaluation" },
  { label: "Results", icon: BarChart3, href: "/results" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-semibold tracking-tight text-sidebar-foreground">GANIA</span>
          <span className="text-xs text-muted-foreground">Creative Studio</span>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 py-2" aria-label="Main navigation">
        {navItems.map(({ label, icon: Icon, href }) => {
          const isActive = pathname === href
          return (
            <Link
              key={label}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/60",
              )}
            >
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="mx-3 mb-4 rounded-lg border border-sidebar-border bg-card p-4">
        <p className="text-xs font-medium text-foreground">Research Prototype</p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          GAN-based image synthesis for design ideation.
        </p>
      </div>
    </aside>
  )
}
