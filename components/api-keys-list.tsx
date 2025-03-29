"use client"

import { useState } from "react"
import { Copy, Eye, EyeOff, MoreHorizontal, Trash } from "lucide-react"
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
import { toast } from "@/components/ui/use-toast"

export function ApiKeysList() {
  const [apiKeys, setApiKeys] = useState([
    {
      id: "key-1",
      name: "Production API Key",
      key: "sk_prod_2023_abcdefghijklmnopqrstuvwxyz",
      created: "2023-10-15",
      lastUsed: "2 hours ago",
      status: "Active",
    },
    {
      id: "key-2",
      name: "Development API Key",
      key: "sk_dev_2023_zyxwvutsrqponmlkjihgfedcba",
      created: "2023-11-20",
      lastUsed: "1 day ago",
      status: "Active",
    },
    {
      id: "key-3",
      name: "Testing API Key",
      key: "sk_test_2023_123456789abcdefghijklmnop",
      created: "2023-12-05",
      lastUsed: "1 week ago",
      status: "Inactive",
    },
  ])

  const [visibleKeys, setVisibleKeys] = useState<Record<string, boolean>>({})

  const toggleKeyVisibility = (id: string) => {
    setVisibleKeys((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "API Key Copied",
      description: "The API key has been copied to your clipboard.",
    })
  }

  return (
    <Card className="mt-6 shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>API Key</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Last Used</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apiKeys.map((apiKey) => (
            <TableRow key={apiKey.id}>
              <TableCell className="font-medium">{apiKey.name}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                    {visibleKeys[apiKey.id]
                      ? apiKey.key
                      : `${apiKey.key.substring(0, 8)}...${apiKey.key.substring(apiKey.key.length - 4)}`}
                  </code>
                  <Button variant="ghost" size="icon" onClick={() => toggleKeyVisibility(apiKey.id)}>
                    {visibleKeys[apiKey.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    <span className="sr-only">{visibleKeys[apiKey.id] ? "Hide" : "Show"} API key</span>
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => copyToClipboard(apiKey.key)}>
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy API key</span>
                  </Button>
                </div>
              </TableCell>
              <TableCell>{apiKey.created}</TableCell>
              <TableCell>{apiKey.lastUsed}</TableCell>
              <TableCell>
                <Badge
                  variant={apiKey.status === "Active" ? "default" : "outline"}
                  className={apiKey.status === "Active" ? "bg-green-500" : ""}
                >
                  {apiKey.status}
                </Badge>
              </TableCell>
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
                    <DropdownMenuItem onClick={() => copyToClipboard(apiKey.key)}>
                      <Copy className="mr-2 h-4 w-4" />
                      <span>Copy API Key</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Badge className="mr-2" variant="outline">
                        {apiKey.status === "Active" ? "Inactive" : "Active"}
                      </Badge>
                      <span>Mark as {apiKey.status === "Active" ? "Inactive" : "Active"}</span>
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

