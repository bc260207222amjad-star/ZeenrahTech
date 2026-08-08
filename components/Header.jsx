'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Layers } from 'lucide-react';

const DEFAULT_NAV = [
  { id: '1', label: 'HOME', path: '/' },
  { id: '2', label: 'ABOUT US', path: '/about' },
  { id: '3', label: 'SERVICES', path: '/services' },
  { id: '4', label: 'TECHNOLOGIES', path: '/technologies' },
  { id: '5', label: 'PORTFOLIO', path: '/portfolio' },
  { id: '6', label: 'CAREERS', path: '/careers', hasDropdown: true },
  { id: '7', label: 'CONTACT US', path: '/contact' },
];

export default function Header({ navigation }) {
  const navTabs = (navigation && navigation.length > 0) ? navigation : DEFAULT_NAV;
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [careersDropdownOpen, setCareersDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const careerSubpages = [
    { label: 'Careers Overview', path: '/careers' },
    { label: 'View Open Positions', path: '/careers/job-openings' },
    { label: 'Why Zeenrah Technologies?', path: '/careers/why-us' },
    { label: 'Life at Zeenrah', path: '/careers/life-at-zeenrah' },
    { label: 'Events & Tech Culture', path: '/careers/events' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: 'var(--bg-base)',
        zIndex: 1000,
        boxShadow: scrolled
          ? '0 2px 12px rgba(0, 0, 0, 0.08)'
          : 'none',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '70px',
        }}
      >
        {/* Brand Name with Vector SVG Logo Mark */}
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px var(--primary-glow)',
            }}
          >
            <Layers size={22} color="#FFFFFF" />
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
            <span
              style={{
                fontSize: '1.35rem',
                fontWeight: '900',
                color: 'var(--text-heading)',
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
              }}
            >
              Zeenrah
            </span>
            <span
              style={{
                fontSize: '1.35rem',
                fontWeight: '900',
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
                paddingBottom: '2px',
              }}
            >
              Technologies
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <div
            className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}
            style={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              gap: '0.15rem',
            }}
          >
            {navTabs.map((tab) => {
              const isActive = pathname === tab.path || (tab.hasDropdown && pathname.startsWith('/careers'));

              if (tab.hasDropdown) {
                return (
                  <div
                    key={tab.path}
                    style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
                    onMouseEnter={() => setCareersDropdownOpen(true)}
                    onMouseLeave={() => setCareersDropdownOpen(false)}
                  >
                    <Link
                      href={tab.path}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                      }}
                    >
                      CAREERS
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          transform: careersDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                          flexShrink: 0,
                          stroke: isActive ? 'var(--text-heading)' : 'var(--text-muted)',
                          strokeWidth: '1.8',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round'
                        }}
                      >
                        <path d="M1 1L5 5L9 1" />
                      </svg>
                    </Link>

                    {/* Careers Dropdown Menu */}
                    {careersDropdownOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '70px',
                          left: '-1rem',
                          width: '260px',
                          backgroundColor: 'var(--bg-card)',
                          backdropFilter: 'blur(24px)',
                          WebkitBackdropFilter: 'blur(24px)',
                          boxShadow: 'var(--shadow-card)',
                          borderRadius: '0 0 16px 16px',
                          border: '1px solid var(--border-subtle)',
                          borderTop: '2px solid var(--primary)',
                          padding: '0.5rem 0',
                          zIndex: 1001,
                        }}
                      >
                        {careerSubpages.map((sub) => (
                          <Link
                            key={sub.path}
                            href={sub.path}
                            style={{
                              display: 'block',
                              padding: '0.75rem 1.35rem',
                              color: pathname === sub.path ? 'var(--primary)' : 'var(--text-body)',
                              fontWeight: pathname === sub.path ? '800' : '600',
                              fontSize: '0.85rem',
                              textDecoration: 'none',
                              backgroundColor: pathname === sub.path ? 'var(--primary-light)' : 'transparent',
                              transition: 'all 0.2s ease',
                              borderLeft: pathname === sub.path ? '3px solid var(--primary)' : '3px solid transparent',
                            }}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={tab.path}
                  href={tab.path}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {tab.label}
                </Link>
              );
            })}


          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: 'var(--text-heading)',
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </nav>
      </div>
    </header>
  );
}
