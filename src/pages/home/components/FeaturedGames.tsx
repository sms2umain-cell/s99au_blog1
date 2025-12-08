
export default function FeaturedGames() {
  const games = [
    {
      title: 'Pharaoh\'s Fortune',
      category: 'Pokies',
      image: 'https://readdy.ai/api/search-image?query=Ancient%20Egyptian%20pharaoh%20golden%20slot%20machine%20game%20interface%20with%20hieroglyphics%20and%20treasure%20symbols%2C%20luxurious%20casino%20game%20design%20with%20warm%20golden%20lighting%2C%20ornate%20frame%20with%20sphinx%20decorations%2C%20rich%20amber%20and%20gold%20colors%2C%20detailed%20game%20art&width=600&height=400&seq=game1&orientation=landscape',
      rating: 4.8,
      players: '2.5K'
    },
    {
      title: 'Cleopatra Slots',
      category: 'Slots',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20Cleopatra%20themed%20slot%20machine%20with%20Egyptian%20queen%20symbols%20and%20golden%20treasures%2C%20elegant%20casino%20game%20interface%20with%20warm%20amber%20lighting%2C%20ornate%20decorations%20with%20ancient%20artifacts%2C%20sophisticated%20color%20palette%2C%20premium%20game%20design&width=600&height=400&seq=game2&orientation=landscape',
      rating: 4.9,
      players: '3.2K'
    },
    {
      title: 'Anubis Jackpot',
      category: 'Pokies',
      image: 'https://readdy.ai/api/search-image?query=Anubis%20Egyptian%20god%20themed%20jackpot%20slot%20game%20with%20mystical%20symbols%20and%20golden%20treasures%2C%20dramatic%20casino%20game%20design%20with%20warm%20lighting%2C%20ancient%20temple%20background%20with%20hieroglyphics%2C%20rich%20gold%20and%20amber%20tones%2C%20epic%20game%20artwork&width=600&height=400&seq=game3&orientation=landscape',
      rating: 4.7,
      players: '1.8K'
    },
    {
      title: 'Live Roulette VIP',
      category: 'Live Games',
      image: 'https://readdy.ai/api/search-image?query=Luxurious%20live%20roulette%20table%20with%20professional%20dealer%20in%20elegant%20casino%20setting%2C%20Egyptian%20themed%20VIP%20gaming%20room%20with%20golden%20accents%2C%20warm%20sophisticated%20lighting%2C%20premium%20casino%20atmosphere%2C%20high-end%20photography&width=600&height=400&seq=game4&orientation=landscape',
      rating: 4.9,
      players: '4.1K'
    },
    {
      title: 'Blackjack Royal',
      category: 'Live Games',
      image: 'https://readdy.ai/api/search-image?query=Premium%20blackjack%20table%20with%20cards%20and%20chips%20in%20luxurious%20casino%20environment%2C%20Egyptian%20themed%20gaming%20area%20with%20golden%20decorations%2C%20warm%20ambient%20lighting%2C%20sophisticated%20atmosphere%2C%20professional%20casino%20photography&width=600&height=400&seq=game5&orientation=landscape',
      rating: 4.8,
      players: '2.9K'
    },
    {
      title: 'Football Betting',
      category: 'Sports',
      image: 'https://readdy.ai/api/search-image?query=Dynamic%20football%20stadium%20with%20live%20match%20action%20and%20betting%20interface%20overlay%2C%20modern%20sports%20betting%20visualization%20with%20golden%20accents%2C%20energetic%20atmosphere%20with%20Egyptian%20themed%20elements%2C%20vibrant%20colors%2C%20high-tech%20sports%20graphics&width=600&height=400&seq=game6&orientation=landscape',
      rating: 4.6,
      players: '5.3K'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            热门游戏推荐
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            精选最受欢迎的游戏，带给你极致的娱乐体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-product-shop>
          {games.map((game, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-amber-500 text-white text-sm font-medium rounded-full">
                    {game.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors whitespace-nowrap">
                    立即游玩
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {game.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <i className="ri-star-fill text-amber-500 text-lg"></i>
                    <span className="text-gray-700 font-semibold">{game.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <i className="ri-user-line text-lg"></i>
                    <span className="text-sm">{game.players} 在线</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-lg font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg whitespace-nowrap cursor-pointer">
            查看更多游戏
          </button>
        </div>
      </div>
    </section>
  );
}
