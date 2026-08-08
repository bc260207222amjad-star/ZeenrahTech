'use client';

import { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

function RouteChangeTracker({ onResetLoading }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    onResetLoading();
  }, [pathname, searchParams, onResetLoading]);

  return null;
}

export default function GlobalRouteLoader() {
  const [isLoading, setIsLoading] = useState(false);

  const resetLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.href && target.href.startsWith(window.location.origin)) {
        const targetPath = new URL(target.href).pathname;
        if (targetPath !== window.location.pathname) {
          setIsLoading(true);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <RouteChangeTracker onResetLoading={resetLoading} />
      </Suspense>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 99999,
              pointerEvents: 'none'
            }}
          >
            {/* Top Glowing Cyan Activity Progress Bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 0.85 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                height: '3px',
                width: '100%',
                transformOrigin: 'left',
                background: 'linear-gradient(90deg, #38BDF8 0%, #60A5FA 50%, #818CF8 100%)',
                boxShadow: '0 0 12px #38BDF8, 0 0 24px rgba(56, 189, 248, 0.6)'
              }}
            />

            {/* Floating Top Right Micro Activity Spinner */}
            <div
              style={{
                position: 'fixed',
                top: '1.25rem',
                right: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 0.9rem',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                borderRadius: '30px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                color: '#38BDF8',
                fontSize: '0.75rem',
                fontWeight: '800',
                letterSpacing: '0.06em'
              }}
            >
              <div
                style={{
                  width: '14px',
                  height: '14px',
                  border: '2px solid rgba(56, 189, 248, 0.25)',
                  borderTopColor: '#38BDF8',
                  borderRadius: '50%',
                  animation: 'spin 0.7s linear infinite'
                }}
              />
              <span>LOADING...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
