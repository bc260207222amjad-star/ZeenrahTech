import initialSiteData from '@/data/siteData.json';

export function getZeenrahMasterConfig() {
  // Always safely return initialSiteData structure
  if (typeof window !== 'undefined') {
    return getFallbackConfig();
  }

  try {
    // Only attempt Node fs inside node environment
    if (typeof process !== 'undefined' && process.versions && process.versions.node) {
      const fs = eval('require')('fs');
      const path = eval('require')('path');
      const filePath = path.join(process.cwd(), 'ZeenrahTechnologogies.txt');
      if (fs.existsSync(filePath)) {
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

        const parseJson = (key, fallback) => {
          if (!raw[key]) return fallback;
          try {
            return JSON.parse(raw[key]);
          } catch (e) {
            return fallback;
          }
        };

        return {
          raw,
          siteMeta: {
            title: raw.SITE_TITLE || initialSiteData.siteMeta.title,
            description: raw.META_DESCRIPTION || initialSiteData.siteMeta.description,
            keywords: raw.KEYWORDS || 'Zeenrah Technologies',
            email: raw.CONTACT_EMAIL || initialSiteData.siteMeta.email,
            phone: raw.CONTACT_PHONE || initialSiteData.siteMeta.phone,
            address: raw.HQ_ADDRESS || initialSiteData.siteMeta.address,
            ogSiteName: raw.OG_SITE_NAME || 'Zeenrah Technologies',
            footerTagline: raw.FOOTER_TAGLINE || 'Zeenrah Technologies - Enterprise Software Development Agency.'
          },
          hero: {
            headlineMain: raw.HERO_HEADLINE_MAIN || 'Global Leading',
            headlineSub: raw.HERO_HEADLINE_SUB || 'App Factory',
            accentText: raw.HERO_ACCENT_TEXT || 'Powering Unprecedented Growth',
            description: raw.HERO_DESCRIPTION || 'Discover Excellence in Application Development with Zeenrah Technologies.',
            ctaText: raw.HERO_CTA_TEXT || 'CONTACT',
            ctaLink: raw.HERO_CTA_LINK || '/contact',
            logoImage: raw.HERO_LOGO_IMAGE || '/images/aam_clean_logo.jpg',
            bgBannerImage: raw.HERO_BANNER_IMAGE || '/images/hero_banner.jpg'
          },
          navigation: parseJson('NAVIGATION_JSON', initialSiteData.navigation),
          services: parseJson('SERVICES_JSON', initialSiteData.services),
          portfolio: parseJson('PORTFOLIO_JSON', initialSiteData.portfolio),
          technologies: parseJson('TECHNOLOGIES_JSON', initialSiteData.technologies),
          whyUs: parseJson('WHY_US_JSON', initialSiteData.whyUs),
          testimonials: parseJson('TESTIMONIALS_JSON', initialSiteData.testimonials),
          faqs: parseJson('FAQS_JSON', initialSiteData.faqs),
          jobs: parseJson('JOBS_JSON', initialSiteData.jobs),
          socialLinks: {
            twitter: raw.TWITTER_URL || 'https://twitter.com/zeenrahtechnologies',
            linkedin: raw.LINKEDIN_URL || 'https://linkedin.com/company/zeenrahtechnologies',
            github: raw.GITHUB_URL || 'https://github.com/zeenrahtechnologies',
            facebook: raw.FACEBOOK_URL || 'https://facebook.com/zeenrahtechnologies',
            instagram: raw.INSTAGRAM_URL || 'https://instagram.com/zeenrahtechnologies',
            youtube: raw.YOUTUBE_URL || 'https://youtube.com/@zeenrahtechnologies'
          }
        };
      }
    }
    return getFallbackConfig();
  } catch (err) {
    return getFallbackConfig();
  }
}

export function getZeenrahMeta() {
  const master = getZeenrahMasterConfig();
  return master.raw || {};
}

function getFallbackConfig() {
  return {
    raw: {},
    siteMeta: initialSiteData.siteMeta,
    hero: initialSiteData.hero,
    navigation: initialSiteData.navigation,
    services: initialSiteData.services,
    portfolio: initialSiteData.portfolio,
    technologies: initialSiteData.technologies,
    whyUs: initialSiteData.whyUs,
    testimonials: initialSiteData.testimonials,
    faqs: initialSiteData.faqs,
    jobs: initialSiteData.jobs,
    socialLinks: {
      twitter: 'https://twitter.com/zeenrahtechnologies',
      linkedin: 'https://linkedin.com/company/zeenrahtechnologies',
      github: 'https://github.com/zeenrahtechnologies',
      facebook: 'https://facebook.com/zeenrahtechnologies',
      instagram: 'https://instagram.com/zeenrahtechnologies',
      youtube: 'https://youtube.com/@zeenrahtechnologies'
    }
  };
}

