import HeroSection from '@/components/sections/HeroSection';
import ClientMarqueeSection from '@/components/sections/ClientMarqueeSection';
import InteractiveTabsSection from '@/components/sections/InteractiveTabsSection'; // Blog content
import BrandToolSection from '@/components/sections/BrandToolSection'; // Now "Web Project Idea Starter"
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import StatsSection from '@/components/sections/StatsSection';
import ContactSection from '@/components/sections/ContactSection';
import MethodSection from '@/components/sections/MethodSection'; // Now "My Development Process"
import AboutSection from '@/components/sections/AboutSection'; // Now "About Me"
import WorkSection from '@/components/sections/WorkSection'; // Now "My Portfolio"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientMarqueeSection />
      <ServicesSection /> {/* Placeholder section for "Services" */}
      <MethodSection /> 
      <WorkSection /> 
      <InteractiveTabsSection /> 
      <BrandToolSection />
      <StatsSection />
      <TestimonialsSection />
      <AboutSection /> 
      <ContactSection />
    </>
  );
}

// Placeholder section for Services
const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24 bg-background text-center">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">My Services</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
        Offering a range of web development services to bring your digital vision to life. From custom websites to e-commerce solutions and web applications.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-headline font-semibold text-primary mb-2">Custom Website Development</h3>
          <p className="text-muted-foreground text-sm">Tailored websites built from scratch to perfectly match your brand and requirements.</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-headline font-semibold text-primary mb-2">E-commerce Solutions</h3>
          <p className="text-muted-foreground text-sm">Robust online stores with secure payment gateways and intuitive user experience.</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-headline font-semibold text-primary mb-2">Web Application Development</h3>
          <p className="text-muted-foreground text-sm">Dynamic and interactive web apps to solve complex business challenges.</p>
        </div>
      </div>
       <p className="text-muted-foreground mt-8">More details coming soon!</p>
    </div>
  </section>
);

// Removed other placeholder stubs like Engagements, Speaking, Book, Shop, FAQ, Press as they are less relevant now.
// Blog and Testimonials are covered by InteractiveTabsSection and TestimonialsSection respectively.
