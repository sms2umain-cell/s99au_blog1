import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import { useSportsArticles } from './sportsArticleContents';
import { addSchemaOrg, updateMetaTags, getSiteUrl } from '../../utils/seo';

export default function SportsPage() {
  const { t } = useTranslation(['sports', 'common']);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const sportsArticles = useSportsArticles();

  useEffect(() => {
    const siteUrl = getSiteUrl();
    const title = 'Sports 体育投注博客 - 投注策略、赛事分析和技巧分享 | Gaming Blog';
    const description = '学习体育投注知识和策略，掌握赛事分析技巧，提升投注水平。包括足球投注、NBA篮球、网球、电竞等多种体育项目的专业分析和资金管理方法。';
    
    // SEO Meta Tags
    updateMetaTags({
      title,
      description,
      keywords: 'Sports, 体育投注, 足球投注, NBA投注, 篮球投注, 赔率分析, 滚球投注, 串关投注, 电竞投注, 投注策略, 资金管理',
      canonical: `${siteUrl}/sports`,
      ogTitle: title,
      ogDescription: description,
      ogUrl: `${siteUrl}/sports`
    });

    // Schema.org JSON-LD
    addSchemaOrg({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": title,
      "description": description,
      "url": `${siteUrl}/sports`,
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
  }, []);

  const categories = [
    { id: 'all', name: t('sports:categories.all'), count: sportsArticles.length },
    { id: 'beginner', name: t('sports:categories.beginner'), count: sportsArticles.filter(a => a.category === 'beginner').length },
    { id: 'strategy', name: t('sports:categories.strategy'), count: sportsArticles.filter(a => a.category === 'strategy').length },
    { id: 'analysis', name: t('sports:categories.analysis'), count: sportsArticles.filter(a => a.category === 'analysis').length },
    { id: 'tips', name: t('sports:categories.tips'), count: sportsArticles.filter(a => a.category === 'tips').length }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? sportsArticles 
    : sportsArticles.filter(article => article.category === selectedCategory);

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

  // 提取热门标签（只显示3个）
  const getPopularTags = () => {
    const tagCount: { [key: string]: number } = {};
    
    filteredArticles.forEach(article => {
      if (article.tags && Array.isArray(article.tags)) {
        article.tags.forEach(tag => {
          if (tag && typeof tag === 'string') {
            tagCount[tag] = (tagCount[tag] || 0) + 1;
          }
        });
      }
    });
    
    return Object.entries(tagCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([tag]) => tag);
  };

  const popularTags = getPopularTags();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar scrolled={scrolled} />
      
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('sports:pageTitle')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('sports:pageSubtitle')}
            </p>
          </header>

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <nav className="bg-white rounded-xl shadow-md p-6 sticky top-24" aria-label="文章分类导航">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('common:common.category')}</h2>
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

                {popularTags.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('sports:popularTags')}</h3>
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
                )}
              </nav>
            </aside>

            <section className="flex-1">
              <div className="space-y-6">
                {currentArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/sports/article?id=${article.id}`}
                    className="block"
                  >
                    <article
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                          <img
                            src={article.image}
                            alt={`${article.title} - Sports 体育投注攻略配图`}
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
                              {t('sports:readMore')}
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
