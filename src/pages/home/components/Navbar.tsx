import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  scrolled?: boolean;
}

export default function Navbar({ scrolled = true }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation('common');
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.pokies'), path: '/pokies' },
    { name: t('nav.slots'), path: '/slots' },
    { name: t('nav.liveGames'), path: '/live-games' },
    { name: t('nav.sports'), path: '/sports' },
    { name: t('nav.reviews'), path: '/reviews' },
    { name: t('nav.guide'), path: '/guide' },
    { name: t('nav.strategy'), path: '/strategy' },
    { name: t('nav.faq'), path: '/faq' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavClick = (path: string) => {
    try {
      // Use React Router's navigate function as primary method
      if (navigate) {
        navigate(path);
      } 
      // Fallback to custom navigation method if it exists
      else if (typeof window !== 'undefined' && window.REACT_APP_NAVIGATE) {
        window.REACT_APP_NAVIGATE(path);
      }
      // Ultimate fallback to window.location
      else {
        window.location.href = path;
      }
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback to window.location if other methods fail
      window.location.href = path;
    }
    setMobileMenuOpen(false);
  };

  const handleAuthClick = () => {
    window.open('https://t.ly/s99auBlog', '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('/')}
            className="flex-shrink-0 cursor-pointer"
          >
            <img 
              src="https://static.readdy.ai/image/31a1107996a99a56af02e61b22b1b81c/d5a1169527fb3b33d0026e1f33b31cf5.png" 
              alt="S99AU Logo" 
              className="h-12"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isActive(item.path)
                    ? 'bg-amber-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Login/Register Button */}
            <a
              href="https://t.ly/s99auBlog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer flex items-center space-x-2"
            >
              <i className="ri-user-line text-base"></i>
              <span>{t('loginRegister')}</span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors flex items-center space-x-2 cursor-pointer"
            >
              <i className="ri-global-line text-lg"></i>
              <span className="text-sm font-medium">{i18n.language === 'en' ? 'EN' : 'CN'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Login/Register Button for Mobile */}
            <a
              href="https://t.ly/s99auBlog"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center"
            >
              <i className="ri-user-line text-base"></i>
            </a>

            {/* Language Switcher for Mobile */}
            <button
              onClick={toggleLanguage}
              className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full transition-colors flex items-center justify-center cursor-pointer"
            >
              <span className="text-xs font-medium">{i18n.language === 'en' ? 'EN' : 'CN'}</span>
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-amber-600 cursor-pointer"
            >
              <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-3xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    isActive(item.path)
                      ? 'bg-amber-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
