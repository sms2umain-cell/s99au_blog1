
import { useState } from 'react';

export default function Categories() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    {
      id: 'pokies',
      name: 'Pokies',
      icon: 'ri-game-line',
      count: 156,
      color: 'from-amber-500 to-orange-500',
      description: '经典老虎机游戏'
    },
    {
      id: 'slots',
      name: 'Slots',
      icon: 'ri-trophy-line',
      count: 203,
      color: 'from-yellow-500 to-amber-500',
      description: '多样化的老虎机'
    },
    {
      id: 'live',
      name: 'Live Games',
      icon: 'ri-live-line',
      count: 48,
      color: 'from-red-500 to-pink-500',
      description: '真人荷官游戏'
    },
    {
      id: 'sports',
      name: 'Sports',
      icon: 'ri-football-line',
      count: 89,
      color: 'from-green-500 to-emerald-500',
      description: '体育赛事投注'
    }
  ];

  const tags = [
    { name: '新手指南', count: 45 },
    { name: '策略技巧', count: 67 },
    { name: '游戏评测', count: 89 },
    { name: '奖金优惠', count: 34 },
    { name: '支付方式', count: 23 },
    { name: '安全保障', count: 28 },
    { name: '移动游戏', count: 56 },
    { name: '高额奖金', count: 41 },
    { name: '免费试玩', count: 52 },
    { name: '实时赔率', count: 38 },
    { name: 'VIP特权', count: 19 },
    { name: '客服支持', count: 31 }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            游戏分类与标签
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            快速找到你感兴趣的游戏类型和相关内容
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${category.icon} text-3xl text-white`}></i>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900">
                    {category.count}
                  </span>
                  <span className="text-sm text-gray-500">篇文章</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            热门标签
          </h3>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-white text-gray-700 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg font-medium whitespace-nowrap cursor-pointer group"
              >
                <span className="mr-2">{tag.name}</span>
                <span className="text-sm text-gray-500 group-hover:text-white/80">
                  ({tag.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
