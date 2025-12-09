
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function GuidePage() {
  const { t } = useTranslation(['guide', 'common']);

  const guides = [
    {
      id: 1,
      title: t('guide:guides.guide1.title'),
      description: t('guide:guides.guide1.description'),
      icon: 'ri-play-circle-line',
      content: t('guide:guides.guide1.items', { returnObjects: true }) as string[]
    },
    {
      id: 2,
      title: t('guide:guides.guide2.title'),
      description: t('guide:guides.guide2.description'),
      icon: 'ri-book-open-line',
      content: t('guide:guides.guide2.items', { returnObjects: true }) as string[]
    },
    {
      id: 3,
      title: t('guide:guides.guide3.title'),
      description: t('guide:guides.guide3.description'),
      icon: 'ri-wallet-line',
      content: t('guide:guides.guide3.items', { returnObjects: true }) as string[]
    },
    {
      id: 4,
      title: t('guide:guides.guide4.title'),
      description: t('guide:guides.guide4.description'),
      icon: 'ri-gamepad-line',
      content: t('guide:guides.guide4.items', { returnObjects: true }) as string[]
    },
    {
      id: 5,
      title: t('guide:guides.guide5.title'),
      description: t('guide:guides.guide5.description'),
      icon: 'ri-gift-line',
      content: t('guide:guides.guide5.items', { returnObjects: true }) as string[]
    },
    {
      id: 6,
      title: t('guide:guides.guide6.title'),
      description: t('guide:guides.guide6.description'),
      icon: 'ri-shield-check-line',
      content: t('guide:guides.guide6.items', { returnObjects: true }) as string[]
    }
  ];

  const tips = [
    {
      title: t('guide:tips.safety.title'),
      items: t('guide:tips.safety.items', { returnObjects: true }) as string[]
    },
    {
      title: t('guide:tips.gaming.title'),
      items: t('guide:tips.gaming.items', { returnObjects: true }) as string[]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('guide:title')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('guide:subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {guides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${guide.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{guide.title}</h3>
                <p className="text-gray-600 mb-6">{guide.description}</p>
                <ul className="space-y-3">
                  {guide.content.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <i className="ri-check-line text-amber-600 text-xl mr-3 mt-0.5"></i>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <i className="ri-lightbulb-line text-amber-600 text-3xl mr-3"></i>
                  {tip.title}
                </h3>
                <ul className="space-y-4">
                  {tip.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <i className="ri-arrow-right-s-line text-amber-600 text-xl mr-2 mt-0.5"></i>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">{t('guide:cta.title')}</h2>
            <p className="text-xl text-amber-100 mb-8">
              {t('guide:cta.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-amber-600 rounded-full font-bold hover:bg-amber-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                {t('guide:cta.contact')}
              </Link>
              <Link
                to="/faq"
                className="px-8 py-4 bg-white/20 text-white rounded-full font-bold hover:bg-white/30 transition-colors cursor-pointer whitespace-nowrap"
              >
                {t('guide:cta.faq')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
