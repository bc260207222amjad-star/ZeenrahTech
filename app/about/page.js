import Link from 'next/link';
import { getSiteConfig } from '@/lib/getSiteConfig';

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
            }}
          >
            ABOUT ZEENRAH TECHNOLOGIES
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: '900',
              marginBottom: '1rem',
              letterSpacing: '-0.03em',
              color: '#ffffff',
            }}
          >
            {about.heroTitle.split(' ').slice(0, -2).join(' ')}{' '}
            <span className="text-gradient-cyan">{about.heroTitle.split(' ').slice(-2).join(' ')}</span>
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#94a3b8',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: '1.65',
            }}
          >
            {about.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '6rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ffffff', marginBottom: '1rem' }}>
              Driven by Innovation, <span className="text-gradient-cyan">Defined by Code</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto', lineHeight: '1.65' }}>
              Our mission is to empower ambitious companies with scalable technology architectures that drive measurable business outcomes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            <div
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(16px)',
                padding: '2.5rem',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderBottom: '4px solid #6366f1'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.85rem' }}>
                {about.missionTitle}
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '0.975rem' }}>
                {about.missionText}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(16px)',
                padding: '2.5rem',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderBottom: '4px solid #06b6d4'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👁️</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.85rem' }}>
                {about.visionTitle}
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '0.975rem' }}>
                {about.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Journey Milestones */}
      <section style={{ padding: '6rem 0', backgroundColor: '#0f172a' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', backgroundColor: 'rgba(99, 102, 241, 0.12)', color: '#06b6d4', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', borderRadius: '50px', marginBottom: '0.8rem', border: '1px solid rgba(99, 102, 241, 0.3)' }}>OUR JOURNEY</div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '900', color: '#ffffff' }}>Company Growth Milestones</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {about.milestones.map((m, idx) => (
              <div key={idx} style={{ backgroundColor: 'rgba(11, 15, 25, 0.8)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)', borderLeft: '4px solid #6366f1' }}>
                <span style={{ fontSize: '1.6rem', fontWeight: '900', color: '#06b6d4' }}>{m.year}</span>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff', margin: '0.5rem 0' }}>{m.title}</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/contact" className="btn btn-primary">
              START YOUR PROJECT WITH US →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
