'use server';

/**
 * @fileOverview Generates 'Ideas Worth Rallying Around' based on a company description.
 *
 * - generateBrandIdeas - A function that generates brand ideas.
 * - BrandIdeaInput - The input type for the generateBrandIdeas function.
 * - BrandIdeaOutput - The return type for the generateBrandIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BrandIdeaInputSchema = z.object({
  companyDescription: z.string().describe('A brief description of the company or project.'),
});
export type BrandIdeaInput = z.infer<typeof BrandIdeaInputSchema>;

const BrandIdeaOutputSchema = z.object({
  ideas: z.array(z.string()).describe('A list of AI-generated ideas worth rallying around.'),
});
export type BrandIdeaOutput = z.infer<typeof BrandIdeaOutputSchema>;

export async function generateBrandIdeas(input: BrandIdeaInput): Promise<BrandIdeaOutput> {
  return brandIdeaGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'brandIdeaGeneratorPrompt',
  input: {schema: BrandIdeaInputSchema},
  output: {schema: BrandIdeaOutputSchema},
  prompt: `You are a branding expert. Generate a list of "Ideas Worth Rallying Around" for the following company description:\n\n{{companyDescription}}\n\nIdeas:`,
});

const brandIdeaGeneratorFlow = ai.defineFlow(
  {
    name: 'brandIdeaGeneratorFlow',
    inputSchema: BrandIdeaInputSchema,
    outputSchema: BrandIdeaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
