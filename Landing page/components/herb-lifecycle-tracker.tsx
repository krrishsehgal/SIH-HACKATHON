"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  Truck,
  Factory,
  FlaskConical,
  Store,
  MessageCircle,
  Globe,
  CheckCircle,
  Clock,
  MapPin,
  Calendar,
} from "lucide-react"

interface LifecycleStep {
  id: string
  title: string
  titleHindi: string
  icon: React.ReactNode
  status: "completed" | "in-progress" | "pending"
  date: string
  location: string
  locationHindi: string
  details: {
    en: string[]
    hi: string[]
  }
  keyMetrics?: {
    label: string
    labelHindi: string
    value: string
  }[]
}

const lifecycleSteps: LifecycleStep[] = [
  {
    id: "producer",
    title: "Producer",
    titleHindi: "उत्पादक",
    icon: <Leaf className="h-6 w-6" />,
    status: "completed",
    date: "2024-01-15",
    location: "Kerala, India",
    locationHindi: "केरल, भारत",
    details: {
      en: ["Organic cultivation", "Sustainable farming practices", "Quality seed selection"],
      hi: ["जैविक खेती", "टिकाऊ कृषि प्रथाएं", "गुणवत्ता बीज चयन"],
    },
    keyMetrics: [
      { label: "Harvest Date", labelHindi: "फसल की तारीख", value: "Jan 15, 2024" },
      { label: "Quality Grade", labelHindi: "गुणवत्ता ग्रेड", value: "A+" },
    ],
  },
  {
    id: "mediator",
    title: "Mediator",
    titleHindi: "मध्यस्थ",
    icon: <Truck className="h-6 w-6" />,
    status: "completed",
    date: "2024-01-18",
    location: "Kochi, Kerala",
    locationHindi: "कोच्चि, केरल",
    details: {
      en: ["Quality inspection", "Proper storage conditions", "Transportation coordination"],
      hi: ["गुणवत्ता निरीक्षण", "उचित भंडारण स्थितियां", "परिवहन समन्वय"],
    },
    keyMetrics: [
      { label: "Storage Temp", labelHindi: "भंडारण तापमान", value: "18-22°C" },
      { label: "Humidity", labelHindi: "आर्द्रता", value: "45-55%" },
    ],
  },
  {
    id: "manufacturer",
    title: "Manufacturer",
    titleHindi: "निर्माता",
    icon: <Factory className="h-6 w-6" />,
    status: "completed",
    date: "2024-01-22",
    location: "Bangalore, Karnataka",
    locationHindi: "बैंगलोर, कर्नाटक",
    details: {
      en: ["Traditional processing methods", "GMP certified facility", "Batch tracking system"],
      hi: ["पारंपरिक प्रसंस्करण विधियां", "जीएमपी प्रमाणित सुविधा", "बैच ट्रैकिंग सिस्टम"],
    },
    keyMetrics: [
      { label: "Batch ID", labelHindi: "बैच आईडी", value: "AYT-2024-001" },
      { label: "Processing Date", labelHindi: "प्रसंस्करण तिथि", value: "Jan 22, 2024" },
    ],
  },
  {
    id: "lab",
    title: "Laboratory",
    titleHindi: "प्रयोगशाला",
    icon: <FlaskConical className="h-6 w-6" />,
    status: "in-progress",
    date: "2024-01-25",
    location: "Mumbai, Maharashtra",
    locationHindi: "मुंबई, महाराष्ट्र",
    details: {
      en: ["Purity testing", "Heavy metal analysis", "Microbial testing"],
      hi: ["शुद्धता परीक्षण", "भारी धातु विश्लेषण", "माइक्रोबियल परीक्षण"],
    },
    keyMetrics: [
      { label: "Test Status", labelHindi: "परीक्षण स्थिति", value: "In Progress" },
      { label: "Expected", labelHindi: "अपेक्षित", value: "Jan 28, 2024" },
    ],
  },
  {
    id: "wholesaler",
    title: "Wholesaler",
    titleHindi: "थोक विक्रेता",
    icon: <Store className="h-6 w-6" />,
    status: "pending",
    date: "Pending",
    location: "Delhi, India",
    locationHindi: "दिल्ली, भारत",
    details: {
      en: ["Distribution network", "Retail partnerships", "Final quality check"],
      hi: ["वितरण नेटवर्क", "खुदरा साझेदारी", "अंतिम गुणवत्ता जांच"],
    },
  },
]

