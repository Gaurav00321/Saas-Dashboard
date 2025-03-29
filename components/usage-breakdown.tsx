"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

export function UsageBreakdown() {
  const [breakdownType, setBreakdownType] = useState("models")

  // Sample data for models breakdown
  const modelsData = [
    { name: "GPT-4", value: 45, color: "#3b82f6" },
    { name: "Claude", value: 25, color: "#8b5cf6" },
    { name: "Llama", value: 15, color: "#10b981" },
    { name: "Custom", value: 10, color: "#f59e0b" },
    { name: "Other", value: 5, color: "#6b7280" },
  ]

  // Sample data for endpoints breakdown
  const endpointsData = [
    { name: "Chat", value: 60, color: "#3b82f6" },
    { name: "Embeddings", value: 20, color: "#8b5cf6" },
    { name: "Image Gen", value: 15, color: "#10b981" },
    { name: "Other", value: 5, color: "#6b7280" },
  ]

  // Sample data for applications breakdown
  const applicationsData = [
    { name: "Web App", value: 40, color: "#3b82f6" },
    { name: "Mobile", value: 30, color: "#8b5cf6" },
    { name: "API", value: 25, color: "#10b981" },
    { name: "Other", value: 5, color: "#6b7280" },
  ]

  const getActiveData = () => {
    switch (breakdownType) {
      case "models":
        return modelsData
      case "endpoints":
        return endpointsData
      case "applications":
        return applicationsData
      default:
        return modelsData
    }
  }

  return (
    <Card className="overflow-hidden border-none bg-gradient-to-br from-background to-muted/30 shadow-lg transition-all hover:shadow-xl dark:from-background/80 dark:to-muted/20">
      <CardHeader className="pb-2">
        <CardTitle>Usage Breakdown</CardTitle>
        <CardDescription>Distribution of usage across your platform</CardDescription>
        <Tabs defaultValue="models" value={breakdownType} onValueChange={setBreakdownType} className="mt-2">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="models">Models</TabsTrigger>
            <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex h-[350px] items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={getActiveData()}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                  animationBegin={0}
                  animationDuration={1000}
                >
                  {getActiveData().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-3 shadow-md">
                          <p className="font-medium">{payload[0].name}</p>
                          <p className="text-sm text-muted-foreground">{payload[0].value}% of total usage</p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Legend
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                  formatter={(value, entry, index) => <span className="text-sm">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

