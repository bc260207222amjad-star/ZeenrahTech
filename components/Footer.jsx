import Link from 'next/link';

export default function Footer({ siteMeta = {}, socialLinks = {} }) {
  const meta = siteMeta;
  const socials = socialLinks;

  const socialPlatforms = [
    { key: 'twitter', name: 'Twitter', icon: '🐦' },
    { key: 'linkedin', name: 'LinkedIn', icon: '💼' },
    { key: 'github', name: 'GitHub', icon: '🐙' },
    { key: 'facebook', name: 'Facebook', icon: '📘' },
    { key: 'instagram', name: 'Instagram', icon: '📷' },
    { key: 'youtube', name: 'YouTube', icon: '▶️' }
  ];

  const activeSocials = socialPlatforms.filter(p => Boolean(socials[p.key]));

  return (
    <footer className="footer" style={{ backgroundColor: '#070a12', color: '#ffffff', padding: '4.5rem 0 2rem', marginTop: '0', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(3, 1fr)', gap: '3rem', marginBottom: '3.5rem' }}>
          <div>
            <Link href="/" style={{ textDecoration: 'none', fontSize: '1.5rem', fontWeight: '900', color: '#ffffff', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <img src="/images/aam_clean_logo.jpg" alt="Zeenrah Technologies Logo" style={{ width: '36px', height: '36px', borderRadius: '8px', objectFit: 'cover' }} />
              <div>
                <span>ZEENRAH</span>
                <span className="text-gradient-cyan" style={{ marginLeft: '0.35rem' }}>TECH</span>
              </div>
            </Link>
            
            {meta.footerTagline && (
              <p style={{ color: '#94a3b8', lineHeight: '1.65', fontSize: '0.95rem', marginBottom: '1.5rem', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                {meta.footerTagline}
              </p>
            )}

            {/* Dynamic Social Media Links */}
            {activeSocials.length > 0 && (
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {activeSocials.map((item) => (
                  <a
                    key={item.key}
                    href={socials[item.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.45rem 0.85rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      fontSize: '0.825rem',
                      color: '#cbd5e1',
                      textDecoration: 'none',
                      fontWeight: '700',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'all 0.2s ease',
                      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', marginBottom: '1.25rem', borderBottom: '2px solid #6366f1', display: 'inline-block', paddingBottom: '0.4rem', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>HOME</Link></li>
              <li><Link href="/about" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>ABOUT US</Link></li>
              <li><Link href="/services" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>SERVICES</Link></li>
              <li><Link href="/technologies" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>TECHNOLOGIES</Link></li>
              <li><Link href="/portfolio" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>PORTFOLIO</Link></li>
              <li><Link href="/careers" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>CAREERS</Link></li>
              <li><Link href="/contact" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>CONTACT US</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', marginBottom: '1.25rem', borderBottom: '2px solid #06b6d4', display: 'inline-block', paddingBottom: '0.4rem', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
              Capabilities
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link href="/services" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Web Application Development</Link></li>
              <li><Link href="/services" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Mobile App Engineering</Link></li>
              <li><Link href="/services" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>AI & Machine Learning</Link></li>
              <li><Link href="/services" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Cloud & DevOps Solutions</Link></li>
              <li><Link href="/services" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Dedicated Developer Squads</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', marginBottom: '1.25rem', borderBottom: '2px solid #8b5cf6', display: 'inline-block', paddingBottom: '0.4rem', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
              Contact Details
            </h4>
            
            {meta.address && (
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                📍 <strong>HQ:</strong> {meta.address}
              </p>
            )}
            
            {meta.email && (
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                📧 <strong>Email:</strong> {meta.email}
              </p>
            )}

            {meta.phone && (
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.2rem' }}>
                📞 <strong>Phone:</strong> {meta.phone}
              </p>
            )}
            
            <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: '700' }}>● Systems Operational</span>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.2rem' }}>24/7 Global Engineering SLA</p>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: '#64748b' }}>
          <div>
            &copy; 2026 Zeenrah Technologies. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/contact" style={{ color: '#64748b', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/contact" style={{ color: '#64748b', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
