import Link from 'next/link';

export const metadata = {
  title: 'Life at Zeenrah Technologies | Global Hybrid Culture & Team Innovation',
  description: 'Experience life at Zeenrah Technologies: collaborative sprints, global hackathons, work-life balance, and cutting-edge software engineering.',
};

export default function LifeAtZeenrahPage() {
  const highlights = [
    { title: 'Global Virtual Coffee & Syncs', desc: 'Connect with senior engineers across 12 countries for casual banter, knowledge sharing, and live tech demos.' },
    { title: 'Annual Engineering Retreats', desc: 'We gather our team once a year in world-class destinations to brainstorm, celebrate achievements, and unwind.' },
    { title: 'Internal Hackathons', desc: 'Quarterly 48-hour internal hackathons where engineers build AI tools, experimental libraries, and open-source packages.' },
    { title: 'Zero Micromanagement', desc: 'We measure output and code quality, not hours logged. You have total autonomy to organize your workday.' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-base)' }}>
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
          <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', borderRadius: '50px', marginBottom: '1.2rem', border: '1px solid var(--primary-border)', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            LIFE AT ZEENRAH TECHNOLOGIES
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.03em', color: 'var(--text-heading)', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            Work-Life Balance & <span className="text-gradient-cyan">Engineering Autonomy</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto', lineHeight: '1.65', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            See what makes Zeenrah Technologies a thriving environment for software engineers and product leaders.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {highlights.map((h, idx) => (
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
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '0.75rem' }}>{h.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.65', margin: 0 }}>{h.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/careers/job-openings" className="btn btn-primary">
              EXPLORE OPEN ROLES →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
