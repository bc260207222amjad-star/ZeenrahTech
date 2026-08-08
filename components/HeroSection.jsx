'use client';

import { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';
import IosDevVideoBackground from './IosDevVideoBackground';

// Custom corporate smooth easing curve requested by user
const EASE_CURVE = [0.22, 1, 0.36, 1];

const EndlessTypewriter = memo(function EndlessTypewriter({ phrases = ["Leading App", "Enterprise AI", "Mobile Platform", "Cloud Software"] }) {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIdx % phrases.length];
    let timer;

    if (!isDeleting && text.length < currentPhrase.length) {
      // Type letter by letter: L -> Le -> Lea -> Lead -> Leadi -> Leadin -> Leading -> Leading A -> Leading Ap -> Leading App
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length + 1));
      }, 120);
    } else if (!isDeleting && text.length === currentPhrase.length) {
      // Pause at full word before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && text.length > 0) {
      // Backspace character smoothly
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length - 1));
      }, 65);
    } else if (isDeleting && text.length === 0) {
      // Switch phrase and loop indefinitely
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIdx, phrases]);

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', minHeight: '1.1em', verticalAlign: 'middle' }}>
      <span>{text}</span>
      <span
        style={{
          display: 'inline-block',
          width: '4px',
          height: '0.85em',
          backgroundColor: '#38BDF8',
          marginLeft: '4px',
          animation: 'blink 0.8s infinite',
          borderRadius: '2px',
          boxShadow: '0 0 10px #38BDF8'
        }}
      />
    </span>
  );
});

export default function HeroSection({ hero }) {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#050505',
        overflow: 'hidden',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 0'
      }}
    >
      {/* Background immediately visible */}
      <IosDevVideoBackground />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '840px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center'
        }}
      >
        {/* 1. Badge (0.1s delay, translateY 20px -> 0) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE_CURVE }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.5rem 1.35rem',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '50px',
            marginBottom: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.25)'
          }}
        >
          <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#FFFFFF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {hero?.badgeText || 'SOFTWARE & AI ENGINEERING'}
          </span>
        </motion.div>

        {/* 2. Main Headline with Endless Typewriter Transition for "Leading App" */}
        <h1
          style={{
            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
            fontWeight: '900',
            lineHeight: '1.08',
            color: '#FFFFFF',
            letterSpacing: '-0.04em',
            marginBottom: '1.5rem',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)'
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE_CURVE }}
            style={{ display: 'block' }}
          >
            Global <EndlessTypewriter phrases={["Leading App", "Enterprise AI", "Mobile Platform", "Cloud Suite"]} />
          </motion.span>

          {/* 3. Highlighted Accent Text (0.4s delay, translateY 25px -> 0) */}
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE_CURVE }}
            style={{
              background: 'linear-gradient(135deg, #38BDF8 0%, #60A5FA 50%, #818CF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block',
              marginTop: '0.35rem',
              filter: 'drop-shadow(0 2px 12px rgba(56, 189, 248, 0.4))'
            }}
          >
            {hero?.accentText || 'Powering Unprecedented Growth'}
          </motion.span>
        </h1>

        {/* 4. Description Paragraph (0.55s delay, translateY 20px -> 0) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE_CURVE }}
          style={{
            fontSize: '1.15rem',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: '1.8',
            maxWidth: '620px',
            margin: '0 auto 2.5rem auto',
            fontWeight: '500',
            textShadow: '0 1px 8px rgba(0,0,0,0.25)'
          }}
        >
          {hero?.description || 'Discover Excellence in Application Development with Zeenrah Technologies.'}
        </motion.p>

        {/* 5. CTA Buttons Container (0.7s delay, translateY 20px -> 0, scale 0.95 -> 1) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EASE_CURVE }}
          style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}
        >
          {/* Continuous Growing Pulse for CONTACT US */}
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.4
            }}
          >
            <Link
              href={hero?.ctaLink || '/contact'}
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 20px rgba(56, 189, 248, 0.45)'
              }}
            >
              <span>{hero?.ctaText || 'CONTACT US'}</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Continuous Growing Pulse for OUR SERVICES */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.7
            }}
          >
            <Link
              href={hero?.secondaryCtaLink || '/services'}
              className="btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                color: '#FFFFFF',
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.12)'
              }}
            >
              {hero?.secondaryCtaText || 'OUR SERVICES'}
            </Link>
          </motion.div>
        </motion.div>

        {/* 6. Live Metric Badges (0.85s delay, translateY 15px -> 0) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: EASE_CURVE }}
          style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#E2E8F0', fontSize: '0.875rem', fontWeight: '700' }}>
            <ShieldCheck size={18} color="#34D399" />
            <span>99.9% Uptime SLA</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#E2E8F0', fontSize: '0.875rem', fontWeight: '700' }}>
            <Zap size={18} color="#38BDF8" />
            <span>Sub-50ms Latency</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#E2E8F0', fontSize: '0.875rem', fontWeight: '700' }}>
            <Layers size={18} color="#818CF8" />
            <span>120+ Products Shipped</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


