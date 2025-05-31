"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'; // Assuming Card components are used like this
import { Briefcase, ShoppingCart, Layers } from 'lucide-react'; // Example icons

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const servicesData: Service[] = [
  {
    icon: Briefcase,
    title: "Custom Website Development",
    description: "Tailored websites built from scratch to perfectly match your brand and requirements, ensuring a unique online presence."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Robust online stores with secure payment gateways, intuitive user experience, and features to maximize your sales."
  },
  {
    icon: Layers,
    title: "Web Application Development",
    description: "Dynamic and interactive web apps designed to solve complex business challenges and streamline your operations."
  }
];

const ServiceCard: React.FC<{ service: Service; delay: number }> = ({ service, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const IconComponent = service.icon;

  return (
    <div
      ref={cardRef}
      className={`animate-fade-in-up bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${isVisible ? 'is-visible' : ''}`}
      style={{ animationDelay: isVisible ? `${delay}s` : undefined }}
    >
      <CardHeader className="items-center p-0 pb-4">
        <div className="bg-primary text-primary-foreground p-3 rounded-full mb-4">
          <IconComponent className="h-8 w-8" />
        </div>
        <CardTitle className="text-xl font-headline font-semibold text-primary text-center">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <CardDescription className="text-muted-foreground text-sm text-center">{service.description}</CardDescription>
      </CardContent>
    </div>
  );
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            My Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Offering a range of web development services to bring your digital vision to life. From custom websites to e-commerce solutions and web applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} service={service} delay={index * 0.2} />
          ))}
        </div>
         <p className="text-muted-foreground mt-12 text-center">More details coming soon!</p>
      </div>
    </section>
  );
}
