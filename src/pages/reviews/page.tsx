import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function ReviewsPage() {
  const { t } = useTranslation('reviews');

  const reviews = [
    {
      id: 1,
      image: 'https://readdy.ai/api/search-image?query=Mega%20Moolah%20progressive%20jackpot%20slot%20machine%20game%20with%20African%20safari%20theme%20featuring%20lions%20and%20wildlife%20on%20vibrant%20golden%20savanna%20background%20with%20spinning%20reels%20and%20massive%20jackpot%20display&width=800&height=500&seq=review1&orientation=landscape',
      rating: 4.8
    },
    {
      id: 2,
      image: 'https://readdy.ai/api/search-image?query=Starburst%20slot%20game%20with%20colorful%20sparkling%20gemstones%20and%20stars%20in%20deep%20space%20cosmic%20background%20featuring%20vibrant%20neon%20colors%20and%20expanding%20wild%20symbols%20on%20clean%20modern%20interface&width=800&height=500&seq=review2&orientation=landscape',
      rating: 4.7
    },
    {
      id: 3,
      image: 'https://readdy.ai/api/search-image?query=Evolution%20Gaming%20live%20baccarat%20table%20with%20professional%20dealer%20in%20elegant%20casino%20studio%20featuring%20green%20felt%20table%20cards%20and%20chips%20with%20high%20quality%20streaming%20interface%20on%20luxurious%20background&width=800&height=500&seq=review3&orientation=landscape',
      rating: 4.9
    },
    {
      id: 4,
      image: 'https://readdy.ai/api/search-image?query=Gonzos%20Quest%20slot%20game%20with%20ancient%20Mayan%20temple%20ruins%20and%20stone%20blocks%20falling%20in%20jungle%20setting%20featuring%20golden%20treasures%20and%20adventure%20theme%20with%20cascading%20symbols%20on%20mystical%20background&width=800&height=500&seq=review4&orientation=landscape',
      rating: 4.6
    },
    {
      id: 5,
      image: 'https://readdy.ai/api/search-image?query=Sweet%20Bonanza%20slot%20game%20with%20colorful%20candy%20and%20fresh%20fruits%20floating%20on%20bright%20pastel%20background%20featuring%20lollipops%20watermelons%20and%20sweets%20with%20tumbling%20reels%20mechanism%20on%20cheerful%20setting&width=800&height=500&seq=review5&orientation=landscape',
      rating: 4.5
    },
    {
      id: 6,
      image: 'https://readdy.ai/api/search-image?query=Dead%20or%20Alive%202%20western%20cowboy%20slot%20game%20with%20desert%20town%20saloon%20and%20wanted%20posters%20featuring%20revolvers%20and%20wild%20west%20theme%20on%20dusty%20frontier%20background%20with%20sticky%20wilds&width=800&height=500&seq=review6&orientation=landscape',
      rating: 4.7
    }
  ];

  const criteria = [
    { key: 'rtp', icon: 'ri-percent-line' },
    { key: 'volatility', icon: 'ri-line-chart-line' },
    { key: 'features', icon: 'ri-star-line' },
    { key: 'experience', icon: 'ri-user-smile-line' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {criteria.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className={`${item.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{t(`criteria.${item.key}.name`)}</h3>
                <p className="text-sm text-gray-600">{t(`criteria.${item.key}.description`)}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={review.image}
                    alt={t(`reviewsList.${index}.title`)}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full font-bold">
                    {t(`reviewsList.${index}.category`)}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{t(`reviewsList.${index}.title`)}</h3>
                    <div className="flex items-center">
                      <i className="ri-star-fill text-amber-500 text-xl mr-1"></i>
                      <span className="text-xl font-bold text-gray-900">{review.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{t(`reviewsList.${index}.summary`)}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-bold text-green-600 mb-2 flex items-center">
                        <i className="ri-checkbox-circle-fill mr-2"></i>
                        {t('pros')}
                      </h4>
                      <ul className="space-y-1">
                        {t(`reviewsList.${index}.pros`, { returnObjects: true }).map((pro: string, idx: number) => (
                          <li key={idx} className="text-sm text-gray-700">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-600 mb-2 flex items-center">
                        <i className="ri-close-circle-fill mr-2"></i>
                        {t('cons')}
                      </h4>
                      <ul className="space-y-1">
                        {t(`reviewsList.${index}.cons`, { returnObjects: true }).map((con: string, idx: number) => (
                          <li key={idx} className="text-sm text-gray-700">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    to={`/${t(`reviewsList.${index}.category`).toLowerCase().replace(' ', '-')}`}
                    className="block w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center rounded-xl font-bold hover:from-amber-700 hover:to-orange-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {t('viewMore', { category: t(`reviewsList.${index}.category`) })}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="text-xl text-amber-100 mb-8">
              {t('cta.description')}
            </p>
            <a
              href="https://t.ly/s99auBlog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-lg font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-amber-500/50 whitespace-nowrap cursor-pointer"
            >
              {t('cta.button')}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
