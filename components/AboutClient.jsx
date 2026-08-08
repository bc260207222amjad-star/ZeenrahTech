'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import {
  Target,
  Eye,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Zap,
  Award,
  CheckCircle2,
  Code2,
  Rocket,
  Users,
  Lock,
  Layers,
  Activity,
  Sparkles,
  ChevronRight,
  Terminal,
  Server
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

  return (
    <div
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...style,
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
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
}

// Animated Live Counter on Scroll into view with smooth decimal & integer handling
function AnimatedCounter({ targetValue, suffix = "", duration = 2.2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const numStr = String(targetValue);
  const hasDecimal = numStr.includes('.');
  const decimals = hasDecimal ? numStr.split('.')[1].length : 0;
  const targetNum = parseFloat(numStr) || 0;

  const [displayValue, setDisplayValue] = useState(() => (hasDecimal ? (0).toFixed(decimals) : "0"));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, targetNum, {
      duration: duration,
      ease: [0.16, 1, 0.3, 1], // Smooth Apple-style ease-out physics curve
      onUpdate(latest) {
        if (hasDecimal) {
          setDisplayValue(latest.toFixed(decimals));
        } else {
          setDisplayValue(Math.round(latest).toString());
        }
      }
    });

    return () => controls.stop();
  }, [isInView, targetNum, hasDecimal, decimals, duration]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

