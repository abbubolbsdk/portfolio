import HeroSection from '@/components/sections/HeroSection';
import ClientMarqueeSection from '@/components/sections/ClientMarqueeSection';
import InteractiveTabsSection from '@/components/sections/InteractiveTabsSection';
import BrandToolSection from '@/components/sections/BrandToolSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import StatsSection from '@/components/sections/StatsSection';
import ContactSection from '@/components/sections/ContactSection';
import MethodSection from '@/components/sections/MethodSection';
import AboutSection from '@/components/sections/AboutSection';
import WorkSection from '@/components/sections/WorkSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientMarqueeSection />
      <MethodSection /> {/* Placeholder section for "Explore our methodology" */}
      <WorkSection /> {/* Placeholder for "Work" */}
      <InteractiveTabsSection /> {/* Covers Blog/Press/Insights which are part of "Learn" */}
      <BrandToolSection />
      <StatsSection />
      <TestimonialsSection />
      <AboutSection /> {/* Placeholder for "About" */}
      {/* Placeholder sections for other nav items if needed */}
      {/* <ServicesSection /> */}
      {/* <EngagementsSection /> */}
      {/* <SpeakingSection /> */}
      {/* <BookSection /> */}
      {/* <ShopSection /> */}
      {/* <FAQSection /> */}
      <ContactSection />
    </>
  );
}

// Placeholder sections for navigation items that don't have dedicated feature components
// Removed duplicate AboutSection definition here

// Add stubs for other sections to make nav links work
const ServicesSection = () => <section id="services" className="py-12 text-center"><h2 className="text-2xl font-bold">Services (Coming Soon)</h2></section>;
const EngagementsSection = () => <section id="engagements" className="py-12 text-center"><h2 className="text-2xl font-bold">Engagements (Coming Soon)</h2></section>;
const SpeakingSection = () => <section id="speaking" className="py-12 text-center"><h2 className="text-2xl font-bold">Speaking (Coming Soon)</h2></section>;
const BookSection = () => <section id="book" className="py-12 text-center"><h2 className="text-2xl font-bold">Our Book (Coming Soon)</h2></section>;
const ShopSection = () => <section id="shop" className="py-12 text-center"><h2 className="text-2xl font-bold">Shop (Coming Soon)</h2></section>;
const FAQSection = () => <section id="faq" className="py-12 text-center"><h2 className="text-2xl font-bold">FAQs (Coming Soon)</h2></section>;
const PressSection = () => <section id="press" className="py-12 text-center"><h2 className="text-2xl font-bold">Press (Content in Tabs)</h2></section>;

