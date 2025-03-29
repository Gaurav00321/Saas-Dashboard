import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ApiKeysList } from "@/components/api-keys-list"
import { CreateApiKeyButton } from "@/components/create-api-key-button"

export default function ApiKeysPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="API Keys" text="Manage your API keys and access tokens.">
        <CreateApiKeyButton />
      </DashboardHeader>
      <ApiKeysList />
    </DashboardShell>
  )
}

