"use client";

import { useState, useTransition } from 'react';
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Lightbulb } from "lucide-react"; // Replaced Wand2 with Lightbulb
import { generateBrandIdeasAction } from "@/app/actions/brandActions"; // Action name can remain for now
import { useToast } from "@/hooks/use-toast";

const projectIdeaSchema = z.object({
  projectDescription: z.string().min(20, { message: "Please provide a brief project overview (at least 20 characters)." }).max(500, { message: "Description cannot exceed 500 characters." }),
});
type ProjectIdeaFormData = z.infer<typeof projectIdeaSchema>;

export default function BrandToolSection() {
  const [ideas, setIdeas] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors } } = useForm<ProjectIdeaFormData>({
    resolver: zodResolver(projectIdeaSchema),
  });

  const onSubmit: SubmitHandler<ProjectIdeaFormData> = async (data) => {
    startTransition(async () => {
      try {
        // Map projectDescription to companyDescription for the existing action
        const result = await generateBrandIdeasAction({ companyDescription: data.projectDescription });
        if (result && result.ideas) {
          setIdeas(result.ideas);
        } else {
          toast({
            title: "Error",
            description: "Could not generate ideas. Please try again.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Error generating project ideas:", error);
        toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <section id="idea-generator" className="py-16 md:py-24 bg-secondary"> {/* Updated ID */}
      <div className="container mx-auto">
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <Lightbulb className="mx-auto h-12 w-12 text-primary mb-4" /> {/* Changed Icon */}
            <CardTitle className="text-3xl font-headline text-primary">Web Project Idea Starter</CardTitle>
            <CardDescription className="text-muted-foreground">
              Describe your business or project, and let AI suggest some creative directions or taglines for your website.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Textarea
                  placeholder="e.g., A local bakery specializing in custom cakes and artisanal breads, looking for a new website..."
                  className="min-h-[120px] text-base"
                  {...register("projectDescription")}
                  aria-invalid={errors.projectDescription ? "true" : "false"}
                />
                {errors.projectDescription && (
                  <p className="text-sm text-destructive mt-1">{errors.projectDescription.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full text-lg py-3" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Lightbulb className="mr-2 h-5 w-5" /> {/* Changed Icon */}
                    Get Ideas
                  </>
                )}
              </Button>
            </form>

            {ideas.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-headline font-semibold text-primary mb-4">Suggested Ideas:</h3>
                <ul className="space-y-2 list-disc list-inside bg-background/50 p-4 rounded-md">
                  {ideas.map((idea, index) => (
                    <li key={index} className="text-foreground">{idea}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
