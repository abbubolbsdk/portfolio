
"use client";

import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">About Rally Point</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Rally Point is a strategic branding agency dedicated to crafting "Ideas Worth Rallying Around®". We partner with innovative tech companies and visionary leaders to build, position, and reinvent brands that shape culture and define the future. Our approach combines deep market insights, creative storytelling, and strategic thinking to deliver impactful results.
        </p>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          More information about our team, values, and history will be available here soon.
        </p>
      </div>
    </section>
  );
}
