import { Loader2, Sparkles } from 'lucide-react';

export default function GlobalLoading() {
  return (
    <div
      style={{
        minHeight: '75vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-base)',
        position: 'relative',
        overflow: 'hidden',
        padding: '2rem'
      }}
    >
      {/* Background Ambient Glow */}
      <div className="ambient-blob-1" style={{ top: '20%', left: '35%', opacity: 0.6 }} />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'center'
        }}
      >
        {/* Animated Emblem / Spinner Container */}
        <div
          style={{
            position: 'relative',
            width: '80px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Outer Pulsing Glow Circle */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              backgroundColor: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)',
              animation: 'badgeGlowPulse 2s ease-in-out infinite'
            }}
          />

          {/* Rotating Spinner */}
          <svg
            width="54"
            height="54"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0284c7"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animation: 'spin 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}
          >
            <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
            <path d="M12 2 a 10 10 0 0 1 10 10" />
          </svg>

          {/* Center Brand Icon */}
          <div style={{ position: 'absolute' }}>
            <Sparkles size={22} color="#38BDF8" />
          </div>
        </div>

        {/* Loading Text Badge */}
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 1.1rem',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              color: '#0284c7',
              fontWeight: '800',
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '50px',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              marginBottom: '0.5rem'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#34D399', animation: 'blink 0.8s infinite' }} />
            <span>ZEENRAH TECHNOLOGIES</span>
          </div>
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: '800',
              color: 'var(--text-heading)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Loading Experience...
          </h3>
        </div>

        {/* Progress Bar Animation */}
        <div
          style={{
            width: '200px',
            height: '4px',
            backgroundColor: 'var(--border-subtle)',
            borderRadius: '4px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '40%',
              background: 'linear-gradient(90deg, #38BDF8, #818CF8)',
              borderRadius: '4px',
              animation: 'newsTickerScroll 2s linear infinite'
            }}
          />
        </div>
      </div>
    </div>
  );
}
