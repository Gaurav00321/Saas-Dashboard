"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
  ChartGrid,
  ChartLine,
  ChartXAxis,
  ChartYAxis,
  ChartArea,
} from "@/components/ui/chart"

export function AnalyticsCharts() {
  const [chartType, setChartType] = useState("api-calls")

  // Sample data for API calls chart
  const apiCallsData = [
    { date: "2023-01-01", calls: 12500, completions: 8200, embeddings: 4300 },
    { date: "2023-02-01", calls: 13200, completions: 8800, embeddings: 4400 },
    { date: "2023-03-01", calls: 14100, completions: 9300, embeddings: 4800 },
    { date: "2023-04-01", calls: 15300, completions: 10100, embeddings: 5200 },
    { date: "2023-05-01", calls: 16800, completions: 11200, embeddings: 5600 },
    { date: "2023-06-01", calls: 18500, completions: 12400, embeddings: 6100 },
    { date: "2023-07-01", calls: 20400, completions: 13700, embeddings: 6700 },
    { date: "2023-08-01", calls: 22600, completions: 15200, embeddings: 7400 },
    { date: "2023-09-01", calls: 25100, completions: 16900, embeddings: 8200 },
    { date: "2023-10-01", calls: 27900, completions: 18800, embeddings: 9100 },
    { date: "2023-11-01", calls: 31000, completions: 20900, embeddings: 10100 },
    { date: "2023-12-01", calls: 34500, completions: 23200, embeddings: 11300 },
  ]

  // Sample data for response time chart
  const responseTimeData = [
    { date: "2023-01-01", average: 180, p90: 320, p99: 450 },
    { date: "2023-02-01", average: 175, p90: 310, p99: 440 },
    { date: "2023-03-01", average: 170, p90: 300, p99: 430 },
    { date: "2023-04-01", average: 165, p90: 290, p99: 420 },
    { date: "2023-05-01", average: 160, p90: 280, p99: 410 },
    { date: "2023-06-01", average: 155, p90: 270, p99: 400 },
    { date: "2023-07-01", average: 150, p90: 260, p99: 390 },
    { date: "2023-08-01", average: 145, p90: 250, p99: 380 },
    { date: "2023-09-01", average: 140, p90: 240, p99: 370 },
    { date: "2023-10-01", average: 135, p90: 230, p99: 360 },
    { date: "2023-11-01", average: 130, p90: 220, p99: 350 },
    { date: "2023-12-01", average: 125, p90: 210, p99: 340 },
  ]

  // Sample data for token usage chart
  const tokenUsageData = [
    { date: "2023-01-01", input: 1.2, output: 0.8 },
    { date: "2023-02-01", input: 1.3, output: 0.9 },
    { date: "2023-03-01", input: 1.4, output: 1.0 },
    { date: "2023-04-01", input: 1.5, output: 1.1 },
    { date: "2023-05-01", input: 1.7, output: 1.2 },
    { date: "2023-06-01", input: 1.9, output: 1.4 },
    { date: "2023-07-01", input: 2.1, output: 1.6 },
    { date: "2023-08-01", input: 2.3, output: 1.8 },
    { date: "2023-09-01", input: 2.6, output: 2.0 },
    { date: "2023-10-01", input: 2.9, output: 2.3 },
    { date: "2023-11-01", input: 3.2, output: 2.6 },
    { date: "2023-12-01", input: 3.6, output: 2.9 },
  ]

  return (
    <Card className="overflow-hidden border-none bg-gradient-to-br from-background to-muted/30 shadow-lg transition-all hover:shadow-xl dark:from-background/80 dark:to-muted/20">
      <CardHeader className="pb-2">
        <CardTitle>Usage Trends</CardTitle>
        <CardDescription>Analyze your platform usage patterns over time</CardDescription>
        <Tabs defaultValue="api-calls" value={chartType} onValueChange={setChartType} className="mt-2">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="api-calls">API Calls</TabsTrigger>
            <TabsTrigger value="response-time">Response Time</TabsTrigger>
            <TabsTrigger value="token-usage">Token Usage</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="p-0">
        <div className="p-6">
          {chartType === "api-calls" && (
            <ChartContainer className="h-[350px]">
              <Chart data={apiCallsData}>
                <ChartLegend className="mb-2">
                  <ChartLegendItem name="Total Calls" color="#3b82f6" />
                  <ChartLegendItem name="Completions" color="#8b5cf6" />
                  <ChartLegendItem name="Embeddings" color="#10b981" />
                </ChartLegend>
                <ChartGrid />
                <ChartXAxis
                  dataKey="date"
                  tickFormatter={(value) => {
                    const date = new Date(value)
                    return date.toLocaleDateString("en-US", { month: "short" })
                  }}
                />
                <ChartYAxis
                  tickFormatter={(value) => {
                    return value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value
                  }}
                />
                <ChartArea dataKey="calls" fill="url(#calls-gradient)" opacity={0.2} />
                <ChartLine dataKey="calls" stroke="#3b82f6" strokeWidth={2} />
                <ChartLine dataKey="completions" stroke="#8b5cf6" strokeWidth={2} />
                <ChartLine dataKey="embeddings" stroke="#10b981" strokeWidth={2} />
                <ChartTooltip content={<ApiCallsTooltip />} />
                <defs>
                  <linearGradient id="calls-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </Chart>
            </ChartContainer>
          )}

          {chartType === "response-time" && (
            <ChartContainer className="h-[350px]">
              <Chart data={responseTimeData}>
                <ChartLegend className="mb-2">
                  <ChartLegendItem name="Average" color="#10b981" />
                  <ChartLegendItem name="P90" color="#f59e0b" />
                  <ChartLegendItem name="P99" color="#ef4444" />
                </ChartLegend>
                <ChartGrid />
                <ChartXAxis
                  dataKey="date"
                  tickFormatter={(value) => {
                    const date = new Date(value)
                    return date.toLocaleDateString("en-US", { month: "short" })
                  }}
                />
                <ChartYAxis tickFormatter={(value) => `${value}ms`} />
                <ChartArea dataKey="average" fill="url(#average-gradient)" opacity={0.2} />
                <ChartLine dataKey="average" stroke="#10b981" strokeWidth={2} />
                <ChartLine dataKey="p90" stroke="#f59e0b" strokeWidth={2} />
                <ChartLine dataKey="p99" stroke="#ef4444" strokeWidth={2} />
                <ChartTooltip content={<ResponseTimeTooltip />} />
                <defs>
                  <linearGradient id="average-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </Chart>
            </ChartContainer>
          )}

          {chartType === "token-usage" && (
            <ChartContainer className="h-[350px]">
              <Chart data={tokenUsageData}>
                <ChartLegend className="mb-2">
                  <ChartLegendItem name="Input Tokens" color="#3b82f6" />
                  <ChartLegendItem name="Output Tokens" color="#8b5cf6" />
                </ChartLegend>
                <ChartGrid />
                <ChartXAxis
                  dataKey="date"
                  tickFormatter={(value) => {
                    const date = new Date(value)
                    return date.toLocaleDateString("en-US", { month: "short" })
                  }}
                />
                <ChartYAxis tickFormatter={(value) => `${value}M`} />
                <ChartArea dataKey="input" fill="url(#input-gradient)" opacity={0.2} />
                <ChartArea dataKey="output" fill="url(#output-gradient)" opacity={0.2} />
                <ChartLine dataKey="input" stroke="#3b82f6" strokeWidth={2} />
                <ChartLine dataKey="output" stroke="#8b5cf6" strokeWidth={2} />
                <ChartTooltip content={<TokenUsageTooltip />} />
                <defs>
                  <linearGradient id="input-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="output-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </Chart>
            </ChartContainer>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function ApiCallsTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    const date = new Date(label)
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })

    return (
      <ChartTooltipContent>
        <div className="font-medium">{formattedDate}</div>
        {payload.map((entry: any) => {
          let name = ""
          if (entry.dataKey === "calls") name = "Total Calls"
          if (entry.dataKey === "completions") name = "Completions"
          if (entry.dataKey === "embeddings") name = "Embeddings"

          return (
            <div key={entry.dataKey} className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
              <span>{name}:</span>
              <span className="font-medium">{entry.value.toLocaleString()}</span>
            </div>
          )
        })}
      </ChartTooltipContent>
    )
  }

  return null
}

function ResponseTimeTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    const date = new Date(label)
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })

    return (
      <ChartTooltipContent>
        <div className="font-medium">{formattedDate}</div>
        {payload.map((entry: any) => {
          let name = ""
          if (entry.dataKey === "average") name = "Average"
          if (entry.dataKey === "p90") name = "P90"
          if (entry.dataKey === "p99") name = "P99"

          return (
            <div key={entry.dataKey} className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
              <span>{name}:</span>
              <span className="font-medium">{entry.value}ms</span>
            </div>
          )
        })}
      </ChartTooltipContent>
    )
  }

  return null
}

function TokenUsageTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    const date = new Date(label)
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })

    return (
      <ChartTooltipContent>
        <div className="font-medium">{formattedDate}</div>
        {payload.map((entry: any) => {
          let name = ""
          if (entry.dataKey === "input") name = "Input Tokens"
          if (entry.dataKey === "output") name = "Output Tokens"

          return (
            <div key={entry.dataKey} className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
              <span>{name}:</span>
              <span className="font-medium">{entry.value}M</span>
            </div>
          )
        })}
      </ChartTooltipContent>
    )
  }

  return null
}

