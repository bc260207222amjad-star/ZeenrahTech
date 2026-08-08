'use client';

import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';
import IosDevVideoBackground from './IosDevVideoBackground';

// Data comes as props from the server page — never reads TXT on client
export default function HeroSection({ hero }) {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#050505',
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
          maxWidth: '840px',
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
              padding: '0.5rem 1.35rem',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '50px',
              marginBottom: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.25)'
            }}
          >
            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#FFFFFF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {hero?.badgeText || 'SOFTWARE & AI ENGINEERING'}
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
              fontWeight: '900',
              lineHeight: '1.08',
              color: '#FFFFFF',
              letterSpacing: '-0.04em',
              marginBottom: '1.5rem',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)'
            }}
          >
            {hero?.headlineMain || 'Global Leading'}{' '}
            <span style={{ display: 'block' }}>{hero?.headlineSub || 'App Factory'}</span>
            <span
              style={{
                background: 'linear-gradient(135deg, #38BDF8 0%, #60A5FA 50%, #818CF8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block',
                marginTop: '0.35rem',
                filter: 'drop-shadow(0 2px 12px rgba(56, 189, 248, 0.4))'
              }}
            >
              {hero?.accentText || 'Powering Unprecedented Growth'}
            </span>
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: '1.8',
              maxWidth: '620px',
              margin: '0 auto 2.5rem auto',
              fontWeight: '500',
              textShadow: '0 1px 8px rgba(0,0,0,0.25)'
            }}
          >
            {hero?.description || 'Discover Excellence in Application Development with Zeenrah Technologies.'}
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <Link href={hero?.ctaLink || '/contact'} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>{hero?.ctaText || 'CONTACT US'}</span>
              <ArrowRight size={18} />
            </Link>
            <Link href={hero?.secondaryCtaLink || '/services'} className="btn" style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#FFFFFF'
            }}>
              {hero?.secondaryCtaText || 'OUR SERVICES'}
            </Link>
          </div>

          {/* Live Metric Badges with Crisp Vector Icons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#E2E8F0', fontSize: '0.875rem', fontWeight: '700' }}>
              <ShieldCheck size={18} color="#34D399" />
              <span>99.9% Uptime SLA</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#E2E8F0', fontSize: '0.875rem', fontWeight: '700' }}>
              <Zap size={18} color="#38BDF8" />
              <span>Sub-50ms Latency</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#E2E8F0', fontSize: '0.875rem', fontWeight: '700' }}>
              <Layers size={18} color="#818CF8" />
              <span>120+ Products Shipped</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

