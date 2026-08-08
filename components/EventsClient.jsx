'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, Video, Radio, Users } from 'lucide-react';

const EASE_CURVE = [0.16, 1, 0.3, 1];

// Interactive Spotlight Card for Events
function EventCard({ ev, index }) {
  const [mousePos, setMousePos] = useState({ x: -300, y: -300 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getEventIcon = (type) => {
    if (type.includes('Virtual') || type.includes('Webinar')) return <Video size={14} color="#38BDF8" />;
    if (type.includes('Live')) return <Radio size={14} color="#34D399" />;
    return <Users size={14} color="#818CF8" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE_CURVE }}
      whileHover={{ y: -6, scale: 1.01 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        backgroundColor: isHovered ? 'var(--bg-card-hover)' : 'var(--bg-card)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '2rem 2.5rem',
        borderRadius: '20px',
        border: '1px solid',
        borderColor: isHovered ? 'rgba(56, 189, 248, 0.45)' : 'var(--border-subtle)',
        borderLeft: '4px solid',
        borderLeftColor: isHovered ? '#38BDF8' : 'var(--primary)',
        boxShadow: isHovered ? '0 20px 40px rgba(56, 189, 248, 0.12)' : 'var(--shadow-card)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem',
        transition: 'background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, border-left-color 0.35s ease',
        overflow: 'hidden'
      }}
    >
      {/* Cursor Spotlight Radial Reflection */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.14), transparent 80%)`,
          zIndex: 1
        }}
      />

      {/* Left Details Content */}
      <div style={{ position: 'relative', zIndex: 2, flex: '1 1 300px' }}>
        {/* Date & Type Tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
          <span
            style={{
              fontSize: '0.825rem',
              fontWeight: '800',
              color: isHovered ? '#0284c7' : 'var(--primary)',
              letterSpacing: '0.04em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'color 0.3s ease',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            <Calendar size={14} color={isHovered ? '#38BDF8' : 'var(--primary)'} />
            {ev.date}
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>•</span>
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: '800',
              color: 'var(--text-body)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.15rem 0.65rem',
              backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.12)' : 'var(--primary-light)',
              borderRadius: '20px',
              border: '1px solid',
              borderColor: isHovered ? 'rgba(56, 189, 248, 0.3)' : 'var(--border-subtle)',
              transition: 'all 0.3s ease'
            }}
          >
            {getEventIcon(ev.type)}
            {ev.type}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: '800',
            color: isHovered ? '#0284c7' : 'var(--text-heading)',
            transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
            transition: 'color 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            margin: '0.4rem 0 0 0',
            lineHeight: '1.35',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}
        >
          {ev.title}
        </h3>
      </div>

      {/* Register CTA Button with Hover Motion */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/contact"
            className="btn btn-outline"
            style={{
              padding: '0.75rem 1.6rem',
              fontSize: '0.85rem',
              borderRadius: '50px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease'
            }}
          >
            <span>REGISTER NOW</span>
            <motion.span
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'inline-flex' }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function EventsClient() {
  const eventsList = [
    { date: 'SEP 18, 2026', title: 'Next.js 15 & React 19 Concurrent Architecture Workshop', type: 'Virtual Webinar' },
    { date: 'OCT 05, 2026', title: 'Enterprise AI & RAG Pipeline Masterclass with PyTorch', type: 'Live Stream & QA' },
    { date: 'NOV 12, 2026', title: 'Global Software Engineering Leadership Summit', type: 'Hybrid Event' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: 'var(--bg-base)', overflow: 'hidden' }}
    >
      {/* Hero Section with Meta Reveal & Ambient Mesh */}
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
          {/* Badge Pill Meta Transition */}
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
            <span>EVENTS & CULTURE</span>
          </motion.div>

          {/* Headline Meta Transition */}
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
            Tech Meetups &{' '}
            <span className="text-gradient-cyan-shimmer">
              Webinars
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
            We share knowledge, sponsor tech conferences, and run workshops on Next.js, Cloud DevOps, and AI.
          </motion.p>
        </div>
      </section>

      {/* Events List Container with Staggered Card Reveals */}
      <section style={{ padding: '6rem 0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {eventsList.map((ev, idx) => (
              <EventCard key={idx} ev={ev} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
