"use client";

import { useState, useTransition } from 'react';
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Wand2 } from "lucide-react";
import { generateBrandIdeasAction } from "@/app/actions/brandActions";
import { useToast } from "@/hooks/use-toast";

const brandToolSchema = z.object({
  companyDescription: z.string().min(20, { message: "Please provide a more detailed description (at least 20 characters)." }).max(500, { message: "Description cannot exceed 500 characters." }),
});
type BrandToolFormData = z.infer<typeof brandToolSchema>;

export default function BrandToolSection() {
  const [ideas, setIdeas] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors } } = useForm<BrandToolFormData>({
    resolver: zodResolver(brandToolSchema),
  });

  const onSubmit: SubmitHandler<BrandToolFormData> = async (data) => {
    startTransition(async () => {
      try {
        const result = await generateBrandIdeasAction(data);
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
        console.error("Error generating brand ideas:", error);
        toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <section id="brand-tool" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <Wand2 className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-3xl font-headline text-primary">Generate Your Rallying Cry</CardTitle>
            <CardDescription className="text-muted-foreground">
              Describe your company or project, and let our AI suggest some "Ideas Worth Rallying Around®".
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Textarea
                  placeholder="e.g., We are a cutting-edge SaaS company revolutionizing remote collaboration for creative teams..."
                  className="min-h-[120px] text-base"
                  {...register("companyDescription")}
                  aria-invalid={errors.companyDescription ? "true" : "false"}
                />
                {errors.companyDescription && (
                  <p className="text-sm text-destructive mt-1">{errors.companyDescription.message}</p>
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
                    <Wand2 className="mr-2 h-5 w-5" />
                    Generate Ideas
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
