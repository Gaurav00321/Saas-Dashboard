"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"

export function NotificationSettings() {
  const [saving, setSaving] = useState(false)
  const [notifications, setNotifications] = useState({
    apiUsage: true,
    modelDeployments: true,
    billingAlerts: true,
    teamUpdates: false,
    securityAlerts: true,
    productUpdates: true,
    marketingEmails: false,
  })

  const handleSave = () => {
    setSaving(true)
    // Simulate saving
    setTimeout(() => {
      setSaving(false)
      toast({
        title: "Notification Settings Updated",
        description: "Your notification preferences have been updated successfully.",
      })
    }, 1500)
  }

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Manage how and when you receive notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Platform Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">API Usage Alerts</div>
                <div className="text-sm text-muted-foreground">
                  Receive notifications when you approach API usage limits
                </div>
              </div>
              <Switch checked={notifications.apiUsage} onCheckedChange={() => handleToggle("apiUsage")} />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Model Deployments</div>
                <div className="text-sm text-muted-foreground">Get notified when models are deployed or updated</div>
              </div>
              <Switch
                checked={notifications.modelDeployments}
                onCheckedChange={() => handleToggle("modelDeployments")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Billing Alerts</div>
                <div className="text-sm text-muted-foreground">
                  Receive notifications about billing and subscription changes
                </div>
              </div>
              <Switch checked={notifications.billingAlerts} onCheckedChange={() => handleToggle("billingAlerts")} />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Team Updates</div>
                <div className="text-sm text-muted-foreground">Get notified when team members join or leave</div>
              </div>
              <Switch checked={notifications.teamUpdates} onCheckedChange={() => handleToggle("teamUpdates")} />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Security Alerts</div>
                <div className="text-sm text-muted-foreground">
                  Receive notifications about security events and login attempts
                </div>
              </div>
              <Switch checked={notifications.securityAlerts} onCheckedChange={() => handleToggle("securityAlerts")} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Preferences</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Product Updates</div>
                <div className="text-sm text-muted-foreground">Receive emails about new features and improvements</div>
              </div>
              <Switch checked={notifications.productUpdates} onCheckedChange={() => handleToggle("productUpdates")} />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Marketing Emails</div>
                <div className="text-sm text-muted-foreground">Receive promotional emails and special offers</div>
              </div>
              <Switch checked={notifications.marketingEmails} onCheckedChange={() => handleToggle("marketingEmails")} />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button variant="outline">Reset to Default</Button>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </CardFooter>
    </Card>
  )
}

