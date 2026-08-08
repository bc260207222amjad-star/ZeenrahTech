'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Activity, ShieldCheck, Zap, Navigation, TrendingUp, Cpu, ShoppingBag, Radio } from 'lucide-react';

const EASE_CURVE = [0.22, 1, 0.36, 1];

function CaseStudyVisualizer({ item, index }) {
  const id = item.id || `p${index + 1}`;
  const title = (item.title || '').toLowerCase();

  // 1. FinTech Wealth Management Dashboard
  if (id === 'p1' || title.includes('fintech') || title.includes('wealth')) {
    return (
      <div style={{ position: 'relative', width: '100%', height: '220px', background: 'linear-gradient(135deg, #0b1329 0%, #111c38 100%)', padding: '1.25rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Activity size={16} color="#38BDF8" />
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#93C5FD', letterSpacing: '0.05em' }}>WEBSOCKET LIVE TICKER</span>
          </div>
          <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', background: 'rgba(52, 211, 153, 0.15)', color: '#34D399', borderRadius: '4px', fontWeight: '800', border: '1px solid rgba(52, 211, 153, 0.3)' }}>● CONNECTED (2ms)</span>
        </div>

        {/* Live Candlestick / Bar Chart Graphic */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '90px', padding: '0.5rem 0' }}>
          {[35, 55, 45, 75, 60, 85, 70, 95, 80, 110, 100, 130].map((h, i) => (
            <div key={i} style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
              <div
                style={{
                  width: '100%',
                  height: `${h}%`,
                  background: i >= 8 ? 'linear-gradient(180deg, #38BDF8 0%, #3B82F6 100%)' : 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '4px 4px 0 0',
                  boxShadow: i >= 8 ? '0 0 12px rgba(56, 189, 248, 0.4)' : 'none',
                  transition: 'height 0.4s ease'
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom ticker readout */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.6rem' }}>
          <div style={{ display: 'flex', gap: '1rem', color: '#94A3B8' }}>
            <span>BTC/USD <strong style={{ color: '#34D399' }}>$98,420 +4.2%</strong></span>
            <span>NVDA <strong style={{ color: '#38BDF8' }}>$142.10 +2.8%</strong></span>
          </div>
          <TrendingUp size={14} color="#34D399" />
        </div>
      </div>
    );
  }

  // 2. AI Diagnostic & Patient Portal System
  if (id === 'p2' || title.includes('ai') || title.includes('patient') || title.includes('health')) {
    return (
      <div style={{ position: 'relative', width: '100%', height: '220px', background: 'linear-gradient(135deg, #091e1d 0%, #0d2f2d 100%)', padding: '1.25rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cpu size={16} color="#34D399" />
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#6EE7B7', letterSpacing: '0.05em' }}>AI DIAGNOSTIC MODEL v4.2</span>
          </div>
          <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38BDF8', borderRadius: '4px', fontWeight: '800', border: '1px solid rgba(56, 189, 248, 0.3)' }}>99.4% CONFIDENCE</span>
        </div>

        {/* Neural Network Scanner Simulation */}
        <div style={{ position: 'relative', height: '90px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', border: '1px stroke rgba(52, 211, 153, 0.2)', padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '0.7rem', color: '#94A3B8' }}>DICOM SCANNER STATUS</span>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#FFFFFF' }}>HIPAA COMPLIANT ENCRYPTION</span>
          </div>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: '3px stroke #34D399', borderTopColor: 'transparent', animation: 'spin 4s linear infinite', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShieldCheck size={22} color="#34D399" />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.6rem', color: '#94A3B8' }}>
          <span>LATENCY: <strong>14ms</strong></span>
          <span>PIPELINE: <strong>RAG + OpenAi GPT-4o</strong></span>
        </div>
      </div>
    );
  }

  // 3. Enterprise E-Commerce Platform
  if (id === 'p3' || title.includes('commerce') || title.includes('store')) {
    return (
      <div style={{ position: 'relative', width: '100%', height: '220px', background: 'linear-gradient(135deg, #1e112a 0%, #2a173b 100%)', padding: '1.25rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShoppingBag size={16} color="#F472B6" />
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#FBCFE8', letterSpacing: '0.05em' }}>HEADLESS COMMERCE ENGINE</span>
          </div>
          <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', background: 'rgba(244, 114, 182, 0.15)', color: '#F472B6', borderRadius: '4px', fontWeight: '800', border: '1px solid rgba(244, 114, 182, 0.3)' }}>50,000 REQ/MIN</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(244, 114, 182, 0.2)' }}>
            <span style={{ fontSize: '0.7rem', color: '#94A3B8', display: 'block', marginBottom: '4px' }}>SUB-SECOND TTFB</span>
            <span style={{ fontSize: '1.2rem', fontWeight: '900', color: '#38BDF8' }}>42ms</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(244, 114, 182, 0.2)' }}>
            <span style={{ fontSize: '0.7rem', color: '#94A3B8', display: 'block', marginBottom: '4px' }}>GLOBAL GMV</span>
            <span style={{ fontSize: '1.2rem', fontWeight: '900', color: '#34D399' }}>$12.4M+</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.6rem', color: '#94A3B8' }}>
          <span>CACHE HIT: <strong style={{ color: '#F472B6' }}>99.8% Redis</strong></span>
          <Zap size={14} color="#F59E0B" />
        </div>
      </div>
    );
  }

  // 4. IoT Fleet Telematics
  return (
    <div style={{ position: 'relative', width: '100%', height: '220px', background: 'linear-gradient(135deg, #182210 0%, #203016 100%)', padding: '1.25rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Radio size={16} color="#A3E635" />
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#D9F99D', letterSpacing: '0.05em' }}>AWS IoT TELEMETRY NODE</span>
        </div>
        <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', background: 'rgba(163, 230, 53, 0.15)', color: '#A3E635', borderRadius: '4px', fontWeight: '800', border: '1px solid rgba(163, 230, 53, 0.3)' }}>5,000+ VEHICLES LIVE</span>
      </div>

      <div style={{ background: 'rgba(0,0,0,0.3)', height: '90px', borderRadius: '10px', border: '1px solid rgba(163, 230, 53, 0.2)', padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '0.7rem', color: '#94A3B8', display: 'block' }}>GPS VECTOR ROUTE TRACKER</span>
          <span style={{ fontSize: '0.88rem', fontWeight: '800', color: '#FFFFFF' }}>37.7749° N, 122.4194° W</span>
        </div>
        <div style={{ padding: '0.5rem', background: 'rgba(163, 230, 53, 0.2)', borderRadius: '50%' }}>
          <Navigation size={20} color="#A3E635" />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.6rem', color: '#94A3B8' }}>
        <span>FUEL EFFICIENCY: <strong style={{ color: '#A3E635' }}>+18.4%</strong></span>
        <span>STATUS: <strong style={{ color: '#34D399' }}>ACTIVE</strong></span>
      </div>
    </div>
  );
}

export default function PortfolioSection({ portfolio = [] }) {
  const scrollRef = useRef(null);
  const isInteracting = useRef(false);
  const resumeTimeout = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  // Triple the items to make the seamless infinite loop impossible to hit boundaries
  const items = [...portfolio, ...portfolio, ...portfolio];

  const handleUserInteractionStart = () => {
    isInteracting.current = true;
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
  };

  const handleUserInteractionEnd = () => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      isInteracting.current = false;
    }, 1500); // Resume auto-scroll 1.5s after interaction stops
  };

  // Manual Scroll Navigation
  const handleScrollLeft = () => {
    if (scrollRef.current) {
      handleUserInteractionStart();
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
      handleUserInteractionEnd();
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      handleUserInteractionStart();
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      handleUserInteractionEnd();
    }
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    handleUserInteractionStart();
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    startScrollLeft.current = scrollRef.current.scrollLeft;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
    handleUserInteractionEnd();
  };

  // Auto-scroll loop using requestAnimationFrame
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let rafId;

    const autoScroll = () => {
      if (container && !isInteracting.current) {
        container.scrollLeft += 1;

        // Calculate single set width (total scrollable area / 3)
        const setWidth = container.scrollWidth / 3;

        // Infinite loop seamless reset
        if (container.scrollLeft >= setWidth * 2) {
          container.scrollLeft -= setWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += setWidth;
        }
      }
      rafId = requestAnimationFrame(autoScroll);
    };

    rafId = requestAnimationFrame(autoScroll);
    return () => {
      cancelAnimationFrame(rafId);
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, []);

  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Section Header with Staggered Entrance & Interactive Navigation */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE_CURVE }}
            className="pill-glow-pulse"
            style={{
              display: 'inline-block',
              padding: '0.45rem 1.3rem',
              backgroundColor: 'rgba(56, 189, 248, 0.08)',
              color: '#0284c7',
              fontWeight: '800',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              borderRadius: '50px',
              marginBottom: '1rem',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            FEATURED CASE STUDIES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE_CURVE }}
            className="text-gradient-cyan-shimmer"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '900',
              lineHeight: '1.25',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Engineered for High Scale & Latency
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE_CURVE }}
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-body)',
              lineHeight: '1.65',
              maxWidth: '720px',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Explore how we partnered with global Fintech, HealthTech, E-Commerce, and Logistics leaders to deliver high-impact software products.
          </motion.p>

          {/* Interactive Glassmorphic Carousel Control Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE_CURVE }}
            style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}
          >
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(56, 189, 248, 0.15)', borderColor: '#38bdf8' }}
              whileTap={{ scale: 0.92 }}
              onClick={handleScrollLeft}
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-heading)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-card)',
                transition: 'all 0.2s ease'
              }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={22} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(56, 189, 248, 0.15)', borderColor: '#38bdf8' }}
              whileTap={{ scale: 0.92 }}
              onClick={handleScrollRight}
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-heading)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-card)',
                transition: 'all 0.2s ease'
              }}
              aria-label="Scroll right"
            >
              <ChevronRight size={22} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Infinite Seamless Auto-Scrolling Carousel with Interactive Hover & Drag */}
      <div
        ref={scrollRef}
        onMouseEnter={handleUserInteractionStart}
        onMouseLeave={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleUserInteractionStart}
        onTouchEnd={handleUserInteractionEnd}
        onWheel={handleUserInteractionStart}
        style={{
          display: 'flex',
          gap: '1.5rem',
          overflowX: 'auto',
          scrollBehavior: 'auto',
          padding: '1.75rem 2rem 2.25rem 2rem',
          margin: '-0.75rem 0 0 0',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          cursor: 'grab',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: EASE_CURVE }}
            whileHover={{
              y: -8,
              scale: 1.015,
              borderColor: 'rgba(56, 189, 248, 0.55)',
              boxShadow: '0 22px 45px rgba(56, 189, 248, 0.18)',
              transition: { duration: 0.3, ease: 'easeOut' }
            }}
            style={{
              minWidth: '380px',
              maxWidth: '380px',
              backgroundColor: 'var(--bg-card)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '1px solid var(--border-card)',
              boxShadow: 'var(--shadow-card)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0,
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            {/* Interactive Vector UI Visualizer Container */}
            <div style={{ position: 'relative' }}>
              <CaseStudyVisualizer item={item} index={index} />
              
              {/* Metric Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '0.85rem',
                  right: '0.85rem',
                  backgroundColor: 'rgba(5, 5, 5, 0.75)',
                  backdropFilter: 'blur(12px)',
                  color: '#FFFFFF',
                  fontWeight: '800',
                  fontSize: '0.75rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '50px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                {item.metric}
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: '800',
                    color: 'var(--text-heading)',
                    marginBottom: '0.65rem',
                    lineHeight: '1.35',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: 'var(--text-body)',
                    fontSize: '0.88rem',
                    lineHeight: '1.6',
                    marginBottom: '1.25rem',
                  }}
                >
                  {item.desc}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {(item.tags || []).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      padding: '0.25rem 0.65rem',
                      backgroundColor: 'var(--primary-light)',
                      color: 'var(--text-body)',
                      fontWeight: '700',
                      fontSize: '0.72rem',
                      borderRadius: '6px',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

