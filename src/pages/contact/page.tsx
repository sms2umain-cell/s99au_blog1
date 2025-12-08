
import { useState } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
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
      formBody.append('subject', formData.subject);
      formBody.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d4r4asuvvp7snecg8lag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar scrolled={scrolled} />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              联系我们
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              有任何问题或建议？我们随时为你服务
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                发送消息
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="contact_form">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱 *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    主题 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                    消息内容 * (最多500字)
                  </label>
                  <textarea
                    id="contact-message"
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
                  {isSubmitting ? '发送中...' : '发送消息'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                    消息发送成功！我们会尽快回复你。
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    发送失败，请稍后再试。
                  </div>
                )}
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                联系信息
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">邮箱</h3>
                    <p className="text-gray-600">support@e99gaming.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">电话</h3>
                    <p className="text-gray-600">+60 12-345 6789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">工作时间</h3>
                    <p className="text-gray-600">周一至周日 24/7</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  关注我们
                </h3>
                <p className="text-gray-600 mb-6">
                  在社交媒体上关注我们，获取最新的游戏资讯和优惠信息
                </p>
                <div className="flex space-x-3">
                  {[
                    { icon: 'ri-facebook-fill', color: 'hover:bg-blue-600' },
                    { icon: 'ri-twitter-x-fill', color: 'hover:bg-gray-900' },
                    { icon: 'ri-instagram-fill', color: 'hover:bg-pink-600' },
                    { icon: 'ri-youtube-fill', color: 'hover:bg-red-600' },
                    { icon: 'ri-telegram-fill', color: 'hover:bg-blue-500' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-12 h-12 bg-white rounded-full flex items-center justify-center ${social.color} text-gray-700 hover:text-white transition-all shadow-md cursor-pointer`}
                    >
                      <i className={`${social.icon} text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
