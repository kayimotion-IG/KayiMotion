import { GoogleGenAI, Type } from "@google/genai";
import { AIConceptResponse } from "../types";

const conceptSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "A catchy title for the video concept" },
    logline: { type: Type.STRING, description: "A one-sentence summary of the concept" },
    visualStyle: { type: Type.STRING, description: "Description of the visual aesthetic, lighting, and camera work" },
    keyScenes: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "List of 3-5 key scenes or shots"
    },
    audioMood: { type: Type.STRING, description: "Description of the sound design and music" }
  },
  required: ["title", "logline", "visualStyle", "keyScenes", "audioMood"]
};

export const generateCreativeConcept = async (userPrompt: string): Promise<AIConceptResponse> => {
  try {
    // Initialize here to prevent top-level crashes if env var is missing during build/mount
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key is missing. Please check your environment variables.");
    }

    const ai = new GoogleGenAI({ apiKey });
    const model = "gemini-2.5-flash";
    const systemInstruction = `You are a world-class Creative Director at a high-end motion design agency named 'KayiMotion'. 
    Your goal is to take a user's vague idea and turn it into a concrete, cutting-edge video production brief.
    Focus on modern aesthetics, dynamic motion, and emotional impact.
    Return strictly JSON.`;

    const response = await ai.models.generateContent({
      model,
      contents: {
        role: 'user',
        parts: [{ text: userPrompt }]
      },
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: conceptSchema,
        temperature: 0.8,
      }
    });

    let text = response.text;
    if (!text) {
      throw new Error("No response generated");
    }

    // Remove markdown code blocks if present (common issue even with JSON mode)
    text = text.replace(/^```json\s*/, "").replace(/^```\s*/, "").replace(/\s*```$/, "");

    return JSON.parse(text) as AIConceptResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};