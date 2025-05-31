"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Briefcase, Smile, Zap, Award } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
}

const statsData: StatItem[] = [
  { icon: Briefcase, value: 150, label: "Projects Completed", suffix: "+" },
  { icon: Smile, value: 98, label: "Client Satisfaction", suffix: "%" },
  { icon: Award, value: 10, label: "Years of Experience", suffix: "+" },
  { icon: Zap, value: 50, label: "Brands Transformed", suffix: "+" },
];

const AnimatedStat = ({ icon: Icon, value, label, suffix = "" }: StatItem) => {
  const [count, setCount] = useState(0);
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 1500; // milliseconds
    const incrementTime = (duration / end);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <div ref={targetRef} className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <Icon className="h-12 w-12 text-accent mb-4" />
      <p className="text-4xl md:text-5xl font-bold text-primary font-headline">
        {count}{suffix}
      </p>
      <p className="text-sm text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

export default function StatsSection() {
  return (
    <section id="stats" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary-foreground">Our Impact by the Numbers</h2>
          <p className="text-secondary-foreground/80 mt-2">Delivering results that speak for themselves.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
