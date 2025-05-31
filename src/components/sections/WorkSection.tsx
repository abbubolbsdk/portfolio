"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Eye } from 'lucide-react';

const featuredWork = [
  {
    id: "work1",
    title: "E-commerce Platform for Artisans",
    category: "Full-Stack Development",
    image: "https://placehold.co/600x400.png",
    hint: "handmade crafts online",
    description: "Developed a responsive e-commerce site with custom features, payment gateway integration, and an admin dashboard.",
    link: "#" // Placeholder link
  },
  {
    id: "work2",
    title: "SaaS Landing Page & UI Kit",
    category: "Frontend & UI/UX Design",
    image: "https://placehold.co/600x400.png",
    hint: "modern software interface",
    description: "Designed and built a high-converting landing page and a reusable component library for a software startup.",
    link: "#" // Placeholder link
  },
  {
    id: "work3",
    title: "Portfolio Website for Photographer",
    category: "Web Design & Development",
    image: "https://placehold.co/600x400.png",
    hint: "stunning photography gallery",
    description: "Created a visually stunning and fast-loading portfolio site to showcase photographic work, with an easy-to-use CMS.",
    link: "#" // Placeholder link
  }
];

export default function WorkSection() {
  return (
    <section id="work" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">My Portfolio</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A glimpse into some of the web solutions I've crafted for clients.
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
                  <Link href={item.link}>
                    <Eye className="mr-2 h-4 w-4" /> View Project (Soon)
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/#contact">Discuss Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
