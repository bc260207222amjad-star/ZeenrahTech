import { getSiteConfig } from '@/lib/getSiteConfig';
import AboutClient from '@/components/AboutClient';

export async function generateMetadata() {
  const config = getSiteConfig();
  return {
    title: 'About Us | Zeenrah Technologies - Software & AI Engineering',
    description: config.about.heroSubtitle,
  };
}

export default function AboutPage() {
  const config = getSiteConfig();
  const { about } = config;

  return <AboutClient about={about} />;
}

