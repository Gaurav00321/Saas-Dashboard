"use client"

import { useState } from "react"
import { Check, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function SubscriptionPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const [currentPlan, setCurrentPlan] = useState("pro")

  const plans = [
    {
      id: "free",
      name: "Free",
      description: "Basic features for small projects",
      price: {
        monthly: "$0",
        yearly: "$0",
      },
      features: ["5 API requests per minute", "2 AI models", "1 team member", "Community support"],
      cta: "Current Plan",
      disabled: true,
    },
    {
      id: "pro",
      name: "Pro",
      description: "Advanced features for professionals",
      price: {
        monthly: "$49",
        yearly: "$39",
      },
      features: [
        "100 API requests per minute",
        "10 AI models",
        "5 team members",
        "Email support",
        "Advanced analytics",
      ],
      cta: "Current Plan",
      disabled: true,
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Custom solutions for large teams",
      price: {
        monthly: "$199",
        yearly: "$159",
      },
      features: [
        "Unlimited API requests",
        "Unlimited AI models",
        "Unlimited team members",
        "24/7 priority support",
        "Custom model training",
        "Dedicated account manager",
      ],
      cta: "Upgrade",
      disabled: false,
    },
  ]

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Subscription Plans</CardTitle>
        <CardDescription>Choose the right plan for your AI needs</CardDescription>
        <div className="flex items-center space-x-2 pt-4">
          <Label htmlFor="billing-cycle">Monthly</Label>
          <Switch
            id="billing-cycle"
            checked={billingCycle === "yearly"}
            onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
          />
          <Label htmlFor="billing-cycle" className="flex items-center gap-2">
            Yearly
            <Badge variant="outline" className="text-green-500 border-green-500">
              Save 20%
            </Badge>
          </Label>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.id} className={`border ${plan.popular ? "border-primary shadow-md" : ""}`}>
              {plan.popular && <Badge className="absolute -top-2 right-4">Most Popular</Badge>}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{plan.price[billingCycle]}</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.id === currentPlan ? "outline" : "default"}
                  disabled={plan.id === currentPlan}
                >
                  {plan.id === currentPlan ? (
                    "Current Plan"
                  ) : (
                    <>
                      <Zap className="mr-2 h-4 w-4" />
                      {plan.cta}
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

