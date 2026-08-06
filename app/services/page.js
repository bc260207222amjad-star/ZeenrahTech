import Link from 'next/link';
import ServicesSection from '@/components/ServicesSection';

export const metadata = {
  title: 'Software Development Services | Zeenrah Technologies',
  description: 'Enterprise software development services including Next.js 15 web applications, React Native mobile apps, AI & LLM engineering, and AWS cloud DevOps.',
};

export default function ServicesPage() {
  const steps = [
    { num: '01', title: 'Discovery & Architecture Design', desc: 'We dissect your product goals, define API schemas, map database structures, and craft interactive Figma prototypes.' },
    { num: '02', title: 'Sprint Execution & Clean Code', desc: 'Our senior developers write modular Next.js, React, and backend code in bi-weekly sprints with 100% test coverage.' },
    { num: '03', title: 'Automated QA & CI/CD Deployment', desc: 'Continuous integration pipelines run automated unit/E2E tests and deploy to zero-downtime AWS/GCP staging environments.' },
    { num: '04', title: '24/7 Monitoring & Continuous Scale', desc: 'We monitor application performance, optimize latency, and scale server infrastructure as your user base grows.' }
  ];

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
            OUR ENGINEERING CAPABILITIES
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
            Software Development <span className="text-gradient-cyan">Services</span>
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
            From Next.js web applications to mobile apps, DevOps pipelines, and AI systems — we build enterprise-grade software.
          </p>
        </div>
      </section>

      {/* Main Services Capabilities Grid */}
      <ServicesSection />

      {/* Engineering Process Steps */}
      <section style={{ padding: '6rem 0', backgroundColor: '#0f172a', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', backgroundColor: 'rgba(99, 102, 241, 0.12)', color: '#06b6d4', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', borderRadius: '50px', marginBottom: '0.8rem', border: '1px solid rgba(99, 102, 241, 0.3)' }}>OUR PROCESS</div>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: '#ffffff',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              Our Proven <span className="text-gradient-cyan">Engineering Methodology</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(11, 15, 25, 0.8)',
                  padding: '2.25rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderBottom: '4px solid #6366f1'
                }}
              >
                <div
                  style={{
                    fontSize: '2.2rem',
                    fontWeight: '900',
                    color: '#06b6d4',
                    marginBottom: '1rem',
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.75rem' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: '1.65', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              DISCUSS YOUR PROJECT SCOPE →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
