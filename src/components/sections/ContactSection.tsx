"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { useState, useTransition } from "react";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message cannot exceed 500 characters." }),
});
type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    startTransition(async () => {
      // Simulate API call for form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Contact form data:", data);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      reset();
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Let's Connect</h2>
          <p className="text-muted-foreground mt-2">Have a project in mind or want to learn more? Drop us a line.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-lg shadow-xl">
          <div>
            <Label htmlFor="name" className="font-medium">Full Name</Label>
            <Input 
              id="name" 
              type="text" 
              placeholder="John Doe" 
              {...register("name")}
              className="mt-1"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="email" className="font-medium">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="you@example.com" 
              {...register("email")}
              className="mt-1"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="message" className="font-medium">Your Message</Label>
            <Textarea 
              id="message" 
              placeholder="Tell us about your project or inquiry..." 
              {...register("message")}
              className="mt-1 min-h-[120px]"
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
          </div>
          <Button type="submit" className="w-full text-lg py-3" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
