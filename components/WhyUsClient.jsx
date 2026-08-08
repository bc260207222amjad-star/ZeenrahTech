'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Globe,
  Gem,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Code2,
  Zap,
  ShieldCheck,
  Sparkles,
  Terminal,
  Layers,
  ChevronRight,
  Briefcase
} from 'lucide-react';

const EASE_CURVE = [0.22, 1, 0.36, 1];

// Interactive Mouse Spotlight Card
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
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.18), transparent 80%)`,
          zIndex: 1,
        }}
      />
      <div style={innerStyle}>{children}</div>
    </div>
  );
}

export default function WhyUsClient() {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedPillar, setExpandedPillar] = useState(null);
  const [activeCodeTab, setActiveCodeTab] = useState('culture');

  const stats = [
    { label: 'Technical Debt', value: '0%', sub: 'Dedicated Refactor Sprints', icon: <ShieldCheck size={20} color="#38BDF8" /> },
    { label: 'Remote Autonomy', value: '100%', sub: 'Async-First Workflow', icon: <Globe size={20} color="#34D399" /> },
    { label: 'Learning Budget', value: '$3,000', sub: 'Per Engineer / Year', icon: <Rocket size={20} color="#818CF8" /> },
    { label: 'Senior Squad Ratio', value: '94%', sub: 'Elite Architect Team', icon: <Award size={20} color="#F43F5E" /> },
  ];

  const pillars = [
    {
      id: 'squad',
      category: 'craftsmanship',
      title: 'Top 1% Engineering Squad',
      desc: 'Work alongside elite Next.js 15, React 19, Python, and AI architects who prioritize quality, clean code patterns, and craftsmanship.',
      image: '/images/why-us/engineering_squad.jpg',
      icon: <Award size={24} color="#38BDF8" />,
      badge: 'CRAFTSMANSHIP & RIGOR',
      highlights: [
        'Clean Code Architecture & Pair Code Reviews',
        'Modern Tech Stack (Next.js 15, React 19, TypeScript 5)',
        'Zero-hack policy: quality over speed',
        'Direct collaboration with senior architects'
      ]
    },
    {
      id: 'remote',
      category: 'flexibility',
      title: 'Remote-First Flexibility',
      desc: 'Enjoy true asynchronous workflows with 100% remote flexibility, flexible core hours, and absolute respect for personal time.',
      image: '/images/why-us/remote_flexibility.jpg',
      icon: <Globe size={24} color="#34D399" />,
      badge: 'ASYNC WORKFLOWS',
      highlights: [
        '100% Global Remote Flexibility',
        'Asynchronous communication via Slack & Notion',
        'Flexible working hours tailored to your timezone',
        'No useless status meetings or micromanagement'
      ]
    },
    {
      id: 'pay',
      category: 'compensation',
      title: 'Competitive Global Pay',
      desc: 'Top tier compensation, annual profit share bonuses, premium hardware stipends, and comprehensive global health coverage.',
      image: '/images/why-us/global_pay.jpg',
      icon: <Gem size={24} color="#818CF8" />,
      badge: 'TIER-1 COMPENSATION',
      highlights: [
        'USD Top-Market Base Salary',
        'Annual Profit-Sharing & Performance Bonuses',
        '$2,500 Workstation & Apple Hardware Stipend',
        'Comprehensive Medical & Health Coverage'
      ]
    },
    {
      id: 'growth',
      category: 'growth',
      title: 'Continuous Career Growth',
      desc: 'Dedicated annual learning budgets ($3,000/yr per engineer) for certifications, international tech conferences, and courses.',
      image: '/images/why-us/career_growth.jpg',
      icon: <Rocket size={24} color="#F43F5E" />,
      badge: 'CAREER ADVANCEMENT',
      highlights: [
        '$3,000/yr Individual Learning Budget',
        'Sponsorship for AWS/GCP & React Certifications',
        'Tickets to Next.js & AI Global Conferences',
        'Defined Staff/Principal Engineer Career Tracks'
      ]
    }
  ];

  const comparisons = [
    {
      feature: 'Codebase Quality & Refactoring',
      traditional: 'Endless technical debt, rushed hotfixes, legacy spaghetti code.',
      zeenrah: 'Zero technical debt policy, dedicated refactor sprints, strict clean code standard.'
    },
    {
      feature: 'Work Autonomy & Hours',
      traditional: 'Mandatory office hours, micromanaged timesheets, daily 60-min standups.',
      zeenrah: '100% Async-first flexibility, outcome-driven autonomy, 0 useless meetings.'
    },
    {
      feature: 'Tooling & Hardware',
      traditional: 'Outdated laptops, restricted permissions, slow CI/CD build runners.',
      zeenrah: '$2,500 M3 Max MacBook stipend, Copilot Enterprise, ultra-fast CI/CD pipeline.'
    },
    {
      feature: 'Career Growth & Stipends',
      traditional: 'Fixed yearly caps, no budget for conferences or external learning.',
      zeenrah: '$3,000/yr learning stipend per engineer + full certification reimbursements.'
    }
  ];

  const filteredPillars = activeTab === 'all'
    ? pillars
    : pillars.filter(p => p.category === activeTab);

  const codeSnippets = {
    culture: `// Zeenrah Engineering Culture Manifest
