import { useState, useEffect } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function BlogPage() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Blog 游戏博客 - 专业游戏攻略、评测和行业资讯 | Gaming Blog';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '专业的游戏攻略、评测和行业资讯，助你成为游戏高手。涵盖老虎机、真人游戏、体育投注等多个领域的深度文章和实用技巧分享。');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Blog, 游戏博客, 游戏攻略, 游戏评测, 行业资讯, 投注技巧, 老虎机攻略, 真人游戏, 体育投注, 游戏策略');
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', name: '全部文章', count: 24 },
    { id: 'strategy', name: '游戏攻略', count: 8 },
    { id: 'review', name: '游戏评测', count: 6 },
    { id: 'news', name: '行业资讯', count: 5 },
    { id: 'tips', name: '投注技巧', count: 5 }
  ];

  const articles = [
    {
      id: 1,
      title: 'Pharaoh\'s Fortune 老虎机完全攻略：如何提高中奖率',
      category: 'strategy',
      excerpt: '深入解析 Pharaoh\'s Fortune 游戏机制，分享实用的投注策略和技巧，帮助玩家提高游戏胜率和收益。',
      author: 'Alex Chen',
      date: '2024-01-15',
      readTime: '8 分钟',
      views: 2847,
      image: 'https://readdy.ai/api/search-image?query=Ancient%20Egyptian%20pharaoh%20golden%20treasure%20slot%20machine%20strategy%20guide%20with%20game%20interface%20and%20winning%20symbols%2C%20professional%20casino%20gaming%20tutorial%20with%20warm%20golden%20lighting%2C%20educational%20content%20design%2C%20high%20quality%20illustration&width=600&height=400&seq=blog1&orientation=landscape',
      tags: ['老虎机', '攻略', '埃及主题']
    },
    {
      id: 2,
      title: '2024年最佳在线老虎机游戏推荐TOP 10',
      category: 'review',
      excerpt: '精选2024年最受欢迎的在线老虎机游戏，从RTP、游戏特色、奖金机制等多个维度进行专业评测。',
      author: 'Sarah Wang',
      date: '2024-01-14',
      readTime: '12 分钟',
      views: 3521,
      image: 'https://readdy.ai/api/search-image?query=Collection%20of%20colorful%20slot%20machine%20games%20showcase%20with%20various%20themes%2C%20professional%20casino%20game%20review%20layout%20with%20golden%20frames%2C%20top%20games%20compilation%20design%2C%20premium%20quality%20graphics&width=600&height=400&seq=blog2&orientation=landscape',
      tags: ['评测', '推荐', '老虎机']
    },
    {
      id: 3,
      title: '真人百家乐投注策略：庄闲对打法详解',
      category: 'strategy',
      excerpt: '详细讲解百家乐游戏规则和各种投注策略，包括庄闲对打法、看路技巧等实战经验分享。',
      author: 'Michael Li',
      date: '2024-01-13',
      readTime: '10 分钟',
      views: 2156,
      image: 'https://readdy.ai/api/search-image?query=Elegant%20baccarat%20table%20with%20cards%20and%20chips%20strategy%20diagram%2C%20luxurious%20casino%20gaming%20tutorial%20with%20golden%20accents%2C%20professional%20betting%20strategy%20illustration%2C%20high-end%20design&width=600&height=400&seq=blog3&orientation=landscape',
      tags: ['百家乐', '策略', '真人游戏']
    },
    {
      id: 4,
      title: 'Evolution Gaming 新游戏 Lightning Roulette 深度评测',
      category: 'review',
      excerpt: 'Evolution Gaming 最新推出的 Lightning Roulette 游戏评测，体验创新的闪电倍数机制。',
      author: 'Emma Zhang',
      date: '2024-01-12',
      readTime: '9 分钟',
      views: 1892,
      image: 'https://readdy.ai/api/search-image?query=Lightning%20roulette%20game%20with%20electric%20effects%20and%20golden%20lightning%20bolts%2C%20dramatic%20casino%20game%20review%20with%20professional%20dealer%2C%20innovative%20gaming%20technology%2C%20cinematic%20quality&width=600&height=400&seq=blog4&orientation=landscape',
      tags: ['轮盘', '评测', 'Evolution']
    },
    {
      id: 5,
      title: '体育投注入门指南：如何分析足球赛事赔率',
      category: 'tips',
      excerpt: '从零开始学习体育投注，掌握足球赛事分析方法和赔率计算技巧，提高投注成功率。',
      author: 'David Liu',
      date: '2024-01-11',
      readTime: '15 分钟',
      views: 2734,
      image: 'https://readdy.ai/api/search-image?query=Football%20betting%20odds%20analysis%20with%20stadium%20and%20statistics%20charts%2C%20professional%20sports%20betting%20guide%20with%20golden%20accents%2C%20educational%20infographic%20design%2C%20modern%20layout&width=600&height=400&seq=blog5&orientation=landscape',
      tags: ['体育投注', '足球', '入门']
    },
    {
      id: 6,
      title: '在线赌场行业2024年度报告：市场趋势与展望',
      category: 'news',
      excerpt: '全面分析2024年在线赌场行业发展趋势，包括市场规模、技术创新、监管政策等方面。',
      author: 'Jessica Wu',
      date: '2024-01-10',
      readTime: '20 分钟',
      views: 1567,
      image: 'https://readdy.ai/api/search-image?query=Modern%20online%20casino%20industry%20report%20with%20digital%20charts%20and%20global%20market%20data%2C%20professional%20business%20analysis%20with%20golden%20accents%2C%20corporate%20presentation%20design%2C%20high%20quality%20graphics&width=600&height=400&seq=blog6&orientation=landscape',
      tags: ['行业报告', '趋势', '市场分析']
    },
    {
      id: 7,
      title: 'Megaways 老虎机机制解析：为什么它如此受欢迎',
      category: 'strategy',
      excerpt: '深入了解 Megaways 游戏机制的独特之处，以及为什么这种创新玩法能够吸引大量玩家。',
      author: 'Kevin Huang',
      date: '2024-01-09',
      readTime: '11 分钟',
      views: 2289,
      image: 'https://readdy.ai/api/search-image?query=Megaways%20slot%20machine%20mechanism%20with%20cascading%20reels%20and%20multiple%20paylines%2C%20innovative%20casino%20game%20technology%20with%20golden%20gears%2C%20educational%20gaming%20concept%2C%20detailed%20illustration&width=600&height=400&seq=blog7&orientation=landscape',
      tags: ['Megaways', '机制', '创新']
    },
    {
      id: 8,
      title: '累积奖池老虎机指南：如何追逐百万大奖',
      category: 'tips',
      excerpt: '了解累积奖池老虎机的运作原理，学习如何选择合适的游戏和制定投注计划。',
      author: 'Linda Chen',
      date: '2024-01-08',
      readTime: '13 分钟',
      views: 3156,
      image: 'https://readdy.ai/api/search-image?query=Progressive%20jackpot%20slot%20machine%20with%20massive%20prize%20display%20and%20golden%20coins%2C%20exciting%20casino%20winning%20moment%20with%20dramatic%20lighting%2C%20fortune%20and%20wealth%20theme%2C%20premium%20quality&width=600&height=400&seq=blog8&orientation=landscape',
      tags: ['累积奖池', '大奖', '技巧']
    },
    {
      id: 9,
      title: 'NBA投注技巧：如何利用数据分析提高胜率',
      category: 'tips',
      excerpt: '分享NBA篮球投注的数据分析方法，包括球队状态、伤病情况、历史交锋等关键因素。',
      author: 'Tom Zhang',
      date: '2024-01-07',
      readTime: '14 分钟',
      views: 1923,
      image: 'https://readdy.ai/api/search-image?query=NBA%20basketball%20betting%20analysis%20with%20court%20statistics%20and%20player%20data%2C%20professional%20sports%20betting%20guide%20with%20golden%20charts%2C%20modern%20infographic%20design%2C%20dynamic%20layout&width=600&height=400&seq=blog9&orientation=landscape',
      tags: ['NBA', '篮球', '数据分析']
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
              Blog 游戏博客
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              专业的<strong>游戏攻略</strong>、评测和行业资讯，助你成为游戏高手
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
                    {['老虎机', '攻略', '评测', '真人游戏', '体育投注', '技巧'].map((tag) => (
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
                          alt={`${article.title} - 游戏攻略配图`}
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
                  {[1, 2, 3, 4, 5].map((page) => (
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