'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const EASE_CURVE = [0.22, 1, 0.36, 1];

export default function TechEstimationCTA() {
  const techPills = [
    { name: 'Next.js 15', color: '#38BDF8' },
    { name: 'React 19', color: '#61DAFB' },
    { name: 'Python FastAPI', color: '#34D399' },
    { name: 'TypeScript', color: '#818CF8' },
    { name: 'AWS & Kubernetes', color: '#F59E0B' },
    { name: 'AI / LLM Integration', color: '#EC4899' },
  ];

  return (
    <section style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden', backgroundColor: 'var(--bg-hero)', borderTop: '1px solid var(--border-subtle)' }}>
      {/* Background Ambient Glowing Mesh & Pattern */}
      <div className="ambient-blob-1" style={{ opacity: 0.8 }} />
      <div className="ambient-blob-2" style={{ opacity: 0.8 }} />
      <div className="tech-grid-pattern" />

      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE_CURVE }}
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.96) 0%, rgba(30, 41, 59, 0.96) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '32px',
            padding: '4.5rem 2.5rem',
            textAlign: 'center',
            color: '#FFFFFF',
            boxShadow: '0 25px 60px rgba(15, 23, 42, 0.25)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            overflow: 'hidden'
          }}
        >
          {/* Internal Glow Blob */}
          <div
            style={{
              position: 'absolute',
              top: '-40%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 10 }}>
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE_CURVE }}
              className="pill-glow-pulse"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.5rem 1.5rem',
                backgroundColor: 'rgba(56, 189, 248, 0.18)',
                color: '#38BDF8',
                fontWeight: '800',
                fontSize: '0.825rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                borderRadius: '50px',
                marginBottom: '1.75rem',
                border: '1px solid rgba(56, 189, 248, 0.5)',
                boxShadow: '0 0 18px rgba(56, 189, 248, 0.25)'
              }}
            >
              <Sparkles size={16} />
              <span>CUSTOM ARCHITECTURE & LEGACY INTEGRATION</span>
            </motion.div>

            {/* Headline with High Contrast Luminous Gradient */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE_CURVE }}
              style={{
                fontSize: 'clamp(2.3rem, 4.8vw, 3.5rem)',
                fontWeight: '900',
                lineHeight: '1.25',
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
                color: '#FFFFFF'
              }}
            >
              Looking for a Specific{' '}
              <span className="text-gradient-cyan-shimmer-bright" style={{ display: 'inline-block' }}>
                Technology Stack?
              </span>
            </motion.h2>

            {/* High Contrast Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE_CURVE }}
              style={{
                fontSize: '1.175rem',
                color: '#E2E8F0',
                maxWidth: '700px',
                margin: '0 auto 2.5rem auto',
                lineHeight: '1.75',
                fontWeight: '500',
                textShadow: '0 1px 4px rgba(0,0,0,0.4)'
              }}
            >
              Our senior engineering leads adapt quickly to custom tech ecosystems, proprietary microservices, and enterprise legacy codebases.
            </motion.p>

            {/* High Contrast Floating Tech Chips */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE_CURVE }}
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.85rem', marginBottom: '3.25rem' }}
            >
              {techPills.map((pill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ y: -4, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.45rem 1.15rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    borderRadius: '30px',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    fontSize: '0.875rem',
                    fontWeight: '800',
                    color: '#FFFFFF',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: pill.color, boxShadow: `0 0 8px ${pill.color}` }} />
                  {pill.name}
                </motion.span>
              ))}
            </motion.div>


            {/* Magnetic CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE_CURVE }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{ display: 'inline-block' }}
            >
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{
                  padding: '1.1rem 2.75rem',
                  fontSize: '0.95rem',
                  borderRadius: '50px',
                  boxShadow: '0 0 30px rgba(56, 189, 248, 0.5)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <span>REQUEST TECH ESTIMATION</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
