"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"

export function SecuritySettings() {
  const [saving, setSaving] = useState(false)
  const [mfaEnabled, setMfaEnabled] = useState(false)

  const handleSave = () => {
    setSaving(true)
    // Simulate saving
    setTimeout(() => {
      setSaving(false)
      toast({
        title: "Security Settings Updated",
        description: "Your security settings have been updated successfully.",
      })
    }, 1500)
  }

  const handleMfaToggle = (checked: boolean) => {
    setMfaEnabled(checked)
    if (checked) {
      toast({
        title: "MFA Setup Required",
        description: "Please set up multi-factor authentication to secure your account.",
      })
    }
  }

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
        <CardDescription>Manage your account security and authentication settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Change Password</h3>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <div className="font-medium">Multi-Factor Authentication (MFA)</div>
              <div className="text-sm text-muted-foreground">Add an extra layer of security to your account</div>
            </div>
            <Switch checked={mfaEnabled} onCheckedChange={handleMfaToggle} />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Session Management</h3>
          <div className="rounded-lg border p-4">
            <div className="space-y-2">
              <div className="font-medium">Active Sessions</div>
              <div className="text-sm text-muted-foreground">You're currently logged in on these devices</div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Current Browser</div>
                  <div className="text-xs text-muted-foreground">Chrome on macOS • San Francisco, USA • Active now</div>
                </div>
                <Button variant="outline" size="sm" disabled>
                  Current
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Mobile App</div>
                  <div className="text-xs text-muted-foreground">iOS 16 • New York, USA • Last active 2 hours ago</div>
                </div>
                <Button variant="outline" size="sm">
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </CardFooter>
    </Card>
  )
}

