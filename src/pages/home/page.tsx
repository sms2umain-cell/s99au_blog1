
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedGames from './components/FeaturedGames';
import LatestArticles from './components/LatestArticles';
import CommentSection from './components/CommentSection';
import Footer from './components/Footer';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Pokies, Slots, Live Games, Sports 游戏博客 - 专业游戏攻略与技巧分享';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '专业的 Pokies 老虎机、Slots 在线老虎机、Live Games 真人娱乐场和 Sports 体育投注知识博客。提供游戏攻略、策略技巧、新手指南和行业资讯，帮助玩家提升游戏体验和投注水平。');
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
        <FeaturedGames />
        <LatestArticles />
        <CommentSection />
      </main>
      <Footer />
    </div>
  );
}
