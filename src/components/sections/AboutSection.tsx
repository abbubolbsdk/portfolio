"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Phone, UserCircle, Code } from 'lucide-react'; // Added UserCircle and Code for visual interest

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <UserCircle className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">About Saif Khan</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Your friendly neighborhood web developer.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/90">
          <p>
            Hello! I'm Saif Khan, a dedicated and results-oriented web developer with a passion for creating elegant and efficient digital solutions. With a strong foundation in modern web technologies, I specialize in bringing ideas to life, transforming concepts into responsive, high-performance websites and applications.
          </p>
          <p>
            My approach is client-centric. I believe in clear communication and collaboration to ensure that the final product not only meets but exceeds your expectations. Whether you're a startup looking to establish your online presence, an established business aiming to upgrade your digital platform, or an individual needing a personal portfolio, I'm here to help you achieve your goals.
          </p>
          <p>
            I'm proficient in technologies like Next.js, React, Tailwind CSS, and Genkit for AI-powered features. I focus on writing clean, maintainable code and adhering to best practices to deliver robust and scalable solutions.
          </p>
          <div className="mt-8 pt-8 border-t border-border text-center space-y-4">
            <h3 className="text-2xl font-headline font-semibold text-primary">Let's Build Something Amazing Together</h3>
            <p className="text-muted-foreground">
              Ready to discuss your project or learn more about my services?
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
              <Button asChild variant="outline" size="lg">
                <a href="mailto:123saifkhansk@gmail.com">
                  <Mail className="mr-2 h-5 w-5" /> Email Me
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+919152671865">
                  <Phone className="mr-2 h-5 w-5" /> Call Me
                </a>
              </Button>
            </div>
             <p className="text-sm text-muted-foreground">
              Email: <a href="mailto:123saifkhansk@gmail.com" className="hover:text-accent">123saifkhansk@gmail.com</a>
            </p>
            <p className="text-sm text-muted-foreground">
              Phone: <a href="tel:+919152671865" className="hover:text-accent">+91 91526 71865</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
