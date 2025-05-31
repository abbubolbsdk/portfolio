"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Rally Point transformed our brand and helped us connect with our audience on a whole new level. Their insights were invaluable.",
    author: "Jane Doe",
    company: "CEO, TechForward Inc."
  },
  {
    id: 2,
    quote: "The team at Rally Point is exceptional. They truly understand how to build Ideas Worth Rallying Around®.",
    author: "John Smith",
    company: "Founder, Innovate Solutions"
  },
  {
    id: 3,
    quote: "Working with Rally Point was a game-changer for our market positioning. Highly recommend!",
    author: "Alice Brown",
    company: "CMO, FutureGadgets Co."
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
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">What Our Clients Say</h2>
          <p className="text-muted-foreground mt-2">Real stories from leaders we've helped rally.</p>
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
