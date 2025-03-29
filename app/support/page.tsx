import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { SupportChat } from "@/components/support-chat"
import { SupportTickets } from "@/components/support-tickets"
import { CreateTicketButton } from "@/components/create-ticket-button"

export default function SupportPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Support & Help" text="Get help with your AI platform.">
        <CreateTicketButton />
      </DashboardHeader>
      <div className="grid gap-8 md:grid-cols-2">
        <SupportTickets />
        <SupportChat />
      </div>
    </DashboardShell>
  )
}

