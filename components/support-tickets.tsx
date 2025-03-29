"use client"

import { useState } from "react"
import { Clock, MessageSquare, MoreHorizontal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"

export function SupportTickets() {
  const [tickets, setTickets] = useState([
    {
      id: "TICKET-1234",
      title: "API Integration Issue",
      status: "Open",
      priority: "High",
      created: "2 days ago",
      messages: 3,
    },
    {
      id: "TICKET-1235",
      title: "Billing Question",
      status: "In Progress",
      priority: "Medium",
      created: "1 week ago",
      messages: 5,
    },
    {
      id: "TICKET-1236",
      title: "Feature Request",
      status: "Closed",
      priority: "Low",
      created: "2 weeks ago",
      messages: 8,
    },
    {
      id: "TICKET-1237",
      title: "Model Training Error",
      status: "Open",
      priority: "Critical",
      created: "1 day ago",
      messages: 2,
    },
    {
      id: "TICKET-1238",
      title: "Account Access Issue",
      status: "In Progress",
      priority: "High",
      created: "3 days ago",
      messages: 4,
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Open":
        return <Badge className="bg-blue-500">Open</Badge>
      case "In Progress":
        return <Badge className="bg-amber-500">In Progress</Badge>
      case "Closed":
        return <Badge variant="outline">Closed</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "Critical":
        return <Badge className="bg-red-500">Critical</Badge>
      case "High":
        return <Badge className="bg-orange-500">High</Badge>
      case "Medium":
        return <Badge className="bg-yellow-500">Medium</Badge>
      case "Low":
        return <Badge variant="outline">Low</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Support Tickets</CardTitle>
        <CardDescription>View and manage your support tickets</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <Card key={ticket.id} className="shadow-sm">
                <CardHeader className="p-4 pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base">{ticket.title}</CardTitle>
                      <CardDescription>{ticket.id}</CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Ticket</DropdownMenuItem>
                        <DropdownMenuItem>Add Comment</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>{ticket.status === "Closed" ? "Reopen" : "Close"} Ticket</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    {getStatusBadge(ticket.status)}
                    {getPriorityBadge(ticket.priority)}
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {ticket.created}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MessageSquare className="mr-1 h-3 w-3" />
                      {ticket.messages} messages
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

