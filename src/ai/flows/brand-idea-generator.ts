'use server';

/**
 * @fileOverview Generates web project ideas or taglines based on a company/project description.
 *
 * - generateBrandIdeas - A function that generates web project ideas/taglines.
 * - BrandIdeaInput - The input type for the generateBrandIdeas function. (Kept name for simplicity for now)
 * - BrandIdeaOutput - The return type for the generateBrandIdeas function. (Kept name for simplicity for now)
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BrandIdeaInputSchema = z.object({
  companyDescription: z.string().describe('A brief description of the company or project needing web ideas.'),
});
export type BrandIdeaInput = z.infer<typeof BrandIdeaInputSchema>;

const BrandIdeaOutputSchema = z.object({
  ideas: z.array(z.string()).describe('A list of AI-generated web project ideas or taglines.'),
});
export type BrandIdeaOutput = z.infer<typeof BrandIdeaOutputSchema>;

export async function generateBrandIdeas(input: BrandIdeaInput): Promise<BrandIdeaOutput> {
  return brandIdeaGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'webProjectIdeaGeneratorPrompt', // Renamed prompt
  input: {schema: BrandIdeaInputSchema},
  output: {schema: BrandIdeaOutputSchema},
  prompt: `You are a creative web development consultant and marketing expert. 
Generate a list of 3-5 concise and compelling web project ideas, unique selling propositions (USPs), or taglines for the following company/project description.
Focus on aspects that would make a website stand out.

Company/Project Description:
{{companyDescription}}

Generated Ideas/Taglines:`,
});

const brandIdeaGeneratorFlow = ai.defineFlow(
  {
    name: 'brandIdeaGeneratorFlow', // Flow name can remain for now to avoid breaking changes elsewhere if not necessary
    inputSchema: BrandIdeaInputSchema,
    outputSchema: BrandIdeaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
