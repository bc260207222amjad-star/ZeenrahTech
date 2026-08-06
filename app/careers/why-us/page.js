import Link from 'next/link';

export const metadata = {
  title: 'Why Join Zeenrah Technologies | Career Perks & Engineering Culture',
  description: 'Discover why top 1% senior engineers choose Zeenrah Technologies: transparent sprints, competitive compensation, remote flexibility, and zero technical debt.',
};

export default function WhyUsPage() {
  const pillars = [
    { title: 'Top 1% Engineering Squad', desc: 'Work alongside elite Next.js, React 19, Python, and AI architects who prioritize quality and craftsmanship.', icon: '🏆' },
    { title: 'Remote-First Flexibility', desc: 'Enjoy true asynchronous workflows with 100% remote flexibility and flexible core hours.', icon: '🌍' },
    { title: 'Competitive Global Pay', desc: 'Top tier compensation, annual profit share bonuses, hardware stipends, and premium health coverage.', icon: '💎' },
    { title: 'Continuous Career Growth', desc: 'Dedicated annual learning budgets ($3,000/yr per engineer) for certifications, conferences, and courses.', icon: '🚀' }
  ];

  return (
    <div style={{ backgroundColor: '#0b0f19' }}>
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
          <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', backgroundColor: 'rgba(99, 102, 241, 0.15)', color: '#06b6d4', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', borderRadius: '50px', marginBottom: '1.2rem', border: '1px solid rgba(99, 102, 241, 0.3)', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            WHY ZEENRAH TECHNOLOGIES
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.03em', color: '#ffffff', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            The Developer-First <span className="text-gradient-cyan">Engineering Culture</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '680px', margin: '0 auto', lineHeight: '1.65', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            We build software the right way — with zero technical debt, modern tooling, and absolute respect for developer autonomy.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {pillars.map((p, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.75)',
                  backdropFilter: 'blur(16px)',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderBottom: '4px solid #6366f1'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{p.icon}</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.65', margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/careers/job-openings" className="btn btn-primary">
              VIEW OPEN POSITIONS →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
