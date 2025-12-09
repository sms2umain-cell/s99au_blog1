
import { useTranslation } from 'react-i18next';

export default function Categories() {
  const { t } = useTranslation('home');

  const categories = [
    {
      title: t('categories.pokies.title'),
      description: t('categories.pokies.description'),
      icon: 'ri-game-line',
      color: 'from-amber-400 to-amber-600',
      link: '/pokies'
    },
    {
      title: t('categories.slots.title'),
      description: t('categories.slots.description'),
      icon: 'ri-trophy-line',
      color: 'from-orange-400 to-orange-600',
      link: '/slots'
    },
    {
      title: t('categories.liveGames.title'),
      description: t('categories.liveGames.description'),
      icon: 'ri-live-line',
      color: 'from-red-400 to-red-600',
      link: '/live-games'
    },
    {
      title: t('categories.sports.title'),
      description: t('categories.sports.description'),
      icon: 'ri-football-line',
      color: 'from-green-400 to-green-600',
      link: '/sports'
    },
  ];

  const handleCategoryClick = (link: string) => {
    if (typeof window !== 'undefined' && (window as any).REACT_APP_NAVIGATE) {
      (window as any).REACT_APP_NAVIGATE(link);
    } else {
      // Fallback navigation for development or when the custom function is not available
      console.warn('REACT_APP_NAVIGATE function not found, falling back to window.location');
      window.location.href = link;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('categories.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('categories.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.link)}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-amber-200 cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCategoryClick(category.link);
                }
              }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`${category.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
