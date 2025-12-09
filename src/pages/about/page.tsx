import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function AboutPage() {
  const { t } = useTranslation('about');

  const values = [
    {
      icon: 'ri-shield-check-line',
      title: t('value1.title'),
      description: t('value1.description')
    },
    {
      icon: 'ri-user-heart-line',
      title: t('value2.title'),
      description: t('value2.description')
    },
    {
      icon: 'ri-lightbulb-line',
      title: t('value3.title'),
      description: t('value3.description')
    },
    {
      icon: 'ri-heart-line',
      title: t('value4.title'),
      description: t('value4.description')
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

          <div className="bg-white rounded-2xl p-12 shadow-lg mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{t('missionTitle')}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('missionText1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('missionText2')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('missionText3')}
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('valuesTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${value.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
            <p className="text-xl text-amber-100 mb-8">
              {t('ctaSubtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://t.ly/s99auBlog"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-amber-600 rounded-full font-bold hover:bg-amber-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                {t('joinButton')}
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/20 text-white rounded-full font-bold hover:bg-white/30 transition-colors cursor-pointer whitespace-nowrap"
              >
                {t('contactButton')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
