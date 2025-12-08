
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Pharaoh\'s Fortune Pokies',
      subtitle: '探索古埃及的神秘宝藏',
      description: '体验最刺激的老虎机游戏，赢取丰厚奖金',
      image: 'https://readdy.ai/api/search-image?query=Ancient%20Egyptian%20pharaoh%20golden%20treasure%20room%20with%20slot%20machines%20and%20mystical%20hieroglyphics%2C%20luxurious%20casino%20interior%20with%20warm%20golden%20lighting%2C%20ornate%20columns%20and%20sphinx%20statues%2C%20rich%20amber%20and%20gold%20color%20palette%2C%20cinematic%20atmosphere%2C%20high%20detail%20digital%20art&width=1920&height=800&seq=hero1&orientation=landscape',
      cta: '立即游玩'
    },
    {
      title: 'Live Casino Experience',
      subtitle: '真人荷官在线互动',
      description: '享受真实赌场体验，专业荷官24小时在线',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20live%20casino%20dealer%20table%20with%20professional%20croupier%2C%20luxurious%20gaming%20environment%20with%20soft%20golden%20lighting%2C%20modern%20casino%20interior%20with%20Egyptian%20themed%20decorations%2C%20warm%20amber%20tones%2C%20sophisticated%20atmosphere%2C%20premium%20quality%20photography&width=1920&height=800&seq=hero2&orientation=landscape',
      cta: '进入直播'
    },
    {
      title: 'Sports Betting Arena',
      subtitle: '全球体育赛事投注',
      description: '覆盖足球、篮球等热门赛事，实时赔率更新',
      image: 'https://readdy.ai/api/search-image?query=Modern%20sports%20betting%20stadium%20with%20digital%20screens%20showing%20live%20matches%2C%20futuristic%20gaming%20interface%20with%20golden%20accents%2C%20dynamic%20sports%20action%20with%20Egyptian%20themed%20elements%2C%20energetic%20atmosphere%20with%20warm%20lighting%2C%20high-tech%20visualization&width=1920&height=800&seq=hero3&orientation=landscape',
      cta: '查看赛事'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
          </div>

          <div className="relative h-full flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-2xl md:text-3xl text-amber-300 mb-4 font-medium">
                {slide.subtitle}
              </p>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {slide.description}
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-lg font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-2xl hover:shadow-amber-500/50 whitespace-nowrap cursor-pointer">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              index === currentSlide 
                ? 'bg-amber-500 w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
