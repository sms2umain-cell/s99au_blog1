import { useState, useEffect } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function PokiesPage() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Pokies 老虎机博客 - 游戏攻略、技巧和知识分享 | Gaming Blog';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '深入了解 Pokies 老虎机的知识、技巧和文化。提供从入门到精通的完整指南，包括 RTP 解析、符号功能、游戏策略、历史演变等专业内容，帮助玩家提升游戏体验。');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Pokies, 老虎机, Pokies攻略, 老虎机技巧, RTP, 波动性, 游戏策略, 澳洲Pokies, 老虎机入门, 游戏评测');
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', name: '全部文章', count: 18 },
    { id: 'beginner', name: '新手入门', count: 5 },
    { id: 'strategy', name: '游戏策略', count: 6 },
    { id: 'review', name: '游戏评测', count: 4 },
    { id: 'tips', name: '实用技巧', count: 3 }
  ];

  const articles = [
    {
      id: 1,
      title: 'Pokies 老虎机完全入门指南：新手必读',
      category: 'beginner',
      excerpt: '从零开始了解 Pokies 老虎机的基本概念、游戏规则和常见术语，帮助新手快速入门这个经典的娱乐游戏。',
      author: 'Alex Chen',
      date: '2024-01-15',
      readTime: '10 分钟',
      views: 3247,
      image: 'https://readdy.ai/api/search-image?query=Beginner%20guide%20to%20pokies%20slot%20machines%20with%20educational%20infographic%20and%20golden%20symbols%2C%20friendly%20tutorial%20design%20with%20warm%20lighting%2C%20welcoming%20atmosphere%20for%20new%20players%2C%20professional%20illustration&width=600&height=400&seq=pokies1&orientation=landscape',
      tags: ['入门', '基础知识', '新手指南']
    },
    {
      id: 2,
      title: '理解 Pokies 的 RTP 和波动性：选择合适的游戏',
      category: 'strategy',
      excerpt: '深入解析 RTP（玩家回报率）和游戏波动性的概念，教你如何根据这些指标选择适合自己的 Pokies 游戏。',
      author: 'Sarah Wang',
      date: '2024-01-14',
      readTime: '12 分钟',
      views: 2856,
      image: 'https://readdy.ai/api/search-image?query=RTP%20and%20volatility%20analysis%20chart%20for%20pokies%20with%20golden%20graphs%20and%20statistics%2C%20educational%20gaming%20concept%20with%20professional%20design%2C%20data%20visualization%20with%20warm%20tones%2C%20informative%20illustration&width=600&height=400&seq=pokies2&orientation=landscape',
      tags: ['RTP', '波动性', '选择技巧']
    },
    {
      id: 3,
      title: 'Pokies 游戏中的特殊符号和功能详解',
      category: 'beginner',
      excerpt: '详细介绍 Pokies 游戏中的 Wild 符号、Scatter 符号、免费旋转和奖金回合等特殊功能的作用和触发方式。',
      author: 'Michael Li',
      date: '2024-01-13',
      readTime: '9 分钟',
      views: 2134,
      image: 'https://readdy.ai/api/search-image?query=Special%20symbols%20and%20features%20in%20pokies%20games%20with%20wild%20scatter%20bonus%20icons%2C%20educational%20gaming%20guide%20with%20golden%20accents%2C%20detailed%20symbol%20explanation%2C%20professional%20tutorial%20design&width=600&height=400&seq=pokies3&orientation=landscape',
      tags: ['符号', '功能', '游戏机制']
    },
    {
      id: 4,
      title: '经典 3 轴 Pokies vs 现代 5 轴 Pokies：有什么区别',
      category: 'review',
      excerpt: '对比分析传统 3 轴老虎机和现代 5 轴老虎机的特点、优势和游戏体验，帮助你找到最适合的游戏类型。',
      author: 'Emma Zhang',
      date: '2024-01-12',
      readTime: '11 分钟',
      views: 1923,
      image: 'https://readdy.ai/api/search-image?query=Comparison%20between%20classic%203%20reel%20and%20modern%205%20reel%20pokies%20machines%2C%20side%20by%20side%20gaming%20comparison%20with%20golden%20frames%2C%20educational%20contrast%20design%2C%20professional%20illustration&width=600&height=400&seq=pokies4&orientation=landscape',
      tags: ['对比', '游戏类型', '评测']
    },
    {
      id: 5,
      title: 'Pokies 游戏的历史演变：从机械到数字时代',
      category: 'review',
      excerpt: '回顾 Pokies 老虎机从 19 世纪末的机械装置到现代数字游戏的发展历程，了解这个经典游戏的演变过程。',
      author: 'David Liu',
      date: '2024-01-11',
      readTime: '15 分钟',
      views: 1567,
      image: 'https://readdy.ai/api/search-image?query=Evolution%20of%20pokies%20from%20mechanical%20to%20digital%20era%20with%20vintage%20and%20modern%20machines%2C%20historical%20gaming%20timeline%20with%20golden%20accents%2C%20nostalgic%20and%20futuristic%20design%2C%20educational%20illustration&width=600&height=400&seq=pokies5&orientation=landscape',
      tags: ['历史', '演变', '文化']
    },
    {
      id: 6,
      title: '如何管理你的 Pokies 游戏预算：理性娱乐指南',
      category: 'tips',
      excerpt: '分享实用的预算管理技巧和理性娱乐建议，帮助玩家在享受游戏乐趣的同时保持良好的消费习惯。',
      author: 'Jessica Wu',
      date: '2024-01-10',
      readTime: '8 分钟',
      views: 2789,
      image: 'https://readdy.ai/api/search-image?query=Budget%20management%20for%20pokies%20gaming%20with%20calculator%20and%20golden%20coins%2C%20responsible%20gaming%20guide%20with%20professional%20design%2C%20financial%20planning%20concept%2C%20educational%20illustration&width=600&height=400&seq=pokies6&orientation=landscape',
      tags: ['预算管理', '理性娱乐', '技巧']
    },
    {
      id: 7,
      title: 'Pokies 游戏中的支付线：如何理解和利用',
      category: 'strategy',
      excerpt: '详细讲解 Pokies 游戏中支付线的概念、类型和作用，教你如何通过理解支付线来提升游戏体验。',
      author: 'Kevin Huang',
      date: '2024-01-09',
      readTime: '10 分钟',
      views: 2156,
      image: 'https://readdy.ai/api/search-image?query=Paylines%20explanation%20in%20pokies%20with%20golden%20line%20patterns%20and%20winning%20combinations%2C%20educational%20gaming%20diagram%20with%20clear%20visualization%2C%20professional%20tutorial%20design%2C%20informative%20illustration&width=600&height=400&seq=pokies7&orientation=landscape',
      tags: ['支付线', '游戏机制', '策略']
    },
    {
      id: 8,
      title: '澳洲 Pokies 文化：为什么澳大利亚人如此热爱老虎机',
      category: 'review',
      excerpt: '探索澳大利亚独特的 Pokies 文化现象，了解为什么这个国家成为全球人均老虎机数量最多的地区。',
      author: 'Linda Chen',
      date: '2024-01-08',
      readTime: '13 分钟',
      views: 1834,
      image: 'https://readdy.ai/api/search-image?query=Australian%20pokies%20culture%20with%20iconic%20landmarks%20and%20gaming%20venues%2C%20cultural%20exploration%20with%20golden%20accents%2C%20social%20phenomenon%20illustration%2C%20professional%20documentary%20style&width=600&height=400&seq=pokies8&orientation=landscape',
      tags: ['文化', '澳洲', '社会现象']
    },
    {
      id: 9,
      title: 'Pokies 游戏的音效和视觉设计：心理学分析',
      category: 'strategy',
      excerpt: '从心理学角度分析 Pokies 游戏的音效、视觉设计和用户体验，了解游戏设计背后的科学原理。',
      author: 'Tom Zhang',
      date: '2024-01-07',
      readTime: '14 分钟',
      views: 2045,
      image: 'https://readdy.ai/api/search-image?query=Psychology%20of%20pokies%20sound%20and%20visual%20design%20with%20brain%20and%20sensory%20elements%2C%20scientific%20analysis%20with%20golden%20accents%2C%20educational%20psychology%20concept%2C%20professional%20illustration&width=600&height=400&seq=pokies9&orientation=landscape',
      tags: ['心理学', '设计', '用户体验']
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
              Pokies 老虎机博客
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              深入了解 <strong>Pokies 老虎机</strong>的知识、技巧和文化，从入门到精通的完整指南
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
                    {['入门', '策略', '评测', '技巧', 'RTP', '文化'].map((tag) => (
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
                          alt={`${article.title} - Pokies 老虎机攻略配图`}
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
