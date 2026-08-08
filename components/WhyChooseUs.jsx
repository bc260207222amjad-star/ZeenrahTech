'use client';

import { Award, Zap, Cpu, ShieldCheck } from 'lucide-react';

function getWhyUsIcon(item = {}, index = 0) {
  const iconStr = String(item.icon || '');
  const title = String(item.title || '').toLowerCase();

  if (iconStr.includes('🏆') || title.includes('top') || title.includes('senior')) {
    return <Award size={28} color="var(--primary)" />;
  }
  if (iconStr.includes('⚡') || title.includes('agile') || title.includes('sprint')) {
    return <Zap size={28} color="#38BDF8" />;
  }
  if (iconStr.includes('⚙️') || title.includes('scalable') || title.includes('code')) {
    return <Cpu size={28} color="#818CF8" />;
  }
  if (iconStr.includes('🔒') || title.includes('security') || title.includes('compliance')) {
    return <ShieldCheck size={28} color="#34D399" />;
  }

  const icons = [
    <Award size={28} color="var(--primary)" />,
    <Zap size={28} color="#38BDF8" />,
    <Cpu size={28} color="#818CF8" />,
    <ShieldCheck size={28} color="#34D399" />
  ];
  return icons[index % icons.length];
}

export default function WhyChooseUs({ whyUs = [] }) {
  const differentiators = whyUs;

  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
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
            WHY WORK WITH US
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '900',
              color: 'var(--text-heading)',
              lineHeight: '1.3',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            The Zeenrah Technologies <span className="text-gradient-cyan">Engineering Advantage</span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-body)',
              lineHeight: '1.7',
              maxWidth: '720px',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            We combine Silicon Valley product engineering rigor with transparent Agile delivery, clean code architectures, and strict enterprise security standards.
          </p>
        </div>

        {/* 4 Differentiators Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {differentiators.map((item, index) => (
            <div
              key={item.id || index}
              className={`pentaloop-card stagger-${(index % 4) + 1}`}
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
                alignItems: 'flex-start'
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--primary-light)',
                  border: '1px solid var(--primary-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                {getWhyUsIcon(item, index)}
              </div>

              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '800',
                  color: 'var(--text-heading)',
                  marginBottom: '0.75rem',
                  lineHeight: '1.3',
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: 'var(--text-body)',
                  fontSize: '0.925rem',
                  lineHeight: '1.65',
                  margin: 0,
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