export const engineeringValues = {
  technicalDebt: "ZERO_TOLERANCE",
  codeReviews: "PEER_LEARNING_ORIENTED",
  architecture: "MODERN_SCALABLE_MODULAR",
  workLifeBalance: {
    overtime: false,
    asyncCommunication: true,
    flexibleHours: true
  },
  tooling: ["Next.js 15", "React 19", "TypeScript", "TailwindCSS", "AI Agents"]
};`,
    stack: `{
  "name": "@zeenrah/core-platform",
  "version": "2026.1.0",
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "typescript": "^5.7.0",
    "framer-motion": "^12.0.0",
    "tailwindcss": "^4.0.0",
    "@ai-sdk/openai": "^1.0.0"
  },
  "scripts": {
    "test": "vitest run --coverage",
    "typecheck": "tsc --noEmit",
    "lint": "eslint . --max-warnings 0"
  }
}`,
    perks: `// Developer Experience & Benefits Config
export function getDeveloperPerks(engineerRole) {
  return {
    hardwareStipend: "$2,500 Apple M-Series Laptop",
    learningBudget: "$3,000 / year (Conferences & Courses)",
    remoteFlexibility: "100% Global Remote",
    profitSharing: "Annual Equity & Revenue Share",
    healthInsurance: "Premium Global Health Plan",
    unlimitedPTO: true
  };
}`
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: 'var(--bg-base)', overflow: 'hidden' }}
    >
      {/* ═══════════════════════════════════════════════════════════════
          1. HERO HEADER SECTION WITH AMBIENT PARTICLES & DYNAMIC GLOW
          ═══════════════════════════════════════════════════════════════ */}
      <section
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
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
        <div className="tech-grid-pattern" />

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1240px', margin: '0 auto' }}>
          {/* Top Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE_CURVE }}
            className="pill-glow-pulse"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.45rem 1.4rem',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              color: '#0284c7',
              fontWeight: '800',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              border: '1px solid rgba(56, 189, 248, 0.35)'
            }}
          >
            <Sparkles size={16} color="#38BDF8" />
            <span>WHY ZEENRAH TECHNOLOGIES</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE_CURVE }}
            style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
              fontWeight: '900',
              marginBottom: '1.25rem',
              letterSpacing: '-0.04em',
              lineHeight: '1.12',
              color: 'var(--text-heading)'
            }}
          >
            The Developer-First{' '}
            <span className="text-gradient-cyan-shimmer">
              Engineering Culture
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE_CURVE }}
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-body)',
              maxWidth: '720px',
              margin: '0 auto 3rem auto',
              lineHeight: '1.7',
              fontWeight: '500'
            }}
          >
            We build software the right way — with zero technical debt, modern tooling, and absolute respect for developer autonomy.
          </motion.p>

          {/* Key Stat Cards Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASE_CURVE }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
              maxWidth: '1060px',
              margin: '0 auto'
            }}
          >
            {stats.map((st, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <SpotlightCard
                  style={{
                    padding: '1.5rem 1.25rem',
                    backgroundColor: 'var(--bg-card-glass)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid var(--border-card)',
                    borderRadius: '16px',
                    textAlign: 'left',
                    boxShadow: 'var(--shadow-card)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {st.label}
                    </span>
                    <div style={{ padding: '0.4rem', borderRadius: '10px', backgroundColor: 'var(--primary-light)' }}>
                      {st.icon}
                    </div>
                  </div>
                  <div style={{ fontSize: '2.1rem', fontWeight: '900', color: 'var(--text-heading)', letterSpacing: '-0.03em', lineHeight: '1' }}>
                    {st.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.4rem', fontWeight: '600' }}>
                    {st.sub}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. CORE PILLARS GRID WITH IMAGE HEADERS & HOVER TRANSITIONS
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
              OUR CORE PILLARS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '900', color: 'var(--text-heading)' }}
            >
              Built for Engineers, by Engineers
            </motion.h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {[
              { id: 'all', label: 'All Pillars' },
              { id: 'craftsmanship', label: 'Craftsmanship' },
              { id: 'flexibility', label: 'Flexibility' },
              { id: 'compensation', label: 'Compensation' },
              { id: 'growth', label: 'Career Growth' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tech-tab ${activeTab === tab.id ? 'active' : ''}`}
                style={{ transition: 'all 0.3s ease' }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Pillars Cards Grid */}
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredPillars.map((p, idx) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE_CURVE }}
                  whileHover={{ y: -10 }}
                >
                  <SpotlightCard
                    style={{
                      height: '100%',
                      backgroundColor: 'var(--bg-card)',
                      borderRadius: '24px',
                      border: '1px solid var(--border-card)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-card)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Image Header with Badge Overlay */}
                    <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden', backgroundColor: '#0F172A' }}>
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        style={{
                          objectFit: 'cover',
                          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                          filter: 'brightness(0.95)'
                        }}
                        className="pillar-card-img"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 60%)'
                        }}
                      />
                      
                      {/* Top Badge */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '1rem',
                          left: '1rem',
                          padding: '0.35rem 0.85rem',
                          backgroundColor: 'rgba(15, 23, 42, 0.75)',
                          backdropFilter: 'blur(12px)',
                          WebkitBackdropFilter: 'blur(12px)',
                          color: '#38BDF8',
                          fontSize: '0.7rem',
                          fontWeight: '800',
                          letterSpacing: '0.08em',
                          borderRadius: '30px',
                          border: '1px solid rgba(56, 189, 248, 0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem'
                        }}
                      >
                        {p.icon}
                        <span>{p.badge}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div style={{ padding: '2rem', flex: '1 1 0%', display: 'flex', flexDirection: 'column' }}>
                      <h3
                        style={{
                          fontSize: '1.3rem',
                          fontWeight: '800',
                          color: 'var(--text-heading)',
                          marginBottom: '0.85rem',
                          lineHeight: '1.3'
                        }}
                      >
                        {p.title}
                      </h3>

                      <p
                        style={{
                          color: 'var(--text-body)',
                          fontSize: '0.95rem',
                          lineHeight: '1.65',
                          marginBottom: '1.5rem',
                          flex: '1 1 0%'
                        }}
                      >
                        {p.desc}
                      </p>

                      {/* Expandable Feature List Toggle */}
                      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                        <button
                          onClick={() => setExpandedPillar(expandedPillar === p.id ? null : p.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#0284c7',
                            fontWeight: '700',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            padding: 0
                          }}
                        >
                          <span>{expandedPillar === p.id ? 'Hide Details' : 'Key Highlights'}</span>
                          <ChevronRight
                            size={16}
                            style={{
                              transform: expandedPillar === p.id ? 'rotate(90deg)' : 'rotate(0deg)',
                              transition: 'transform 0.3s ease'
                            }}
                          />
                        </button>

                        <AnimatePresence>
                          {expandedPillar === p.id && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              style={{
                                marginTop: '1rem',
                                listStyle: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.6rem',
                                overflow: 'hidden'
                              }}
                            >
                              {p.highlights.map((h, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-body)' }}>
                                  <CheckCircle2 size={16} color="#34D399" style={{ flexShrink: 0, marginTop: '2px' }} />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. INTERACTIVE CODE & CULTURE TERMINAL PREVIEW
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-hero)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
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
                backgroundColor: 'rgba(56, 189, 248, 0.12)',
                color: '#0284c7',
                fontWeight: '800',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                borderRadius: '50px',
                marginBottom: '1rem',
                border: '1px solid rgba(56, 189, 248, 0.35)'
              }}
            >
              ENGINEERING SPECS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '900', color: 'var(--text-heading)' }}
            >
              Transparent Code & Operating Principles
            </motion.h2>
          </div>

          {/* IDE Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              backgroundColor: '#0F172A',
              borderRadius: '20px',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              boxShadow: '0 25px 60px rgba(15, 23, 42, 0.35)',
              overflow: 'hidden'
            }}
          >
            {/* IDE Header Bar */}
            <div style={{ backgroundColor: '#1E293B', padding: '0.85rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(148, 163, 184, 0.15)' }}>
              {/* Traffic Light Dots */}
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                <span style={{ marginLeft: '1rem', color: '#94A3B8', fontSize: '0.8rem', fontFamily: 'monospace', fontWeight: '600' }}>
                  zeenrah-engineering-config.ts
                </span>
              </div>

              {/* IDE Tabs */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[
                  { id: 'culture', label: 'Culture.config.ts', icon: <Terminal size={14} /> },
                  { id: 'stack', label: 'Stack.json', icon: <Layers size={14} /> },
                  { id: 'perks', label: 'Perks.ts', icon: <Code2 size={14} /> },
                ].map(t => (
                  <button
                    key={t.id}
                    onClick={() => setActiveCodeTab(t.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: activeCodeTab === t.id ? '#334155' : 'transparent',
                      color: activeCodeTab === t.id ? '#38BDF8' : '#94A3B8',
                      fontSize: '0.775rem',
                      fontFamily: 'monospace',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {t.icon}
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Code Body */}
            <div style={{ padding: '2rem', overflowX: 'auto', backgroundColor: '#090D16' }}>
              <pre style={{ margin: 0, fontFamily: 'Consolas, Monaco, "Fira Code", monospace', fontSize: '0.925rem', lineHeight: '1.7', color: '#E2E8F0' }}>
                <code>{codeSnippets[activeCodeTab]}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. TRADITIONAL TECH VS ZEENRAH CULTURE COMPARISON TABLE
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 0' }}>
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
              THE DIFFERENCE
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '900', color: 'var(--text-heading)' }}
            >
              Traditional Agencies vs. Zeenrah Squad
            </motion.h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {comparisons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <SpotlightCard
                  style={{
                    padding: '1.75rem 2rem',
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '20px',
                    border: '1px solid var(--border-card)',
                    boxShadow: 'var(--shadow-card)'
                  }}
                >
                  <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '1.25rem' }}>
                    {item.feature}
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {/* Traditional */}
                    <div style={{ padding: '1rem 1.25rem', backgroundColor: 'rgba(239, 68, 68, 0.05)', borderRadius: '14px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#EF4444', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.4rem' }}>
                        Traditional Tech Corporate
                      </span>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                        {item.traditional}
                      </p>
                    </div>

                    {/* Zeenrah */}
                    <div style={{ padding: '1rem 1.25rem', backgroundColor: 'rgba(56, 189, 248, 0.08)', borderRadius: '14px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                        <Zap size={14} color="#0284c7" />
                        Zeenrah Engineering Standard
                      </span>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-heading)', fontWeight: '600', lineHeight: '1.6' }}>
                        {item.zeenrah}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. CALL TO ACTION SECTION
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 0 7rem 0', backgroundColor: 'var(--bg-hero)', borderTop: '1px solid var(--border-subtle)', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE_CURVE }}
            className="glass-container"
            style={{ padding: '4rem 2.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
          >
            <div className="ambient-blob-1" style={{ top: '-20%', left: '30%' }} />

            <div style={{ display: 'inline-flex', padding: '0.4rem 1.2rem', backgroundColor: 'rgba(56, 189, 248, 0.12)', color: '#0284c7', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', borderRadius: '50px', marginBottom: '1.5rem', border: '1px solid rgba(56, 189, 248, 0.35)' }}>
              JOIN THE SQUAD
            </div>

            <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: '900', color: 'var(--text-heading)', marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
              Ready to Craft <span className="text-gradient-cyan-shimmer">World-Class Software?</span>
            </h2>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-body)', maxWidth: '620px', margin: '0 auto 2.5rem auto', lineHeight: '1.7', fontWeight: '500' }}>
              Explore our current open positions across Next.js, React 19, iOS, Cloud DevOps, and AI engineering.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/careers/job-openings"
                  className="btn btn-primary"
                  style={{
                    padding: '1.1rem 2.75rem',
                    fontSize: '0.95rem',
                    borderRadius: '50px',
                    boxShadow: '0 0 30px rgba(56, 189, 248, 0.45)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}
                >
                  <Briefcase size={18} />
                  <span>VIEW OPEN POSITIONS</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="btn btn-outline"
                  style={{
                    padding: '1.1rem 2.25rem',
                    fontSize: '0.95rem',
                    borderRadius: '50px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}
                >
                  <span>TALK TO OUR TEAM</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
