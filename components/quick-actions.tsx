"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, Code, Database, Upload } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "Deploy Model",
      icon: Bot,
      description: "Deploy a new AI model to production",
      onClick: () => console.log("Deploy model clicked"),
    },
    {
      title: "Generate API Key",
      icon: Code,
      description: "Create a new API key for your application",
      onClick: () => console.log("Generate API key clicked"),
    },
    {
      title: "Upload Dataset",
      icon: Upload,
      description: "Upload a new dataset for training",
      onClick: () => console.log("Upload dataset clicked"),
    },
    {
      title: "Connect Database",
      icon: Database,
      description: "Connect to a vector database",
      onClick: () => console.log("Connect database clicked"),
    },
  ]

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks you can perform right away</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-3">
        {actions.map((action) => (
          <Button key={action.title} variant="outline" className="justify-start h-auto py-3" onClick={action.onClick}>
            <action.icon className="mr-2 h-4 w-4" />
            <div className="flex flex-col items-start text-left">
              <span className="font-medium">{action.title}</span>
              <span className="text-xs text-muted-foreground">{action.description}</span>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}

