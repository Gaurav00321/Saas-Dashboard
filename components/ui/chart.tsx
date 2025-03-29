"use client"

import type * as React from "react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area } from "recharts"

interface ChartProps {
  data: any[]
  children: React.ReactNode
  className?: string
}

export function Chart({ data, children, className }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%" className={className}>
      <LineChart data={data}>{children}</LineChart>
    </ResponsiveContainer>
  )
}

interface ChartLegendItemProps {
  name: string
  color: string
}

export function ChartLegendItem({ name, color }: ChartLegendItemProps) {
  return (
    <span className="flex items-center space-x-2">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      <span>{name}</span>
    </span>
  )
}

export function ChartGrid() {
  return <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
}

interface ChartLineProps {
  dataKey: string
  stroke: string
  strokeWidth?: number
}

export function ChartLine({ dataKey, stroke, strokeWidth = 2 }: ChartLineProps) {
  return <Line type="monotone" dataKey={dataKey} stroke={stroke} strokeWidth={strokeWidth} />
}

interface ChartXAxisProps {
  dataKey: string
  tickFormatter?: (value: any) => string
}

export function ChartXAxis({ dataKey, tickFormatter }: ChartXAxisProps) {
  return <XAxis dataKey={dataKey} tickFormatter={tickFormatter} />
}

interface ChartYAxisProps {
  tickFormatter?: (value: any) => string
}

export function ChartYAxis({ tickFormatter }: ChartYAxisProps) {
  return <YAxis tickFormatter={tickFormatter} />
}

interface ChartTooltipProps {
  content: React.ReactNode
}

export function ChartTooltip({ content }: ChartTooltipProps) {
  return <Tooltip content={content} />
}

interface ChartTooltipContentProps {
  children: React.ReactNode
}

export function ChartTooltipContent({ children }: ChartTooltipContentProps) {
  return <div className="rounded-md border bg-popover p-4 shadow-md">{children}</div>
}

interface ChartLegendProps {
  children: React.ReactNode
  className?: string
}

export function ChartLegend({ children, className }: ChartLegendProps) {
  return (
    <Legend
      className={className}
      wrapperStyle={{
        paddingBottom: "10px",
      }}
    >
      {children}
    </Legend>
  )
}

interface ChartContainerProps {
  children: React.ReactNode
  className?: string
}

export function ChartContainer({ children, className }: ChartContainerProps) {
  return <div className={className}>{children}</div>
}

interface ChartAreaProps {
  dataKey: string
  fill: string
  opacity: number
}

export function ChartArea({ dataKey, fill, opacity }: ChartAreaProps) {
  return <Area type="monotone" dataKey={dataKey} strokeWidth={2} fill={fill} fillOpacity={opacity} />
}

