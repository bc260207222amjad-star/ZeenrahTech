'use client';

import { useState } from 'react';

// Custom high-quality SVG brand/tech logos with modern design aesthetic
function TechLogoIcon({ name, fallbackIcon, category }) {
  const iconName = (name || '').toLowerCase();

  // 1. Next.js
  if (iconName.includes('next.js') || iconName.includes('next')) {
    return (
      <svg width="32" height="32" viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="64" fill="url(#next_grad)" />
        <path d="M96 98L49.5 38H40V90H49V53.5L90.5 106.5C92.4 103.9 94.3 101 96 98Z" fill="#FFFFFF" />
        <path d="M80 38H89V90H80V38Z" fill="url(#next_white)" />
        <defs>
          <linearGradient id="next_grad" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e293b" />
            <stop offset="1" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="next_white" x1="84.5" y1="38" x2="84.5" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 2. React / React Native
  if (iconName.includes('react')) {
    return (
      <svg width="34" height="34" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="8" fill="#61DAFB" />
        <ellipse cx="50" cy="50" rx="38" ry="14" stroke="#61DAFB" strokeWidth="4" transform="rotate(0 50 50)" />
        <ellipse cx="50" cy="50" rx="38" ry="14" stroke="#61DAFB" strokeWidth="4" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="38" ry="14" stroke="#61DAFB" strokeWidth="4" transform="rotate(120 50 50)" />
      </svg>
    );
  }

  // 3. TypeScript
  if (iconName.includes('typescript') || iconName.includes('ts')) {
    return (
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="16" fill="#3178C6" />
        <path d="M30 40H60M45 40V80" stroke="white" strokeWidth="8" strokeLinecap="round" />
        <path d="M80 48C76 43 68 44 67 52C66 61 78 61 78 70C78 78 68 79 63 74" stroke="white" strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  }

  // 4. Tailwind CSS
  if (iconName.includes('tailwind')) {
    return (
      <svg width="34" height="34" viewBox="0 0 100 100" fill="none">
        <path d="M25 45C30 35 40 33 46 38C52 43 55 52 64 53C73 54 80 44 80 44C80 44 75 55 69 57C63 59 56 52 50 49C44 46 35 48 25 65C25 65 30 55 36 53C42 51 49 57 55 60C61 63 70 61 75 52C75 52 70 62 64 64C58 66 51 60 45 57C39 54 30 55 25 45Z" fill="#38BDF8" />
      </svg>
    );
  }

  // 5. Python / FastAPI
  if (iconName.includes('fastapi')) {
    return (
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="46" fill="#059669" />
        <path d="M54 20L28 54H48L44 80L72 46H52L54 20Z" fill="white" />
      </svg>
    );
  }

  // 6. Python / Django
  if (iconName.includes('django')) {
    return (
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="16" fill="#092E20" />
        <path d="M68 20V72C68 82 60 88 48 88C38 88 32 82 32 76L40 70C43 74 46 76 50 76C56 76 59 72 59 66V20H68ZM48 38V50C44 50 41 48 41 44C41 40 44 38 48 38Z" fill="#44B78B" />
      </svg>
    );
  }

  // 7. Flask
  if (iconName.includes('flask')) {
    return (
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <path d="M42 20H58V36L78 72C82 78 76 86 68 86H32C24 86 18 78 22 72L42 36V20Z" stroke="#F59E0B" strokeWidth="7" strokeLinejoin="round" fill="none" />
        <path d="M30 68H70" stroke="#F59E0B" strokeWidth="5" />
      </svg>
    );
  }

  // 8. PyTorch / ML
  if (iconName.includes('pytorch') || iconName.includes('ml')) {
    return (
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <path d="M50 15L78 30V70L50 85L22 70V30L50 15Z" stroke="#EE4C2C" strokeWidth="6" fill="none" />
        <circle cx="68" cy="36" r="8" fill="#EE4C2C" />
        <path d="M50 40V64" stroke="#EE4C2C" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  // 9. Java / Spring Boot
  if (iconName.includes('java') || iconName.includes('spring')) {
    return (
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="16" fill="#1e293b" />
        <path d="M25 75C40 85 70 80 80 65C68 72 40 70 25 75Z" fill="#E76F00" />
        <path d="M35 55C45 62 65 58 72 48C62 53 42 52 35 55Z" fill="#5382A1" />
        <path d="M45 25C40 35 55 42 50 50C58 42 48 33 45 25Z" fill="#E76F00" />
      </svg>
    );
  }

  // 10. Hibernate / ORM
  if (iconName.includes('hibernate') || iconName.includes('jpa')) {
    return (
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <path d="M20 30C20 22 80 22 80 30C80 38 20 38 20 30Z" stroke="#B6A374" strokeWidth="6" fill="rgba(182, 163, 116, 0.2)" />
        <path d="M20 50C20 58 80 58 80 50" stroke="#B6A374" strokeWidth="6" fill="none" />
        <path d="M20 70C20 78 80 78 80 70" stroke="#B6A374" strokeWidth="6" fill="none" />
        <path d="M20 30V70M80 30V70" stroke="#B6A374" strokeWidth="6" />
      </svg>
    );
  }

  // 11. iOS / Swift / Apple
  if (iconName.includes('ios') || iconName.includes('swift') || iconName.includes('apple')) {
    return (
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <path d="M80 75C68 90 40 82 25 65C12 45 22 25 40 25C50 25 55 30 62 30C70 30 75 25 82 25C90 25 96 32 94 40C82 45 84 62 96 68C92 78 86 86 80 75Z" fill="#F05138" />
        <path d="M60 22C64 15 72 10 78 12C78 20 70 26 60 22Z" fill="#F05138" />
      </svg>
    );
  }

  // 12. Android / Kotlin
  if (iconName.includes('android') || iconName.includes('kotlin')) {
    return (
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="16" fill="#000000" />
        <path d="M20 80L80 20H20V80Z" fill="url(#kotlin_g1)" />
        <path d="M50 50L80 80H20L50 50Z" fill="url(#kotlin_g2)" />
        <path d="M50 50L80 20V80L50 50Z" fill="url(#kotlin_g3)" />
        <defs>
          <linearGradient id="kotlin_g1" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C757BC" />
            <stop offset="1" stopColor="#7F52FF" />
          </linearGradient>
          <linearGradient id="kotlin_g2" x1="20" y1="50" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C757BC" />
            <stop offset="1" stopColor="#C757BC" />
          </linearGradient>
          <linearGradient id="kotlin_g3" x1="50" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7F52FF" />
            <stop offset="1" stopColor="#E44857" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 13. Flutter
  if (iconName.includes('flutter')) {
    return (
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <path d="M55 15L20 50L35 65L85 15H55Z" fill="#45D1FD" />
        <path d="M55 55L35 75L55 95H85L65 75L85 55H55Z" fill="#02569B" />
        <path d="M45 65L55 55L65 65L55 75L45 65Z" fill="#01579B" />
      </svg>
    );
  }

  // 14. PostgreSQL
  if (iconName.includes('postgres')) {
    return (
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="16" fill="#336791" />
        <ellipse cx="50" cy="50" rx="30" ry="25" fill="#FFFFFF" fillOpacity="0.9" />
        <circle cx="40" cy="45" r="5" fill="#336791" />
        <path d="M55 50C65 50 70 60 70 70" stroke="#336791" strokeWidth="5" />
      </svg>
    );
  }

  // 15. MongoDB
  if (iconName.includes('mongo')) {
    return (
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <path d="M50 12C45 28 25 45 25 65C25 78 36 88 50 88C64 88 75 78 75 65C75 45 55 28 50 12Z" fill="#47A248" />
        <path d="M50 12V88" stroke="#3FA037" strokeWidth="4" />
      </svg>
    );
  }

  // 16. Redis
  if (iconName.includes('redis')) {
    return (
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <path d="M15 35L50 18L85 35L50 52L15 35Z" fill="#DC382D" />
        <path d="M15 50L50 67L85 50" stroke="#DC382D" strokeWidth="6" fill="none" />
        <path d="M15 65L50 82L85 65" stroke="#DC382D" strokeWidth="6" fill="none" />
      </svg>
    );
  }

  // 17. AWS
  if (iconName.includes('aws') || iconName.includes('amazon')) {
    return (
      <svg width="34" height="34" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="16" fill="#232F3E" />
        <path d="M25 68C40 78 60 78 75 68" stroke="#FF9900" strokeWidth="6" strokeLinecap="round" />
        <path d="M72 60L78 70L66 72" fill="#FF9900" />
        <path d="M30 45C30 35 40 32 50 32C60 32 70 38 70 48V55" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  // 18. Docker
  if (iconName.includes('docker')) {
    return (
      <svg width="34" height="34" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="16" fill="#0db7ed" />
        <rect x="25" y="42" width="12" height="10" rx="2" fill="white" />
        <rect x="40" y="42" width="12" height="10" rx="2" fill="white" />
        <rect x="55" y="42" width="12" height="10" rx="2" fill="white" />
        <rect x="40" y="30" width="12" height="10" rx="2" fill="white" />
        <rect x="55" y="30" width="12" height="10" rx="2" fill="white" />
        <path d="M15 58C25 55 35 60 45 60C65 60 75 52 85 58C90 62 85 75 70 75C40 75 20 72 15 58Z" fill="white" />
      </svg>
    );
  }

  // 19. Kubernetes
  if (iconName.includes('kuber') || iconName.includes('k8s')) {
    return (
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="44" fill="#326CE5" />
        <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" stroke="white" strokeWidth="6" fill="none" />
        <circle cx="50" cy="50" r="10" fill="white" />
      </svg>
    );
  }

  // 20. OpenAI / AI / LLM
  if (iconName.includes('openai') || iconName.includes('ai') || iconName.includes('llm')) {
    return (
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="44" fill="url(#ai_bg)" />
        <path d="M50 20L62 38L82 42L66 56L71 76L50 64L29 76L34 56L18 42L38 38L50 20Z" fill="url(#ai_star)" />
        <defs>
          <linearGradient id="ai_bg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="ai_star" x1="18" y1="20" x2="82" y2="76" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#E0F2FE" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 21. LangChain / Chains
  if (iconName.includes('langchain') || iconName.includes('chain')) {
    return (
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="16" fill="#1C2C35" />
        <path d="M35 50C35 41 41 35 50 35H65" stroke="#2DD4BF" strokeWidth="7" strokeLinecap="round" />
        <path d="M65 50C65 59 59 65 50 65H35" stroke="#F43F5E" strokeWidth="7" strokeLinecap="round" />
        <circle cx="35" cy="50" r="8" fill="#F43F5E" />
        <circle cx="65" cy="50" r="8" fill="#2DD4BF" />
      </svg>
    );
  }

  // Generic Tech Fallback Icon (High tech glowing hex badge)
  return (
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
      <polygon points="50,15 82,32 82,68 50,85 18,68 18,32" fill="url(#gen_g)" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="4" />
      <circle cx="50" cy="50" r="14" fill="#06B6D4" />
      <defs>
        <linearGradient id="gen_g" x1="18" y1="15" x2="82" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(99, 102, 241, 0.3)" />
          <stop offset="1" stopColor="rgba(6, 182, 212, 0.3)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function TechStackSection({ technologies = [] }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'ALL STACK' },
    { id: 'frontend', name: 'FRONTEND (NEXT & REACT)' },
    { id: 'python', name: 'PYTHON FRAMEWORKS' },
    { id: 'java', name: 'JAVA FRAMEWORKS' },
    { id: 'mobile', name: 'MOBILE TECH (iOS & ANDROID)' },
    { id: 'cloud', name: 'CLOUD & DEVOPS' },
    { id: 'ai', name: 'AI & DATA' },
  ];

  const filteredTech = activeCategory === 'all'
    ? technologies
    : technologies.filter(item => item.category === activeCategory);

  return (
    <section style={{ padding: '5.5rem 0', backgroundColor: '#0b0f19', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '0.4rem 1.2rem',
              backgroundColor: 'rgba(99, 102, 241, 0.12)',
              color: '#06b6d4',
              fontWeight: '800',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              borderRadius: '50px',
              marginBottom: '1rem',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            OUR TECH MATRIX & SKILLS
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '900',
              color: '#ffffff',
              lineHeight: '1.2',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Technologies We <span className="text-gradient-cyan">Master</span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#cbd5e1',
              lineHeight: '1.65',
              maxWidth: '700px',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            We leverage cutting-edge frameworks, Python/Java backend architectures, native mobile tech, and scalable cloud infrastructure to build future-proof software.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`tech-tab ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Tech Grid Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {filteredTech.map((tech, index) => (
            <div
              key={tech.id || index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1.75rem 1.25rem',
                backgroundColor: 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderBottom: '3px solid #6366f1',
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.35)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Premium Vector SVG Logo Badge */}
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <TechLogoIcon name={tech.name} fallbackIcon={tech.icon} category={tech.category} />
              </div>

              <h4
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '800',
                  marginBottom: '0.35rem',
                  color: '#ffffff',
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                {tech.name}
              </h4>
              <p
                style={{
                  fontSize: '0.825rem',
                  color: '#94a3b8',
                  margin: 0,
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
