
import { useTranslation } from 'react-i18next';

export default function FeaturedArticles() {
  const { t } = useTranslation(['home', 'common']);

  const featuredArticles = [
    {
      id: 1,
      title: t('home:featured.article1.title'),
      category: 'Pokies',
      categoryLink: '/pokies',
      excerpt: t('home:featured.article1.excerpt'),
      image: 'https://readdy.ai/api/search-image?query=Ancient%20Egyptian%20pharaoh%20golden%20treasure%20slot%20machine%20strategy%20guide%20with%20game%20interface%20and%20winning%20symbols%20professional%20casino%20gaming%20tutorial%20with%20warm%20golden%20lighting%20educational%20content%20design%20high%20quality%20illustration&width=600&height=400&seq=featured1&orientation=landscape',
      readTime: '8',
      views: '2.8k',
      rating: 4.8,
      tags: t('home:featured.article1.tags', { returnObjects: true }) as string[]
    },
    {
      id: 2,
      title: t('home:featured.article2.title'),
      category: 'Live Games',
      categoryLink: '/live-games',
      excerpt: t('home:featured.article2.excerpt'),
      image: 'https://readdy.ai/api/search-image?query=Elegant%20baccarat%20table%20with%20cards%20and%20chips%20strategy%20diagram%20luxurious%20casino%20gaming%20tutorial%20with%20golden%20accents%20professional%20betting%20strategy%20illustration%20high-end%20design&width=600&height=400&seq=featured2&orientation=landscape',
      readTime: '10',
      views: '3.2k',
      rating: 4.9,
      tags: t('home:featured.article2.tags', { returnObjects: true }) as string[]
    },
    {
      id: 3,
      title: t('home:featured.article3.title'),
      category: 'Slots',
      categoryLink: '/slots',
      excerpt: t('home:featured.article3.excerpt'),
      image: 'https://readdy.ai/api/search-image?query=Megaways%20slot%20machine%20mechanism%20with%20cascading%20reels%20and%20multiple%20paylines%20innovative%20casino%20game%20technology%20with%20golden%20gears%20educational%20gaming%20concept%20detailed%20illustration&width=600&height=400&seq=featured3&orientation=landscape',
      readTime: '11',
      views: '2.5k',
      rating: 4.7,
      tags: t('home:featured.article3.tags', { returnObjects: true }) as string[]
    },
    {
      id: 4,
      title: t('home:featured.article4.title'),
      category: 'Sports',
      categoryLink: '/sports',
      excerpt: t('home:featured.article4.excerpt'),
      image: 'https://readdy.ai/api/search-image?query=Football%20betting%20odds%20analysis%20with%20stadium%20and%20statistics%20charts%20professional%20sports%20betting%20guide%20with%20golden%20accents%20educational%20infographic%20design%20modern%20layout&width=600&height=400&seq=featured4&orientation=landscape',
      readTime: '15',
      views: '3.5k',
      rating: 4.8,
      tags: t('home:featured.article4.tags', { returnObjects: true }) as string[]
    }
  ];

  const handleArticleClick = (id: number, category: string) => {
    try {
      const categoryPath = category.toLowerCase().replace(' ', '-');
      if (typeof window.REACT_APP_NAVIGATE === 'function') {
        window.REACT_APP_NAVIGATE(`/${categoryPath}/article?id=${id}`);
      } else {
        console.warn('Navigation function not available');
      }
    } catch (error) {
      console.error('Error navigating to article:', error);
    }
  };

  const handleCategoryClick = (categoryLink: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (typeof window.REACT_APP_NAVIGATE === 'function') {
        window.REACT_APP_NAVIGATE(categoryLink);
      } else {
        console.warn('Navigation function not available');
      }
    } catch (error) {
      console.error('Error navigating to category:', error);
    }
  };

  const handleTagClick = (tag: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (typeof window.REACT_APP_NAVIGATE === 'function') {
        window.REACT_APP_NAVIGATE(`/blog?tag=${encodeURIComponent(tag)}`);
      } else {
        console.warn('Navigation function not available');
      }
    } catch (error) {
      console.error('Error navigating to tag:', error);
    }
  };

  const handleViewAllClick = () => {
    try {
      if (typeof window.REACT_APP_NAVIGATE === 'function') {
        window.REACT_APP_NAVIGATE('/blog');
      } else {
        console.warn('Navigation function not available');
      }
    } catch (error) {
      console.error('Error navigating to blog:', error);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('home:featured.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('home:featured.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => handleArticleClick(article.id, article.category)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={`${article.title} - Super99au 游戏攻略配图`}
                  title={article.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span
                    onClick={(e) => handleCategoryClick(article.categoryLink, e)}
                    className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full hover:bg-amber-600 transition-colors cursor-pointer"
                  >
                    {article.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <i className="ri-star-fill text-amber-500 text-sm"></i>
                  <span className="text-sm font-semibold text-gray-900">{article.rating}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3 pb-3 border-b border-gray-100">
                  <span className="flex items-center gap-1">
                    <i className="ri-time-line"></i>
                    {article.readTime} {t('common:common.readTime')}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="ri-eye-line"></i>
                    {article.views}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      onClick={(e) => handleTagClick(tag, e)}
                      className="px-2 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full hover:bg-amber-100 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleViewAllClick}
            className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-lg font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg whitespace-nowrap cursor-pointer"
          >
            {t('common:buttons.viewAllArticles')}
          </button>
        </div>
      </div>
    </section>
  );
}
