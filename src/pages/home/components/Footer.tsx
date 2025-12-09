import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('home');

  const footerLinks = {
    games: {
      title: t('footer.gamesTitle'),
      links: [
        { name: t('footer.pokies'), path: '/pokies' },
        { name: t('footer.slots'), path: '/slots' },
        { name: t('footer.liveGames'), path: '/live-games' },
        { name: t('footer.sports'), path: '/sports' }
      ]
    },
    resources: {
      title: t('footer.resourcesTitle'),
      links: [
        { name: t('footer.guide'), path: '/guide' },
        { name: t('footer.strategy'), path: '/strategy' },
        { name: t('footer.faq'), path: '/faq' },
        { name: t('footer.reviews'), path: '/reviews' }
      ]
    },
    company: {
      title: t('footer.companyTitle'),
      links: [
        { name: t('footer.about'), path: '/about' },
        { name: t('footer.contact'), path: '/contact' },
        { name: t('footer.privacy'), path: '/privacy' },
        { name: t('footer.terms'), path: '/terms' },
        { name: t('footer.responsibleGaming'), path: '/responsible-gaming' }
      ]
    }
  };

  const socialLinks = [
    { icon: 'ri-facebook-fill', url: 'https://www.facebook.com/s99aus', color: 'hover:bg-blue-600' },
    { icon: 'ri-twitter-x-fill', url: 'https://x.com/s99auOfficial', color: 'hover:bg-gray-900' },
    { icon: 'ri-instagram-fill', url: 'https://www.instagram.com/s99au.official/', color: 'hover:bg-pink-600' },
    { icon: 'ri-medium-fill', url: 'https://medium.com/@s99au.official', color: 'hover:bg-gray-800' },
    { icon: 'ri-telegram-fill', url: 'https://t.me/s99au', color: 'hover:bg-blue-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-amber-600 via-amber-700 to-orange-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img 
              src="https://static.readdy.ai/image/31a1107996a99a56af02e61b22b1b81c/d1c5d3ee01cb9701f16d397dd5f6df5c.png" 
              alt="S99AU Logo" 
              className="h-12 mb-6"
            />
            <p className="text-amber-100 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/20 rounded-full flex items-center justify-center ${social.color} transition-colors cursor-pointer`}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-amber-100 hover:text-white transition-colors text-sm cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-amber-100 text-sm mb-2">
            {t('footer.copyright')}
          </p>
          <p className="text-amber-100 text-xs">
            <a 
              href="https://readdy.ai/?origin=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t('footer.poweredBy')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
