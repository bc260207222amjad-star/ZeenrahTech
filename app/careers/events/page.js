import Link from 'next/link';

export const metadata = {
  title: 'Tech Events & Meetups | Zeenrah Technologies',
  description: 'Join Zeenrah Technologies tech events, Next.js 15 developer workshops, AI meetups, and open-source webinars.',
};

export default function EventsPage() {
  const eventsList = [
    { date: 'SEP 18, 2026', title: 'Next.js 15 & React 19 Concurrent Architecture Workshop', type: 'Virtual Webinar' },
    { date: 'OCT 05, 2026', title: 'Enterprise AI & RAG Pipeline Masterclass with PyTorch', type: 'Live Stream & QA' },
    { date: 'NOV 12, 2026', title: 'Global Software Engineering Leadership Summit', type: 'Hybrid Event' }
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
            EVENTS & CULTURE
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.03em', color: '#ffffff', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            Tech Meetups & <span className="text-gradient-cyan">Webinars</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '680px', margin: '0 auto', lineHeight: '1.65', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            We share knowledge, sponsor tech conferences, and run workshops on Next.js, Cloud DevOps, and AI.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {eventsList.map((ev, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.75)',
                  backdropFilter: 'blur(16px)',
                  padding: '2rem 2.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderLeft: '4px solid #06b6d4',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#06b6d4' }}>{ev.date} • {ev.type}</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', margin: '0.4rem 0 0' }}>{ev.title}</h3>
                </div>
                <Link href="/contact" className="btn btn-outline">
                  REGISTER NOW →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
