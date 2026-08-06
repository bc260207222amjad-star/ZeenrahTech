import JobOpeningsClient from '@/components/JobOpeningsClient';

export const metadata = {
  title: 'Open Engineering Roles & Careers | Zeenrah Technologies',
  description: 'Apply for senior Next.js, React Native, Python, Cloud DevOps, and UI/UX engineering roles at Zeenrah Technologies.',
};

export default function JobOpeningsPage() {
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
            CAREER OPENINGS
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.03em', color: '#ffffff', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            Open Engineering <span className="text-gradient-cyan">Roles</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '680px', margin: '0 auto', lineHeight: '1.65', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            Browse open positions for Next.js, React Native, Python, Cloud DevOps, and UI/UX engineering.
          </p>
        </div>
      </section>

      <JobOpeningsClient />
    </div>
  );
}
