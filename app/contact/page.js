import ContactSection from '@/components/ContactSection';
import { getSiteConfig } from '@/lib/getSiteConfig';

export const metadata = {
  title: 'Contact Us | Zeenrah Technologies - Hire Developers & Technical Estimates',
  description: 'Contact Zeenrah Technologies for software engineering estimation, Next.js / React projects, AI solution consulting, or dedicated developer squads.',
};

export default function ContactPage() {
  const config = getSiteConfig();
  const faqs = config.faqs || [];

  return (
    <div style={{ backgroundColor: '#0b0f19' }}>
      {/* Page Hero Header */}
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
          <div
            style={{
              display: 'inline-block',
              padding: '0.4rem 1.2rem',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              color: '#06b6d4',
              fontWeight: '800',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              borderRadius: '50px',
              marginBottom: '1.2rem',
              border: '1px solid rgba(99, 102, 241, 0.3)',
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
              color: '#ffffff',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Contact Our <span className="text-gradient-cyan">Engineering Team</span>
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#94a3b8',
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
      <ContactSection siteMeta={config.siteMeta} />

      {/* Interactive FAQ Accordion Section */}
      <section style={{ padding: '5.5rem 0', backgroundColor: '#0f172a', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', backgroundColor: 'rgba(99, 102, 241, 0.12)', color: '#06b6d4', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', borderRadius: '50px', marginBottom: '0.8rem', border: '1px solid rgba(99, 102, 241, 0.3)', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>FAQ</div>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: '#ffffff',
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
                    backgroundColor: 'rgba(11, 15, 25, 0.8)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderLeft: '4px solid #6366f1',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                >
                  <summary
                    style={{
                      padding: '1.5rem 2rem',
                      fontSize: '1.1rem',
                      fontWeight: '800',
                      color: '#ffffff',
                      outline: 'none',
                      userSelect: 'none',
                      listStyle: 'none'
                    }}
                  >
                    <span style={{ color: '#06b6d4', marginRight: '0.75rem' }}>?</span>
                    {faq.q}
                  </summary>
                  <div style={{ padding: '0 2rem 1.5rem', color: '#94a3b8', lineHeight: '1.7', fontSize: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
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
