"use client"

import { useState } from "react"
import { ArrowDown, ArrowUp, BarChart3, Clock, Cpu, Users, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AnalyticsOverview() {
  const [timeRange, setTimeRange] = useState("7d")

  const metrics = [
    {
      title: "Total API Calls",
      value: timeRange === "7d" ? "124,532" : timeRange === "30d" ? "513,892" : "1,243,721",
      change: timeRange === "7d" ? "+12.5%" : timeRange === "30d" ? "+8.3%" : "+15.2%",
      trend: "up",
      icon: BarChart3,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "Active Users",
      value: timeRange === "7d" ? "3,721" : timeRange === "30d" ? "5,932" : "8,412",
      change: timeRange === "7d" ? "+5.2%" : timeRange === "30d" ? "+7.8%" : "+10.3%",
      trend: "up",
      icon: Users,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      title: "Avg. Response Time",
      value: timeRange === "7d" ? "124ms" : timeRange === "30d" ? "142ms" : "156ms",
      change: timeRange === "7d" ? "-8.3%" : timeRange === "30d" ? "-5.1%" : "-2.4%",
      trend: "down",
      icon: Clock,
      color: "bg-green-500/10 text-green-500",
    },
    {
      title: "Tokens Used",
      value: timeRange === "7d" ? "2.4M" : timeRange === "30d" ? "8.7M" : "24.3M",
      change: timeRange === "7d" ? "+14.2%" : timeRange === "30d" ? "+11.5%" : "+18.7%",
      trend: "up",
      icon: Zap,
      color: "bg-amber-500/10 text-amber-500",
    },
    {
      title: "Compute Hours",
      value: timeRange === "7d" ? "342" : timeRange === "30d" ? "1,245" : "3,721",
      change: timeRange === "7d" ? "+9.7%" : timeRange === "30d" ? "+12.3%" : "+15.8%",
      trend: "up",
      icon: Cpu,
      color: "bg-red-500/10 text-red-500",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Overview</h2>
        <Tabs defaultValue="7d" value={timeRange} onValueChange={setTimeRange}>
          <TabsList>
            <TabsTrigger value="7d">7 days</TabsTrigger>
            <TabsTrigger value="30d">30 days</TabsTrigger>
            <TabsTrigger value="90d">90 days</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {metrics.map((metric) => (
          <Card
            key={metric.title}
            className="overflow-hidden border-none bg-gradient-to-br from-background to-muted/30 shadow-md transition-all hover:shadow-lg dark:from-background/80 dark:to-muted/20"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`rounded-full p-2 ${metric.color}`}>
                  <metric.icon className="h-5 w-5" />
                </div>
                <div
                  className={`flex items-center text-xs font-medium ${
                    metric.trend === "up" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {metric.change}
                  {metric.trend === "up" ? (
                    <ArrowUp className="ml-1 h-3 w-3" />
                  ) : (
                    <ArrowDown className="ml-1 h-3 w-3" />
                  )}
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-sm font-medium text-muted-foreground">{metric.title}</h3>
                <p className="mt-1 text-2xl font-bold">{metric.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

