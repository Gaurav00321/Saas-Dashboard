import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ModelsList } from "@/components/models-list"
import { ModelUploadButton } from "@/components/model-upload-button"

export default function ModelsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="AI Models" text="Manage and deploy your AI models.">
        <ModelUploadButton />
      </DashboardHeader>
      <ModelsList />
    </DashboardShell>
  )
}

