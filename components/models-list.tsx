"use client"

import { useState } from "react"
import { Bot, Clock, Copy, Download, MoreHorizontal, Trash, Upload } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function ModelsList() {
  const [models, setModels] = useState([
    {
      id: "model-1",
      name: "GPT-4 Custom",
      type: "Text Generation",
      status: "Active",
      accuracy: 0.95,
      lastUpdated: "2 days ago",
      version: "v1.2.0",
    },
    {
      id: "model-2",
      name: "Image Classifier",
      type: "Image Classification",
      status: "Training",
      accuracy: 0.82,
      lastUpdated: "5 hours ago",
      version: "v0.9.1",
      progress: 65,
    },
    {
      id: "model-3",
      name: "Sentiment Analyzer",
      type: "Text Classification",
      status: "Active",
      accuracy: 0.88,
      lastUpdated: "1 week ago",
      version: "v2.0.0",
    },
    {
      id: "model-4",
      name: "Speech Recognition",
      type: "Audio Processing",
      status: "Inactive",
      accuracy: 0.76,
      lastUpdated: "3 weeks ago",
      version: "v0.5.0",
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return (
          <Badge variant="default" className="bg-green-500">
            Active
          </Badge>
        )
      case "Training":
        return (
          <Badge variant="default" className="bg-blue-500">
            Training
          </Badge>
        )
      case "Inactive":
        return <Badge variant="outline">Inactive</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card className="mt-6 shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Accuracy</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead>Version</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {models.map((model) => (
            <TableRow key={model.id}>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <Bot className="mr-2 h-4 w-4 text-muted-foreground" />
                  {model.name}
                </div>
              </TableCell>
              <TableCell>{model.type}</TableCell>
              <TableCell>
                {model.status === "Training" ? (
                  <div className="space-y-2">
                    {getStatusBadge(model.status)}
                    <Progress value={model.progress} className="h-2 w-[100px]" />
                  </div>
                ) : (
                  getStatusBadge(model.status)
                )}
              </TableCell>
              <TableCell>{(model.accuracy * 100).toFixed(1)}%</TableCell>
              <TableCell>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  {model.lastUpdated}
                </div>
              </TableCell>
              <TableCell>{model.version}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Upload className="mr-2 h-4 w-4" />
                      <span>Deploy</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      <span>Download</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      <span>Duplicate</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <Trash className="mr-2 h-4 w-4" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

