import { getSiteConfig } from '@/lib/getSiteConfig';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TechStackSection from '@/components/TechStackSection';
import PortfolioSection from '@/components/PortfolioSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

// Server Component — reads TXT file and passes data to all components as props
export default function HomePage() {
  const config = getSiteConfig();

  return (
    <>
      <HeroSection hero={config.hero} />
      <ServicesSection services={config.services} />
      <TechStackSection technologies={config.technologies} />
      <PortfolioSection portfolio={config.portfolio} />
      <WhyChooseUs whyUs={config.whyUs} />
      <TestimonialsSection testimonials={config.testimonials} />
      <ContactSection faqs={config.faqs} siteMeta={config.siteMeta} />
    </>
  );
}