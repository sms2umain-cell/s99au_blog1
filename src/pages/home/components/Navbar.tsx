
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: '首页', path: '/' },
    { name: 'Pokies', path: '/pokies' },
    { name: 'Slots', path: '/slots' },
    { name: 'Live Games', path: '/live-games' },
    { name: 'Sports', path: '/sports' },
    { name: 'Blog', path: '/blog' },
    { name: '联系我们', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://static.readdy.ai/image/31a1107996a99a56af02e61b22b1b81c/d1c5d3ee01cb9701f16d397dd5f6df5c.png" 
              alt="E99 Logo" 
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <i className="ri-search-line text-xl"></i>
            </button>

            <Link
              to="/contact"
              className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-medium rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg whitespace-nowrap cursor-pointer"
            >
              立即加入
            </Link>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索游戏、文章..."
                className="w-full px-5 py-3 pl-12 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
