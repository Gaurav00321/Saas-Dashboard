"use client"

import { useState } from "react"
import { Calendar, Download, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export function AnalyticsFilters() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex items-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 gap-1 border-dashed">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72" align="end">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Models</h4>
              <Select defaultValue="all">
                <SelectTrigger className="h-8">
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Models</SelectItem>
                  <SelectItem value="gpt-4">GPT-4</SelectItem>
                  <SelectItem value="claude">Claude</SelectItem>
                  <SelectItem value="llama">Llama</SelectItem>
                  <SelectItem value="custom">Custom Models</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Endpoints</h4>
              <Select defaultValue="all">
                <SelectTrigger className="h-8">
                  <SelectValue placeholder="Select endpoint" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Endpoints</SelectItem>
                  <SelectItem value="chat">Chat Completions</SelectItem>
                  <SelectItem value="embeddings">Embeddings</SelectItem>
                  <SelectItem value="image">Image Generation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Applications</h4>
              <Select defaultValue="all">
                <SelectTrigger className="h-8">
                  <SelectValue placeholder="Select application" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Applications</SelectItem>
                  <SelectItem value="web">Web App</SelectItem>
                  <SelectItem value="mobile">Mobile App</SelectItem>
                  <SelectItem value="api">API Clients</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 gap-1 border-dashed">
            <Calendar className="h-3.5 w-3.5" />
            <span>Date Range</span>
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

      <Separator orientation="vertical" className="mx-1 h-8" />

      <Button variant="outline" size="sm" className="h-8 gap-1">
        <Download className="h-3.5 w-3.5" />
        <span>Export</span>
      </Button>
    </div>
  )
}

