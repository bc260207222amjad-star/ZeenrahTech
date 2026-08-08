import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { getSiteConfig } from '@/lib/getSiteConfig';
import './globals.css';

export async function generateMetadata() {
  const config = getSiteConfig();
  const meta = config.siteMeta;

  return {
    metadataBase: new URL('https://zeenrahtechnologies.com'),
    title: {
      default: meta.title,
      template: '%s | Zeenrah Technologies'
    },
    description: meta.description,
    keywords: meta.keywords ? meta.keywords.split(',').map(k => k.trim()) : ['Zeenrah Technologies'],
    authors: [{ name: 'Zeenrah Technologies Team' }],
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: 'https://zeenrahtechnologies.com',
      siteName: meta.ogSiteName,
      images: [{ url: '/images/hero_banner.jpg', width: 1200, height: 630, alt: 'Zeenrah Technologies' }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/images/hero_banner.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#F8FAFC'
};

// Server Component — reads TXT file once and passes data down
export default function RootLayout({ children }) {
  const config = getSiteConfig();

  return (
    <html lang="en" suppressHydrationWarning style={{ backgroundColor: '#F8FAFC' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="animate-fade-in" style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-body)' }}>
        <Header navigation={config.navigation} />
        <main className="main-content" style={{ minHeight: '80vh' }}>{children}</main>
        <Footer siteMeta={config.siteMeta} socialLinks={config.socialLinks} />
        <ScrollToTop />
      </body>
    </html>
  );
}
