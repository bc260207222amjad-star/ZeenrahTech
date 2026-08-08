'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Globe,
  DollarSign,
  GraduationCap,
  Rocket,
  ArrowRight,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';

const EASE_CURVE = [0.22, 1, 0.36, 1];

// Interactive Mouse Spotlight Card (Passes flex/grid properties down to children wrapper)
function SpotlightCard({ children, style = {}, className = "" }) {
  const [mousePos, setMousePos] = useState({ x: -300, y: -300 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const { display, alignItems, justifyContent, gap, flexDirection, flexWrap, gridTemplateColumns, ...outerStyle } = style;

  const innerStyle = {
    position: 'relative',
    zIndex: 2,
    height: '100%',
    ...(display ? { display, alignItems, justifyContent, gap, flexDirection, flexWrap, gridTemplateColumns } : {})
  };

  return (
    <div
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...outerStyle,
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.15), transparent 80%)`,
          zIndex: 1,
        }}
      />
      <div style={innerStyle}>{children}</div>
    </div>
  );
}

export default function CareersClient() {
  const perks = [
    {
      title: 'Remote-First Culture',
      desc: 'Work from anywhere in the world with flexible hours, asynchronous communication workflows, and zero commuting.',
      icon: <Globe size={32} color="#38BDF8" />,
      tag: '100% GLOBAL REMOTE'
    },
    {
      title: 'Top Market Compensation',
      desc: 'Competitive international salaries, performance bonuses, equity incentives, and annual technology hardware stipends.',
      icon: <DollarSign size={32} color="#34D399" />,
      tag: 'PREMIUM SALARIES'
    },
    {
      title: 'Continuous Growth',
      desc: 'Dedicated annual learning budgets, conference passes, book stipends, and direct mentorship from industry leaders.',
      icon: <GraduationCap size={32} color="#818CF8" />,
      tag: 'LEARNING STIPEND'
    },
    {
      title: 'Impactful Global Projects',
      desc: 'Architect mission-critical software for global FinTech, HealthTech, AI LLM platforms, and high-concurrency enterprise apps.',
      icon: <Rocket size={32} color="#F43F5E" />,
      tag: 'TIER-1 CLIENTS'
    }
  ];

  const featuredJobs = [
    {
      id: 'j1',
      title: 'Senior Next.js & React Engineer',
      type: 'Full-Time',
      location: 'Global (Remote)',
      tags: ['Next.js 15', 'React 19', 'TypeScript', 'App Router']
    },
    {
      id: 'j2',
      title: 'Lead React Native & iOS Engineer',
      type: 'Full-Time',
      location: 'Hybrid / Remote',
      tags: ['React Native', 'Swift', 'Kotlin', '60fps UI']
    },
    {
      id: 'j3',
      title: 'AI & Cloud DevOps Lead',
      type: 'Full-Time',
      location: 'Global (Remote)',
      tags: ['AWS', 'Kubernetes', 'Python', 'LLM RAG']
    },
    {
      id: 'j4',
      title: 'Senior Product Designer (UI/UX)',
      type: 'Full-Time',
      location: 'Global (Remote)',
      tags: ['Figma', 'Design Systems', 'Prototyping']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_CURVE }}
      style={{ backgroundColor: 'var(--bg-base)', overflow: 'hidden' }}
    >
      {/* ═══════════════════════════════════════════════════════════════
          1. HERO HEADER SECTION WITH AMBIENT PARTICLES & GLOW MESH
          ═══════════════════════════════════════════════════════════════ */}
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
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
        <div className="tech-grid-pattern" />

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1140px', margin: '0 auto' }}>
          {/* Top Hiring Badge Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE_CURVE }}
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
              border: '1px solid rgba(56, 189, 248, 0.4)'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#34D399', animation: 'blink 0.9s infinite' }} />
            <span>WE ARE HIRING — CAREERS AT ZEENRAH TECHNOLOGIES</span>
          </motion.div>

          {/* Headline */}
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
            Build the Future of{' '}
            <span className="text-gradient-cyan-shimmer">
              Software With Us
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
            Join a world-class team of Next.js, React, Mobile, Cloud, and AI engineers working on high-impact global enterprise software.
          </motion.p>

          {/* Floating Benefit Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE_CURVE }}
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.8rem' }}
          >
            {['🌐 100% Global Remote', '💰 Top 1% Market Pay', '⚡ Next.js 15 & AI Stack', '🏖️ Unlimited PTO Policy'].map((chip, idx) => (
              <motion.span
                key={idx}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.45rem 1.15rem',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  borderRadius: '30px',
                  fontSize: '0.875rem',
                  fontWeight: '800',
                  color: 'var(--text-heading)',
                  boxShadow: 'var(--shadow-card)',
                  cursor: 'pointer'
                }}
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. PERKS GRID ("WHY ENGINEERS LOVE ZEENRAH TECHNOLOGIES")
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 0', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'inline-block',
                padding: '0.4rem 1.2rem',
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary)',
                fontWeight: '800',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                borderRadius: '50px',
                marginBottom: '1rem',
                border: '1px solid var(--primary-border)'
              }}
            >
              CULTURE & BENEFITS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '900', color: 'var(--text-heading)' }}
            >
              Why Engineers Love Zeenrah Technologies
            </motion.h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2rem' }}>
            {perks.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE_CURVE }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <SpotlightCard style={{ padding: '2.5rem', height: '100%', borderBottom: '4px solid #38BDF8' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      letterSpacing: '0.08em',
                      color: 'var(--text-muted)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {p.tag}
                  </div>

                  <div
                    style={{
                      width: '58px',
                      height: '58px',
                      borderRadius: '16px',
                      backgroundColor: 'var(--primary-light)',
                      border: '1px solid var(--border-card)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {p.icon}
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '0.85rem' }}>
                    {p.title}
                  </h3>

                  <p style={{ color: 'var(--text-body)', fontSize: '0.975rem', lineHeight: '1.7', margin: 0 }}>
                    {p.desc}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. FEATURED JOB OPENINGS LISTING WITH RIGHT-ALIGNED APPLY BTN
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-hero)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'inline-block',
                padding: '0.4rem 1.2rem',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                color: '#0284c7',
                fontWeight: '800',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                borderRadius: '50px',
                marginBottom: '1rem',
                border: '1px solid rgba(56, 189, 248, 0.35)'
              }}
            >
              OPEN ROLES
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: '900', color: 'var(--text-heading)' }}
            >
              Featured Global Engineering Roles
            </motion.h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: '940px', margin: '0 auto' }}>
            {featuredJobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.01, x: 4 }}
              >
                <SpotlightCard
                  style={{
                    padding: '1.35rem 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                    borderColor: 'var(--border-card)',
                    borderRadius: '16px',
                    borderLeft: '4px solid #38BDF8'
                  }}
                >
                  <div style={{ flex: '1 1 0%', minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                      <h3 style={{ fontSize: '1.175rem', fontWeight: '800', color: 'var(--text-heading)', margin: 0 }}>
                        {job.title}
                      </h3>
                      <span style={{ fontSize: '0.725rem', fontWeight: '800', padding: '0.2rem 0.65rem', backgroundColor: 'rgba(52, 211, 153, 0.15)', color: '#059669', borderRadius: '20px', border: '1px solid rgba(52, 211, 153, 0.3)', whiteSpace: 'nowrap' }}>
                        {job.type}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem', fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={15} color="#38BDF8" />
                        {job.location}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Clock size={15} color="#818CF8" />
                        Posted Today
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {job.tags.map((t, i) => (
                        <span key={i} style={{ fontSize: '0.75rem', fontWeight: '700', padding: '0.2rem 0.65rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '10px', border: '1px solid var(--border-card)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ flexShrink: 0 }}>
                    <Link
                      href="/careers/job-openings"
                      className="btn btn-primary"
                      style={{
                        padding: '0.75rem 1.5rem',
                        fontSize: '0.825rem',
                        borderRadius: '50px',
                        whiteSpace: 'nowrap',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 4px 15px rgba(56, 189, 248, 0.3)'
                      }}
                    >
                      <span>APPLY NOW</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block' }}>
              <Link
                href="/careers/job-openings"
                className="btn btn-primary"
                style={{ padding: '1.1rem 2.75rem', fontSize: '0.95rem', borderRadius: '50px', boxShadow: '0 0 25px rgba(56, 189, 248, 0.4)', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
              >
                <span>EXPLORE ALL OPEN POSITIONS</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
