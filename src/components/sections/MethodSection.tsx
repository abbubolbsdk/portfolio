
"use client";

import React from 'react';
import { CheckCircle } from 'lucide-react'; // Example icon

const methodSteps = [
  {
    id: 1,
    title: "Discovery & Insight",
    description: "We dive deep to understand your market, audience, and unique value proposition."
  },
  {
    id: 2,
    title: "Strategic Positioning",
    description: "Crafting a compelling brand narrative and strategic framework that resonates."
  },
  {
    id: 3,
    title: "Creative Expression",
    description: "Bringing your brand to life through distinctive visual identity and messaging."
  },
  {
    id: 4,
    title: "Activation & Amplification",
    description: "Launching your brand and engaging your audience across all relevant channels."
  }
];

export default function MethodSection() {
  return (
    <section id="method" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary-foreground">Our Proven Methodology</h2>
        <p className="text-secondary-foreground/80 mt-4 max-w-2xl mx-auto mb-12">
          We follow a structured yet flexible process to uncover your unique story and build a brand that inspires action.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodSteps.map((step) => (
            <div key={step.id} className="bg-card p-6 rounded-lg shadow-md text-left">
              <CheckCircle className="h-8 w-8 text-accent mb-3" />
              <h3 className="text-xl font-headline font-semibold text-primary mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
