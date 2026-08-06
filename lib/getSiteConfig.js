import fs from 'fs';
import path from 'path';

// ==============================================================================
// ZEENRAH TECHNOLOGIES - SERVER-SIDE TXT FILE CMS PARSER
// This runs ONLY on the server. Never ships to browser.
// Every component gets data as props from server pages.
// ==============================================================================

function parseTxtFile() {
  try {
    const filePath = path.join(process.cwd(), 'ZeenrahTechnologogies.txt');
    if (!fs.existsSync(filePath)) {
      console.warn('[CMS] ZeenrahTechnologogies.txt not found — using empty config');
      return {};
    }
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const raw = {};
    const lines = fileContent.split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx !== -1) {
          const key = trimmed.substring(0, eqIdx).trim();
          const val = trimmed.substring(eqIdx + 1).trim();
          raw[key] = val;
        }
      }
    }
    return raw;
  } catch (err) {
    console.error('[CMS] Error reading txt file:', err.message);
    return {};
  }
}

function parseJson(raw, key, fallback = []) {
  if (!raw[key]) return fallback;
  try {
    return JSON.parse(raw[key]);
  } catch (e) {
    console.warn(`[CMS] Could not parse JSON for key: ${key}`);
    return fallback;
  }
}

// ==============================================================================
// MAIN EXPORT — Call this in any Server Component / Server page
// ==============================================================================
export function getSiteConfig() {
  const raw = parseTxtFile();

  return {
    // ── Site Metadata
    siteMeta: {
      title: raw.SITE_TITLE || 'Zeenrah Technologies | Enterprise Software & AI Engineering',
      description: raw.META_DESCRIPTION || 'Zeenrah Technologies — Premier software engineering agency.',
      keywords: raw.KEYWORDS || 'Zeenrah Technologies',
      email: raw.CONTACT_EMAIL || 'contact@zeenrahtechnologies.com',
      phone: raw.CONTACT_PHONE || '+1 (800) 555-ZEENRAH',
      address: raw.HQ_ADDRESS || 'Zeenrah Tech Hub',
      ogSiteName: raw.OG_SITE_NAME || 'Zeenrah Technologies',
      footerTagline: raw.FOOTER_TAGLINE || 'Zeenrah Technologies — Full-service software development agency.',
    },

    // ── Social Links
    socialLinks: {
      twitter: raw.TWITTER_URL || '',
      linkedin: raw.LINKEDIN_URL || '',
      github: raw.GITHUB_URL || '',
      facebook: raw.FACEBOOK_URL || '',
      instagram: raw.INSTAGRAM_URL || '',
      youtube: raw.YOUTUBE_URL || '',
    },

    // ── Hero Section
    hero: {
      headlineMain: raw.HERO_HEADLINE_MAIN || 'Global Leading',
      headlineSub: raw.HERO_HEADLINE_SUB || 'App Factory',
      accentText: raw.HERO_ACCENT_TEXT || 'Powering Unprecedented Growth',
      description: raw.HERO_DESCRIPTION || 'Discover Excellence in Application Development.',
      ctaText: raw.HERO_CTA_TEXT || 'CONTACT US',
      ctaLink: raw.HERO_CTA_LINK || '/contact',
      badgeText: raw.HERO_BADGE_TEXT || 'Software & AI Engineering',
      secondaryCtaText: raw.HERO_SECONDARY_CTA_TEXT || 'OUR SERVICES',
      secondaryCtaLink: raw.HERO_SECONDARY_CTA_LINK || '/services',
    },

    // ── About Page
    about: {
      heroTitle: raw.ABOUT_HERO_TITLE || 'Engineering Digital Excellence',
      heroSubtitle: raw.ABOUT_HERO_SUBTITLE || 'We are a high-velocity software engineering agency building resilient web applications, mobile platforms, cloud DevOps infrastructure, and custom AI systems.',
      missionTitle: raw.ABOUT_MISSION_TITLE || 'Our Mission',
      missionText: raw.ABOUT_MISSION_TEXT || 'To solve complex enterprise challenges through clean, maintainable software architecture, rapid agile execution, and zero-compromise security standards.',
      visionTitle: raw.ABOUT_VISION_TITLE || 'Our Vision',
      visionText: raw.ABOUT_VISION_TEXT || 'To be the world\'s most trusted engineering partner for Next.js, React, Cloud DevOps, and AI solutions.',
      milestones: parseJson(raw, 'MILESTONES_JSON', [
        { year: '2018', title: 'Agency Founded', desc: 'Started with a core squad of 4 senior full-stack developers specializing in React and Node.js.' },
        { year: '2020', title: 'Global Expansion', desc: 'Scaled to 50+ engineers serving enterprise clients across North America, Europe, and Asia.' },
        { year: '2023', title: 'AI & Next.js 15 Pioneer', desc: 'Established dedicated AI/LLM research division and adopted Next.js App Router architecture.' },
        { year: '2026', title: 'Tier-1 Engineering Leader', desc: 'Over 120+ software products launched with 99.9% client retention rate across FinTech and HealthTech.' },
      ]),
    },

    // ── Navigation
    navigation: parseJson(raw, 'NAVIGATION_JSON', [
      { id: '1', label: 'HOME', path: '/' },
      { id: '2', label: 'ABOUT US', path: '/about' },
      { id: '3', label: 'SERVICES', path: '/services' },
      { id: '4', label: 'TECHNOLOGIES', path: '/technologies' },
      { id: '5', label: 'PORTFOLIO', path: '/portfolio' },
      { id: '6', label: 'CAREERS', path: '/careers', hasDropdown: true },
      { id: '7', label: 'CONTACT US', path: '/contact' },
    ]),

    // ── Services
    services: parseJson(raw, 'SERVICES_JSON', []),

    // ── Portfolio
    portfolio: parseJson(raw, 'PORTFOLIO_JSON', []),

    // ── Technologies
    technologies: parseJson(raw, 'TECHNOLOGIES_JSON', []),

    // ── Why Us
    whyUs: parseJson(raw, 'WHY_US_JSON', []),

    // ── Testimonials
    testimonials: parseJson(raw, 'TESTIMONIALS_JSON', []),

    // ── FAQs
    faqs: parseJson(raw, 'FAQS_JSON', []),

    // ── Jobs
    jobs: parseJson(raw, 'JOBS_JSON', []),
  };
}
