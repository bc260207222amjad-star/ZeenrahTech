'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const EASE_CURVE = [0.22, 1, 0.36, 1];

export default function TestimonialsSection({ testimonials = [] }) {
  const reviews = testimonials;

  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
            CLIENT ENDORSEMENTS
          </motion.div>

          {/* Spring Bouncing Staggered Heading */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.09,
                  delayChildren: 0.1
                }
              }
            }}
            className="text-gradient-cyan-shimmer"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '900',
              lineHeight: '1.25',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.35em',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            {['Trusted', 'by', 'CTOs', '&', 'Product', 'Leaders'].map((word, idx) => (
              <motion.span
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 55, scale: 0.75 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: 'spring',
                      damping: 10,
                      stiffness: 160,
                      bounce: 0.6
                    }
                  }
                }}
                whileHover={{
                  y: -8,
                  scale: 1.08,
                  transition: { type: 'spring', stiffness: 400, damping: 8 }
                }}
                style={{ display: 'inline-block', cursor: 'pointer' }}
              >
                {word}
              </motion.span>
            ))}
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
            See what engineering executives say about our delivery speed, architecture quality, and full-stack execution.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {reviews.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: EASE_CURVE }}
              whileHover={{
                y: -8,
                scale: 1.015,
                borderColor: 'rgba(56, 189, 248, 0.5)',
                boxShadow: '0 20px 40px rgba(56, 189, 248, 0.16)',
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              style={{
                backgroundColor: 'var(--bg-card)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '2.25rem',
                border: '1px solid var(--border-card)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <div>
                {/* 5 Stars SVG Vector Rating with Staggered Spring Grow Animation */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.25
                      }
                    }
                  }}
                  style={{ display: 'flex', gap: '0.35rem', marginBottom: '1.2rem' }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { scale: 0, opacity: 0, rotate: -30 },
                        visible: {
                          scale: 1,
                          opacity: 1,
                          rotate: 0,
                          transition: {
                            type: 'spring',
                            stiffness: 260,
                            damping: 12,
                            bounce: 0.65
                          }
                        }
                      }}
                      whileHover={{
                        scale: 1.4,
                        rotate: 15,
                        transition: { type: 'spring', stiffness: 400, damping: 10 }
                      }}
                      style={{ display: 'inline-block', cursor: 'pointer' }}
                    >
                      <Star size={20} fill="#F59E0B" color="#F59E0B" style={{ filter: 'drop-shadow(0 2px 6px rgba(245, 158, 11, 0.4))' }} />
                    </motion.div>
                  ))}
                </motion.div>

                <p
                  style={{
                    color: 'var(--text-body)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    fontStyle: 'italic',
                    marginBottom: '2rem',
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}
                >
                  "{item.quote}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    color: 'var(--text-on-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '900',
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 12px var(--primary-glow)'
                  }}
                >
                  {item.avatar || 'ZT'}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>
                    {item.author}
                  </h4>
                  <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

