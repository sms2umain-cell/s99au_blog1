
export default function LatestArticles() {
  const articles = [
    {
      title: 'Top 10 Pharaoh\'s Fortune Pokies 策略指南',
      excerpt: '深入了解 Pharaoh\'s Fortune Pokies 的游戏机制，掌握获胜技巧。本文将为你揭示如何最大化你的奖金，以及如何利用游戏中的特殊功能来提升胜率。',
      image: 'https://readdy.ai/api/search-image?query=Ancient%20Egyptian%20pharaoh%20fortune%20pokies%20slot%20machine%20with%20golden%20treasures%20and%20hieroglyphics%2C%20luxurious%20casino%20game%20interface%20with%20warm%20lighting%2C%20ornate%20Egyptian%20themed%20design%20with%20sphinx%20and%20pyramids%2C%20rich%20amber%20and%20gold%20color%20scheme%2C%20detailed%20game%20illustration&width=800&height=500&seq=article1&orientation=landscape',
      category: 'Pokies',
      author: 'Ryan Mason',
      date: '2024年1月15日',
      readTime: '8分钟'
    },
    {
      title: 'Live Casino 真人荷官游戏完整攻略',
      excerpt: '探索真人荷官游戏的魅力，了解如何在 Live Casino 中获得最佳体验。从选择合适的游戏桌到与荷官互动的技巧，这篇文章将为你提供全面的指导。',
      image: 'https://readdy.ai/api/search-image?query=Professional%20live%20casino%20dealer%20at%20elegant%20gaming%20table%20with%20cards%20and%20chips%2C%20luxurious%20casino%20interior%20with%20Egyptian%20themed%20decorations%2C%20warm%20sophisticated%20lighting%20with%20golden%20accents%2C%20premium%20atmosphere%2C%20high-quality%20casino%20photography&width=800&height=500&seq=article2&orientation=landscape',
      category: 'Live Games',
      author: 'Sarah Chen',
      date: '2024年1月12日',
      readTime: '10分钟'
    },
    {
      title: '2024年最佳 Slot Games 推荐榜单',
      excerpt: '我们精心挑选了2024年最值得尝试的老虎机游戏。无论你是新手还是资深玩家，这份榜单都能帮助你找到最适合自己的游戏，享受无与伦比的娱乐体验。',
      image: 'https://readdy.ai/api/search-image?query=Collection%20of%20colorful%20slot%20machine%20games%20with%20Egyptian%20themes%2C%20vibrant%20casino%20gaming%20interface%20with%20golden%20symbols%20and%20treasures%2C%20modern%20slot%20game%20design%20with%20warm%20lighting%2C%20multiple%20game%20screens%20showing%20different%20themes%2C%20exciting%20casino%20atmosphere&width=800&height=500&seq=article3&orientation=landscape',
      category: 'Slots',
      author: 'Michael Wong',
      date: '2024年1月10日',
      readTime: '12分钟'
    },
    {
      title: 'Sports Betting 体育投注入门指南',
      excerpt: '想要开始体育投注但不知从何入手？本指南将带你了解体育投注的基础知识，包括如何阅读赔率、选择投注类型，以及管理你的投注资金。',
      image: 'https://readdy.ai/api/search-image?query=Exciting%20sports%20betting%20stadium%20with%20live%20football%20match%20and%20digital%20betting%20interface%2C%20modern%20sports%20arena%20with%20Egyptian%20themed%20golden%20accents%2C%20dynamic%20action%20photography%20with%20warm%20lighting%2C%20high-tech%20visualization%20screens%2C%20energetic%20atmosphere&width=800&height=500&seq=article4&orientation=landscape',
      category: 'Sports',
      author: 'David Lee',
      date: '2024年1月8日',
      readTime: '15分钟'
    },
    {
      title: 'Egyptian Themed Pokies 深度评测',
      excerpt: '埃及主题的老虎机游戏一直深受玩家喜爱。我们对市场上最受欢迎的埃及主题 Pokies 进行了全面评测，帮助你找到最具价值的游戏选择。',
      image: 'https://readdy.ai/api/search-image?query=Majestic%20Egyptian%20themed%20slot%20machine%20with%20Anubis%20and%20pharaoh%20symbols%2C%20ancient%20temple%20background%20with%20golden%20treasures%20and%20hieroglyphics%2C%20mystical%20casino%20game%20design%20with%20warm%20amber%20lighting%2C%20ornate%20decorations%20with%20sphinx%20statues%2C%20rich%20detailed%20artwork&width=800&height=500&seq=article5&orientation=landscape',
      category: 'Pokies',
      author: 'Emma Taylor',
      date: '2024年1月5日',
      readTime: '9分钟'
    },
    {
      title: 'Blackjack 21点高级策略技巧',
      excerpt: '掌握21点的高级策略，提升你的胜率。本文详细介绍了基本策略表的使用方法、算牌技巧，以及如何在不同情况下做出最优决策。',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20blackjack%20table%20with%20playing%20cards%20and%20casino%20chips%2C%20luxurious%20gaming%20environment%20with%20Egyptian%20themed%20golden%20decorations%2C%20professional%20casino%20setting%20with%20warm%20lighting%2C%20sophisticated%20atmosphere%2C%20premium%20quality%20photography&width=800&height=500&seq=article6&orientation=landscape',
      category: 'Live Games',
      author: 'James Park',
      date: '2024年1月3日',
      readTime: '11分钟'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            最新文章
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            获取最新的游戏资讯、策略指南和行业动态
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-amber-500 text-white text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {article.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{article.author}</p>
                      <p className="text-xs text-gray-500">{article.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <i className="ri-time-line text-sm"></i>
                    <span className="text-xs">{article.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-lg font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg whitespace-nowrap cursor-pointer">
            查看所有文章
          </button>
        </div>
      </div>
    </section>
  );
}
