import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import { liveGamesArticles as liveGamesArticlesData } from './liveGamesArticleContents';
import { addSchemaOrg, updateMetaTags, getSiteUrl } from '../../utils/seo';

export default function LiveGamesPage() {
  const { t, i18n } = useTranslation(['liveGames', 'common']);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const siteUrl = getSiteUrl();
    const title = t('page.title');
    const description = t('page.subtitle');
    
    // SEO Meta Tags
    updateMetaTags({
      title,
      description,
      canonical: `${siteUrl}/live-games`,
      ogTitle: title,
      ogDescription: description,
      ogUrl: `${siteUrl}/live-games`
    });

    // Schema.org JSON-LD
    addSchemaOrg({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": title,
      "description": description,
      "url": `${siteUrl}/live-games`,
      "isPartOf": {
        "@type": "WebSite",
        "name": "S99au",
        "url": `${siteUrl}/`
      }
    });
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [t]);

  const liveGamesArticles = Array.from({ length: 15 }, (_, i) => {
    const id = i + 1;
    const tags = t(`liveGames:articles.article${id}.tags`, { returnObjects: true });
    
    return {
      id,
      title: t(`liveGames:articles.article${id}.title`),
      excerpt: t(`liveGames:articles.article${id}.excerpt`),
      category: liveGamesArticlesData[i].category,
      date: liveGamesArticlesData[i].date,
      author: t(`liveGames:articles.article${id}.author`),
      readTime: t(`liveGames:articles.article${id}.readTime`),
      views: t(`liveGames:articles.article${id}.views`),
      image: liveGamesArticlesData[i].image,
      tags: Array.isArray(tags) ? tags : []
    };
  });

  const categories = [
    { id: 'all', name: t('page.allArticles'), count: liveGamesArticles.length },
    { id: '真人百家乐', name: t('page.liveBaccarat'), count: liveGamesArticles.filter(a => a.category === '真人百家乐').length },
    { id: '真人轮盘', name: t('page.liveRoulette'), count: liveGamesArticles.filter(a => a.category === '真人轮盘').length },
    { id: '真人二十一点', name: t('page.liveBlackjack'), count: liveGamesArticles.filter(a => a.category === '真人二十一点').length },
    { id: '真人游戏秀', name: t('page.gameShows'), count: liveGamesArticles.filter(a => a.category === '真人游戏秀').length },
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? liveGamesArticles 
    : liveGamesArticles.filter(article => article.category === selectedCategory);

  // 从当前筛选的文章中提取所有标签
  const allTags = filteredArticles.flatMap(article => {
    // 确保 tags 是数组并且有内容
    if (Array.isArray(article.tags) && article.tags.length > 0) {
      return article.tags;
    }
    return [];
  });
  
  // 统计标签出现次数并获取前3个最常见的标签
  const tagCounts = allTags.reduce((acc, tag) => {
    if (tag && typeof tag === 'string') {
      acc[tag] = (acc[tag] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);
  
  const popularTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([tag]) => tag);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar scrolled={scrolled} />
      
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('page.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('page.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{t('page.categoryTitle')}</h2>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{category.name}</span>
                        <span className={`text-sm ${
                          selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {popularTags.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{t('page.popularTags')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-amber-50 text-amber-700 text-sm rounded-full hover:bg-amber-100 transition-colors cursor-pointer whitespace-nowrap"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredArticles.map((article) => {
                  return (
                    <article
                      key={article.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      <div className="relative w-full h-48 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="p-6">
                        {article.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {article.tags.map((tag, index) => (
                              <span key={`${article.id}-${index}`} className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {article.title}
                        </h2>

                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <i className="ri-user-line"></i>
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <i className="ri-time-line"></i>
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <i className="ri-eye-line"></i>
                            <span>{article.views}</span>
                          </div>
                        </div>

                        <Link
                          to={`/live-games/article?id=${article.id}`}
                          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors cursor-pointer whitespace-nowrap"
                        >
                          {t('page.readMore')}
                          <i className="ri-arrow-right-line"></i>
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
