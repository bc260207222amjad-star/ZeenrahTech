'use client';

import { motion } from 'framer-motion';
import { Sparkles, Cpu, ShieldCheck, Zap } from 'lucide-react';

const EASE_CURVE = [0.22, 1, 0.36, 1];

export default function TechHeaderHero() {
  const techPills = [
    { label: 'Next.js 15', color: '#38BDF8' },
    { label: 'React 19', color: '#61DAFB' },
    { label: 'TypeScript', color: '#3178C6' },
    { label: 'Python FastAPI', color: '#059669' },
    { label: 'Django', color: '#44B78B' },
    { label: 'Java Spring Boot', color: '#6DB33F' },
    { label: 'Swift & Kotlin', color: '#F05138' },
    { label: 'AWS DevOps', color: '#FF9900' },
    { label: 'AI LLMs', color: '#10A37F' }
  ];

  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-hero)',
        backgroundImage: 'var(--gradient-hero-glow)',
        color: 'var(--text-heading)',
        padding: '6rem 0 5rem 0',
        textAlign: 'center',
        borderBottom: '1px solid var(--border-subtle)',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glowing Blobs & Tech Grid Overlay */}
      <div className="ambient-blob-1" />
      <div className="ambient-blob-2" />
      <div className="tech-grid-pattern" />

      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1140px', margin: '0 auto' }}>
        {/* Animated Badge Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE_CURVE }}
          className="pill-glow-pulse"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.45rem 1.4rem',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            color: '#0284c7',
            fontWeight: '800',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            border: '1px solid rgba(56, 189, 248, 0.4)'
          }}
        >
          <Sparkles size={16} />
          <span>OUR TECHNOLOGY MATRIX</span>
        </motion.div>

        {/* Headline with Text Shimmer */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE_CURVE }}
          style={{
            fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
            fontWeight: '900',
            marginBottom: '1.25rem',
            letterSpacing: '-0.04em',
            lineHeight: '1.12',
            color: 'var(--text-heading)'
          }}
        >
          Enterprise Tech Stack &{' '}
          <span className="text-gradient-cyan-shimmer">
            Frameworks
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE_CURVE }}
          style={{
            fontSize: '1.2rem',
            color: 'var(--text-body)',
            maxWidth: '740px',
            margin: '0 auto 2.5rem auto',
            lineHeight: '1.7',
            fontWeight: '500'
          }}
        >
          We leverage Next.js 15, React 19, Python FastAPI, Django, Java Spring Boot, Swift, Kotlin, AWS, and AI LLM models to build software products.
        </motion.p>

        {/* Interactive Floating Tech Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE_CURVE }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}
        >
          {techPills.map((pill, idx) => (
            <motion.span
              key={idx}
              whileHover={{ y: -5, scale: 1.06 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.4rem 1.1rem',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                borderRadius: '30px',
                fontSize: '0.85rem',
                fontWeight: '800',
                color: 'var(--text-heading)',
                boxShadow: 'var(--shadow-card)',
                cursor: 'pointer'
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: pill.color, boxShadow: `0 0 6px ${pill.color}` }} />
              {pill.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Live Metric Badges Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EASE_CURVE }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2.5rem',
            flexWrap: 'wrap',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>
            <ShieldCheck size={18} color="#34D399" />
            <span>100% Type-Safe Specs</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>
            <Zap size={18} color="#38BDF8" />
            <span>Sub-50ms Global Edge</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>
            <Cpu size={18} color="#818CF8" />
            <span>Enterprise AI Orchestration</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
