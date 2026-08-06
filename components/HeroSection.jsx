'use client';

import Link from 'next/link';
import IosDevVideoBackground from './IosDevVideoBackground';

// Data comes as props from the server page — never reads TXT on client
export default function HeroSection({ hero }) {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#0b0f19',
        overflow: 'hidden',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 0'
      }}
    >
      <IosDevVideoBackground />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center'
        }}
      >
        <div className="stagger-1">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 1.2rem',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              borderRadius: '50px',
              marginBottom: '2rem',
              border: '1px solid rgba(99, 102, 241, 0.35)'
            }}
          >
            <span style={{ fontSize: '0.9rem' }}>🚀</span>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#06b6d4', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {hero?.badgeText || 'Software & AI Engineering'}
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
              fontWeight: '900',
              lineHeight: '1.08',
              color: '#ffffff',
              letterSpacing: '-0.04em',
              marginBottom: '1.5rem'
            }}
          >
            {hero?.headlineMain || 'Global Leading'}{' '}
            <span style={{ display: 'block' }}>{hero?.headlineSub || 'App Factory'}</span>
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block',
                marginTop: '0.25rem'
              }}
            >
              {hero?.accentText || 'Powering Unprecedented Growth'}
            </span>
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              color: '#cbd5e1',
              lineHeight: '1.8',
              maxWidth: '600px',
              margin: '0 auto 2.5rem auto',
              fontWeight: '500'
            }}
          >
            {hero?.description || 'Discover Excellence in Application Development with Zeenrah Technologies.'}
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={hero?.ctaLink || '/contact'} className="btn btn-primary">
              {hero?.ctaText || 'CONTACT US'} →
            </Link>
            <Link href={hero?.secondaryCtaLink || '/services'} className="btn btn-outline">
              {hero?.secondaryCtaText || 'OUR SERVICES'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
