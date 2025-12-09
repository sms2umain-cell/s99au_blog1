import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedArticles from './components/FeaturedGames';
import LatestArticles from './components/LatestArticles';
import CommentSection from './components/CommentSection';
import Footer from './components/Footer';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'S99au - Australia\'s Premier Online Gaming Platform | Pokies, Slots & Sports Betting';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'S99au is Australia\'s leading online gaming platform offering pokies, slots, sports betting, and live dealer games. Enjoy high RTP, fair gaming environment, and 24/7 professional customer support.');
    }
    
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
