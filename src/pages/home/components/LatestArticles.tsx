import { useTranslation } from 'react-i18next';

export default function LatestArticles() {
  const { t } = useTranslation(['home', 'common']);

  const articles = [
    {
      id: 1,
      title: t('home:latest.article1.title'),
      excerpt: t('home:latest.article1.excerpt'),
      category: t('home:latest.article1.category'),
      categoryLink: '/pokies',
      date: '2024-01-15',
      readTime: '8',
      image: 'https://readdy.ai/api/search-image?query=modern%20colorful%20slot%20machine%20with%20glowing%20reels%20and%20golden%20coins%20on%20simple%20gradient%20background%20professional%20casino%20gaming%20atmosphere%20vibrant%20lights%20and%20symbols%20clean%20minimalist%20style&width=800&height=500&seq=article1&orientation=landscape',
      tags: t('home:latest.article1.tags', { returnObjects: true }) as string[],
      author: '游戏专家',
      views: '2.5k'
    },
    {
      id: 2,
      title: t('home:latest.article2.title'),
      excerpt: t('home:latest.article2.excerpt'),
      category: t('home:latest.article2.category'),
      categoryLink: '/slots',
      date: '2024-01-14',
      readTime: '10',
      image: 'https://readdy.ai/api/search-image?query=digital%20slot%20machine%20display%20showing%20RTP%20percentage%20and%20statistics%20on%20simple%20tech%20background%20modern%20casino%20interface%20clean%20professional%20design%20with%20charts%20and%20numbers&width=800&height=500&seq=article2&orientation=landscape',
      tags: t('home:latest.article2.tags', { returnObjects: true }) as string[],
      author: '数据分析师',
      views: '3.2k'
    },
    {
      id: 3,
      title: t('home:latest.article3.title'),
      excerpt: t('home:latest.article3.excerpt'),
      category: t('home:latest.article3.category'),
      categoryLink: '/live-games',
      date: '2024-01-13',
      readTime: '12',
      image: 'https://readdy.ai/api/search-image?query=professional%20live%20casino%20dealer%20at%20gaming%20table%20with%20cards%20and%20chips%20on%20elegant%20simple%20background%20luxury%20casino%20atmosphere%20warm%20lighting%20clean%20professional%20setup&width=800&height=500&seq=article3&orientation=landscape',
      tags: t('home:latest.article3.tags', { returnObjects: true }) as string[],
      author: '娱乐场专家',
      views: '1.8k'
    },
  ];

  const handleArticleClick = (id: number, category: string) => {
    const categoryPath = category.toLowerCase().replace(' ', '-');
    window.REACT_APP_NAVIGATE(`/${categoryPath}/article?id=${id}`);
  };

  const handleCategoryClick = (categoryLink: string) => {
    window.REACT_APP_NAVIGATE(categoryLink);
  };

  const handleTagClick = (tag: string) => {
    window.REACT_APP_NAVIGATE(`/blog?tag=${encodeURIComponent(tag)}`);
  };

  const handleViewAllClick = () => {
    window.REACT_APP_NAVIGATE('/blog');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('home:latest.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('home:latest.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div 
                className="relative h-56 overflow-hidden cursor-pointer"
                onClick={() => handleArticleClick(article.id, article.category)}
              >
                <img
                  src={article.image}
                  alt={`${article.title} - Super99au 游戏攻略配图`}
                  title={article.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(article.categoryLink);
                    }}
                    className="px-4 py-1.5 bg-amber-500 text-white text-sm font-semibold rounded-full hover:bg-amber-600 transition-colors cursor-pointer"
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 
                  onClick={() => handleArticleClick(article.id, article.category)}
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2 cursor-pointer"
                >
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <i className="ri-time-line"></i>
                      {article.readTime} {t('common:common.readTime')}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-eye-line"></i>
                      {article.views}
                    </span>
                  </div>
                  <time dateTime={article.date}>{article.date}</time>
                </div>

                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full hover:bg-amber-100 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://t.ly/s99auBlog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-lg font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg whitespace-nowrap cursor-pointer"
          >
            {t('common:buttons.viewAllArticles')}
          </a>
        </div>
      </div>
    </section>
  );
}
