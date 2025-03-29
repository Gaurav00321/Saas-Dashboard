"use client"

import { useState } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ModelUploadButton() {
  const [open, setOpen] = useState(false)
  const [uploading, setUploading] = useState(false)

  const handleUpload = () => {
    setUploading(true)
    // Simulate upload
    setTimeout(() => {
      setUploading(false)
      setOpen(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Model
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload AI Model</DialogTitle>
          <DialogDescription>
            Upload a new AI model to your platform. Supported formats include .h5, .onnx, and .pt files.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="model-name">Model Name</Label>
            <Input id="model-name" placeholder="Enter model name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="model-type">Model Type</Label>
            <Select>
              <SelectTrigger id="model-type">
                <SelectValue placeholder="Select model type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="text-generation">Text Generation</SelectItem>
                <SelectItem value="image-classification">Image Classification</SelectItem>
                <SelectItem value="text-classification">Text Classification</SelectItem>
                <SelectItem value="audio-processing">Audio Processing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="model-file">Model File</Label>
            <Input id="model-file" type="file" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="model-description">Description (Optional)</Label>
            <Input id="model-description" placeholder="Enter model description" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleUpload} disabled={uploading}>
            {uploading ? "Uploading..." : "Upload Model"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

