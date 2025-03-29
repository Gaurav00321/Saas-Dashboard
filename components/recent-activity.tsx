"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Clock, Code, Database, AlertCircle } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      title: "Model Deployed",
      description: "GPT-4 model deployed to production",
      time: "2 hours ago",
      icon: Bot,
      iconColor: "text-green-500",
    },
    {
      id: 2,
      title: "API Key Generated",
      description: "New API key created for frontend",
      time: "5 hours ago",
      icon: Code,
      iconColor: "text-blue-500",
    },
    {
      id: 3,
      title: "Rate Limit Reached",
      description: "API rate limit reached for endpoint",
      time: "Yesterday",
      icon: AlertCircle,
      iconColor: "text-amber-500",
    },
    {
      id: 4,
      title: "Database Connected",
      description: "Connected to Postgres database",
      time: "2 days ago",
      icon: Database,
      iconColor: "text-purple-500",
    },
  ]

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions and events on your platform</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`mt-0.5 rounded-full p-1.5 ${activity.iconColor} bg-opacity-10`}>
              <activity.icon className={`h-3.5 w-3.5 ${activity.iconColor}`} />
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-medium">{activity.title}</p>
              <p className="text-xs text-muted-foreground">{activity.description}</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                {activity.time}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

