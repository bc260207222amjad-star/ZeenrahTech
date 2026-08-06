import TechStackSection from '@/components/TechStackSection';
import Link from 'next/link';

export const metadata = {
  title: 'Technology Stack & Frameworks | Zeenrah Technologies',
  description: 'Explore the tech matrix at Zeenrah Technologies: Next.js 15, React 19, TypeScript, Python FastAPI, Django, Java Spring Boot, Swift, Kotlin, AWS, and AI LLM models.',
};

export default function TechnologiesPage() {
  return (
    <div style={{ backgroundColor: '#0b0f19' }}>
      {/* Page Hero Header */}
      <section
        style={{
          backgroundColor: '#0f172a',
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.25) 0%, transparent 60%)',
          color: '#ffffff',
          padding: '5.5rem 0',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '0.4rem 1.2rem',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              color: '#06b6d4',
              fontWeight: '800',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              borderRadius: '50px',
              marginBottom: '1.2rem',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            OUR TECHNOLOGY MATRIX
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: '900',
              marginBottom: '1rem',
              letterSpacing: '-0.03em',
              color: '#ffffff',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Enterprise Tech Stack & <span className="text-gradient-cyan">Frameworks</span>
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#94a3b8',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: '1.65',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            We leverage Next.js 15, React 19, Python FastAPI, Django, Java Spring Boot, Swift, Kotlin, AWS, and AI LLM models to build software products.
          </p>
        </div>
      </section>

      {/* Interactive Tech Stack Matrix */}
      <TechStackSection />

      {/* Tech Standards */}
      <section style={{ padding: '5.5rem 0', backgroundColor: '#0f172a' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '900', color: '#ffffff', marginBottom: '1rem' }}>
            Looking for a Specific Technology Stack?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Our engineering leads adapt quickly to custom tech ecosystems and enterprise legacy codebases.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary"
          >
            REQUEST TECH ESTIMATION →
          </Link>
        </div>
      </section>
    </div>
  );
}
