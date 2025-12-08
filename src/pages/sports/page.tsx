import { useState, useEffect } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function SportsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Sports 体育投注博客 - 投注策略、赛事分析和技巧分享 | Gaming Blog';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '学习体育投注知识和策略，掌握赛事分析技巧，提升投注水平。包括足球投注、NBA篮球、网球、电竞等多种体育项目的专业分析和资金管理方法。');
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Sports, 体育投注, 足球投注, NBA投注, 篮球投注, 赔率分析, 滚球投注, 串关投注, 电竞投注, 投注策略, 资金管理');
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', name: '全部文章', count: 16 },
    { id: 'beginner', name: '新手入门', count: 4 },
    { id: 'strategy', name: '投注策略', count: 6 },
    { id: 'analysis', name: '赛事分析', count: 4 },
    { id: 'tips', name: '实用技巧', count: 2 }
  ];

  const articles = [
    {
      id: 1,
      title: '体育投注完全入门指南：从零开始学习体育博彩',
      category: 'beginner',
      excerpt: '全面介绍体育投注的基本概念、常见术语和投注类型，帮助新手快速了解体育博彩的世界。',
      author: 'Alex Chen',
      date: '2024-01-15',
      readTime: '12 分钟',
      views: 4523,
      image: 'https://readdy.ai/api/search-image?query=Sports%20betting%20beginner%20guide%20with%20stadium%20and%20betting%20slip%2C%20educational%20sports%20wagering%20concept%20with%20golden%20accents%2C%20welcoming%20tutorial%20design%2C%20professional%20illustration&width=600&height=400&seq=sports1&orientation=landscape',
      tags: ['入门', '基础', '术语']
    },
    {
      id: 2,
      title: '足球投注策略：如何分析赛事和赔率',
      category: 'strategy',
      excerpt: '深入讲解足球投注的分析方法，包括球队状态、历史交锋、伤病情况和赔率变化等关键因素。',
      author: 'Sarah Wang',
      date: '2024-01-14',
      readTime: '15 分钟',
      views: 5234,
      image: 'https://readdy.ai/api/search-image?query=Football%20betting%20strategy%20with%20soccer%20field%20and%20analysis%20charts%2C%20professional%20sports%20wagering%20guide%20with%20golden%20statistics%2C%20tactical%20planning%2C%20professional%20illustration&width=600&height=400&seq=sports2&orientation=landscape',
      tags: ['足球', '策略', '分析']
    },
    {
      id: 3,
      title: '理解体育投注赔率：欧洲盘、亚洲盘和美国盘详解',
      category: 'beginner',
      excerpt: '详细解释三种主要赔率格式的计算方法和使用场景，帮助玩家理解不同赔率系统的特点。',
      author: 'Michael Li',
      date: '2024-01-13',
      readTime: '11 分钟',
      views: 3867,
      image: 'https://readdy.ai/api/search-image?query=Sports%20betting%20odds%20comparison%20with%20European%20Asian%20and%20American%20formats%2C%20educational%20wagering%20guide%20with%20golden%20numbers%2C%20mathematical%20concept%2C%20professional%20illustration&width=600&height=400&seq=sports3&orientation=landscape',
      tags: ['赔率', '欧洲盘', '亚洲盘']
    },
    {
      id: 4,
      title: 'NBA 篮球投注技巧：数据分析和投注策略',
      category: 'analysis',
      excerpt: '分享 NBA 篮球投注的数据分析方法，包括球员表现、主客场优势、背靠背比赛等关键指标。',
      author: 'Emma Zhang',
      date: '2024-01-12',
      readTime: '14 分钟',
      views: 4156,
      image: 'https://readdy.ai/api/search-image?query=NBA%20basketball%20betting%20analysis%20with%20court%20and%20player%20statistics%2C%20professional%20sports%20data%20with%20golden%20charts%2C%20analytical%20approach%2C%20professional%20illustration&width=600&height=400&seq=sports4&orientation=landscape',
      tags: ['NBA', '篮球', '数据分析']
    },
    {
      id: 5,
      title: '滚球投注策略：实时投注的技巧和注意事项',
      category: 'strategy',
      excerpt: '深入探讨滚球投注（实时投注）的特点、优势和策略，学习如何在比赛进行中做出正确的投注决策。',
      author: 'David Liu',
      date: '2024-01-11',
      readTime: '13 分钟',
      views: 3645,
      image: 'https://readdy.ai/api/search-image?query=Live%20in-play%20sports%20betting%20with%20real-time%20odds%20and%20action%2C%20dynamic%20wagering%20concept%20with%20golden%20live%20indicators%2C%20exciting%20moment%2C%20professional%20illustration&width=600&height=400&seq=sports5&orientation=landscape',
      tags: ['滚球', '实时投注', '策略']
    },
    {
      id: 6,
      title: '网球投注指南：大满贯赛事分析和投注技巧',
      category: 'analysis',
      excerpt: '详细介绍网球投注的特点和策略，重点分析大满贯赛事的投注机会和注意事项。',
      author: 'Jessica Wu',
      date: '2024-01-10',
      readTime: '12 分钟',
      views: 2934,
      image: 'https://readdy.ai/api/search-image?query=Tennis%20betting%20guide%20with%20grand%20slam%20court%20and%20racket%2C%20professional%20sports%20wagering%20with%20golden%20tennis%20elements%2C%20elegant%20design%2C%20professional%20illustration&width=600&height=400&seq=sports6&orientation=landscape',
      tags: ['网球', '大满贯', '分析']
    },
    {
      id: 7,
      title: '体育投注的资金管理：凯利公式和投注单位详解',
      category: 'tips',
      excerpt: '学习专业的资金管理方法，包括凯利公式的应用、投注单位的设定和风险控制策略。',
      author: 'Kevin Huang',
      date: '2024-01-09',
      readTime: '16 分钟',
      views: 3267,
      image: 'https://readdy.ai/api/search-image?query=Sports%20betting%20bankroll%20management%20with%20Kelly%20criterion%20formula%2C%20professional%20money%20management%20with%20golden%20coins%20and%20charts%2C%20financial%20strategy%2C%20professional%20illustration&width=600&height=400&seq=sports7&orientation=landscape',
      tags: ['资金管理', '凯利公式', '风险控制']
    },
    {
      id: 8,
      title: '电竞投注入门：DOTA2 和 CS:GO 投注指南',
      category: 'beginner',
      excerpt: '介绍电竞投注的基础知识，重点讲解 DOTA2 和 CS:GO 两个热门电竞项目的投注技巧。',
      author: 'Linda Chen',
      date: '2024-01-08',
      readTime: '13 分钟',
      views: 3845,
      image: 'https://readdy.ai/api/search-image?query=Esports%20betting%20guide%20with%20gaming%20arena%20and%20team%20logos%2C%20modern%20competitive%20gaming%20with%20golden%20digital%20elements%2C%20tech-savvy%20design%2C%20professional%20illustration&width=600&height=400&seq=sports8&orientation=landscape',
      tags: ['电竞', 'DOTA2', 'CS:GO']
    },
    {
      id: 9,
      title: '串关投注策略：如何提高多场比赛组合的成功率',
      category: 'strategy',
      excerpt: '深入分析串关投注（累积投注）的特点和策略，学习如何选择合适的比赛组合和控制风险。',
      author: 'Tom Zhang',
      date: '2024-01-07',
      readTime: '14 分钟',
      views: 3156,
      image: 'https://readdy.ai/api/search-image?query=Parlay%20accumulator%20betting%20strategy%20with%20multiple%20games%20combination%2C%20complex%20wagering%20system%20with%20golden%20connections%2C%20strategic%20planning%2C%20professional%20illustration&width=600&height=400&seq=sports9&orientation=landscape',
      tags: ['串关', '组合投注', '策略']
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
              Sports 体育投注博客
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              学习<strong>体育投注</strong>知识和策略，掌握赛事分析技巧，提升投注水平
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
                    {['足球', 'NBA', '赔率', '滚球', '串关', '电竞'].map((tag) => (
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
                          alt={`${article.title} - Sports 体育投注攻略配图`}
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
