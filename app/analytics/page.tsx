import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { AnalyticsOverview } from "@/components/analytics-overview"
import { AnalyticsCharts } from "@/components/analytics-charts"
import { AnalyticsFilters } from "@/components/analytics-filters"
import { ModelAnalytics } from "@/components/model-analytics"
import { UsageBreakdown } from "@/components/usage-breakdown"

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Analytics" text="Comprehensive insights into your AI platform usage and performance.">
        <AnalyticsFilters />
      </DashboardHeader>

      <div className="mt-6 space-y-8">
        <AnalyticsOverview />

        <div className="grid gap-6 md:grid-cols-2">
          <AnalyticsCharts />
          <UsageBreakdown />
        </div>

        <ModelAnalytics />
      </div>
    </DashboardShell>
  )
}

