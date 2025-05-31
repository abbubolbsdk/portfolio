"use client";

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';
import FlagIcon from '@/components/icons/FlagIcon';
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});
type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function SiteFooter() {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit: SubmitHandler<NewsletterFormData> = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Subscribed!",
      description: `Thank you for subscribing with ${data.email}.`,
    });
    reset();
  };

  const companyLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "What We Do" },
    { href: "/#about", label: "About" },
    { href: "/#method", label: "Method" },
    { href: "/#work", label: "Work" },
    { href: "/#contact", label: "Contact" },
  ];

  const discoverLinks = [
    { href: "/#engagements", label: "Engagements" },
    { href: "/#speaking", label: "Speaking" },
    { href: "/#book", label: "Our Book" },
    { href: "/#shop", label: "Shop" },
  ];

  const learnLinks = [
    { href: "/#blog", label: "Blog" },
    { href: "/#press", label: "Press & Media" },
    { href: "/#clients", label: "Clients" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#faq", label: "FAQs" },
  ];

  const socialLinks = [
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Newsletter Signup */}
          <div className="md:col-span-5">
            <h3 className="text-xl font-headline mb-2">Stay Rallied</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Get valuable strategy, culture, and brand insights straight to your inbox.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 items-start">
              <div className="flex-grow">
                <Input
                  type="email"
                  placeholder="Your email here"
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-accent"
                  {...register("email")}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <Button type="submit" variant="secondary" size="icon" aria-label="Subscribe">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-primary-foreground/60 mt-3">
              By signing up, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold font-headline mb-3">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-headline mb-3">Discover</h4>
              <ul className="space-y-2">
                {discoverLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-headline mb-3">Learn</h4>
              <ul className="space-y-2">
                {learnLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 md:my-12 border-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <FlagIcon className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">Rally Point © {new Date().getFullYear()}</span>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                className="text-primary-foreground/80 hover:text-accent transition-colors">
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
