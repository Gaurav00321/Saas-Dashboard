"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, ArrowDown, ArrowUp, Clock, Cpu, Zap } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

export function UsageStats() {
  const stats = [
    {
      title: "API Calls",
      value: "12,543",
      change: "+12.5%",
      trend: "up",
      icon: Activity,
      color: "bg-blue-500/10 text-blue-500",
      chartData: [
        { name: "Chat", value: 60, color: "#3b82f6" },
        { name: "Embeddings", value: 25, color: "#8b5cf6" },
        { name: "Image Gen", value: 15, color: "#10b981" },
      ],
    },
    {
      title: "Response Time",
      value: "245ms",
      change: "-18.2%",
      trend: "down",
      icon: Clock,
      color: "bg-green-500/10 text-green-500",
      chartData: [
        { name: "GPT-4", value: 45, color: "#3b82f6" },
        { name: "Claude", value: 30, color: "#8b5cf6" },
        { name: "Llama", value: 25, color: "#10b981" },
      ],
    },
    {
      title: "Tokens Used",
      value: "1.2M",
      change: "+8.1%",
      trend: "up",
      icon: Zap,
      color: "bg-amber-500/10 text-amber-500",
      chartData: [
        { name: "Input", value: 60, color: "#3b82f6" },
        { name: "Output", value: 40, color: "#8b5cf6" },
      ],
    },
    {
      title: "CPU Usage",
      value: "42%",
      change: "+2.3%",
      trend: "up",
      icon: Cpu,
      color: "bg-purple-500/10 text-purple-500",
      chartData: [
        { name: "Training", value: 50, color: "#3b82f6" },
        { name: "Inference", value: 35, color: "#8b5cf6" },
        { name: "Other", value: 15, color: "#10b981" },
      ],
    },
  ]

  return (
    <>
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="overflow-hidden border-none bg-gradient-to-br from-background to-muted/30 shadow-md transition-all hover:shadow-lg dark:from-background/80 dark:to-muted/20"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <div className={`rounded-full p-2 ${stat.color}`}>
              <stat.icon className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.title === "API Calls"
                    ? "Total API calls this month"
                    : stat.title === "Response Time"
                      ? "Average response time"
                      : stat.title === "Tokens Used"
                        ? "Total tokens used this month"
                        : "Average CPU utilization"}
                </p>
                <div
                  className={`mt-2 flex items-center text-xs ${stat.trend === "up" ? (stat.title === "Response Time" ? "text-red-500" : "text-green-500") : stat.title === "Response Time" ? "text-green-500" : "text-red-500"}`}
                >
                  {stat.trend === "up" ? <ArrowUp className="mr-1 h-3 w-3" /> : <ArrowDown className="mr-1 h-3 w-3" />}
                  {stat.change} from last month
                </div>
              </div>
              <div className="h-16 w-16">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={stat.chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={15}
                      outerRadius={30}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {stat.chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-md text-xs">
                              <p className="font-medium">{payload[0].name}</p>
                              <p className="text-muted-foreground">{payload[0].value}% of total</p>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

