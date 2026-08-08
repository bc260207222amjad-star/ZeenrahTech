'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';
import IosDevVideoBackground from './IosDevVideoBackground';

// Custom corporate smooth easing curve requested by user
const EASE_CURVE = [0.22, 1, 0.36, 1];

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
      {/* Background immediately visible */}
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
        {/* 1. Badge (0.1s delay, translateY 20px -> 0) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE_CURVE }}
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
        </motion.div>

        {/* 2. Main Headline (0.25s delay, translateY 30px -> 0) */}
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
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE_CURVE }}
            style={{ display: 'block' }}
          >
            {hero?.headlineMain || 'Global Leading'}{' '}
            <span>{hero?.headlineSub || 'App Factory'}</span>
          </motion.span>

          {/* 3. Highlighted Accent Text (0.4s delay, translateY 25px -> 0) */}
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE_CURVE }}
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
          </motion.span>
        </h1>

        {/* 4. Description Paragraph (0.55s delay, translateY 20px -> 0) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE_CURVE }}
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
        </motion.p>

        {/* 5. CTA Buttons Container (0.7s delay, translateY 20px -> 0, scale 0.95 -> 1) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EASE_CURVE }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}
        >
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
        </motion.div>

        {/* 6. Live Metric Badges (0.85s delay, translateY 15px -> 0) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: EASE_CURVE }}
          style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '2rem' }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}


