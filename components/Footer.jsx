import Link from 'next/link';
import { MapPin, Mail, Phone, ShieldCheck, Layers } from 'lucide-react';

function SocialVectorIcon({ keyName }) {
  if (keyName === 'twitter') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    );
  }
  if (keyName === 'linkedin') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z"/>
      </svg>
    );
  }
  if (keyName === 'github') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
      </svg>
    );
  }
  if (keyName === 'facebook') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.23 0-1.61.77-1.61 1.56V12h2.78l-.45 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8Z"/>
      </svg>
    );
  }
  if (keyName === 'instagram') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    );
  }
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function Footer({ siteMeta = {}, socialLinks = {} }) {
  const meta = siteMeta;
  const socials = socialLinks;

  const socialPlatforms = [
    { key: 'twitter', name: 'Twitter' },
    { key: 'linkedin', name: 'LinkedIn' },
    { key: 'github', name: 'GitHub' },
    { key: 'facebook', name: 'Facebook' },
    { key: 'instagram', name: 'Instagram' },
    { key: 'youtube', name: 'YouTube' }
  ];

  const activeSocials = socialPlatforms.filter(p => Boolean(socials[p.key]));

  return (
    <footer className="footer" style={{ backgroundColor: 'var(--bg-footer)', color: '#FFFFFF', padding: '4.5rem 0 2rem', marginTop: '0', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(3, 1fr)', gap: '3rem', marginBottom: '3.5rem' }}>
          <div>
            <Link href="/" style={{ textDecoration: 'none', fontSize: '1.4rem', fontWeight: '900', color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Layers size={18} color="#FFFFFF" />
              </div>
              <span>ZEENRAH</span>
              <span style={{ color: '#38BDF8' }}>TECHNOLOGIES</span>
            </Link>
            
            {meta.footerTagline && (
              <p style={{ color: '#94A3B8', lineHeight: '1.65', fontSize: '0.95rem', marginBottom: '1.5rem', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
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
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      fontSize: '0.825rem',
                      color: '#E2E8F0',
                      textDecoration: 'none',
                      fontWeight: '700',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      transition: 'all 0.2s ease',
                      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}
                  >
                    <SocialVectorIcon keyName={item.key} />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '1.25rem', borderBottom: '2px solid #38BDF8', display: 'inline-block', paddingBottom: '0.4rem', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link href="/" style={{ color: '#CBD5E1', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>HOME</Link></li>
              <li><Link href="/about" style={{ color: '#CBD5E1', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>ABOUT US</Link></li>
              <li><Link href="/services" style={{ color: '#CBD5E1', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>SERVICES</Link></li>
              <li><Link href="/technologies" style={{ color: '#CBD5E1', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>TECHNOLOGIES</Link></li>
              <li><Link href="/portfolio" style={{ color: '#CBD5E1', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>PORTFOLIO</Link></li>
              <li><Link href="/careers" style={{ color: '#CBD5E1', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>CAREERS</Link></li>
              <li><Link href="/contact" style={{ color: '#CBD5E1', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>CONTACT US</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '1.25rem', borderBottom: '2px solid #38BDF8', display: 'inline-block', paddingBottom: '0.4rem', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
              Capabilities
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link href="/services" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem' }}>Web Application Development</Link></li>
              <li><Link href="/services" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem' }}>Mobile App Engineering</Link></li>
              <li><Link href="/services" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem' }}>AI & Machine Learning</Link></li>
              <li><Link href="/services" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem' }}>Cloud & DevOps Solutions</Link></li>
              <li><Link href="/services" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem' }}>Dedicated Developer Squads</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '1.25rem', borderBottom: '2px solid #38BDF8', display: 'inline-block', paddingBottom: '0.4rem', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
              Contact Details
            </h4>
            
            {meta.address && (
              <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} color="#38BDF8" />
                <span><strong>HQ:</strong> {meta.address}</span>
              </p>
            )}
            
            {meta.email && (
              <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="#38BDF8" />
                <span><strong>Email:</strong> {meta.email}</span>
              </p>
            )}

            {meta.phone && (
              <p style={{ color: '#CBD5E1', fontSize: '0.9rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="#38BDF8" />
                <span><strong>Phone:</strong> {meta.phone}</span>
              </p>
            )}
            
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={16} color="#34D399" />
                <span style={{ fontSize: '0.8rem', color: '#34D399', fontWeight: '700' }}>Systems Operational</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.2rem' }}>24/7 Global Engineering SLA</p>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: '#94A3B8' }}>
          <div>
            &copy; 2026 Zeenrah Technologies. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/contact" style={{ color: '#94A3B8', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/contact" style={{ color: '#94A3B8', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

