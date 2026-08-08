'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, ShieldCheck, Clock, HelpCircle, ChevronDown } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

const EASE_CURVE = [0.16, 1, 0.3, 1];

// Interactive Mouse Light Beam Spotlight Hero Header Component
function UniqueHeaderHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const statusChips = [
    { label: '24h Technical Roadmap Turnaround', icon: <Clock size={14} color="#38BDF8" /> },
    { label: '100% Strict NDA Protection', icon: <ShieldCheck size={14} color="#34D399" /> },
    { label: 'Senior Next.js & AI Architects', icon: <Zap size={14} color="#818CF8" /> },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-hero)',
        backgroundImage: 'var(--gradient-hero-glow)',
        color: 'var(--text-heading)',
        padding: '6rem 0 5.5rem 0',
        textAlign: 'center',
        borderBottom: '1px solid var(--border-subtle)',
        overflow: 'hidden'
      }}
    >
      {/* Ambient Animated Blobs & Mesh Pattern */}
      <div className="ambient-blob-1" style={{ opacity: 0.8 }} />
      <div className="ambient-blob-2" style={{ opacity: 0.8 }} />
      <div className="tech-grid-pattern" />

      {/* Interactive Cursor Spotlight Radial Light Beam */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.16), transparent 70%)`,
          zIndex: 2
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1240px', margin: '0 auto' }}>
        {/* Holographic Activity Badge Pill with Pulsing Ring */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE_CURVE }}
          className="pill-glow-pulse"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.45rem 1.4rem',
            backgroundColor: 'rgba(56, 189, 248, 0.12)',
            color: '#0284c7',
            fontWeight: '800',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#34D399', animation: 'blink 0.9s infinite' }} />
          <Sparkles size={15} color="#38BDF8" />
          <span>GET IN TOUCH — WE ARE READY TO BUILD</span>
        </motion.div>

        {/* Cinematic Kinetic Staggered Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE_CURVE }}
          style={{
            fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
            fontWeight: '900',
            marginBottom: '1.25rem',
            letterSpacing: '-0.04em',
            lineHeight: '1.12',
            color: 'var(--text-heading)',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            transformPerspective: 1000
          }}
        >
          Contact Our{' '}
          <motion.span
            className="text-gradient-cyan-shimmer"
            style={{ display: 'inline-block' }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            Engineering Team
          </motion.span>
        </motion.h1>

        {/* Subtitle Reveal */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE_CURVE }}
          style={{
            fontSize: '1.175rem',
            color: 'var(--text-body)',
            maxWidth: '700px',
            margin: '0 auto 2.5rem auto',
            lineHeight: '1.7',
            fontWeight: '500',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}
        >
          Have a project in mind, need software estimation, or looking for dedicated senior developer squads? We are ready to build.
        </motion.p>

        {/* Interactive Floating Status Chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: EASE_CURVE }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.85rem' }}
        >
          {statusChips.map((chip, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, scale: 1.04, borderColor: 'rgba(56, 189, 248, 0.5)' }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 1.15rem',
                backgroundColor: 'var(--bg-card)',
                backdropFilter: 'blur(16px)',
                border: '1px solid var(--border-card)',
                borderRadius: '30px',
                fontSize: '0.85rem',
                fontWeight: '700',
                color: 'var(--text-heading)',
                boxShadow: 'var(--shadow-card)',
                cursor: 'pointer'
              }}
            >
              {chip.icon}
              <span>{chip.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Interactive Animated FAQ Accordion Item
function FAQAccordionItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE_CURVE }}
      whileHover={{ scale: 1.008 }}
      style={{
        backgroundColor: isOpen ? 'var(--bg-card-hover)' : 'var(--bg-card)',
        borderRadius: '18px',
        border: '1px solid',
        borderColor: isOpen ? 'rgba(56, 189, 248, 0.45)' : 'var(--border-subtle)',
        borderLeft: '4px solid',
        borderLeftColor: isOpen ? '#38BDF8' : 'var(--primary)',
        boxShadow: isOpen ? '0 16px 36px rgba(56, 189, 248, 0.1)' : 'var(--shadow-card)',
        overflow: 'hidden',
        transition: 'all 0.35s ease'
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          padding: '1.5rem 2rem',
          fontSize: '1.1rem',
          fontWeight: '800',
          color: isOpen ? '#0284c7' : 'var(--text-heading)',
          backgroundColor: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          textAlign: 'left',
          transition: 'color 0.3s ease',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <span
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '8px',
              backgroundColor: isOpen ? 'rgba(56, 189, 248, 0.15)' : 'var(--primary-light)',
              color: isOpen ? '#0284c7' : 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              fontWeight: '900',
              flexShrink: 0,
              transition: 'all 0.3s ease'
            }}
          >
            ?
          </span>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE_CURVE }}
          style={{ display: 'flex', alignItems: 'center', color: isOpen ? '#0284c7' : 'var(--text-muted)' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_CURVE }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                padding: '0 2rem 1.5rem 4.15rem',
                color: 'var(--text-body)',
                lineHeight: '1.7',
                fontSize: '1rem',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1rem',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ContactClient({ faqs = [] }) {
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: 'var(--bg-base)', overflow: 'hidden' }}
    >
      {/* 1. Unique Interactive Mouse-Spotlight Hero Header */}
      <UniqueHeaderHero />

      {/* 2. Main Contact Form & Details Section */}
      <ContactSection />

      {/* 3. Interactive Animated FAQ Section */}
      <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--bg-hero)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 1.2rem',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                color: '#0284c7',
                fontWeight: '800',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                borderRadius: '50px',
                marginBottom: '0.8rem',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              <HelpCircle size={15} color="#38BDF8" />
              <span>FAQ</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: 'var(--text-heading)',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              Got Questions? <span className="text-gradient-cyan-shimmer">We Have Answers</span>
            </motion.h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {faqs.map((faq, idx) => (
              <FAQAccordionItem
                key={faq.id || idx}
                faq={faq}
                index={idx}
                isOpen={openFaqId === (faq.id || idx)}
                onToggle={() => toggleFaq(faq.id || idx)}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
