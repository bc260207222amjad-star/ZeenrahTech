'use client';

import { Star } from 'lucide-react';

export default function TestimonialsSection({ testimonials = [] }) {
  const reviews = testimonials;

  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '0.45rem 1.3rem',
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary)',
              fontWeight: '800',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              borderRadius: '50px',
              marginBottom: '1rem',
              border: '1px solid var(--primary-border)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            CLIENT ENDORSEMENTS
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '900',
              color: 'var(--text-heading)',
              lineHeight: '1.2',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Trusted by CTOs & <span className="text-gradient-cyan">Product Leaders</span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-body)',
              lineHeight: '1.65',
              maxWidth: '720px',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            See what engineering executives say about our delivery speed, architecture quality, and full-stack execution.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {reviews.map((item, index) => (
            <div
              key={item.id || index}
              className={`pentaloop-card stagger-${(index % 3) + 1}`}
              style={{
                backgroundColor: 'var(--bg-card)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '2.25rem',
                border: '1px solid var(--border-card)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* 5 Stars SVG Vector Rating */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.2rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <p
                  style={{
                    color: 'var(--text-body)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    fontStyle: 'italic',
                    marginBottom: '2rem',
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}
                >
                  "{item.quote}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    color: 'var(--text-on-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '900',
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 12px var(--primary-glow)'
                  }}
                >
                  {item.avatar || 'ZT'}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>
                    {item.author}
                  </h4>
                  <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

