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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, Calendar } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"

export function ModelPerformance() {
  const [activeTab, setActiveTab] = useState("accuracy")
  const [selectedModel, setSelectedModel] = useState("all")
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  // Sample data for the chart
  const accuracyData = [
    { date: "2023-01-01", "GPT-4": 0.92, Claude: 0.89, Llama: 0.85, Custom: 0.88 },
    { date: "2023-02-01", "GPT-4": 0.93, Claude: 0.9, Llama: 0.86, Custom: 0.89 },
    { date: "2023-03-01", "GPT-4": 0.93, Claude: 0.91, Llama: 0.87, Custom: 0.9 },
    { date: "2023-04-01", "GPT-4": 0.94, Claude: 0.91, Llama: 0.87, Custom: 0.9 },
    { date: "2023-05-01", "GPT-4": 0.94, Claude: 0.92, Llama: 0.88, Custom: 0.91 },
    { date: "2023-06-01", "GPT-4": 0.95, Claude: 0.92, Llama: 0.88, Custom: 0.91 },
    { date: "2023-07-01", "GPT-4": 0.95, Claude: 0.93, Llama: 0.89, Custom: 0.92 },
    { date: "2023-08-01", "GPT-4": 0.96, Claude: 0.93, Llama: 0.89, Custom: 0.92 },
    { date: "2023-09-01", "GPT-4": 0.96, Claude: 0.94, Llama: 0.9, Custom: 0.93 },
    { date: "2023-10-01", "GPT-4": 0.97, Claude: 0.94, Llama: 0.9, Custom: 0.93 },
    { date: "2023-11-01", "GPT-4": 0.97, Claude: 0.95, Llama: 0.91, Custom: 0.94 },
    { date: "2023-12-01", "GPT-4": 0.98, Claude: 0.95, Llama: 0.91, Custom: 0.94 },
  ]

  const latencyData = [
    { date: "2023-01-01", "GPT-4": 220, Claude: 180, Llama: 150, Custom: 200 },
    { date: "2023-02-01", "GPT-4": 215, Claude: 175, Llama: 145, Custom: 195 },
    { date: "2023-03-01", "GPT-4": 210, Claude: 170, Llama: 140, Custom: 190 },
    { date: "2023-04-01", "GPT-4": 205, Claude: 165, Llama: 135, Custom: 185 },
    { date: "2023-05-01", "GPT-4": 200, Claude: 160, Llama: 130, Custom: 180 },
    { date: "2023-06-01", "GPT-4": 195, Claude: 155, Llama: 125, Custom: 175 },
    { date: "2023-07-01", "GPT-4": 190, Claude: 150, Llama: 120, Custom: 170 },
    { date: "2023-08-01", "GPT-4": 185, Claude: 145, Llama: 115, Custom: 165 },
    { date: "2023-09-01", "GPT-4": 180, Claude: 140, Llama: 110, Custom: 160 },
    { date: "2023-10-01", "GPT-4": 175, Claude: 135, Llama: 105, Custom: 155 },
    { date: "2023-11-01", "GPT-4": 170, Claude: 130, Llama: 100, Custom: 150 },
    { date: "2023-12-01", "GPT-4": 165, Claude: 125, Llama: 95, Custom: 145 },
  ]

  const costData = [
    { date: "2023-01-01", "GPT-4": 0.12, Claude: 0.1, Llama: 0.05, Custom: 0.08 },
    { date: "2023-02-01", "GPT-4": 0.12, Claude: 0.1, Llama: 0.05, Custom: 0.08 },
    { date: "2023-03-01", "GPT-4": 0.11, Claude: 0.09, Llama: 0.05, Custom: 0.08 },
    { date: "2023-04-01", "GPT-4": 0.11, Claude: 0.09, Llama: 0.05, Custom: 0.07 },
    { date: "2023-05-01", "GPT-4": 0.11, Claude: 0.09, Llama: 0.04, Custom: 0.07 },
    { date: "2023-06-01", "GPT-4": 0.1, Claude: 0.08, Llama: 0.04, Custom: 0.07 },
    { date: "2023-07-01", "GPT-4": 0.1, Claude: 0.08, Llama: 0.04, Custom: 0.06 },
    { date: "2023-08-01", "GPT-4": 0.1, Claude: 0.08, Llama: 0.04, Custom: 0.06 },
    { date: "2023-09-01", "GPT-4": 0.09, Claude: 0.07, Llama: 0.03, Custom: 0.06 },
    { date: "2023-10-01", "GPT-4": 0.09, Claude: 0.07, Llama: 0.03, Custom: 0.05 },
    { date: "2023-11-01", "GPT-4": 0.09, Claude: 0.07, Llama: 0.03, Custom: 0.05 },
    { date: "2023-12-01", "GPT-4": 0.08, Claude: 0.06, Llama: 0.03, Custom: 0.05 },
  ]

  const getActiveData = () => {
    switch (activeTab) {
      case "accuracy":
        return accuracyData
      case "latency":
        return latencyData
      case "cost":
        return costData
      default:
        return accuracyData
    }
  }

  const modelColors = {
    "GPT-4": "#3b82f6",
    Claude: "#8b5cf6",
    Llama: "#10b981",
    Custom: "#f59e0b",
  }

  return (
    <Card className="overflow-hidden border-none bg-gradient-to-br from-background to-muted/30 shadow-lg transition-all hover:shadow-xl dark:from-background/80 dark:to-muted/20">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Model Performance</CardTitle>
          <CardDescription>Track your AI model performance metrics over time</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="h-8 w-[130px]">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Models</SelectItem>
              <SelectItem value="GPT-4">GPT-4</SelectItem>
              <SelectItem value="Claude">Claude</SelectItem>
              <SelectItem value="Llama">Llama</SelectItem>
              <SelectItem value="Custom">Custom</SelectItem>
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Calendar className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <CalendarComponent
                mode="range"
                selected={date ? { from: date, to: date } : undefined}
                onSelect={(range) => setDate(range?.from)}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="accuracy" value={activeTab} onValueChange={setActiveTab} className="px-6">
          <TabsList>
            <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
            <TabsTrigger value="latency">Response Time</TabsTrigger>
            <TabsTrigger value="cost">Cost Estimates</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="p-6 pt-4">
          <ChartContainer className="h-[350px]">
            <Chart data={getActiveData()}>
              <ChartLegend className="mb-2">
                {selectedModel === "all" ? (
                  <>
                    <ChartLegendItem name="GPT-4" color={modelColors["GPT-4"]} />
                    <ChartLegendItem name="Claude" color={modelColors["Claude"]} />
                    <ChartLegendItem name="Llama" color={modelColors["Llama"]} />
                    <ChartLegendItem name="Custom" color={modelColors["Custom"]} />
                  </>
                ) : (
                  <ChartLegendItem
                    name={selectedModel}
                    color={modelColors[selectedModel as keyof typeof modelColors]}
                  />
                )}
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
                  if (activeTab === "accuracy") return `${(value * 100).toFixed(0)}%`
                  if (activeTab === "latency") return `${value}ms`
                  if (activeTab === "cost") return `$${value.toFixed(2)}`
                  return value
                }}
              />

              {selectedModel === "all" ? (
                <>
                  {activeTab === "accuracy" && (
                    <>
                      <ChartLine dataKey="GPT-4" stroke={modelColors["GPT-4"]} strokeWidth={2} />
                      <ChartLine dataKey="Claude" stroke={modelColors["Claude"]} strokeWidth={2} />
                      <ChartLine dataKey="Llama" stroke={modelColors["Llama"]} strokeWidth={2} />
                      <ChartLine dataKey="Custom" stroke={modelColors["Custom"]} strokeWidth={2} />
                    </>
                  )}

                  {activeTab === "latency" && (
                    <>
                      <ChartLine dataKey="GPT-4" stroke={modelColors["GPT-4"]} strokeWidth={2} />
                      <ChartLine dataKey="Claude" stroke={modelColors["Claude"]} strokeWidth={2} />
                      <ChartLine dataKey="Llama" stroke={modelColors["Llama"]} strokeWidth={2} />
                      <ChartLine dataKey="Custom" stroke={modelColors["Custom"]} strokeWidth={2} />
                    </>
                  )}

                  {activeTab === "cost" && (
                    <>
                      <ChartLine dataKey="GPT-4" stroke={modelColors["GPT-4"]} strokeWidth={2} />
                      <ChartLine dataKey="Claude" stroke={modelColors["Claude"]} strokeWidth={2} />
                      <ChartLine dataKey="Llama" stroke={modelColors["Llama"]} strokeWidth={2} />
                      <ChartLine dataKey="Custom" stroke={modelColors["Custom"]} strokeWidth={2} />
                    </>
                  )}
                </>
              ) : (
                <>
                  <ChartArea
                    dataKey={selectedModel}
                    fill={`url(#${selectedModel.toLowerCase()}-gradient)`}
                    opacity={0.2}
                  />
                  <ChartLine
                    dataKey={selectedModel}
                    stroke={modelColors[selectedModel as keyof typeof modelColors]}
                    strokeWidth={3}
                  />
                </>
              )}

              <ChartTooltip content={<CustomTooltip activeTab={activeTab} />} />

              <defs>
                <linearGradient id="gpt-4-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={modelColors["GPT-4"]} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={modelColors["GPT-4"]} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="claude-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={modelColors["Claude"]} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={modelColors["Claude"]} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="llama-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={modelColors["Llama"]} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={modelColors["Llama"]} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="custom-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={modelColors["Custom"]} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={modelColors["Custom"]} stopOpacity={0} />
                </linearGradient>
              </defs>
            </Chart>
          </ChartContainer>

          <div className="mt-4 grid grid-cols-4 gap-4">
            {Object.entries(modelColors).map(([model, color]) => (
              <Card
                key={model}
                className={`border-l-4 transition-all hover:-translate-y-1 ${selectedModel === model || selectedModel === "all" ? "" : "opacity-50"}`}
                style={{ borderLeftColor: color }}
              >
                <CardContent className="p-4">
                  <div className="text-sm font-medium">{model}</div>
                  <div className="mt-1 text-2xl font-bold">
                    {activeTab === "accuracy" &&
                      `${(getActiveData()[getActiveData().length - 1][model as keyof (typeof getActiveData)[0]] * 100).toFixed(0)}%`}
                    {activeTab === "latency" &&
                      `${getActiveData()[getActiveData().length - 1][model as keyof (typeof getActiveData)[0]]}ms`}
                    {activeTab === "cost" &&
                      `$${getActiveData()[getActiveData().length - 1][model as keyof (typeof getActiveData)[0]].toFixed(3)}`}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {activeTab === "accuracy" && "Model accuracy"}
                    {activeTab === "latency" && "Average response time"}
                    {activeTab === "cost" && "Cost per 1K tokens"}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function CustomTooltip({ active, payload, label, activeTab }: any) {
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
          let value = entry.value

          if (activeTab === "accuracy") {
            value = `${(value * 100).toFixed(1)}%`
          } else if (activeTab === "latency") {
            value = `${value}ms`
          } else if (activeTab === "cost") {
            value = `$${value.toFixed(3)}`
          }

          return (
            <div key={entry.dataKey} className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
              <span>{entry.dataKey}:</span>
              <span className="font-medium">{value}</span>
            </div>
          )
        })}
      </ChartTooltipContent>
    )
  }

  return null
}

