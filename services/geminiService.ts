import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || ''; // In a real app, ensure this is set

export const getStylistAdvice = async (userQuery: string, productContext?: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm currently offline (API Key missing). However, I'd generally recommend pairing bold graphics with neutral bottoms!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    const contextPrompt = productContext 
      ? `The user is looking at this product: ${productContext}. ` 
      : '';

    const systemInstruction = `You are a high-end fashion stylist for "Urban Threads", a modern streetwear brand. 
    Your tone is chic, helpful, and concise. 
    You suggest outfits based on our minimalist, oversized, and graphic tee aesthetic.
    Keep responses under 50 words. Focus on color matching and layering.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `${contextPrompt}User asks: "${userQuery}"`,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't quite catch that fashion statement. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our styling services are momentarily busy. Try keeping it simple with denim!";
  }
};
