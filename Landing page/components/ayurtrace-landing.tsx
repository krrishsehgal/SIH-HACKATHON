// app/page.tsx
"use client"; // Keep this if AyurTraceLanding requires it

import Link from 'next/link'; // Import Link
import React, { useState, useEffect, Suspense } from "react"; // Ensure all hooks are imported if AyurTraceLanding needs them
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Shield,
  Users,
  CheckCircle,
  MessageCircle,
  Globe,
  Sprout,
  FlaskConical,
  Package,
  Truck,
  Star,
  ChevronRight,
  X,
} from "lucide-react";
import { AyurvedaChatbot } from './ui/chatbot';

// (Keep your slogans and translations objects as they are)
const slogans = [
  "🌿 From Farm to Formula, Trust Every Step",
  "🔗 Blockchain-Powered Herb Transparency",
  "🌱 Authentic Ayurveda, Verified Journey",
  "✨ Pure Herbs, Proven Provenance",
];

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      howItWorks: "How It Works",
      transparency: "Transparency",
      contact: "Contact",
      dashboard: "Dashboard", // Added for navigation
      qrcode: "QR Code",
    },
    hero: {
      title: "AyurTrace",
      subtitle: "Blockchain-Based Ayurvedic Herb Traceability",
      accessDashboard: "Access Dashboard", // Added for button text
    },
    overview: {
      title: "Revolutionizing Ayurvedic Transparency",
      description:
        "AyurTrace leverages blockchain technology to provide complete transparency in the Ayurvedic herb supply chain. From cultivation to your medicine cabinet, every step is verified, recorded, and accessible.",
    },
    lifecycle: {
      title: "Complete Herb Journey",
      subtitle: "Track every step from farm to formula",
      steps: [
        { title: "Cultivation", desc: "Organic farming practices verified" },
        { title: "Manufacturing", desc: "Formulation process tracked" },
        { title: "Testing", desc: "Quality & purity certified" },
        { title: "Distribution", desc: "Supply chain transparency" },
      ],
    },
    features: {
      title: "Why Choose AyurTrace?",
      items: [
        { title: "Complete Traceability", desc: "Track herbs from seed to shelf with blockchain verification" },
        { title: "Sustainability Focus", desc: "Supporting eco-friendly farming and ethical sourcing" },
        { title: "Regulatory Compliance", desc: "Meeting all quality standards and certifications" },
        { title: "Trust & Transparency", desc: "Immutable records ensure authentic Ayurvedic products" },
      ],
    },
    testimonials: {
      title: "Trusted by the Ayurvedic Community",
      items: [
        {
          name: "Dr. Priya Sharma",
          role: "Ayurvedic Practitioner",
          text: "AyurTrace gives me confidence in prescribing authentic herbs to my patients.",
        },
        {
          name: "Rajesh Kumar",
          role: "Organic Farmer",
          text: "Finally, a platform that values and verifies our traditional farming methods.",
        },
        {
          name: "Mumbai Ayur Labs",
          role: "Testing Laboratory",
          text: "The blockchain integration streamlines our certification process significantly.",
        },
      ],
    },
    chatbot: {
      title: "Chat with AyurBot",
      placeholder: "Ask about herb traceability, certifications, or Ayurveda...",
      send: "Send",
    },
    footer: {
      tagline: "Building trust through transparency in Ayurvedic medicine",
      compliance: "Committed to data transparency and regulatory compliance",
    },
  },
  hi: {
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      howItWorks: "कैसे काम करता है",
      transparency: "पारदर्शिता",
      contact: "संपर्क",
      dashboard: "डैशबोर्ड", // Added for navigation
      qrcode: "क्यूआर",
    },
    hero: {
      title: "आयुर्ट्रेस",
      subtitle: "ब्लॉकचेन-आधारित आयुर्वेदिक जड़ी-बूटी ट्रेसेबिलिटी",
      accessDashboard: "डैशबोर्ड एक्सेस करें", // Added for button text
    },
    overview: {
      title: "आयुर्वेदिक पारदर्शिता में क्रांति",
      description:
        "आयुर्ट्रेस आयुर्वेदिक जड़ी-बूटी आपूर्ति श्रृंखला में पूर्ण पारदर्शिता प्रदान करने के लिए ब्लॉकचेन तकनीक का उपयोग करता है। खेती से लेकर आपकी दवा की अलमारी तक, हर कदम सत्यापित, रिकॉर्ड और सुलभ है।",
    },
    lifecycle: {
      title: "संपूर्ण जड़ी-बूटी यात्रा",
      subtitle: "खेत से फॉर्मूला तक हर कदम को ट्रैक करें",
      steps: [
        { title: "खेती", desc: "जैविक खेती प्रथाओं का सत्यापन" },
        { title: "निर्माण", desc: "फॉर्मूलेशन प्रक्रिया ट्रैक की गई" },
        { title: "परीक्षण", desc: "गुणवत्ता और शुद्धता प्रमाणित" },
        { title: "वितरण", desc: "आपूर्ति श्रृंखला पारदर्शिता" },
      ],
    },
    features: {
      title: "आयुर्ट्रेस क्यों चुनें?",
      items: [
        { title: "पूर्ण ट्रेसेबिलिटी", desc: "ब्लॉकचेन सत्यापन के साथ बीज से शेल्फ तक जड़ी-बूटियों को ट्रैक करें" },
        { title: "स्थिरता फोकस", desc: "पर्यावरण-अनुकूल खेती और नैतिक सोर्सिंग का समर्थन" },
        { title: "नियामक अनुपालन", desc: "सभी गुणवत्ता मानकों और प्रमाणन को पूरा करना" },
        { title: "विश्वास और पारदर्शिता", desc: "अपरिवर्तनीय रिकॉर्ड प्रामाणिक आयुर्वेदिक उत्पाद सुनिश्चित करते हैं" },
      ],
    },
    testimonials: {
      title: "आयुर्वेदिक समुदाय द्वारा भरोसेमंद",
      items: [
        {
          name: "डॉ. प्रिया शर्मा",
          role: "आयुर्वेदिक चिकित्सक",
          text: "आयुर्ट्रेस मुझे अपने मरीजों को प्रामाणिक जड़ी-बूंटियां निर्धारित करने में विश्वास देता है।",
        },
        {
          name: "राजेश कुमार",
          role: "जैविक किसान",
          text: "अंततः, एक मंच जो हमारी पारंपरिक खेती के तरीकों को महत्व देता है और सत्यापित करता है।",
        },
        {
          name: "मुंबई आयुर लैब्स",
          role: "परीक्षण प्रयोगशाला",
          text: "ब्लॉकचेन एकीकरण हमारी प्रमाणन प्रक्रिया को काफी सुव्यवस्थित करता है।",
        },
      ],
    },
    chatbot: {
      title: "आयुर्बॉट से चैट करें",
      placeholder: "जड़ी-बूटी ट्रेसेबिलिटी, प्रमाणन, या आयुर्वेद के बारे में पूछें...",
      send: "भेजें",
    },
    footer: {
      tagline: "आयुर्वेदिक चिकित्सा में पारदर्शिता के माध्यम से विश्वास निर्माण",
      compliance: "डेटा पारदर्शिता और नियामक अनुपालन के लिए प्रतिबद्ध",
    },
  },
};

