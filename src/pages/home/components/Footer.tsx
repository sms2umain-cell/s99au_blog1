
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = {
    games: {
      title: '游戏分类',
      links: [
        { name: 'Pokies', path: '/pokies' },
        { name: 'Slots', path: '/slots' },
        { name: 'Live Games', path: '/live-games' },
        { name: 'Sports Betting', path: '/sports' }
      ]
    },
    resources: {
      title: '资源中心',
      links: [
        { name: '新手指南', path: '/guide' },
        { name: '游戏策略', path: '/strategy' },
        { name: '常见问题', path: '/faq' },
        { name: '游戏评测', path: '/reviews' }
      ]
    },
    company: {
      title: '关于我们',
      links: [
        { name: '公司介绍', path: '/about' },
        { name: '联系我们', path: '/contact' },
        { name: '隐私政策', path: '/privacy' },
        { name: '使用条款', path: '/terms' }
      ]
    }
  };

  const socialLinks = [
    { icon: 'ri-facebook-fill', url: '#', color: 'hover:bg-blue-600' },
    { icon: 'ri-twitter-x-fill', url: '#', color: 'hover:bg-gray-900' },
    { icon: 'ri-instagram-fill', url: '#', color: 'hover:bg-pink-600' },
    { icon: 'ri-youtube-fill', url: '#', color: 'hover:bg-red-600' },
    { icon: 'ri-telegram-fill', url: '#', color: 'hover:bg-blue-500' }
  ];

  const paymentMethods = [
    'CIMB Bank', 'BSN', 'ABB Bank', 'Touch n Go', 'Digi', 
    'Maxis', 'Celcom', 'Maybank', 'Hong Leong Bank'
  ];

  return (
    <footer className="bg-gradient-to-br from-amber-600 via-amber-700 to-orange-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img 
              src="https://static.readdy.ai/image/31a1107996a99a56af02e61b22b1b81c/d1c5d3ee01cb9701f16d397dd5f6df5c.png" 
              alt="E99 Logo" 
              className="h-12 mb-6"
            />
            <p className="text-amber-100 text-sm leading-relaxed mb-6">
              专业的在线游戏博客平台，为玩家提供最新的游戏资讯、策略指南和行业动态。
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
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

        <div className="border-t border-white/20 pt-8 mb-8">
          <h3 className="text-lg font-bold mb-4 text-center">支持的支付方式</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium"
              >
                {method}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-amber-100 text-sm mb-2">
            © 2024 E99 Gaming Blog. All rights reserved.
          </p>
          <p className="text-amber-100 text-xs">
            <a 
              href="https://readdy.ai/?origin=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Powered by Readdy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