// Sequential Live Timeline Stepper:
// 2018 appears -> Line leaves 2018 slowly -> 2020 smoothly appears -> Line leaves 2020 -> 2023 smoothly appears -> Line leaves 2023 -> 2026 smoothly appears
function SequentialMilestoneTimeline({ milestones, activeMilestoneIdx, setActiveMilestoneIdx }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const [revealedStep, setRevealedStep] = useState(0); // 0: 2018, 1: 2020, 2: 2023, 3: 2026
  const [animatingSegment, setAnimatingSegment] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const startSequence = () => {
    setIsPlaying(true);
    setRevealedStep(0);
    setActiveMilestoneIdx(0);
    setAnimatingSegment(0); // Line 2018 -> 2020 starts drawing

    // Line 0 travels slowly to 2020 (1800ms)
    setTimeout(() => {
      setRevealedStep(1);
      setActiveMilestoneIdx(1);
      setAnimatingSegment(1); // Line 2020 -> 2023 starts drawing

      // Line 1 travels slowly to 2023 (3600ms total)
      setTimeout(() => {
        setRevealedStep(2);
        setActiveMilestoneIdx(2);
        setAnimatingSegment(2); // Line 2023 -> 2026 starts drawing

        // Line 2 travels slowly to 2026 (5400ms total)
        setTimeout(() => {
          setRevealedStep(3);
          setActiveMilestoneIdx(3);
          setAnimatingSegment(-1); // Sequence complete
          setIsPlaying(false);
        }, 1800);
      }, 1800);
    }, 1800);
  };

  useEffect(() => {
    if (isInView) {
      startSequence();
    }
  }, [isInView]);

  const handleNodeClick = (idx) => {
    setRevealedStep(idx);
    setActiveMilestoneIdx(idx);
    setAnimatingSegment(-1);
  };

  return (
    <div ref={containerRef} style={{ width: '100%', margin: '2rem 0 3.5rem 0', position: 'relative' }}>
      {/* Replay Controls & Live Status Indicator */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
        <button
          onClick={startSequence}
          disabled={isPlaying}
          style={{
            padding: '0.45rem 1.25rem',
            borderRadius: '50px',
            background: 'var(--bg-card)',
            border: '1px solid var(--primary-border)',
            color: 'var(--primary)',
            fontSize: '0.825rem',
            fontWeight: '800',
            cursor: isPlaying ? 'not-allowed' : 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: 'var(--shadow-card)',
            transition: 'all 0.3s ease',
            opacity: isPlaying ? 0.6 : 1
          }}
        >
          <span>REPLAY TIMELINE FLOW</span>
          <span style={{ fontSize: '1rem' }}>↺</span>
        </button>

        {isPlaying && (
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: '800',
              color: '#38BDF8',
              letterSpacing: '0.05em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              textTransform: 'uppercase'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38BDF8', animation: 'blink 0.8s infinite' }} />
            Drawing Laser Stream...
          </span>
        )}
      </div>

      {/* Sequential Timeline Stepper Container */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          maxWidth: '980px',
          margin: '0 auto',
          padding: '0 1rem'
        }}
      >
        {milestones.map((m, idx) => {
          const isNodeRevealed = revealedStep >= idx;
          const isActive = activeMilestoneIdx === idx;

          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                flex: idx < milestones.length - 1 ? 1 : 'none',
                position: 'relative'
              }}
            >
              {/* FIXED BOUNDING CONTAINER (Eliminates any layout jitter) */}
              <div style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 10 }}>
                {/* NODE CIRCLE (Silky Smooth Fade & Growth when revealed) */}
                <motion.div
                  onClick={() => isNodeRevealed && handleNodeClick(idx)}
                  initial={{ scale: idx === 0 ? 1 : 0.3, opacity: idx === 0 ? 1 : 0 }}
                  animate={{
                    scale: isActive ? 1.25 : isNodeRevealed ? 1 : 0.3,
                    opacity: isNodeRevealed ? 1 : 0,
                    boxShadow: isActive
                      ? '0 0 35px rgba(56, 189, 248, 0.95), 0 0 0 10px rgba(56, 189, 248, 0.2)'
                      : isNodeRevealed
                      ? '0 0 18px rgba(56, 189, 248, 0.35)'
                      : 'none'
                  }}
                  transition={{
                    duration: 1.0,
                    ease: [0.16, 1, 0.3, 1] // Smooth Apple-style ease-out curve
                  }}
                  className={`milestone-node ${isActive ? 'active' : ''}`}
                  style={{
                    backgroundColor: isActive ? 'var(--gradient-primary)' : 'var(--bg-card)',
                    borderColor: '#38BDF8',
                    color: isActive ? '#FFFFFF' : '#0284c7',
                    cursor: isNodeRevealed ? 'pointer' : 'default',
                    pointerEvents: isNodeRevealed ? 'auto' : 'none',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    fontWeight: '900'
                  }}
                >
                  {m.year}
                </motion.div>
              </div>

              {/* CONNECTOR LINE SEGMENT (No unprogressed background line) */}
              {idx < milestones.length - 1 && (
                <div
                  style={{
                    flex: 1,
                    height: '6px',
                    backgroundColor: 'transparent',
                    position: 'relative',
                    margin: '0 6px',
                    borderRadius: '6px',
                    overflow: 'hidden'
                  }}
                >
                  {/* Progressive Line that leaves circle and grows left -> right */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: revealedStep > idx ? 1 : (animatingSegment === idx ? 1 : 0)
                    }}
                    transition={{
                      duration: 1.8,
                      ease: [0.25, 0.1, 0.25, 1.0]
                    }}
                    style={{
                      height: '100%',
                      width: '100%',
                      background: 'linear-gradient(90deg, #38BDF8 0%, #60A5FA 50%, #818CF8 100%)',
                      transformOrigin: 'left center',
                      borderRadius: '6px',
                      boxShadow: '0 0 20px rgba(56, 189, 248, 0.9)'
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Interactive Milestone Carousel Component (Without Side Arrow Buttons)
function MilestoneCarousel({ milestones, activeIdx, setActiveIdx }) {
  const [direction, setDirection] = useState(1);
  const prevActiveRef = useRef(activeIdx);

  useEffect(() => {
    if (activeIdx !== prevActiveRef.current) {
      setDirection(activeIdx > prevActiveRef.current ? 1 : -1);
      prevActiveRef.current = activeIdx;
    }
  }, [activeIdx]);

  const activeMilestone = milestones[activeIdx] || milestones[0];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.96
    })
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
      {/* Carousel Sliding Area */}
      <div style={{ width: '100%', overflow: 'hidden', padding: '0.5rem 0' }}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={activeIdx}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SpotlightCard style={{ padding: '3.5rem 2.5rem', textAlign: 'center', borderColor: '#38BDF8' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.45rem 1.4rem',
                  backgroundColor: 'rgba(56, 189, 248, 0.12)',
                  color: '#0284c7',
                  fontWeight: '900',
                  fontSize: '1.25rem',
                  borderRadius: '50px',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                <Sparkles size={18} />
                <span>MILESTONE {activeIdx + 1} OF {milestones.length} — YEAR {activeMilestone.year}</span>
              </div>

              <h3
                style={{
                  fontSize: '2.1rem',
                  fontWeight: '900',
                  color: 'var(--text-heading)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em'
                }}
              >
                {activeMilestone.title}
              </h3>

              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-body)',
                  lineHeight: '1.8',
                  maxWidth: '680px',
                  margin: '0 auto 2rem auto',
                  fontWeight: '500'
                }}
              >
                {activeMilestone.desc}
              </p>

              {/* Milestone Key Highlights Pill Bar */}
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.825rem', fontWeight: '800', padding: '0.35rem 0.9rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '20px', border: '1px solid var(--border-card)' }}>
                  ✓ Production Excellence
                </span>
                <span style={{ fontSize: '0.825rem', fontWeight: '800', padding: '0.35rem 0.9rem', backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#0284c7', borderRadius: '20px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                  ✦ Scalable Architecture
                </span>
                <span style={{ fontSize: '0.825rem', fontWeight: '800', padding: '0.35rem 0.9rem', backgroundColor: 'rgba(52, 211, 153, 0.1)', color: '#059669', borderRadius: '20px', border: '1px solid rgba(52, 211, 153, 0.3)' }}>
                  ★ Enterprise Verified
                </span>
              </div>
            </SpotlightCard>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Pagination Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginTop: '2rem' }}>
        {milestones.map((m, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Go to year ${m.year}`}
              style={{
                width: isActive ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: isActive ? '#38BDF8' : 'var(--border-subtle)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: isActive ? '0 0 12px rgba(56, 189, 248, 0.6)' : 'none'
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function AboutClient({ about }) {
  const { heroTitle, heroSubtitle, missionTitle, missionText, visionTitle, visionText, milestones } = about;

  // Active milestone state for interactive timeline & carousel
  const [activeMilestoneIdx, setActiveMilestoneIdx] = useState(milestones.length - 1);

  // Active process step for How We Work section
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const keyMetrics = [
    { label: "Software Products Shipped", val: 120, suffix: "+", icon: <Rocket size={24} color="#38BDF8" /> },
    { label: "Client Retention Rate", val: 99.9, suffix: "%", icon: <ShieldCheck size={24} color="#34D399" /> },
    { label: "Senior Full-Stack Engineers", val: 50, suffix: "+", icon: <Users size={24} color="#818CF8" /> },
    { label: "Years Engineering Excellence", val: 8, suffix: "+", icon: <Award size={24} color="#F59E0B" /> },
  ];

  const corePillars = [
    {
      title: "Technical Rigor & Clean Code",
      desc: "Every line of code is structured with modular design patterns, strict TypeScript typing, and automated unit/integration test coverage.",
      icon: <Code2 size={32} color="#38BDF8" />,
      tag: "ARCHITECTURAL INTEGRITY"
    },
    {
      title: "Agile Speed & Transparency",
      desc: "2-week rapid sprint releases, direct real-time developer communication, and complete visibility into code repositories & staging deployments.",
      icon: <Zap size={32} color="#818CF8" />,
      tag: "HIGH VELOCITY"
    },
    {
      title: "Zero-Trust Enterprise Security",
      desc: "Built-in SOC2 & HIPAA compliant workflows, end-to-end payload encryption, and automated vulnerability scanning across all pipelines.",
      icon: <Lock size={32} color="#34D399" />,
      tag: "BANK-GRADE SECURITY"
    },
    {
      title: "Scalable Cloud & AI Engines",
      desc: "Custom LLM integrations, microservices orchestration, and edge deployment architectures built for high-concurrency enterprise scale.",
      icon: <Cpu size={32} color="#F43F5E" />,
      tag: "NEXT-GEN TECH"
    }
  ];

  const processSteps = [
    {
      id: 0,
      number: "01",
      title: "Discovery & System Design",
      desc: "We perform deep technical audits, design RFC system architectures, evaluate data models, and map complete engineering specifications before writing the first line of code.",
      highlights: ["Domain Driven Design", "API Blueprint & Schema Definition", "Cloud Infrastructure Cost Modeling"],
      icon: <Terminal size={22} />,
      codeSnippet: `// Step 1: System Architecture Blueprint
export const systemSpec = {
  architecture: 'Distributed Microservices',
  database: 'PostgreSQL + Redis Cache',
  security: 'OAuth2 + OIDC + mTLS',
  latencyTarget: '< 50ms Global'
};`
    },
    {
      id: 1,
      number: "02",
      title: "Agile Development Sprints",
      desc: "Senior engineering squads build features in bi-weekly sprints with continuous integration, automated PR code reviews, and staging demo builds.",
      highlights: ["TypeScript / React 19 / Next.js 15", "Micro-frontend Modules", "100% Type-Safe API Layer"],
      icon: <Code2 size={22} />,
      codeSnippet: `// Step 2: High Velocity Feature Sprint
async function executeSprintFeature(req) {
  const validated = schema.parse(req.body);
  const result = await processPipeline(validated);
  return { status: 200, data: result };
}`
    },
    {
      id: 2,
      number: "03",
      title: "Automated Testing & Security Audit",
      desc: "Rigorous automated testing suites, load testing up to 100k requests/sec, and penetration testing ensure zero regressions and maximum stability.",
      highlights: ["End-to-End Cypress/Playwright", "OWASP Security Audits", "Sub-50ms Response Optimization"],
      icon: <ShieldCheck size={22} />,
      codeSnippet: `// Step 3: Security & Stability Assertion
describe('Enterprise Production Suite', () => {
  it('passes OWASP top 10 & 100k req/s load test', async () => {
    const res = await testLoadPerformance({ reqPerSec: 100000 });
    expect(res.p99Latency).toBeLessThan(50);
  });
});`
    },
    {
      id: 3,
      number: "04",
      title: "Global Edge Deployment & Support",
      desc: "Zero-downtime blue/green deployments on global CDN edge networks with 24/7 telemetry monitoring, SLA guarantees, and ongoing support.",
      highlights: ["Kubernetes & Docker Multi-Region", "Real-time Telemetry & APM", "99.99% Uptime Guarantee"],
      icon: <Server size={22} />,
      codeSnippet: `// Step 4: Edge Deployment Config
name: Production Edge Pipeline
on: push: branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm run deploy:production`
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
          padding: '6rem 0 5rem 0',
          borderBottom: '1px solid var(--border-subtle)',
          overflow: 'hidden'
        }}
      >
        {/* Background Ambient Particles & Tech Grid Overlay */}
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
        <div className="tech-grid-pattern" />

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          {/* Badge */}
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
            <span>ABOUT ZEENRAH TECHNOLOGIES</span>
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
              color: 'var(--text-heading)',
            }}
          >
            {heroTitle.split(' ').slice(0, -2).join(' ')}{' '}
            <span className="text-gradient-cyan-shimmer">
              {heroTitle.split(' ').slice(-2).join(' ')}
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
              margin: '0 auto 3rem auto',
              lineHeight: '1.7',
              fontWeight: '500'
            }}
          >
            {heroSubtitle}
          </motion.p>

          {/* LIVE METRICS BAR WITH COUNTER TRANSITIONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE_CURVE }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              marginTop: '2rem'
            }}
          >
            {keyMetrics.map((m, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  padding: '1.5rem 1.25rem',
                  borderRadius: '16px',
                  border: '1px solid var(--border-card)',
                  boxShadow: 'var(--shadow-card)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.85rem'
                  }}
                >
                  {m.icon}
                </div>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: '900',
                    color: 'var(--text-heading)',
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}
                >
                  <AnimatedCounter targetValue={m.val} suffix={m.suffix} />
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                  {m.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. MISSION & VISION SECTION WITH 3D CURSOR SPOTLIGHT CARDS
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
                padding: '0.35rem 1.1rem',
                backgroundColor: 'rgba(71, 85, 105, 0.08)',
                color: 'var(--primary)',
                fontWeight: '800',
                fontSize: '0.8rem',
                letterSpacing: '0.06em',
                borderRadius: '50px',
                marginBottom: '0.85rem',
                textTransform: 'uppercase'
              }}
            >
              PURPOSE & DIRECTION
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: '900', color: 'var(--text-heading)' }}
            >
              Driven by Innovation, <span className="text-gradient-cyan">Defined by Code</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '720px', margin: '0.8rem auto 0 auto', lineHeight: '1.65' }}
            >
              Our mission is to empower ambitious companies with scalable technology architectures that drive measurable business outcomes.
            </motion.p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {/* Mission Spotlight Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE_CURVE }}
            >
              <SpotlightCard style={{ padding: '2.75rem', height: '100%' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(71, 85, 105, 0.15) 0%, rgba(56, 189, 248, 0.15) 100%)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <Target size={34} color="var(--primary)" />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '1rem' }}>
                  {missionTitle}
                </h3>
                <p style={{ color: 'var(--text-body)', lineHeight: '1.75', fontSize: '1.025rem', marginBottom: '1.5rem' }}>
                  {missionText}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {["Scalable Architecture", "Clean Maintainable Code", "Zero Compromise Security"].map((chip, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        padding: '0.3rem 0.8rem',
                        backgroundColor: 'var(--primary-light)',
                        color: 'var(--primary)',
                        borderRadius: '20px',
                        border: '1px solid var(--border-card)'
                      }}
                    >
                      ✓ {chip}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Vision Spotlight Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE_CURVE }}
            >
              <SpotlightCard style={{ padding: '2.75rem', height: '100%' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(129, 140, 248, 0.15) 100%)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <Eye size={34} color="#38BDF8" />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '1rem' }}>
                  {visionTitle}
                </h3>
                <p style={{ color: 'var(--text-body)', lineHeight: '1.75', fontSize: '1.025rem', marginBottom: '1.5rem' }}>
                  {visionText}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {["Global Tech Partner", "AI & Next.js Pioneers", "Tier-1 Engineering"].map((chip, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        padding: '0.3rem 0.8rem',
                        backgroundColor: 'rgba(56, 189, 248, 0.1)',
                        color: '#0284c7',
                        borderRadius: '20px',
                        border: '1px solid rgba(56, 189, 248, 0.3)'
                      }}
                    >
                      ✦ {chip}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. CORE ENGINEERING PILLARS & CULTURE (SPOTLIGHT GRID)
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-hero)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pill-glow-pulse"
              style={{
                display: 'inline-block',
                padding: '0.4rem 1.2rem',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                color: '#0284c7',
                fontWeight: '800',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderRadius: '50px',
                marginBottom: '1rem',
                border: '1px solid rgba(56, 189, 248, 0.35)'
              }}
            >
              CORE CULTURAL PILLARS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '900', color: 'var(--text-heading)' }}
            >
              How We Build Enterprise Software
            </motion.h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2rem' }}>
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE_CURVE }}
              >
                <SpotlightCard style={{ padding: '2.25rem', height: '100%' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '0.725rem',
                      fontWeight: '800',
                      letterSpacing: '0.08em',
                      color: 'var(--text-muted)',
                      marginBottom: '1rem',
                    }}
                  >
                    {pillar.tag}
                  </div>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      backgroundColor: 'var(--primary-light)',
                      border: '1px solid var(--border-card)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: '1.65', margin: 0 }}>
                    {pillar.desc}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. INTERACTIVE GROWTH MILESTONES TIMELINE & CAROUSEL
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 0', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
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
                marginBottom: '0.8rem',
                border: '1px solid var(--primary-border)'
              }}
            >
              OUR JOURNEY & EVOLUTION
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: '900', color: 'var(--text-heading)' }}
            >
              Company Growth Milestones
            </motion.h2>
          </div>

          {/* Sequential Live Stepper Track (Initially Hides Unprogressed Circles & Lines) */}
          <SequentialMilestoneTimeline
            milestones={milestones}
            activeMilestoneIdx={activeMilestoneIdx}
            setActiveMilestoneIdx={setActiveMilestoneIdx}
          />

          {/* Interactive Milestone Carousel Section Below Circles */}
          <MilestoneCarousel
            milestones={milestones}
            activeIdx={activeMilestoneIdx}
            setActiveIdx={setActiveMilestoneIdx}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. "HOW WE BUILD" INTERACTIVE PROCESS & ARCHITECTURE LAB
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-hero)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'inline-block',
                padding: '0.35rem 1.1rem',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                color: '#0284c7',
                fontWeight: '800',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderRadius: '50px',
                marginBottom: '0.85rem'
              }}
            >
              ENGINEERING METHODOLOGY
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: '900', color: 'var(--text-heading)' }}
            >
              Our 4-Phase Software Lifecycle
            </motion.h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            {/* Left Column: Interactive Step Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {processSteps.map((step) => {
                const isActive = activeProcessStep === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveProcessStep(step.id)}
                    className={`process-step-btn ${isActive ? 'active' : ''}`}
                  >
                    <div className="step-num">{step.number}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '800', fontSize: '1.05rem', color: isActive ? 'var(--text-heading)' : 'var(--text-body)' }}>
                        {step.title}
                      </div>
                      <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        Phase {step.number} Protocol
                      </div>
                    </div>
                    <ChevronRight size={20} color={isActive ? '#38BDF8' : 'var(--text-muted)'} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Code & Architecture Preview Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProcessStep}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.4, ease: EASE_CURVE }}
              >
                <SpotlightCard style={{ padding: '2.5rem', backgroundColor: '#0F172A', color: '#F8FAFC', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
                      <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: '700', marginLeft: '0.5rem' }}>
                        {processSteps[activeProcessStep].title}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: '800', letterSpacing: '0.05em' }}>
                      PHASE {processSteps[activeProcessStep].number}
                    </span>
                  </div>

                  <p style={{ color: '#E2E8F0', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    {processSteps[activeProcessStep].desc}
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#38BDF8', letterSpacing: '0.05em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                      Core Deliverables:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {processSteps[activeProcessStep].highlights.map((h, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#CBD5E1' }}>
                          <CheckCircle2 size={16} color="#34D399" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Code snippet */}
                  <pre
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      padding: '1.25rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      fontSize: '0.825rem',
                      fontFamily: 'monospace',
                      color: '#38BDF8',
                      overflowX: 'auto'
                    }}
                  >
                    <code>{processSteps[activeProcessStep].codeSnippet}</code>
                  </pre>
                </SpotlightCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. CALL TO ACTION (CTA) SECTION WITH NEON GLOW BEAM
          ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE_CURVE }}
          >
            <div
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                borderRadius: '32px',
                padding: '4.5rem 2.5rem',
                textAlign: 'center',
                color: '#FFFFFF',
                boxShadow: '0 25px 60px rgba(15, 23, 42, 0.25)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                overflow: 'hidden'
              }}
            >
              {/* Glow overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '600px',
                  height: '400px',
                  background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                  pointerEvents: 'none'
                }}
              />

              <div style={{ position: 'relative', zIndex: 10 }}>
                <h2
                  style={{
                    fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                    fontWeight: '900',
                    lineHeight: '1.2',
                    marginBottom: '1.25rem',
                    letterSpacing: '-0.03em',
                    color: '#FFFFFF'
                  }}
                >
                  Ready to Architect Your Next Software Product?
                </h2>
                <p
                  style={{
                    fontSize: '1.15rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    maxWidth: '640px',
                    margin: '0 auto 2.5rem auto',
                    lineHeight: '1.7'
                  }}
                >
                  Partner with senior software engineers, AI architects, and DevOps leaders at Zeenrah Technologies to turn your vision into enterprise-grade reality.
                </p>

                <motion.div
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
                      boxShadow: '0 0 25px rgba(56, 189, 248, 0.5)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <span>START YOUR PROJECT WITH US</span>
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
