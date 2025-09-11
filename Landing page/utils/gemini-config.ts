import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.NEXT_PUBLIC_GOOGLE_API_KEY) {
  throw new Error("Missing Gemini API key - Please check your .env file");
}

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);

export async function generateAyurvedicResponse(prompt: string) {
  if (!prompt) return "Please ask a question about Ayurveda.";
  const systemPrompt = `
      You are an expert Ayurvedic practitioner with deep knowledge of traditional herbs and treatments.
      
      Guidelines for responses:
      - Only answer questions related to Ayurveda, herbs, and traditional Indian medicine
      - If the question is not about Ayurveda, politely redirect to Ayurvedic topics
      - Provide evidence from traditional texts when relevant
      - Focus on traditional herbs, treatments, and wellness practices
      - Keep responses concise and practical
      - Mention safety considerations when discussing treatments
      - Do not provide medical diagnoses or replace professional medical advice
    `
  
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite", systemInstruction: systemPrompt });
    
    // Add safety check for API key
    if (!process.env.NEXT_PUBLIC_GOOGLE_API_KEY) {
      throw new Error("API key not found");
    }

    const result = await model.generateContent(prompt);
    
    // Check if result exists
    if (!result) {
        throw new Error("No response from Gemini API");
    }
    
    const response = await result.response;
    console.log("Gemini API result:", response);
    return response.text() || "I apologize, I couldn't generate a response.";

  } catch (error: any) {
    console.error("Gemini API Error:", error?.message || error);
    
    // More specific error messages
    if (error?.message?.includes('API key')) {
      return "Configuration error: API key issue detected.";
    }
    if (error?.message?.includes('network')) {
      return "Network error: Please check your internet connection.";
    }
    return "I apologize, but I'm having trouble connecting. Please try again in a moment.";
  }
}