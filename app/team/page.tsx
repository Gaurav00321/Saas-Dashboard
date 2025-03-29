import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { TeamMembers } from "@/components/team-members"
import { InviteTeamMemberButton } from "@/components/invite-team-member-button"

export default function TeamPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Team Management" text="Manage your team members and their permissions.">
        <InviteTeamMemberButton />
      </DashboardHeader>
      <TeamMembers />
    </DashboardShell>
  )
}

