'use client';

import { useRef, useState, useEffect } from 'react';

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
    }, 1200); // Resume auto-scroll 1.2s after interaction stops
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
    <section style={{ padding: '6rem 0', backgroundColor: '#0b0f19', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '0.45rem 1.3rem',
              backgroundColor: 'rgba(99, 102, 241, 0.12)',
              color: '#06b6d4',
              fontWeight: '800',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              borderRadius: '50px',
              marginBottom: '1rem',
              border: '1px solid rgba(99, 102, 241, 0.3)',
            }}
          >
            FEATURED CASE STUDIES
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '900',
              color: '#ffffff',
              lineHeight: '1.2',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
            }}
          >
            Engineered for <span className="text-gradient-cyan">High Scale & Latency</span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#cbd5e1',
              lineHeight: '1.65',
              maxWidth: '720px',
            }}
          >
            Explore how we partnered with global Fintech, HealthTech, E-Commerce, and Logistics leaders to deliver high-impact software products.
          </p>
        </div>
      </div>

      {/* Infinite Seamless Auto-Scrolling Carousel with Drag & Touch Support */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleUserInteractionStart}
        onTouchEnd={handleUserInteractionEnd}
        onWheel={handleUserInteractionStart}
        style={{
          display: 'flex',
          gap: '1.5rem',
          overflowX: 'auto',
          scrollBehavior: 'auto',
          padding: '0 2rem 1.5rem 2rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          cursor: 'grab',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              minWidth: '380px',
              maxWidth: '380px',
              backgroundColor: 'rgba(15, 23, 42, 0.65)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.35)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            {/* Image */}
            <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  pointerEvents: 'none',
                }}
              />
              {/* Metric Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '0.85rem',
                  right: '0.85rem',
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  backdropFilter: 'blur(12px)',
                  color: '#06b6d4',
                  fontWeight: '800',
                  fontSize: '0.75rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '50px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(6, 182, 212, 0.4)',
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
                    color: '#ffffff',
                    marginBottom: '0.65rem',
                    lineHeight: '1.35',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: '#cbd5e1',
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
                      backgroundColor: 'rgba(99, 102, 241, 0.15)',
                      color: '#cbd5e1',
                      fontWeight: '700',
                      fontSize: '0.72rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
