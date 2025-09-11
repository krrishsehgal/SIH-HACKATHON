import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.NEXT_PUBLIC_GOOGLE_API_KEY) {
  console.error("Missing Gemini API key");
}

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY!);

export async function generateAyurvedicResponse(prompt: string) {
  if (!prompt) return "Please ask a question about Ayurveda.";
  
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const fullPrompt = `
      You are an expert Ayurvedic practitioner and advisor. 
      Please provide helpful information about Ayurveda in response to this query: "${prompt}"
      
      Keep your response:
      - Focused on traditional Ayurvedic knowledge
      - Clear and concise
      - Practical and applicable
      - Within 2-3 paragraphs maximum
    `;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text() || "I apologize, I couldn't generate a response. Please try asking in a different way.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to my knowledge base. Please try again in a moment.";
  }
}