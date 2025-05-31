
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const featuredWork = [
  {
    id: "work1",
    title: "Project Alpha Rebrand",
    category: "Branding & Identity",
    image: "https://placehold.co/600x400.png",
    hint: "modern office analytics",
    description: "A complete overhaul of Project Alpha's brand identity, positioning them as a market leader in AI-driven analytics.",
    link: "#" // Placeholder link
  },
  {
    id: "work2",
    title: "InnovateX Launch Campaign",
    category: "Go-to-Market Strategy",
    image: "https://placehold.co/600x400.png",
    hint: "startup team collaboration",
    description: "Spearheaded the go-to-market strategy and launch campaign for a disruptive tech startup in the collaboration space.",
    link: "#" // Placeholder link
  },
  {
    id: "work3",
    title: "Future Solutions Digital Platform",
    category: "UX & Product Strategy",
    image: "https://placehold.co/600x400.png",
    hint: "digital interface user",
    description: "Guided Future Solutions through a comprehensive digital platform redesign, enhancing user experience and engagement.",
    link: "#" // Placeholder link
  }
];

export default function WorkSection() {
  return (
    <section id="work" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Case Studies & Successes</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            See how we've partnered with visionary companies to create brands that resonate and drive growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWork.map((item) => (
            <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group">
              <CardHeader className="p-0 relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={item.hint}
                />
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-accent font-semibold mb-1">{item.category}</p>
                <CardTitle className="text-2xl font-headline mb-3 text-primary leading-tight">{item.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{item.description}</p>
                <Button asChild variant="outline" className="mt-auto">
                  <Link href={item.link}>View Case Study (Soon)</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/#contact">Start Your Project With Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
