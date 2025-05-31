"use client";

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram, Github, ArrowRight, Mail, Phone, Code } from 'lucide-react'; // Added Github, Mail, Phone, Code
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

  const siteLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#work", label: "Portfolio" },
    { href: "/#about", label: "About Me" },
    { href: "/#contact", label: "Contact" },
  ];

  const connectLinks = [
    { href: "mailto:123saifkhansk@gmail.com", label: "123saifkhansk@gmail.com", icon: Mail },
    { href: "tel:+919152671865", label: "+91 91526 71865", icon: Phone },
  ];


  const socialLinks = [
    { href: "https://linkedin.com/in/yourprofile", icon: Linkedin, label: "LinkedIn" }, // Replace with actual link
    { href: "https://github.com/yourprofile", icon: Github, label: "GitHub" }, // Replace with actual link
    { href: "https://instagram.com/yourprofile", icon: Instagram, label: "Instagram" }, // Replace with actual link
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <h3 className="text-xl font-headline mb-2">Stay Updated</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Get insights on web development trends and project updates.
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

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold font-headline mb-3">Site Map</h4>
              <ul className="space-y-2">
                {siteLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-headline mb-3">Connect</h4>
              <ul className="space-y-2">
                {connectLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors flex items-center">
                       {link.icon && <link.icon className="h-4 w-4 mr-2" />}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
             <div>
              <h4 className="font-semibold font-headline mb-3">Socials</h4>
              <ul className="space-y-2">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <Link href={social.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-primary-foreground/80 hover:text-accent transition-colors flex items-center">
                       <social.icon className="h-4 w-4 mr-2" />
                      {social.label}
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
            <Code className="h-5 w-5 text-accent" /> {/* Changed Icon */}
            <span className="text-sm font-medium">Saif Khan © {new Date().getFullYear()}</span>
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