export function HerbLifecycleTracker() {
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const [showChatBot, setShowChatBot] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-progress":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "pending":
        return "bg-gray-100 text-gray-600 border-gray-200"
      default:
        return "bg-gray-100 text-gray-600 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      case "in-progress":
        return <Clock className="h-4 w-4" />
      case "pending":
        return <Clock className="h-4 w-4 opacity-50" />
      default:
        return <Clock className="h-4 w-4 opacity-50" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">AyurTrace</h1>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? "Herb Lifecycle Tracking" : "जड़ी बूटी जीवनचक्र ट्रैकिंग"}
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className="gap-2"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "हिंदी" : "English"}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-card/30 to-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="relative mx-auto w-32 h-32 mb-6">
                <img
                  src="/ashwagandha-herb-illustration-botanical-drawing.jpg"
                  alt="Ashwagandha herb"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {language === "en" ? "Ashwagandha Root" : "अश्वगंधा जड़"}
              </h2>
              <p className="text-muted-foreground">
                {language === "en"
                  ? "Premium quality Withania somnifera from certified organic farms"
                  : "प्रमाणित जैविक खेतों से प्रीमियम गुणवत्ता विथानिया सोम्निफेरा"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">
                  {language === "en" ? "Lifecycle Steps" : "जीवनचक्र चरण"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">14</div>
                <div className="text-sm text-muted-foreground">
                  {language === "en" ? "Days Tracked" : "दिन ट्रैक किए गए"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">A+</div>
                <div className="text-sm text-muted-foreground">
                  {language === "en" ? "Quality Grade" : "गुणवत्ता ग्रेड"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-12">
              {language === "en" ? "Herb Lifecycle Journey" : "जड़ी बूटी जीवनचक्र यात्रा"}
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

              <div className="space-y-8">
                {lifecycleSteps.map((step, index) => (
                  <div key={step.id} className="relative flex gap-6">
                    {/* Timeline dot */}
                    <div
                      className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 ${
                        step.status === "completed"
                          ? "bg-primary border-primary text-primary-foreground"
                          : step.status === "in-progress"
                            ? "bg-amber-500 border-amber-500 text-white"
                            : "bg-muted border-border text-muted-foreground"
                      }`}
                    >
                      {step.icon}
                    </div>

                    {/* Card */}
                    <Card className="flex-1 shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">
                              {language === "en" ? step.title : step.titleHindi}
                            </CardTitle>
                            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              {language === "en" ? step.location : step.locationHindi}
                            </div>
                          </div>
                          <Badge className={`${getStatusColor(step.status)} gap-1`}>
                            {getStatusIcon(step.status)}
                            {step.status === "completed"
                              ? language === "en"
                                ? "Completed"
                                : "पूर्ण"
                              : step.status === "in-progress"
                                ? language === "en"
                                  ? "In Progress"
                                  : "प्रगति में"
                                : language === "en"
                                  ? "Pending"
                                  : "लंबित"}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {step.date}
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">
                            {language === "en" ? "Process Details:" : "प्रक्रिया विवरण:"}
                          </h4>
                          <ul className="space-y-1">
                            {step.details[language].map((detail, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {step.keyMetrics && (
                          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border">
                            {step.keyMetrics.map((metric, idx) => (
                              <div key={idx} className="text-center">
                                <div className="text-sm font-medium">
                                  {language === "en" ? metric.label : metric.labelHindi}
                                </div>
                                <div className="text-xs text-muted-foreground">{metric.value}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <Button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50"
        onClick={() => setShowChatBot(!showChatBot)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Bot Panel (UI Only) */}
      {showChatBot && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-card border border-border rounded-lg shadow-xl z-50">
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-medium">AyurBot</h4>
                  <p className="text-xs text-muted-foreground">
                    {language === "en" ? "Ask about herbs" : "जड़ी बूटियों के बारे में पूछें"}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowChatBot(false)}>
                ×
              </Button>
            </div>
          </div>

          <div className="p-4 h-64 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <MessageCircle className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">
                {language === "en" ? "Chat functionality coming soon..." : "चैट कार्यक्षमता जल्द आ रही है..."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
