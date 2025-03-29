"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Bot, Check, ChevronRight, CreditCard, Database, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function OnboardingWizard() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      setLoading(true)
      // Simulate completion
      setTimeout(() => {
        setLoading(false)
        router.push("/dashboard")
      }, 1500)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4">
      <div className="mx-auto flex w-full max-w-[800px] flex-col items-center">
        <div className="mb-8 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <Bot className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="ml-4 text-3xl font-bold">AI Platform</h1>
        </div>

        <div className="mb-8 flex w-full items-center justify-center">
          <div className="flex w-full max-w-md items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-1">
                <div className={`flex flex-col items-center ${i !== 4 ? "relative" : ""}`}>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                      step >= i
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted-foreground bg-background text-muted-foreground"
                    }`}
                  >
                    {step > i ? <Check className="h-5 w-5" /> : <span>{i}</span>}
                  </div>
                  <span className={`mt-2 text-xs ${step >= i ? "text-primary" : "text-muted-foreground"}`}>
                    {i === 1 ? "Profile" : i === 2 ? "Organization" : i === 3 ? "Use Case" : "Connect"}
                  </span>
                  {i !== 4 && (
                    <div
                      className={`absolute top-5 left-[50%] h-[2px] w-full ${
                        step > i ? "bg-primary" : "bg-muted-foreground"
                      }`}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="w-full shadow-sm">
          {step === 1 && (
            <>
              <CardHeader>
                <CardTitle>Complete Your Profile</CardTitle>
                <CardDescription>Tell us a bit about yourself to personalize your experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="job-title">Job Title</Label>
                    <Input id="job-title" placeholder="e.g. Software Engineer" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select>
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="experience">AI Experience Level</Label>
                  <RadioGroup defaultValue="beginner" className="grid grid-cols-3 gap-4">
                    <div>
                      <RadioGroupItem value="beginner" id="beginner" className="peer sr-only" />
                      <Label
                        htmlFor="beginner"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span className="mb-2 text-sm font-medium">Beginner</span>
                        <span className="text-xs text-muted-foreground">New to AI</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="intermediate" id="intermediate" className="peer sr-only" />
                      <Label
                        htmlFor="intermediate"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span className="mb-2 text-sm font-medium">Intermediate</span>
                        <span className="text-xs text-muted-foreground">Some experience</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="advanced" id="advanced" className="peer sr-only" />
                      <Label
                        htmlFor="advanced"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span className="mb-2 text-sm font-medium">Advanced</span>
                        <span className="text-xs text-muted-foreground">Expert level</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </>
          )}

          {step === 2 && (
            <>
              <CardHeader>
                <CardTitle>Organization Details</CardTitle>
                <CardDescription>Tell us about your organization to help us tailor our services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="org-name">Organization Name</Label>
                  <Input id="org-name" placeholder="Acme Inc" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="org-size">Organization Size</Label>
                    <Select>
                      <SelectTrigger id="org-size">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501+">501+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="org-type">Organization Type</Label>
                    <Select>
                      <SelectTrigger id="org-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="startup">Startup</SelectItem>
                        <SelectItem value="enterprise">Enterprise</SelectItem>
                        <SelectItem value="agency">Agency</SelectItem>
                        <SelectItem value="nonprofit">Non-profit</SelectItem>
                        <SelectItem value="education">Educational</SelectItem>
                        <SelectItem value="government">Government</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="org-website">Website (Optional)</Label>
                  <Input id="org-website" placeholder="https://example.com" />
                </div>
              </CardContent>
            </>
          )}

          {step === 3 && (
            <>
              <CardHeader>
                <CardTitle>Your Use Case</CardTitle>
                <CardDescription>Help us understand how you plan to use our AI platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="primary-use">Primary Use Case</Label>
                  <RadioGroup defaultValue="text-generation" className="grid gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="text-generation" id="text-generation" />
                      <Label htmlFor="text-generation" className="font-normal">
                        Text Generation (Chatbots, Content Creation)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="image-generation" id="image-generation" />
                      <Label htmlFor="image-generation" className="font-normal">
                        Image Generation & Processing
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="data-analysis" id="data-analysis" />
                      <Label htmlFor="data-analysis" className="font-normal">
                        Data Analysis & Insights
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom-models" id="custom-models" />
                      <Label htmlFor="custom-models" className="font-normal">
                        Training Custom AI Models
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other-use" />
                      <Label htmlFor="other-use" className="font-normal">
                        Other
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="use-description">Describe your use case in more detail (Optional)</Label>
                  <Textarea
                    id="use-description"
                    placeholder="Tell us more about how you plan to use our AI platform..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </>
          )}

          {step === 4 && (
            <>
              <CardHeader>
                <CardTitle>Connect Your Resources</CardTitle>
                <CardDescription>Set up the integrations you need to get started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center space-x-4 rounded-md border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Database className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">Connect Database</p>
                      <p className="text-xs text-muted-foreground">Connect to a vector database for AI model storage</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </div>
                  <div className="flex items-center space-x-4 rounded-md border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">Set Up Billing</p>
                      <p className="text-xs text-muted-foreground">Add a payment method to your account</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Set Up
                    </Button>
                  </div>
                  <div className="flex items-center space-x-4 rounded-md border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">Invite Team Members</p>
                      <p className="text-xs text-muted-foreground">
                        Invite colleagues to collaborate on your AI platform
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Invite
                    </Button>
                  </div>
                </div>
              </CardContent>
            </>
          )}

          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack} disabled={step === 1}>
              Back
            </Button>
            <Button onClick={handleNext} disabled={loading}>
              {loading ? (
                "Completing Setup..."
              ) : step === 4 ? (
                "Complete Setup"
              ) : (
                <>
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

