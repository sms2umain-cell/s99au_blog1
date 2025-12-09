import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function ResponsibleGamingPage() {
  const { t } = useTranslation('responsibleGaming');

  const principles = [
    {
      icon: 'ri-time-line',
      title: t('principle1.title'),
      description: t('principle1.description')
    },
    {
      icon: 'ri-wallet-line',
      title: t('principle2.title'),
      description: t('principle2.description')
    },
    {
      icon: 'ri-emotion-line',
      title: t('principle3.title'),
      description: t('principle3.description')
    },
    {
      icon: 'ri-forbid-line',
      title: t('principle4.title'),
      description: t('principle4.description')
    }
  ];

  const warningSigns = t('warningSigns', { returnObjects: true }) as string[];

  const tools = [
    {
      title: t('tool1.title'),
      description: t('tool1.description'),
      icon: 'ri-bank-card-line'
    },
    {
      title: t('tool2.title'),
      description: t('tool2.description'),
      icon: 'ri-money-dollar-circle-line'
    },
    {
      title: t('tool3.title'),
      description: t('tool3.description'),
      icon: 'ri-timer-line'
    },
    {
      title: t('tool4.title'),
      description: t('tool4.description'),
      icon: 'ri-pause-circle-line'
    },
    {
      title: t('tool5.title'),
      description: t('tool5.description'),
      icon: 'ri-shield-cross-line'
    },
    {
      title: t('tool6.title'),
      description: t('tool6.description'),
      icon: 'ri-notification-line'
    }
  ];

  const helpResources = [
    {
      name: t('resource1.name'),
      description: t('resource1.description'),
      website: t('resource1.website'),
      phone: t('resource1.phone')
    },
    {
      name: t('resource2.name'),
      description: t('resource2.description'),
      website: t('resource2.website'),
      phone: t('resource2.phone')
    },
    {
      name: t('resource3.name'),
      description: t('resource3.description'),
      website: t('resource3.website'),
      phone: t('resource3.phone')
    },
    {
      name: t('resource4.name'),
      description: t('resource4.description'),
      website: t('resource4.website'),
      phone: t('resource4.phone')
    }
  ];

  const tips = t('tips', { returnObjects: true }) as string[];

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

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-12 mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-pulse-line text-4xl text-white"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('commitmentTitle')}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('commitmentText')}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-12 text-center text-white mb-16">
            <i className="ri-alert-line text-6xl mb-4"></i>
            <h2 className="text-3xl font-bold mb-4">{t('warningTitle')}</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              {t('warningText')}
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('principlesTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${principle.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">{t('warningSignsTitle')}</h2>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              {t('warningSignsSubtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {warningSigns.map((sign, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-red-50 rounded-lg border border-red-200"
                >
                  <i className="ri-alert-fill text-red-600 text-xl mr-3 mt-0.5"></i>
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('toolsTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <i className={`${tool.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">{t('helpTitle')}</h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              {t('helpSubtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {helpResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.name}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{resource.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <i className="ri-global-line text-green-600 text-lg mr-2"></i>
                      <span className="text-sm">{resource.website}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <i className="ri-phone-line text-green-600 text-lg mr-2"></i>
                      <span className="text-sm">{resource.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-12 border-2 border-amber-200 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">{t('tipsTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-amber-600 text-xl mr-3 mt-0.5"></i>
                  <span className="text-gray-700">{tip}</span>
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
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-amber-600 rounded-full font-bold hover:bg-amber-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                {t('contactButton')}
              </Link>
              <a
                href="https://t.ly/s99auBlog"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/20 text-white rounded-full font-bold hover:bg-white/30 transition-colors cursor-pointer whitespace-nowrap"
              >
                {t('joinButton')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
