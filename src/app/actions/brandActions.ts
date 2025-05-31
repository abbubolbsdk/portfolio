"use server";

import { generateBrandIdeas, type BrandIdeaInput, type BrandIdeaOutput } from "@/ai/flows/brand-idea-generator";

export async function generateBrandIdeasAction(input: BrandIdeaInput): Promise<BrandIdeaOutput | null> {
  try {
    const result = await generateBrandIdeas(input);
    return result;
  } catch (error) {
    console.error("Error in generateBrandIdeasAction:", error);
    // Optionally, rethrow or return a specific error structure
    // For now, returning null to indicate failure to the client
    return null; 
  }
}
