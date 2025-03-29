import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { UsageStats } from "@/components/usage-stats"
import { RecentActivity } from "@/components/recent-activity"
import { QuickActions } from "@/components/quick-actions"
import { ModelPerformance } from "@/components/model-performance"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Welcome back! Here's an overview of your AI platform." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <UsageStats />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        <div className="col-span-2">
          <ModelPerformance />
        </div>
        <div className="space-y-4">
          <QuickActions />
          <RecentActivity />
        </div>
      </div>
    </DashboardShell>
  )
}

