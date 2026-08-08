import ContactClient from '@/components/ContactClient';
import siteData from '@/data/siteData.json';

export const metadata = {
  title: 'Contact Us | Zeenrah Technologies - Hire Developers & Technical Estimates',
  description: 'Contact Zeenrah Technologies for software engineering estimation, Next.js / React projects, AI solution consulting, or dedicated developer squads.',
};

export default function ContactPage() {
  const faqs = siteData.faqs || [];

  return <ContactClient faqs={faqs} />;
}

