import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import { pokiesArticleContents } from './pokiesArticleContents';
import { addSchemaOrg, updateMetaTags, getSiteUrl } from '../../utils/seo';

export default function PokiesPage() {
  const { t, i18n } = useTranslation('pokies');
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  useEffect(() => {
    const siteUrl = getSiteUrl();
    
    // SEO Meta Tags
    const title = i18n.language === 'en' 
      ? 'Pokies Blog - Game Guides, Tips and Knowledge Sharing | Gaming Blog'
      : 'Pokies 老虎机博客 - 游戏攻略、技巧和知识分享 | Gaming Blog';
    const description = i18n.language === 'en'
      ? 'In-depth knowledge, tips and culture of Pokies slot machines. Complete guide from beginner to expert, including RTP analysis, symbol features, game strategies, historical evolution and more professional content to help players improve their gaming experience.'
      : '深入了解 Pokies 老虎机的知识、技巧和文化。提供从入门到精通的完整指南，包括 RTP 解析、符号功能、游戏策略、历史演变等专业内容，帮助玩家提升游戏体验。';
    
    updateMetaTags({
      title,
      description,
      keywords: 'Pokies, 老虎机, Pokies攻略, 老虎机技巧, RTP, 波动性, 游戏策略, 澳洲Pokies, 老虎机入门, 游戏评测',
      canonical: `${siteUrl}/pokies`,
      ogTitle: title,
      ogDescription: description,
      ogUrl: `${siteUrl}/pokies`
    });

    // Schema.org JSON-LD
    addSchemaOrg({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": title,
      "description": description,
      "url": `${siteUrl}/pokies`,
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
  }, [i18n.language]);

  const categories = [
    { id: 'all', name: t('page.categories.all'), count: pokiesArticleContents.length },
    { id: 'beginner', name: t('page.categories.beginner'), count: pokiesArticleContents.filter(a => a.category === 'beginner').length },
    { id: 'strategy', name: t('page.categories.strategy'), count: pokiesArticleContents.filter(a => a.category === 'strategy').length },
    { id: 'reviews', name: t('page.categories.reviews'), count: pokiesArticleContents.filter(a => a.category === 'reviews').length },
    { id: 'tips', name: t('page.categories.tips'), count: pokiesArticleContents.filter(a => a.category === 'tips').length }
  ];

  const articles = pokiesArticleContents.map((article, index) => {
    const tags = t(`articles.article${index + 1}.tags`, { returnObjects: true });
    return {
      id: article.id,
      title: t(`articles.article${index + 1}.title`),
      category: article.category,
      excerpt: t(`articles.article${index + 1}.excerpt`),
      author: t(`articles.article${index + 1}.author`),
      date: article.date,
      readTime: t(`articles.article${index + 1}.readTime`),
      views: article.views,
      image: article.image,
      tags: Array.isArray(tags) ? tags : []
    };
  });

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  // 计算分页
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  // 切换页码
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 上一页
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 下一页
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 当分类改变时重置页码
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const popularTags = [
    t('page.tags.beginner'),
    t('page.tags.strategy'),
    t('page.tags.reviews'),
    t('page.tags.tips'),
    t('page.tags.rtp'),
    t('page.tags.culture')
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar scrolled={scrolled} />
      
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('page.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('page.subtitle')}
            </p>
          </header>

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <nav className="bg-white rounded-xl shadow-md p-6 sticky top-24" aria-label={t('page.categories.title')}>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('page.categories.title')}</h2>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className={`text-sm ${
                        selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('page.popularTags')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-amber-50 text-amber-700 text-sm rounded-full hover:bg-amber-100 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </nav>
            </aside>

            <section className="flex-1">
              <div className="space-y-6">
                {currentArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/pokies/article?id=${article.id}`}
                    className="block"
                  >
                    <article
                      key={article.id}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            title={article.title}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        <div className="md:w-3/5 p-6 md:p-8">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                              {categories.find(c => c.id === article.category)?.name}
                            </span>
                            <time className="text-sm text-gray-500" dateTime={article.date}>{article.date}</time>
                          </div>

                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                            {article.title}
                          </h3>

                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {article.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1.5">
                                <i className="ri-user-line"></i>
                                <span>{article.author}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <i className="ri-time-line"></i>
                                <span>{article.readTime}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <i className="ri-eye-line"></i>
                                <span>{article.views}</span>
                              </div>
                            </div>

                            <button className="flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors whitespace-nowrap cursor-pointer">
                              {t('page.readMore')}
                              <i className="ri-arrow-right-line"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors cursor-pointer ${
                        currentPage === 1
                          ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                          : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <i className="ri-arrow-left-s-line"></i>
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap ${
                          currentPage === page
                            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                            : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button 
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors cursor-pointer ${
                        currentPage === totalPages
                          ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                          : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <i className="ri-arrow-right-s-line"></i>
                    </button>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
