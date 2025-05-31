"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Saif Khan delivered an exceptional website that perfectly captured our brand and significantly boosted our online engagement. His technical skills and creative vision are top-notch!",
    author: "Aisha R.",
    company: "Owner, The Cozy Corner Cafe"
  },
  {
    id: 2,
    quote: "Working with Saif was a fantastic experience. He is professional, responsive, and truly understood our complex requirements for our e-commerce platform. Highly recommended!",
    author: "Ben C.",
    company: "CTO, Innovatech Solutions"
  },
  {
    id: 3,
    quote: "Saif transformed our outdated website into a modern, fast, and user-friendly platform. We've seen a noticeable increase in conversions since the launch. Thank you, Saif!",
    author: "Priya S.",
    company: "Marketing Director, Global Exports Ltd."
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">What My Clients Say</h2>
          <p className="text-muted-foreground mt-2">Real stories from businesses I've helped succeed online.</p>
        </div>
        
        <div className="relative max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12 text-center">
              <Quote className="h-10 w-10 text-accent mx-auto mb-6" />
              <p className="text-lg md:text-xl font-body italic text-foreground mb-6 leading-relaxed">
                "{currentTestimonial.quote}"
              </p>
              <p className="font-semibold text-primary font-headline">{currentTestimonial.author}</p>
              <p className="text-sm text-muted-foreground">{currentTestimonial.company}</p>
            </CardContent>
          </Card>

          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 md:-translate-x-full rounded-full h-12 w-12" 
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 md:translate-x-full rounded-full h-12 w-12" 
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        </div>
         <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-primary' : 'bg-muted hover:bg-primary/70'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
      </div>
    </section>
  );
}
