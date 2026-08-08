import ContactSection from '@/components/ContactSection';
import siteData from '@/data/siteData.json';

export const metadata = {
  title: 'Contact Us | Zeenrah Technologies - Hire Developers & Technical Estimates',
  description: 'Contact Zeenrah Technologies for software engineering estimation, Next.js / React projects, AI solution consulting, or dedicated developer squads.',
};

export default function ContactPage() {
  const faqs = siteData.faqs || [];

  return (
    <div style={{ backgroundColor: 'var(--bg-base)' }}>
      {/* Page Hero Header */}
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
            GET IN TOUCH
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
            Contact Our <span className="text-gradient-cyan">Engineering Team</span>
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
            Have a project in mind, need software estimation, or looking for dedicated senior developer squads? We are ready to build.
          </p>
        </div>
      </section>

      {/* Main Contact Form & Details Component */}
      <ContactSection />

      {/* Interactive FAQ Accordion Section */}
      <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--bg-hero)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', borderRadius: '50px', marginBottom: '0.8rem', border: '1px solid var(--primary-border)', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>FAQ</div>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: 'var(--text-heading)',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              Got Questions? <span className="text-gradient-cyan">We Have Answers</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {faqs.map((faq) => {
              return (
                <details
                  key={faq.id}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '16px',
                    border: '1px solid var(--border-subtle)',
                    borderLeft: '4px solid var(--primary)',
                    boxShadow: 'var(--shadow-card)',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                >
                  <summary
                    style={{
                      padding: '1.5rem 2rem',
                      fontSize: '1.1rem',
                      fontWeight: '800',
                      color: 'var(--text-heading)',
                      outline: 'none',
                      userSelect: 'none',
                      listStyle: 'none'
                    }}
                  >
                    <span style={{ color: 'var(--primary)', marginRight: '0.75rem' }}>?</span>
                    {faq.q}
                  </summary>
                  <div style={{ padding: '0 2rem 1.5rem', color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                    {faq.a}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