export function AyurTraceLanding() {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-green-800">AyurTrace</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-green-700 hover:text-green-600 font-medium">
                {t.nav.home}
              </a>
              <a href="#about" className="text-green-700 hover:text-green-600 font-medium">
                {t.nav.about}
              </a>
              <a href="#how-it-works" className="text-green-700 hover:text-green-600 font-medium">
                {t.nav.howItWorks}
              </a>
              <a href="#transparency" className="text-green-700 hover:text-green-600 font-medium">
                {t.nav.transparency}
              </a>
              <a href="#contact" className="text-green-700 hover:text-green-600 font-medium">
                {t.nav.contact}
              </a>
              {/* Added Dashboard link to navigation */}
              <Link href="/dashboard" className="text-green-700 hover:text-green-600 font-medium">
                {t.nav.dashboard}
              </Link>
              <Link href="/qr-page" className="text-green-700 hover:text-green-600 font-medium">
                {t.nav.qrcode}
              </Link>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className="border-green-200 text-green-700 hover:bg-green-50"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language === "en" ? "हिंदी" : "English"}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Leaf className="h-12 w-12 text-green-600" />
            <h1 className="text-4xl md:text-6xl font-bold text-green-800">{t.hero.title}</h1>
          </div>

          <p className="text-xl text-green-600 mb-8">{t.hero.subtitle}</p>

          <div className="h-16 flex items-center justify-center">
            <p className="text-2xl md:text-3xl font-semibold text-green-700 animate-pulse">{slogans[currentSlogan]}</p>
          </div>

          <Button size="lg" className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            Explore Transparency <ChevronRight className="ml-2 h-5 w-5" />
          </Button>

          {/* New button to navigate to the Dashboard */}
          <div className="mt-4">
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                {t.hero.accessDashboard} <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{t.overview.title}</h2>
            <p className="text-lg text-green-600 max-w-3xl mx-auto leading-relaxed">{t.overview.description}</p>
          </div>
        </div>
      </section>

      {/* Herb Lifecycle Timeline */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{t.lifecycle.title}</h2>
            <p className="text-lg text-green-600">{t.lifecycle.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {t.lifecycle.steps.map((step, index) => {
              const icons = [Sprout, Package, FlaskConical, Truck]
              const Icon = icons[index]

              return (
                <Card key={index} className="relative bg-white border-green-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-green-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-green-600">{step.desc}</p>
                    <Badge variant="secondary" className="mt-3 bg-green-100 text-green-700">
                      Step {index + 1}
                    </Badge>
                  </CardContent>
                  {index < 3 && (
                    <ChevronRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-green-400" />
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="transparency" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{t.features.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.items.map((feature, index) => {
              const icons = [Shield, Leaf, CheckCircle, Users]
              const Icon = icons[index]

              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">{feature.title}</h3>
                  <p className="text-green-600 leading-relaxed">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{t.testimonials.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="bg-white border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-green-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-green-800">{testimonial.name}</p>
                    <p className="text-sm text-green-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-green-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-green-300" />
                <span className="text-2xl font-bold">AyurTrace</span>
              </div>
              <p className="text-green-100 mb-4 leading-relaxed">{t.footer.tagline}</p>
              <p className="text-sm text-green-200">{t.footer.compliance}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-green-100 hover:text-white">
                  Home
                </a>
                <a href="#about" className="block text-green-100 hover:text-white">
                  About
                </a>
                <a href="#how-it-works" className="block text-green-100 hover:text-white">
                  How It Works
                </a>
                <a href="#transparency" className="block text-green-100 hover:text-white">
                  Features
                </a>
                {/* Added Dashboard link to footer */}
                <Link href="/dashboard" className="block text-green-100 hover:text-white">
                  {t.nav.dashboard}
                </Link>
                
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-green-100">
                <p>info@ayurtrace.com</p>
                <p>+91 98765 43210</p>
                <p>Mumbai, India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p className="text-green-200">© 2024 AyurTrace. All rights reserved. Built with transparency and trust.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatbotOpen && (
          <Button
            onClick={() => setIsChatbotOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full w-14 h-14 shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}

        <AyurvedaChatbot 
          isOpen={isChatbotOpen} 
          onClose={() => setIsChatbotOpen(false)}
        />
      </div>
    </div>
  );
}

// This is your default export for app/page.tsx
export default function Page() {
  return <AyurTraceLanding />;
}