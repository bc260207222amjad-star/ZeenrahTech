export default function WhyChooseUs({ whyUs = [] }) {
  const differentiators = whyUs;

  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#0b0f19', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
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
            WHY WORK WITH US
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '900',
              color: '#ffffff',
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
              color: '#cbd5e1',
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
                backgroundColor: 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '2.25rem',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.35)',
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
                  backgroundColor: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.75rem',
                  marginBottom: '1.5rem',
                  color: '#ffffff'
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                  lineHeight: '1.3',
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: '#cbd5e1',
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
