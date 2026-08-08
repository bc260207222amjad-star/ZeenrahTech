import TechHeaderHero from '@/components/TechHeaderHero';
import TechStackSection from '@/components/TechStackSection';
import TechEstimationCTA from '@/components/TechEstimationCTA';
import { getSiteConfig } from '@/lib/getSiteConfig';

export const metadata = {
  title: 'Technology Stack & Frameworks | Zeenrah Technologies',
  description: 'Explore the tech matrix at Zeenrah Technologies: Next.js 15, React 19, TypeScript, Python FastAPI, Django, Java Spring Boot, Swift, Kotlin, AWS, and AI LLM models.',
};

export default function TechnologiesPage() {
  const config = getSiteConfig();

  return (
    <div style={{ backgroundColor: 'var(--bg-base)' }}>
      {/* Animated Page Hero Header */}
      <TechHeaderHero />

      {/* Interactive Tech Stack Matrix */}
      <TechStackSection technologies={config.technologies} />

      {/* Interactive Tech Estimation CTA with Transitions */}
      <TechEstimationCTA />
    </div>
  );
}



