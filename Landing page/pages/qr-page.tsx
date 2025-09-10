"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Leaf,
  Settings,
  Microscope,
  Factory,
  Shield,
  MapPin,
  Calendar,
  FileText,
  MessageCircle,
  CheckCircle,
  Globe,
} from "lucide-react"
import "../styles/globals.css"

export default function ProvenancePage() {
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const [showChatbot, setShowChatbot] = useState(false)

  const content = {
    en: {
      title: "Ashwagandha Batch #2025A",
      subtitle: "Complete Product Journey",
      verified: "Verified on Blockchain - Tamper-proof Record",
      stages: {
        collection: {
          title: "Collection Event",
          farm: "Green Valley Organic Farm",
          farmer: "Farmer ID: GV-2025-001",
          location: "Rajasthan, India (26.9124° N, 75.7873° E)",
          date: "January 15, 2025",
          species: "Withania somnifera",
        },
        processing: {
          title: "Processing Steps",
          steps: [
            { step: "Drying", date: "Jan 16, 2025", facility: "Green Valley Processing Unit" },
            { step: "Grinding", date: "Jan 18, 2025", facility: "Green Valley Processing Unit" },
            { step: "Storage", date: "Jan 20, 2025", facility: "Climate Controlled Warehouse" },
          ],
        },
        quality: {
          title: "Quality Tests",
          moisture: "8.2%",
          pesticide: "Below Detection Limit",
          dna: "Authenticated - 99.8% Match",
          certificate: "Lab Certificate #LC-2025-0156",
        },
        manufacturing: {
          title: "Manufacturing & Packaging",
          facility: "AyurTrace Manufacturing Facility",
          batch: "MFG-2025-ASH-001",
          date: "February 1, 2025",
        },
        compliance: {
          title: "Compliance Proofs",
          certifications: ["Organic Certified", "Fair Trade Verified", "AYUSH Approved", "Sustainable Sourcing"],
        },
      },
      chatbot: "Ask questions about this product",
      language: "हिंदी",
    },
    hi: {
      title: "अश्वगंधा बैच #2025A",
      subtitle: "पूर्ण उत्पाद यात्रा",
      verified: "ब्लॉकचेन पर सत्यापित - छेड़छाड़-रोधी रिकॉर्ड",
      stages: {
        collection: {
          title: "संग्रह घटना",
          farm: "ग्रीन वैली ऑर्गेनिक फार्म",
          farmer: "किसान आईडी: GV-2025-001",
          location: "राजस्थान, भारत (26.9124° N, 75.7873° E)",
          date: "15 जनवरी, 2025",
          species: "विथानिया सोम्निफेरा",
        },
        processing: {
          title: "प्रसंस्करण चरण",
          steps: [
            { step: "सुखाना", date: "16 जन, 2025", facility: "ग्रीन वैली प्रसंस्करण इकाई" },
            { step: "पीसना", date: "18 जन, 2025", facility: "ग्रीन वैली प्रसंस्करण इकाई" },
            { step: "भंडारण", date: "20 जन, 2025", facility: "जलवायु नियंत्रित गोदाम" },
          ],
        },
        quality: {
          title: "गुणवत्ता परीक्षण",
          moisture: "8.2%",
          pesticide: "पहचान सीमा से नीचे",
          dna: "प्रमाणित - 99.8% मैच",
          certificate: "लैब प्रमाणपत्र #LC-2025-0156",
        },
        manufacturing: {
          title: "निर्माण और पैकेजिंग",
          facility: "आयुर्ट्रेस निर्माण सुविधा",
          batch: "MFG-2025-ASH-001",
          date: "1 फरवरी, 2025",
        },
        compliance: {
          title: "अनुपालन प्रमाण",
          certifications: ["जैविक प्रमाणित", "निष्पक्ष व्यापार सत्यापित", "आयुष अनुमोदित", "टिकाऊ सोर्सिंग"],
        },
      },
      chatbot: "इस उत्पाद के बारे में प्रश्न पूछें",
      language: "English",
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AyurTrace</h1>
              <p className="text-sm text-muted-foreground">{currentContent.title}</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "hi" : "en")}
            className="flex items-center space-x-2"
          >
            <Globe className="w-4 h-4" />
            <span>{currentContent.language}</span>
          </Button>
        </div>
      </header>

      {/* Status Banner */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">{currentContent.verified}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">{currentContent.subtitle}</h2>
          <p className="text-muted-foreground">Track your product from farm to shelf</p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Collection Event */}
          <div className="relative">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <Card className="flex-1 border-primary/20 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>{currentContent.stages.collection.title}</span>
                    <Badge variant="secondary">Stage 1</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Farm Name</p>
                      <p className="font-medium">{currentContent.stages.collection.farm}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Farmer ID</p>
                      <p className="font-medium">{currentContent.stages.collection.farmer}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{currentContent.stages.collection.location}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Harvest Date</p>
                      <p className="font-medium flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{currentContent.stages.collection.date}</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Species</p>
                    <p className="font-medium italic">{currentContent.stages.collection.species}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="absolute left-6 top-16 w-0.5 h-8 bg-border"></div>
          </div>

          {/* Processing Steps */}
          <div className="relative">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Settings className="w-6 h-6 text-primary-foreground" />
              </div>
              <Card className="flex-1 border-primary/20 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>{currentContent.stages.processing.title}</span>
                    <Badge variant="secondary">Stage 2</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentContent.stages.processing.steps.map((step, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{step.step}</p>
                          <p className="text-sm text-muted-foreground">{step.facility}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="absolute left-6 top-16 w-0.5 h-8 bg-border"></div>
          </div>

          {/* Quality Tests */}
          <div className="relative">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Microscope className="w-6 h-6 text-primary-foreground" />
              </div>
              <Card className="flex-1 border-primary/20 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>{currentContent.stages.quality.title}</span>
                    <Badge variant="secondary">Stage 3</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Moisture Content</p>
                      <p className="font-bold text-lg text-primary">{currentContent.stages.quality.moisture}</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Pesticide Residue</p>
                      <p className="font-bold text-lg text-primary">{currentContent.stages.quality.pesticide}</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">DNA Authentication</p>
                      <p className="font-bold text-lg text-primary">{currentContent.stages.quality.dna}</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Lab Certificate</p>
                      <Button variant="outline" size="sm" className="mt-1 bg-transparent">
                        <FileText className="w-4 h-4 mr-2" />
                        {currentContent.stages.quality.certificate}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="absolute left-6 top-16 w-0.5 h-8 bg-border"></div>
          </div>

          {/* Manufacturing & Packaging */}
          <div className="relative">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Factory className="w-6 h-6 text-primary-foreground" />
              </div>
              <Card className="flex-1 border-primary/20 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>{currentContent.stages.manufacturing.title}</span>
                    <Badge variant="secondary">Stage 4</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Facility Name</p>
                      <p className="font-medium">{currentContent.stages.manufacturing.facility}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Batch ID</p>
                      <p className="font-medium">{currentContent.stages.manufacturing.batch}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Packaging Date</p>
                      <p className="font-medium flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{currentContent.stages.manufacturing.date}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="absolute left-6 top-16 w-0.5 h-8 bg-border"></div>
          </div>

          {/* Compliance Proofs */}
          <div className="relative">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <Card className="flex-1 border-primary/20 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>{currentContent.stages.compliance.title}</span>
                    <Badge variant="secondary">Stage 5</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {currentContent.stages.compliance.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="justify-center p-2 text-center">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Chatbot Button */}
      <Button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg"
        onClick={() => setShowChatbot(!showChatbot)}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Simple Chatbot Popup */}
      {showChatbot && (
        <div className="fixed bottom-24 right-6 w-80 bg-card border border-border rounded-lg shadow-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">AyurTrace Assistant</h3>
            <Button variant="ghost" size="sm" onClick={() => setShowChatbot(false)}>
              ×
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{currentContent.chatbot}</p>
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start text-left bg-transparent">
              What is the origin of this batch?
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start text-left bg-transparent">
              How was quality tested?
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start text-left bg-transparent">
              View certifications
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
