import { useState, useEffect } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function SlotsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Slots 在线老虎机博客 - 游戏知识、策略技巧和行业资讯 | Gaming Blog';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '探索在线老虎机的世界，学习 Slots 游戏知识、策略技巧和行业资讯。包括 Megaways 机制、累积奖池、RNG 原理、移动端游戏等专业内容，提升你的游戏体验。');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Slots, 在线老虎机, Slots攻略, Megaways, 累积奖池, Progressive Jackpots, RNG, 视频老虎机, 移动端Slots, 老虎机策略');
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', name: '全部文章', count: 21 },
    { id: 'beginner', name: '新手入门', count: 6 },
    { id: 'strategy', name: '游戏策略', count: 7 },
    { id: 'review', name: '游戏评测', count: 5 },
    { id: 'tips', name: '实用技巧', count: 3 }
  ];

  const articles = [
    {
      id: 1,
      title: 'Slots 在线老虎机完全指南：从基础到进阶',
      category: 'beginner',
      excerpt: '全面介绍在线老虎机的基本概念、游戏类型和玩法规则，帮助新手快速掌握这个最受欢迎的在线娱乐游戏。',
      author: 'Alex Chen',
      date: '2024-01-15',
      readTime: '12 分钟',
      views: 4156,
      image: 'https://readdy.ai/api/search-image?query=Comprehensive%20guide%20to%20online%20slots%20with%20educational%20infographic%20and%20golden%20reels%2C%20beginner%20friendly%20tutorial%20design%20with%20warm%20lighting%2C%20welcoming%20learning%20atmosphere%2C%20professional%20illustration&width=600&height=400&seq=slots1&orientation=landscape',
      tags: ['入门', '基础', '指南']
    },
    {
      id: 2,
      title: 'Megaways 老虎机机制深度解析：革命性的游戏创新',
      category: 'strategy',
      excerpt: '深入探讨 Megaways 机制的工作原理、特点和优势，了解这个改变在线老虎机行业的创新技术。',
      author: 'Sarah Wang',
      date: '2024-01-14',
      readTime: '15 分钟',
      views: 3842,
      image: 'https://readdy.ai/api/search-image?query=Megaways%20slot%20mechanism%20with%20cascading%20reels%20and%20multiple%20paylines%2C%20innovative%20gaming%20technology%20with%20golden%20gears%2C%20educational%20technical%20diagram%2C%20professional%20illustration&width=600&height=400&seq=slots2&orientation=landscape',
      tags: ['Megaways', '机制', '创新']
    },
    {
      id: 3,
      title: '累积奖池 Slots 详解：如何理解 Progressive Jackpots',
      category: 'beginner',
      excerpt: '详细讲解累积奖池老虎机的运作机制、类型和特点，帮助玩家理解这个令人兴奋的游戏功能。',
      author: 'Michael Li',
      date: '2024-01-13',
      readTime: '10 分钟',
      views: 3567,
      image: 'https://readdy.ai/api/search-image?query=Progressive%20jackpot%20slots%20with%20growing%20prize%20pool%20and%20golden%20coins%2C%20exciting%20winning%20potential%20with%20dramatic%20lighting%2C%20educational%20gaming%20concept%2C%20professional%20illustration&width=600&height=400&seq=slots3&orientation=landscape',
      tags: ['累积奖池', '大奖', '机制']
    },
    {
      id: 4,
      title: '视频 Slots vs 经典 Slots：选择适合你的游戏类型',
      category: 'review',
      excerpt: '对比分析视频老虎机和经典老虎机的特点、优势和游戏体验，帮助玩家找到最适合自己的游戏风格。',
      author: 'Emma Zhang',
      date: '2024-01-12',
      readTime: '11 分钟',
      views: 2934,
      image: 'https://readdy.ai/api/search-image?query=Comparison%20between%20video%20slots%20and%20classic%20slots%20with%20side%20by%20side%20display%2C%20gaming%20comparison%20with%20golden%20frames%2C%20educational%20contrast%20design%2C%20professional%20illustration&width=600&height=400&seq=slots4&orientation=landscape',
      tags: ['对比', '类型', '选择']
    },
    {
      id: 5,
      title: 'Slots 游戏中的奖金回合和免费旋转功能详解',
      category: 'strategy',
      excerpt: '深入分析在线老虎机中的各种奖金回合和免费旋转功能，了解如何最大化这些特殊功能的价值。',
      author: 'David Liu',
      date: '2024-01-11',
      readTime: '13 分钟',
      views: 3245,
      image: 'https://readdy.ai/api/search-image?query=Bonus%20rounds%20and%20free%20spins%20in%20slots%20with%20golden%20special%20features%2C%20exciting%20game%20mechanics%20with%20celebratory%20design%2C%20educational%20gaming%20guide%2C%20professional%20illustration&width=600&height=400&seq=slots5&orientation=landscape',
      tags: ['奖金回合', '免费旋转', '功能']
    },
    {
      id: 6,
      title: '理解 Slots 的波动性：高波动 vs 低波动游戏',
      category: 'tips',
      excerpt: '详细解释老虎机波动性的概念，教你如何根据自己的游戏风格和预算选择合适波动性的游戏。',
      author: 'Jessica Wu',
      date: '2024-01-10',
      readTime: '9 分钟',
      views: 2876,
      image: 'https://readdy.ai/api/search-image?query=Slot%20volatility%20analysis%20with%20high%20and%20low%20variance%20charts%2C%20educational%20gaming%20statistics%20with%20golden%20graphs%2C%20risk%20management%20concept%2C%20professional%20illustration&width=600&height=400&seq=slots6&orientation=landscape',
      tags: ['波动性', '风险', '选择']
    },
    {
      id: 7,
      title: '品牌 Slots：电影和电视主题老虎机的魅力',
      category: 'review',
      excerpt: '探索品牌授权老虎机的世界，了解电影、电视剧和音乐主题游戏如何结合娱乐和游戏体验。',
      author: 'Kevin Huang',
      date: '2024-01-09',
      readTime: '14 分钟',
      views: 2567,
      image: 'https://readdy.ai/api/search-image?query=Branded%20slots%20with%20movie%20and%20TV%20themes%2C%20entertainment%20crossover%20with%20golden%20Hollywood%20elements%2C%20cultural%20gaming%20phenomenon%2C%20professional%20illustration&width=600&height=400&seq=slots7&orientation=landscape',
      tags: ['品牌', '主题', '文化']
    },
    {
      id: 8,
      title: 'Slots 游戏的数学原理：RNG 和公平性解析',
      category: 'strategy',
      excerpt: '从技术角度解析在线老虎机的随机数生成器（RNG）工作原理，了解游戏的公平性和透明度。',
      author: 'Linda Chen',
      date: '2024-01-08',
      readTime: '16 分钟',
      views: 2134,
      image: 'https://readdy.ai/api/search-image?query=RNG%20and%20fairness%20in%20slots%20with%20mathematical%20algorithms%20and%20golden%20code%2C%20technical%20gaming%20explanation%20with%20scientific%20design%2C%20educational%20technology%20concept%2C%20professional%20illustration&width=600&height=400&seq=slots8&orientation=landscape',
      tags: ['RNG', '公平性', '技术']
    },
    {
      id: 9,
      title: '移动端 Slots：随时随地享受游戏的完整指南',
      category: 'beginner',
      excerpt: '介绍移动端老虎机游戏的特点、优势和注意事项，帮助玩家在手机和平板上获得最佳游戏体验。',
      author: 'Tom Zhang',
      date: '2024-01-07',
      readTime: '10 分钟',
      views: 3456,
      image: 'https://readdy.ai/api/search-image?query=Mobile%20slots%20gaming%20on%20smartphone%20and%20tablet%20with%20golden%20interface%2C%20portable%20gaming%20experience%20with%20modern%20design%2C%20accessibility%20concept%2C%20professional%20illustration&width=600&height=400&seq=slots9&orientation=landscape',
      tags: ['移动端', '便携', '体验']
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
              Slots 在线老虎机博客
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              探索<strong>在线老虎机</strong>的世界，学习游戏知识、策略技巧和行业资讯
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
                    {['入门', '策略', 'Megaways', '累积奖池', 'RNG', '移动端'].map((tag) => (
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
                          alt={`${article.title} - Slots 在线老虎机攻略配图`}
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
                  {[1, 2, 3].map((page) => (
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
