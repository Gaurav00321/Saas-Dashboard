import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ProfileSettings } from "@/components/profile-settings"
import { SecuritySettings } from "@/components/security-settings"
import { NotificationSettings } from "@/components/notification-settings"

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Settings" text="Manage your account settings and preferences." />
      <div className="grid gap-8">
        <ProfileSettings />
        <SecuritySettings />
        <NotificationSettings />
      </div>
    </DashboardShell>
  )
}

