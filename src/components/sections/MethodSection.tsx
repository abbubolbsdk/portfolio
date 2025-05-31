"use client";

import React from 'react';
import { Lightbulb, PencilRuler, Code, Rocket } from 'lucide-react'; // Example icons

const methodSteps = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Discovery & Planning",
    description: "We start by understanding your vision, goals, target audience, and project requirements to create a solid plan."
  },
  {
    id: 2,
    icon: PencilRuler,
    title: "Design & Prototyping",
    description: "Crafting intuitive UI/UX designs and interactive prototypes to visualize the user journey and refine concepts."
  },
  {
    id: 3,
    icon: Code,
    title: "Development & Coding",
    description: "Building your website with clean, efficient code using modern technologies for optimal performance and scalability."
  },
  {
    id: 4,
    icon: Rocket,
    title: "Testing & Launch",
    description: "Rigorous testing across devices and browsers, followed by a smooth deployment and ongoing support."
  }
];

export default function MethodSection() {
  return (
    <section id="method" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary-foreground">My Development Process</h2>
        <p className="text-secondary-foreground/80 mt-4 max-w-2xl mx-auto mb-12">
          A transparent and collaborative approach to bring your web project to life, from concept to launch.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodSteps.map((step) => (
            <div key={step.id} className="bg-card p-6 rounded-lg shadow-md text-left hover:shadow-xl transition-shadow duration-300">
              <step.icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-headline font-semibold text-primary mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
