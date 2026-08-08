import Link from 'next/link';

export const metadata = {
  title: 'Careers at Zeenrah Technologies | Join Our Global Engineering Squad',
  description: 'Join Zeenrah Technologies. We offer remote-first culture, top market compensation, dedicated learning budgets, and impactful global projects for senior developers.',
};

export default function CareersPage() {
  const perks = [
    { title: 'Remote-First Culture', desc: 'Work from anywhere in the world with flexible hours and modern Async workflows.' },
    { title: 'Top Market Compensation', desc: 'Competitive salaries, performance bonuses, and annual technology stipends.' },
    { title: 'Continuous Growth', desc: 'Dedicated learning budgets, conference passes, and access to senior mentors.' },
    { title: 'Impactful Projects', desc: 'Build mission-critical software for global FinTech, HealthTech, and AI leaders.' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-base)' }}>
      {/* Careers Hero Header */}
      <section
        style={{
          backgroundColor: 'var(--bg-hero)',
          backgroundImage: 'var(--gradient-hero-glow)',
          color: 'var(--text-heading)',
          padding: '5.5rem 0',
          textAlign: 'center',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '0.4rem 1.2rem',
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary)',
              fontWeight: '800',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              borderRadius: '50px',
              marginBottom: '1.2rem',
              border: '1px solid var(--primary-border)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            CAREERS AT ZEENRAH TECHNOLOGIES
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: '900',
              marginBottom: '1rem',
              letterSpacing: '-0.03em',
              color: 'var(--text-heading)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Build the Future of <span className="text-gradient-cyan">Software With Us</span>
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: '1.65',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Join a world-class team of Next.js, React, Mobile, Cloud, and AI engineers working on high-impact global applications.
          </p>
        </div>
      </section>

      {/* Perks Grid */}
      <section style={{ padding: '6rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '900', color: 'var(--text-heading)' }}>Why Engineers Love Zeenrah Technologies</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {perks.map((p, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  backdropFilter: 'blur(16px)',
                  padding: '2.25rem',
                  borderRadius: '20px',
                  border: '1px solid var(--border-subtle)',
                  borderBottom: '4px solid var(--primary)'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.65', margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link
              href="/careers/job-openings"
              className="btn btn-primary"
            >
              EXPLORE OPEN POSITIONS →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
