"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function ModelAnalytics() {
  const [viewType, setViewType] = useState("performance")

  // Sample data for model performance
  const performanceData = [
    { name: "GPT-4", accuracy: 95, latency: 180, cost: 0.12 },
    { name: "Claude", accuracy: 93, latency: 150, cost: 0.1 },
    { name: "Llama", accuracy: 88, latency: 120, cost: 0.05 },
    { name: "Custom A", accuracy: 91, latency: 200, cost: 0.08 },
    { name: "Custom B", accuracy: 86, latency: 90, cost: 0.04 },
  ]

  // Sample data for model usage
  const usageData = [
    { name: "GPT-4", calls: 125000, tokens: 8.5, cost: 1020 },
    { name: "Claude", calls: 85000, tokens: 5.2, cost: 520 },
    { name: "Llama", calls: 45000, tokens: 3.1, cost: 155 },
    { name: "Custom A", calls: 35000, tokens: 2.4, cost: 192 },
    { name: "Custom B", calls: 15000, tokens: 0.9, cost: 36 },
  ]

  return (
    <Card className="overflow-hidden border-none bg-gradient-to-br from-background to-muted/30 shadow-lg transition-all hover:shadow-xl dark:from-background/80 dark:to-muted/20">
      <CardHeader className="pb-2">
        <CardTitle>Model Analytics</CardTitle>
        <CardDescription>Detailed performance and usage metrics for your AI models</CardDescription>
        <Tabs defaultValue="performance" value={viewType} onValueChange={setViewType} className="mt-2">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="p-6">
        {viewType === "performance" && (
          <div className="space-y-6">
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#3b82f6" />
                  <YAxis yAxisId="right" orientation="right" stroke="#ef4444" />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-3 shadow-md">
                            <p className="font-medium">{label}</p>
                            <div className="mt-1 space-y-1">
                              <p className="flex items-center text-sm">
                                <span className="mr-2 h-2 w-2 rounded-full bg-[#3b82f6]"></span>
                                Accuracy: {payload[0].value}%
                              </p>
                              <p className="flex items-center text-sm">
                                <span className="mr-2 h-2 w-2 rounded-full bg-[#ef4444]"></span>
                                Latency: {payload[1].value}ms
                              </p>
                            </div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Legend />
                  <Bar yAxisId="left" dataKey="accuracy" name="Accuracy (%)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar yAxisId="right" dataKey="latency" name="Latency (ms)" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Accuracy</TableHead>
                  <TableHead>Latency</TableHead>
                  <TableHead>Cost per 1K tokens</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {performanceData.map((model) => (
                  <TableRow key={model.name}>
                    <TableCell className="font-medium">{model.name}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          model.accuracy >= 90 ? "bg-green-500" : model.accuracy >= 85 ? "bg-amber-500" : "bg-red-500"
                        }
                      >
                        {model.accuracy}%
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{model.latency}ms</Badge>
                    </TableCell>
                    <TableCell>${model.cost.toFixed(3)}</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Active</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {viewType === "usage" && (
          <div className="space-y-6">
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={usageData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#3b82f6" />
                  <YAxis yAxisId="right" orientation="right" stroke="#8b5cf6" />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-3 shadow-md">
                            <p className="font-medium">{label}</p>
                            <div className="mt-1 space-y-1">
                              <p className="flex items-center text-sm">
                                <span className="mr-2 h-2 w-2 rounded-full bg-[#3b82f6]"></span>
                                API Calls: {payload[0].value.toLocaleString()}
                              </p>
                              <p className="flex items-center text-sm">
                                <span className="mr-2 h-2 w-2 rounded-full bg-[#8b5cf6]"></span>
                                Tokens: {payload[1].value}M
                              </p>
                            </div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Legend />
                  <Bar yAxisId="left" dataKey="calls" name="API Calls" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar yAxisId="right" dataKey="tokens" name="Tokens (M)" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>API Calls</TableHead>
                  <TableHead>Tokens Used (M)</TableHead>
                  <TableHead>Cost ($)</TableHead>
                  <TableHead>% of Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usageData.map((model) => (
                  <TableRow key={model.name}>
                    <TableCell className="font-medium">{model.name}</TableCell>
                    <TableCell>{model.calls.toLocaleString()}</TableCell>
                    <TableCell>{model.tokens}M</TableCell>
                    <TableCell>${model.cost}</TableCell>
                    <TableCell>
                      <div className="flex w-full max-w-xs items-center gap-2">
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{
                              width: `${((model.cost / usageData.reduce((acc, curr) => acc + curr.cost, 0)) * 100).toFixed(0)}%`,
                            }}
                          />
                        </div>
                        <span className="text-xs">
                          {((model.cost / usageData.reduce((acc, curr) => acc + curr.cost, 0)) * 100).toFixed(0)}%
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

