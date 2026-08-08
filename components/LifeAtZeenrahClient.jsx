'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const EASE_CURVE = [0.16, 1, 0.3, 1];

// Interactive Spotlight Card with smooth mouse-tracking glow & heading hover transitions
function LifeCard({ title, desc, index }) {
  const [mousePos, setMousePos] = useState({ x: -300, y: -300 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EASE_CURVE }}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        backgroundColor: isHovered ? 'var(--bg-card-hover)' : 'var(--bg-card)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '2.25rem',
        borderRadius: '24px',
        border: '1px solid',
        borderColor: isHovered ? 'rgba(56, 189, 248, 0.45)' : 'var(--border-subtle)',
        boxShadow: isHovered ? '0 20px 40px rgba(56, 189, 248, 0.12)' : 'var(--shadow-card)',
        transition: 'background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer'
      }}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.15), transparent 80%)`,
          zIndex: 1
        }}
      />

      {/* Bottom Accent Beam line transition */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #38BDF8 0%, #60A5FA 50%, #818CF8 100%)',
          transform: isHovered ? 'scaleX(1)' : 'scaleX(0.25)',
          transformOrigin: 'left',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          borderRadius: '0 0 24px 24px'
        }}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Animated Heading Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
          {/* Subtle Heading Indicator Bar */}
          <span
            style={{
              width: isHovered ? '16px' : '6px',
              height: '22px',
              borderRadius: '4px',
              backgroundColor: isHovered ? '#38BDF8' : 'var(--primary)',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              flexShrink: 0
            }}
          />
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: '800',
              color: isHovered ? '#0284c7' : 'var(--text-heading)',
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
              transition: 'color 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              lineHeight: '1.35',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            {title}
          </h3>
        </div>

        {/* Description Text */}
        <p
          style={{
            color: 'var(--text-body)',
            fontSize: '0.925rem',
            lineHeight: '1.7',
            margin: 0,
            transition: 'color 0.35s ease',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}
        >
          {desc}
        </p>
      </div>

      {/* Card Hover Micro Indicator */}
      <div
        style={{
          marginTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.8rem',
          fontWeight: '800',
          color: '#0284c7',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
          transition: 'all 0.3s ease',
          position: 'relative',
          zIndex: 2
        }}
      >
        <span>EXPLORE CULTURE</span>
        <ArrowRight size={14} />
      </div>
    </motion.div>
  );
}

export default function LifeAtZeenrahClient() {
  const highlights = [
    { title: 'Global Virtual Coffee & Syncs', desc: 'Connect with senior engineers across 12 countries for casual banter, knowledge sharing, and live tech demos.' },
    { title: 'Annual Engineering Retreats', desc: 'We gather our team once a year in world-class destinations to brainstorm, celebrate achievements, and unwind.' },
    { title: 'Internal Hackathons', desc: 'Quarterly 48-hour internal hackathons where engineers build AI tools, experimental libraries, and open-source packages.' },
    { title: 'Zero Micromanagement', desc: 'We measure output and code quality, not hours logged. You have total autonomy to organize your workday.' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: 'var(--bg-base)', overflow: 'hidden' }}
    >
      {/* HERO SECTION WITH AMBIENT PARTICLES & META REVEAL TRANSITIONS */}
      <section
        style={{
          position: 'relative',
          backgroundColor: 'var(--bg-hero)',
          backgroundImage: 'var(--gradient-hero-glow)',
          color: 'var(--text-heading)',
          padding: '5.5rem 0',
          textAlign: 'center',
          borderBottom: '1px solid var(--border-subtle)',
          overflow: 'hidden'
        }}
      >
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
        <div className="tech-grid-pattern" />

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1240px', margin: '0 auto' }}>
          {/* Pill Badge Meta Transition */}
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE_CURVE }}
            className="pill-glow-pulse"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1.3rem',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              color: '#0284c7',
              fontWeight: '800',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              borderRadius: '50px',
              marginBottom: '1.2rem',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            <Sparkles size={15} color="#38BDF8" />
            <span>LIFE AT ZEENRAH TECHNOLOGIES</span>
          </motion.div>

          {/* Heading Meta Transition */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE_CURVE }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: '900',
              marginBottom: '1rem',
              letterSpacing: '-0.03em',
              color: 'var(--text-heading)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Work-Life Balance &{' '}
            <span className="text-gradient-cyan-shimmer">
              Engineering Autonomy
            </span>
          </motion.h1>

          {/* Subtitle Meta Transition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE_CURVE }}
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: '1.65',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            See what makes Zeenrah Technologies a thriving environment for software engineers and product leaders.
          </motion.p>
        </div>
      </section>

      {/* CARDS GRID SECTION WITH CARD & HEADING TRANSITIONS */}
      <section style={{ padding: '6rem 0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {highlights.map((h, idx) => (
              <LifeCard key={idx} index={idx} title={h.title} desc={h.desc} />
            ))}
          </div>

          {/* CTA Button Transition */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ textAlign: 'center', marginTop: '4rem' }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block' }}>
              <Link
                href="/careers/job-openings"
                className="btn btn-primary"
                style={{
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                  boxShadow: '0 0 25px rgba(56, 189, 248, 0.4)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem'
                }}
              >
                <span>EXPLORE OPEN ROLES</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
