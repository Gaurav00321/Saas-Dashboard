import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { BillingInfo } from "@/components/billing-info"
import { SubscriptionPlans } from "@/components/subscription-plans"

export default function BillingPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Billing & Subscription" text="Manage your subscription and billing information." />
      <div className="grid gap-8">
        <SubscriptionPlans />
        <BillingInfo />
      </div>
    </DashboardShell>
  )
}

