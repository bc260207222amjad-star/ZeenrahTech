'use client';

import Link from 'next/link';

export default function ServicesSection({ services = [] }) {

  return (
    <section className="stagger-2" style={{ padding: '6rem 0', backgroundColor: '#0b0f19', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '0.45rem 1.3rem',
              backgroundColor: 'rgba(99, 102, 241, 0.12)',
              color: '#06b6d4',
              fontWeight: '800',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              borderRadius: '50px',
              marginBottom: '1rem',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            OUR CORE CAPABILITIES
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '900',
              color: '#ffffff',
              lineHeight: '1.2',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Enterprise Software Engineering & <span className="text-gradient-cyan">AI Solutions</span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#cbd5e1',
              lineHeight: '1.65',
              maxWidth: '720px',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            From Next.js web applications to cross-platform mobile apps, cloud DevOps infrastructure, and custom AI integrations — we build resilient software that scales.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {services.map((item, index) => (
            <div
              key={item.id || index}
              className={`pentaloop-card stagger-${(index % 4) + 1}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                backgroundColor: 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '2.25rem',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.35)'
              }}
            >
              <div>
                {/* 3D AI Generated Icon */}
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    marginBottom: '1.5rem',
                    boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  <img
                    src={item.iconImg || '/images/icon_web_dev.jpg'}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: '800',
                    color: '#ffffff',
                    marginBottom: '0.85rem',
                    lineHeight: '1.3',
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: '#cbd5e1',
                    fontSize: '0.975rem',
                    lineHeight: '1.65',
                    marginBottom: '1.5rem',
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}
                >
                  {item.desc}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {(item.tags || []).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        padding: '0.35rem 0.85rem',
                        backgroundColor: 'rgba(99, 102, 241, 0.15)',
                        color: '#06b6d4',
                        fontWeight: '700',
                        fontSize: '0.78rem',
                        borderRadius: '50px',
                        border: '1px solid rgba(99, 102, 241, 0.3)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#6366f1',
                    fontWeight: '800',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    letterSpacing: '0.04em'
                  }}
                >
                  EXPLORE SERVICE →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
