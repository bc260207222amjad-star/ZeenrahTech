'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
        backgroundColor: scrolled ? 'rgba(11, 15, 25, 0.95)' : 'rgba(11, 15, 25, 0.6)',
        backdropFilter: 'blur(28px) saturate(180%)',
        WebkitBackdropFilter: 'blur(28px) saturate(180%)',
        zIndex: 1000,
        boxShadow: scrolled
          ? '0 8px 32px rgba(0, 0, 0, 0.6), 0 1px 0 rgba(99, 102, 241, 0.2)'
          : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(99, 102, 241, 0.25)'
          : '1px solid rgba(255, 255, 255, 0.06)',
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
        {/* Brand Name */}
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.4rem',
            flexShrink: 0,
          }}
        >
            <span
              style={{
                fontSize: '1.4rem',
                fontWeight: '900',
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
              }}
            >
              Zeenrah
            </span>
            <span
              style={{
                fontSize: '1.4rem',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
                paddingBottom: '2px',
              }}
            >
              Technologies
            </span>
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
                          stroke: isActive ? '#ffffff' : '#94a3b8',
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
                          backgroundColor: 'rgba(15, 23, 42, 0.97)',
                          backdropFilter: 'blur(24px)',
                          WebkitBackdropFilter: 'blur(24px)',
                          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
                          borderRadius: '0 0 16px 16px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderTop: '2px solid #6366f1',
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
                              color: pathname === sub.path ? '#06b6d4' : '#cbd5e1',
                              fontWeight: pathname === sub.path ? '800' : '600',
                              fontSize: '0.85rem',
                              textDecoration: 'none',
                              backgroundColor: pathname === sub.path ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                              transition: 'all 0.2s ease',
                              borderLeft: pathname === sub.path ? '3px solid #6366f1' : '3px solid transparent',
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
              color: '#ffffff',
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </nav>
      </div>
    </header>
  );
}
