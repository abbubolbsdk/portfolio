"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import React, { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after a short delay to ensure elements are rendered
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const titleLines = [
    { text: "Ideas Worth", className: "block", delay: "0.2s" },
    { text: "Rallying", className: "block md:text-right", delay: "0.4s" },
    { text: "Around", className: "block", delay: "0.6s", icon: true },
  ];

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-20 md:py-32 text-center text-primary bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold !leading-tight tracking-tighter">
            {titleLines.map((line, index) => (
              <span key={index} className="overflow-hidden">
                <span 
                  className={`hero-line ${line.className}`}
                  style={{ animationDelay: isVisible ? line.delay : undefined }}
                >
                  {line.text}
                  {line.icon && (
                    <span className="inline-block align-middle mx-2 text-accent" aria-hidden="true">®</span>
                  )}
                </span>
              </span>
            ))}
          </h1>
          <p
            className="hero-line mt-8 md:mt-12 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 font-body"
            style={{ animationDelay: isVisible ? "0.8s" : undefined }}
          >
            Rally Point is the leading global branding agency for positioning, scaling, and reinventing tech and innovation brands that shape culture and define the future.
          </p>
          <div
            className="hero-line mt-10 md:mt-16"
            style={{ animationDelay: isVisible ? "1s" : undefined }}
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg">
              <Link href="/#method">Explore Our Methodology</Link>
            </Button>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-sm text-muted-foreground hero-line"
        style={{ animationDelay: isVisible ? "1.2s" : undefined }}
      >
        <span>Scroll</span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}
