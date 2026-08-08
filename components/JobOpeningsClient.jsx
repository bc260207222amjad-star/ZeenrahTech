'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Sparkles, CheckCircle2, Briefcase, Clock, ShieldCheck, Zap } from 'lucide-react';
import siteData from '@/data/siteData.json';

const EASE_CURVE = [0.22, 1, 0.36, 1];

// Interactive Mouse Spotlight Card (Forwards flex/grid properties down to children wrapper)
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
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.18), transparent 80%)`,
          zIndex: 1,
        }}
      />
      <div style={innerStyle}>{children}</div>
    </div>
  );
}

export default function JobOpeningsClient() {
  const jobs = siteData.jobs || [
    {
      id: "j1",
      title: "Senior Next.js & React Engineer",
      type: "Full-Time / Remote",
      location: "Global (Remote)",
      category: "web",
      desc: "Architect high-performance web applications using Next.js 15, React 19, TypeScript, and server components for enterprise clients."
    },
    {
      id: "j2",
      title: "Lead React Native & iOS Engineer",
      type: "Full-Time / Hybrid",
      location: "Tech Hub Office / Remote",
      category: "mobile",
      desc: "Lead the mobile engineering team building cross-platform iOS and Android apps with native bridge modules and smooth 60fps UI."
    },
    {
      id: "j3",
      title: "AI & Cloud DevOps Lead",
      type: "Full-Time / Remote",
      location: "Global (Remote)",
      category: "cloud",
      desc: "Design automated CI/CD pipelines, manage Kubernetes infrastructure, and deploy custom LLM RAG pipelines on AWS and GCP."
    },
    {
      id: "j4",
      title: "Senior Product Designer (UI/UX)",
      type: "Full-Time / Remote",
      location: "Global (Remote)",
      category: "design",
      desc: "Craft intuitive design systems in Figma, conduct user research, and collaborate closely with developers to ship beautiful interfaces."
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);
  const [applied, setApplied] = useState(false);
  const [applicant, setApplicant] = useState({ name: '', email: '', portfolio: '', resumeNote: '' });

  const categories = [
    { id: 'all', label: 'ALL ROLES' },
    { id: 'web', label: 'FRONTEND & NEXT.JS' },
    { id: 'mobile', label: 'MOBILE TECH' },
    { id: 'cloud', label: 'CLOUD & AI' },
    { id: 'design', label: 'UI/UX DESIGN' }
  ];

  const filteredJobs = activeCategory === 'all'
    ? jobs
    : jobs.filter(j => j.category === activeCategory || (activeCategory === 'web' && j.id === 'j1') || (activeCategory === 'mobile' && j.id === 'j2') || (activeCategory === 'cloud' && j.id === 'j3') || (activeCategory === 'design' && j.id === 'j4'));

  const handleApply = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_CURVE }}
      style={{ backgroundColor: 'var(--bg-base)', paddingBottom: '6rem' }}
    >
      {/* ═══════════════════════════════════════════════════════════════
          1. ANIMATED HERO HEADER SECTION
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
            <span>4 ACTIVE ENGINEERING ROLES • GLOBAL REMOTE</span>
          </motion.div>

          {/* Main Title */}
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
            Open Engineering{' '}
            <span className="text-gradient-cyan-shimmer">
              Roles
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
              maxWidth: '720px',
              margin: '0 auto 2.5rem auto',
              lineHeight: '1.7',
              fontWeight: '500'
            }}
          >
            Browse open positions for Next.js 15, React 19, React Native, Python FastAPI, Cloud DevOps, and UI/UX product design.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. CATEGORY FILTER TABS WITH SLIDING PILL TRANSITION
          ═══════════════════════════════════════════════════════════════ */}
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '3.5rem 1.5rem 0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  position: 'relative',
                  padding: '0.65rem 1.35rem',
                  borderRadius: '50px',
                  fontSize: '0.825rem',
                  fontWeight: '800',
                  letterSpacing: '0.04em',
                  border: '1px solid ' + (isActive ? 'var(--primary)' : 'var(--border-subtle)'),
                  background: 'transparent',
                  color: isActive ? '#FFFFFF' : 'var(--text-body)',
                  cursor: 'pointer',
                  transition: 'color 0.25s ease, border-color 0.25s ease',
                  outline: 'none'
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeJobCategoryTab"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'var(--primary)',
                      borderRadius: '50px',
                      boxShadow: '0 4px 20px rgba(56, 189, 248, 0.4)',
                      zIndex: 0
                    }}
                  />
                )}
                <span style={{ position: 'relative', zIndex: 1 }}>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            3. STAGGERED MOTION GRID OF OPEN ROLES
            ═══════════════════════════════════════════════════════════════ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              hidden: { opacity: 1 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              },
              exit: {
                opacity: 0,
                transition: { duration: 0.2 }
              }
            }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
              gap: '2rem'
            }}
          >
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                layout
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: EASE_CURVE }
                  }
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard
                  style={{
                    padding: '2.5rem 2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    borderTop: '4px solid #38BDF8',
                    borderRadius: '24px',
                    borderColor: 'var(--border-card)'
                  }}
                >
                  <div>
                    {/* Tags */}
                    <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          padding: '0.35rem 0.85rem',
                          backgroundColor: 'rgba(52, 211, 153, 0.15)',
                          color: '#059669',
                          fontWeight: '800',
                          fontSize: '0.75rem',
                          borderRadius: '50px',
                          border: '1px solid rgba(52, 211, 153, 0.3)'
                        }}
                      >
                        {job.type}
                      </span>
                      <span
                        style={{
                          padding: '0.35rem 0.85rem',
                          backgroundColor: 'var(--primary-light)',
                          color: 'var(--primary)',
                          fontWeight: '700',
                          fontSize: '0.75rem',
                          borderRadius: '50px',
                          border: '1px solid var(--border-card)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem'
                        }}
                      >
                        <MapPin size={13} color="var(--primary)" />
                        <span>{job.location}</span>
                      </span>
                    </div>

                    {/* Job Title */}
                    <h3
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: '900',
                        color: 'var(--text-heading)',
                        marginBottom: '1rem',
                        lineHeight: '1.3'
                      }}
                    >
                      {job.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        color: 'var(--text-body)',
                        fontSize: '0.975rem',
                        lineHeight: '1.7',
                        marginBottom: '2rem'
                      }}
                    >
                      {job.desc}
                    </p>
                  </div>

                  {/* Apply Button */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setSelectedJob(job);
                      setApplied(false);
                    }}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '0.95rem 1.5rem',
                      fontSize: '0.9rem',
                      borderRadius: '50px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      boxShadow: '0 4px 18px rgba(56, 189, 248, 0.35)'
                    }}
                  >
                    <span>APPLY FOR THIS ROLE</span>
                    <ArrowRight size={18} />
                  </motion.button>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          4. 3D GLASSMOPHIC APPLICATION MODAL WITH ENTRANCE REVEAL
          ═══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: EASE_CURVE }}
              style={{
                backgroundColor: 'var(--bg-input)',
                borderRadius: '28px',
                padding: '2.75rem',
                maxWidth: '560px',
                width: '100%',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
                border: '1px solid var(--border-card)',
                borderTop: '5px solid #38BDF8',
                position: 'relative'
              }}
            >
              {applied ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    style={{ fontSize: '3.5rem', marginBottom: '1.25rem' }}
                  >
                    🎉
                  </motion.div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
                    Application Submitted!
                  </h3>
                  <p style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                    Thank you, <strong>{applicant.name}</strong>. Our engineering recruitment squad will review your profile for <strong>{selectedJob.title}</strong> and respond within 3 business days.
                  </p>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="btn btn-primary"
                    style={{ padding: '0.9rem 2.25rem', borderRadius: '50px' }}
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#38BDF8', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                        EXPRESS APPLICATION
                      </div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--text-heading)', margin: 0 }}>
                        Apply for {selectedJob.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: 'none',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      ✕
                    </button>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '0.45rem' }}>
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Johnson"
                      value={applicant.name}
                      onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        border: '1px solid var(--border-card)',
                        backgroundColor: 'var(--bg-base)',
                        color: 'var(--text-heading)',
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '0.45rem' }}>
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@domain.com"
                      value={applicant.email}
                      onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        border: '1px solid var(--border-card)',
                        backgroundColor: 'var(--bg-base)',
                        color: 'var(--text-heading)',
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '0.45rem' }}>
                      GITHUB / PORTFOLIO LINK *
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://github.com/username"
                      value={applicant.portfolio}
                      onChange={(e) => setApplicant({ ...applicant, portfolio: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        border: '1px solid var(--border-card)',
                        backgroundColor: 'var(--bg-base)',
                        color: 'var(--text-heading)',
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '0.45rem' }}>
                      WHY ARE YOU A GREAT FIT?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your Next.js, React, Cloud or AI engineering background..."
                      value={applicant.resumeNote}
                      onChange={(e) => setApplicant({ ...applicant, resumeNote: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        border: '1px solid var(--border-card)',
                        backgroundColor: 'var(--bg-base)',
                        color: 'var(--text-heading)',
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '0.95rem',
                      borderRadius: '50px',
                      boxShadow: '0 4px 20px rgba(56, 189, 248, 0.4)'
                    }}
                  >
                    SUBMIT APPLICATION →
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
