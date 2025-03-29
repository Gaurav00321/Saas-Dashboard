"use client"

import { useState } from "react"
import { MoreHorizontal, Shield, User } from "lucide-react"
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TeamMembers() {
  const [members, setMembers] = useState([
    {
      id: "user-1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      lastActive: "Just now",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "user-2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Developer",
      status: "Active",
      lastActive: "5 minutes ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "user-3",
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
      role: "Viewer",
      status: "Inactive",
      lastActive: "2 days ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "user-4",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      role: "Developer",
      status: "Pending",
      lastActive: "Never",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ])

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "Admin":
        return (
          <Badge className="bg-red-500">
            <Shield className="mr-1 h-3 w-3" />
            Admin
          </Badge>
        )
      case "Developer":
        return (
          <Badge className="bg-blue-500">
            <User className="mr-1 h-3 w-3" />
            Developer
          </Badge>
        )
      case "Viewer":
        return (
          <Badge variant="outline">
            <User className="mr-1 h-3 w-3" />
            Viewer
          </Badge>
        )
      default:
        return <Badge variant="outline">{role}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return (
          <Badge variant="default" className="bg-green-500">
            Active
          </Badge>
        )
      case "Inactive":
        return <Badge variant="outline">Inactive</Badge>
      case "Pending":
        return (
          <Badge variant="default" className="bg-amber-500">
            Pending
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card className="mt-6 shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Active</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{getRoleBadge(member.role)}</TableCell>
              <TableCell>{getStatusBadge(member.status)}</TableCell>
              <TableCell>{member.lastActive}</TableCell>
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
                    <DropdownMenuItem>Edit User</DropdownMenuItem>
                    <DropdownMenuItem>Change Role</DropdownMenuItem>
                    <DropdownMenuItem>{member.status === "Active" ? "Deactivate" : "Activate"} User</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">Remove User</DropdownMenuItem>
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

