import { useState, useEffect } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function LiveGamesPage() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Live Games 真人娱乐场博客 - 游戏策略、技巧和体验分享 | Gaming Blog';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '深入了解真人娱乐场游戏，学习 Live Games 策略技巧，体验沉浸式游戏世界。包括百家乐、轮盘、二十一点、德州扑克等真人游戏的专业攻略和 Evolution Gaming 评测。');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Live Games, 真人娱乐场, 真人百家乐, 真人轮盘, 真人二十一点, Evolution Gaming, 真人荷官, 游戏秀, VIP娱乐场, 真人游戏策略');
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', name: '全部文章', count: 15 },
    { id: 'beginner', name: '新手入门', count: 4 },
    { id: 'strategy', name: '游戏策略', count: 5 },
    { id: 'review', name: '游戏评测', count: 4 },
    { id: 'tips', name: '实用技巧', count: 2 }
  ];

  const articles = [
    {
      id: 1,
      title: 'Live Games 真人娱乐场完全指南：沉浸式游戏体验',
      category: 'beginner',
      excerpt: '全面介绍真人娱乐场的概念、特点和优势，了解如何通过实时视频流与真人荷官互动，享受身临其境的游戏体验。',
      author: 'Alex Chen',
      date: '2024-01-15',
      readTime: '11 分钟',
      views: 3845,
      image: 'https://readdy.ai/api/search-image?query=Live%20casino%20dealer%20with%20professional%20gaming%20table%20and%20golden%20accents%2C%20immersive%20gaming%20experience%20with%20elegant%20studio%20lighting%2C%20welcoming%20atmosphere%2C%20professional%20illustration&width=600&height=400&seq=live1&orientation=landscape',
      tags: ['入门', '真人荷官', '体验']
    },
    {
      id: 2,
      title: '真人百家乐策略详解：庄闲对打法和看路技巧',
      category: 'strategy',
      excerpt: '深入讲解真人百家乐的游戏规则、投注策略和看路技巧，帮助玩家理解这个经典的真人娱乐场游戏。',
      author: 'Sarah Wang',
      date: '2024-01-14',
      readTime: '14 分钟',
      views: 4267,
      image: 'https://readdy.ai/api/search-image?query=Live%20baccarat%20strategy%20with%20cards%20and%20betting%20patterns%2C%20elegant%20casino%20table%20with%20golden%20details%2C%20educational%20gaming%20guide%2C%20professional%20illustration&width=600&height=400&seq=live2&orientation=landscape',
      tags: ['百家乐', '策略', '技巧']
    },
    {
      id: 3,
      title: 'Evolution Gaming 深度评测：行业领导者的创新之路',
      category: 'review',
      excerpt: '全面评测 Evolution Gaming 这个真人娱乐场行业的领导品牌，了解其创新游戏、技术优势和市场地位。',
      author: 'Michael Li',
      date: '2024-01-13',
      readTime: '15 分钟',
      views: 3156,
      image: 'https://readdy.ai/api/search-image?query=Evolution%20Gaming%20studio%20with%20multiple%20live%20dealer%20tables%20and%20golden%20branding%2C%20professional%20gaming%20provider%20showcase%2C%20innovative%20technology%2C%20professional%20illustration&width=600&height=400&seq=live3&orientation=landscape',
      tags: ['Evolution', '评测', '行业']
    },
    {
      id: 4,
      title: '真人轮盘游戏指南：欧式、美式和法式轮盘的区别',
      category: 'beginner',
      excerpt: '详细介绍真人轮盘游戏的不同版本，对比欧式、美式和法式轮盘的规则、赔率和游戏特点。',
      author: 'Emma Zhang',
      date: '2024-01-12',
      readTime: '12 分钟',
      views: 2934,
      image: 'https://readdy.ai/api/search-image?query=Live%20roulette%20wheel%20comparison%20with%20European%20American%20and%20French%20versions%2C%20educational%20gaming%20guide%20with%20golden%20wheel%2C%20professional%20illustration&width=600&height=400&seq=live4&orientation=landscape',
      tags: ['轮盘', '对比', '规则']
    },
    {
      id: 5,
      title: '真人二十一点基本策略：如何降低庄家优势',
      category: 'strategy',
      excerpt: '学习真人二十一点的基本策略表和决策技巧，了解如何通过正确的游戏策略最小化庄家优势。',
      author: 'David Liu',
      date: '2024-01-11',
      readTime: '13 分钟',
      views: 3567,
      image: 'https://readdy.ai/api/search-image?query=Live%20blackjack%20basic%20strategy%20chart%20with%20cards%20and%20golden%20table%2C%20educational%20gaming%20guide%20with%20decision%20matrix%2C%20professional%20illustration&width=600&height=400&seq=live5&orientation=landscape',
      tags: ['二十一点', '策略', '基本策略']
    },
    {
      id: 6,
      title: 'Game Shows 游戏秀：真人娱乐场的创新娱乐形式',
      category: 'review',
      excerpt: '探索真人娱乐场中的游戏秀类型，如 Crazy Time、Monopoly Live 等创新游戏的玩法和魅力。',
      author: 'Jessica Wu',
      date: '2024-01-10',
      readTime: '10 分钟',
      views: 2876,
      image: 'https://readdy.ai/api/search-image?query=Live%20game%20show%20with%20colorful%20wheel%20and%20exciting%20host%2C%20entertainment%20gaming%20experience%20with%20golden%20stage%2C%20innovative%20casino%20format%2C%20professional%20illustration&width=600&height=400&seq=live6&orientation=landscape',
      tags: ['游戏秀', '创新', '娱乐']
    },
    {
      id: 7,
      title: '真人娱乐场的技术解析：流媒体和互动技术',
      category: 'tips',
      excerpt: '从技术角度解析真人娱乐场的实现原理，了解视频流媒体、OCR 技术和实时互动系统的工作方式。',
      author: 'Kevin Huang',
      date: '2024-01-09',
      readTime: '16 分钟',
      views: 2134,
      image: 'https://readdy.ai/api/search-image?query=Live%20casino%20streaming%20technology%20with%20cameras%20and%20servers%2C%20technical%20infrastructure%20with%20golden%20circuits%2C%20educational%20technology%20concept%2C%20professional%20illustration&width=600&height=400&seq=live7&orientation=landscape',
      tags: ['技术', '流媒体', 'OCR']
    },
    {
      id: 8,
      title: '真人德州扑克入门：规则、术语和基本策略',
      category: 'beginner',
      excerpt: '详细介绍真人德州扑克的游戏规则、常用术语和基本策略，帮助新手快速入门这个流行的扑克游戏。',
      author: 'Linda Chen',
      date: '2024-01-08',
      readTime: '14 分钟',
      views: 3245,
      image: 'https://readdy.ai/api/search-image?query=Live%20Texas%20Holdem%20poker%20table%20with%20cards%20and%20chips%2C%20beginner%20guide%20with%20golden%20poker%20elements%2C%20educational%20gaming%20tutorial%2C%20professional%20illustration&width=600&height=400&seq=live8&orientation=landscape',
      tags: ['德州扑克', '入门', '规则']
    },
    {
      id: 9,
      title: 'VIP 真人娱乐场体验：高额桌和专属服务详解',
      category: 'review',
      excerpt: '探索真人娱乐场的 VIP 体验，了解高额投注桌、专属荷官和个性化服务的特点和优势。',
      author: 'Tom Zhang',
      date: '2024-01-07',
      readTime: '11 分钟',
      views: 2567,
      image: 'https://readdy.ai/api/search-image?query=VIP%20live%20casino%20with%20luxury%20table%20and%20exclusive%20service%2C%20premium%20gaming%20experience%20with%20golden%20luxury%20elements%2C%20high%20roller%20atmosphere%2C%20professional%20illustration&width=600&height=400&seq=live9&orientation=landscape',
      tags: ['VIP', '高额桌', '专属服务']
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar scrolled={scrolled} />
      
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Live Games 真人娱乐场博客
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              深入了解<strong>真人娱乐场游戏</strong>，学习策略技巧，体验沉浸式游戏世界
            </p>
          </header>

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <nav className="bg-white rounded-xl shadow-md p-6 sticky top-24" aria-label="文章分类导航">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">文章分类</h2>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className={`text-sm ${
                        selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">热门标签</h3>
                  <div className="flex flex-wrap gap-2">
                    {['百家乐', '轮盘', '二十一点', 'Evolution', '游戏秀', 'VIP'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-amber-50 text-amber-700 text-sm rounded-full hover:bg-amber-100 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </nav>
            </aside>

            <section className="flex-1">
              <div className="space-y-6">
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                        <img
                          src={article.image}
                          alt={`${article.title} - Live Games 真人娱乐场攻略配图`}
                          title={article.title}
                          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="md:w-3/5 p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                            {categories.find(c => c.id === article.category)?.name}
                          </span>
                          <time className="text-sm text-gray-500" dateTime={article.date}>{article.date}</time>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1.5">
                              <i className="ri-user-line"></i>
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <i className="ri-time-line"></i>
                              <span>{article.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <i className="ri-eye-line"></i>
                              <span>{article.views}</span>
                            </div>
                          </div>

                          <button className="flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors whitespace-nowrap cursor-pointer">
                            阅读全文
                            <i className="ri-arrow-right-line"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
                    <i className="ri-arrow-left-s-line"></i>
                  </button>
                  {[1, 2].map((page) => (
                    <button
                      key={page}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap ${
                        page === 1
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                          : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
