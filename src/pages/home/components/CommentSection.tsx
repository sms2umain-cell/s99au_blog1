
import { useState } from 'react';

export default function CommentSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('请填写所有必填字段');
      return;
    }

    if (formData.message.length > 500) {
      alert('留言内容不能超过500个字符');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d4r4asuvvp7snecg8lb0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const recentComments = [
    {
      name: 'Alex Johnson',
      avatar: 'AJ',
      comment: '这个网站的游戏推荐非常专业！帮我找到了很多好玩的 Pokies 游戏。',
      date: '2天前',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      avatar: 'MG',
      comment: 'Live Casino 的攻略文章写得很详细，对新手非常友好。',
      date: '3天前',
      rating: 5
    },
    {
      name: 'Chen Wei',
      avatar: 'CW',
      comment: '体育投注的分析很到位，跟着推荐已经赢了好几次了！',
      date: '5天前',
      rating: 4
    },
    {
      name: 'Sophie Martin',
      avatar: 'SM',
      comment: '网站设计很漂亮，内容也很丰富，是我最喜欢的游戏博客。',
      date: '1周前',
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            留言与互动
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            分享你的想法，与其他玩家交流游戏心得
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              发表留言
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="comment_form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  邮箱 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  留言内容 * (最多500字)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm resize-none"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 字符
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-lg font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? '提交中...' : '提交留言'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                  留言提交成功！感谢你的反馈。
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  提交失败，请稍后再试。
                </div>
              )}
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              最近留言
            </h3>
            
            <div className="space-y-6">
              {recentComments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {comment.avatar}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                        <span className="text-xs text-gray-500">{comment.date}</span>
                      </div>
                      
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`ri-star-fill text-sm ${
                              i < comment.rating ? 'text-amber-500' : 'text-gray-300'
                            }`}
                          ></i>
                        ))}
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {comment.comment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
