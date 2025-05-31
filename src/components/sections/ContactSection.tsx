"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, Mail, Phone } from "lucide-react";
import { useState, useTransition } from "react";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  company: z.string().optional(),
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
      // In a real app, you'd send this data to your backend or email service
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Contact form data:", data);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out, Saif will get back to you soon.",
      });
      reset();
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Get in Touch with Saif</h2>
          <p className="text-muted-foreground mt-2">Ready to start your web project or have a question? Let's talk.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-6 md:p-8 rounded-lg shadow-xl">
            <div>
              <Label htmlFor="name" className="font-medium">Full Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Your Name" 
                {...register("name")}
                className="mt-1"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
            </div>
             <div>
              <Label htmlFor="company" className="font-medium">Company (Optional)</Label>
              <Input 
                id="company" 
                type="text" 
                placeholder="Your Company" 
                {...register("company")}
                className="mt-1"
              />
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
                placeholder="Tell me about your project or inquiry..." 
                {...register("message")}
                className="mt-1 min-h-[100px]"
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
          <div className="bg-card p-6 md:p-8 rounded-lg shadow-xl space-y-6">
            <h3 className="text-2xl font-headline font-semibold text-primary">Direct Contact</h3>
            <p className="text-muted-foreground">
              You can also reach me directly through the following channels:
            </p>
            <div>
              <a href="mailto:123saifkhansk@gmail.com" className="flex items-center space-x-3 group">
                <Mail className="h-6 w-6 text-accent group-hover:text-primary transition-colors" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground group-hover:text-accent transition-colors">123saifkhansk@gmail.com</p>
                </div>
              </a>
            </div>
             <div>
              <a href="tel:+919152671865" className="flex items-center space-x-3 group">
                <Phone className="h-6 w-6 text-accent group-hover:text-primary transition-colors" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground group-hover:text-accent transition-colors">+91 91526 71865</p>
                </div>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              I typically respond within 24 hours. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
