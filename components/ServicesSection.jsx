'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Cpu, Cloud, Palette, Users, ArrowRight } from 'lucide-react';

const EASE_CURVE = [0.22, 1, 0.36, 1];

function getServiceIcon(title = '', index = 0) {
  const t = title.toLowerCase();
  if (t.includes('web') || t.includes('app development')) return <Code2 size={30} color="var(--primary)" />;
  if (t.includes('mobile') || t.includes('ios') || t.includes('android')) return <Smartphone size={30} color="#38BDF8" />;
  if (t.includes('ai') || t.includes('machine learning') || t.includes('intelligence')) return <Cpu size={30} color="#818CF8" />;
  if (t.includes('cloud') || t.includes('devops') || t.includes('infrastructure')) return <Cloud size={30} color="#34D399" />;
  if (t.includes('ui') || t.includes('ux') || t.includes('design')) return <Palette size={30} color="#F472B6" />;
  if (t.includes('squad') || t.includes('team') || t.includes('dedicated')) return <Users size={30} color="#FBBF24" />;

  const icons = [
    <Code2 size={30} color="var(--primary)" />,
    <Smartphone size={30} color="#38BDF8" />,
    <Cpu size={30} color="#818CF8" />,
    <Cloud size={30} color="#34D399" />,
    <Palette size={30} color="#F472B6" />,
    <Users size={30} color="#FBBF24" />
  ];
  return icons[index % icons.length];
}

export default function ServicesSection({ services = [] }) {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Section Header with Staggered Scroll Entrance */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE_CURVE }}
            style={{
              display: 'inline-block',
              padding: '0.45rem 1.3rem',
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary)',
              fontWeight: '800',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              borderRadius: '50px',
              marginBottom: '1rem',
              border: '1px solid var(--primary-border)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            OUR CORE CAPABILITIES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE_CURVE }}
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '900',
              color: 'var(--text-heading)',
              lineHeight: '1.2',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Enterprise Software Engineering & <span className="text-gradient-cyan">AI Solutions</span>
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
            From Next.js web applications to cross-platform mobile apps, cloud DevOps infrastructure, and custom AI integrations — we build resilient software that scales.
          </motion.p>
        </div>

        {/* 6 Capabilities Grid with Scroll-Triggered Staggered Animations */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {services.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.12,
                ease: EASE_CURVE
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                backgroundColor: 'var(--bg-card)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '2.25rem',
                border: '1px solid var(--border-card)',
                boxShadow: 'var(--shadow-card)',
                cursor: 'pointer'
              }}
            >
              <div>
                {/* Crisp Vector SVG Icon Container */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(56, 189, 248, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    border: '1px solid var(--primary-border)',
                    transition: 'transform 0.3s ease, background-color 0.3s ease'
                  }}
                >
                  {getServiceIcon(item.title, index)}
                </div>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: '800',
                    color: 'var(--text-heading)',
                    marginBottom: '0.85rem',
                    lineHeight: '1.3',
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: 'var(--text-body)',
                    fontSize: '0.975rem',
                    lineHeight: '1.65',
                    marginBottom: '1.5rem',
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                  }}
                >
                  {item.desc}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {(item.tags || []).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        padding: '0.35rem 0.85rem',
                        backgroundColor: 'var(--primary-light)',
                        color: 'var(--primary)',
                        fontWeight: '700',
                        fontSize: '0.78rem',
                        borderRadius: '50px',
                        border: '1px solid var(--primary-border)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--primary)',
                    fontWeight: '800',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    letterSpacing: '0.04em'
                  }}
                >
                  <span>EXPLORE SERVICE</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


