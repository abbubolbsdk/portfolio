import HeroSection from '@/components/sections/HeroSection';
import ClientMarqueeSection from '@/components/sections/ClientMarqueeSection';
import ServicesSection from '@/components/sections/ServicesSection'; // Imported
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
      <ServicesSection />
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
