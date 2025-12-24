import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedArticles from './components/FeaturedGames';
import LatestArticles from './components/LatestArticles';
import CommentSection from './components/CommentSection';
import Footer from './components/Footer';
import { addSchemaOrg, updateMetaTags, getSiteUrl } from '../../utils/seo';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const siteUrl = getSiteUrl();
    
    // SEO Meta Tags
    updateMetaTags({
      title: 'S99au - Australia\'s Premier Online Gaming Platform | Pokies, Slots & Sports Betting',
      description: 'S99au is Australia\'s leading online gaming platform offering pokies, slots, sports betting, and live dealer games. Enjoy high RTP, fair gaming environment, and 24/7 professional customer support.',
      keywords: 'S99au, Australian online gaming, pokies, slots, sports betting, live dealer, online casino, gaming guides, betting strategies',
      canonical: `${siteUrl}/`,
      ogTitle: 'S99au - Australia\'s Premier Online Gaming Platform | Pokies, Slots & Sports Betting',
      ogDescription: 'S99au offers the best online gaming experience with pokies, slots, sports betting, and live dealer games. High RTP, fair play, and professional service.',
      ogUrl: `${siteUrl}/`,
      twitterTitle: 'S99au - Australia\'s Premier Online Gaming Platform',
      twitterDescription: 'S99au offers the best online gaming experience with pokies, slots, sports betting, and live dealer games.'
    });

    // Schema.org JSON-LD
    addSchemaOrg({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "S99au",
      "url": `${siteUrl}/`,
      "description": "S99au is Australia's leading online gaming platform offering pokies, slots, sports betting, and live dealer games.",
      "publisher": {
        "@type": "Organization",
        "name": "S99au",
        "url": `${siteUrl}/`
      }
    });
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Categories />
        <FeaturedArticles />
        <LatestArticles />
        <CommentSection />
      </main>
      <Footer />
    </div>
  );
}
