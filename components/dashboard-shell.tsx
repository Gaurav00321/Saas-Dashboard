import type { ReactNode } from "react"

interface DashboardShellProps {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return <div className="flex-1 space-y-8 p-8 pt-6">{children}</div>
}

