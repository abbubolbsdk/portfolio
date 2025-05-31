"use client";

import React from 'react';

export default function SpinningDemoSection() {
  return (
    <section id="spinning-demo" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary-foreground mb-12">
          Interactive 3D Element
        </h2>
        <div className="flex justify-center items-center min-h-[300px]"> {/* Ensure enough height for perspective */}
          <div className="cube-container">
            <div className="cube">
              <div className="face front">Frontend</div>
              <div className="face back">Backend</div>
              <div className="face right">Design</div>
              <div className="face left">Mobile</div>
              <div className="face top">API</div>
              <div className="face bottom">Cloud</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
