import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function StrategyPage() {
  const { t } = useTranslation('strategy');

  const strategies = [
    {
      category: t('category1.title'),
      icon: 'ri-slot-machine-line',
      color: 'from-purple-500 to-pink-600',
      strategies: [
        {
          title: t('category1.strategy1.title'),
          description: t('category1.strategy1.description'),
          tips: t('category1.strategy1.tips', { returnObjects: true }) as string[]
        },
        {
          title: t('category1.strategy2.title'),
          description: t('category1.strategy2.description'),
          tips: t('category1.strategy2.tips', { returnObjects: true }) as string[]
        },
        {
          title: t('category1.strategy3.title'),
          description: t('category1.strategy3.description'),
          tips: t('category1.strategy3.tips', { returnObjects: true }) as string[]
        }
      ]
    },
    {
      category: t('category2.title'),
      icon: 'ri-live-line',
      color: 'from-red-500 to-orange-600',
      strategies: [
        {
          title: t('category2.strategy1.title'),
          description: t('category2.strategy1.description'),
          tips: t('category2.strategy1.tips', { returnObjects: true }) as string[]
        },
        {
          title: t('category2.strategy2.title'),
          description: t('category2.strategy2.description'),
          tips: t('category2.strategy2.tips', { returnObjects: true }) as string[]
        },
        {
          title: t('category2.strategy3.title'),
          description: t('category2.strategy3.description'),
          tips: t('category2.strategy3.tips', { returnObjects: true }) as string[]
        }
      ]
    },
    {
      category: t('category3.title'),
      icon: 'ri-football-line',
      color: 'from-green-500 to-teal-600',
      strategies: [
        {
          title: t('category3.strategy1.title'),
          description: t('category3.strategy1.description'),
          tips: t('category3.strategy1.tips', { returnObjects: true }) as string[]
        },
        {
          title: t('category3.strategy2.title'),
          description: t('category3.strategy2.description'),
          tips: t('category3.strategy2.tips', { returnObjects: true }) as string[]
        },
        {
          title: t('category3.strategy3.title'),
          description: t('category3.strategy3.description'),
          tips: t('category3.strategy3.tips', { returnObjects: true }) as string[]
        }
      ]
    }
  ];

  const generalTips = [
    {
      icon: 'ri-time-line',
      title: t('tip1.title'),
      description: t('tip1.description')
    },
    {
      icon: 'ri-emotion-line',
      title: t('tip2.title'),
      description: t('tip2.description')
    },
    {
      icon: 'ri-book-2-line',
      title: t('tip3.title'),
      description: t('tip3.description')
    },
    {
      icon: 'ri-shield-check-line',
      title: t('tip4.title'),
      description: t('tip4.description')
    }
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

          <div className="space-y-12 mb-16">
            {strategies.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-4`}>
                    <i className={`${category.icon} text-3xl text-white`}></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.strategies.map((strategy, strategyIndex) => (
                    <div
                      key={strategyIndex}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{strategy.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{strategy.description}</p>
                      <ul className="space-y-2">
                        {strategy.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start">
                            <i className="ri-checkbox-circle-fill text-green-600 text-lg mr-2 mt-0.5"></i>
                            <span className="text-gray-700 text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('generalTipsTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {generalTips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${tip.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              {t('ctaSubtitle')}
            </p>
            <Link
              to="/guide"
              className="inline-block px-8 py-4 bg-white text-amber-600 rounded-full font-bold hover:bg-amber-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              {t('guideButton')}
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
