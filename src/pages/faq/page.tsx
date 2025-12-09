import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

export default function FAQPage() {
  const { t } = useTranslation('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: t('category1.title'),
      icon: 'ri-user-line',
      questions: [
        {
          question: t('category1.q1.question'),
          answer: t('category1.q1.answer')
        },
        {
          question: t('category1.q2.question'),
          answer: t('category1.q2.answer')
        },
        {
          question: t('category1.q3.question'),
          answer: t('category1.q3.answer')
        },
        {
          question: t('category1.q4.question'),
          answer: t('category1.q4.answer')
        }
      ]
    },
    {
      category: t('category2.title'),
      icon: 'ri-bank-card-line',
      questions: [
        {
          question: t('category2.q1.question'),
          answer: t('category2.q1.answer')
        },
        {
          question: t('category2.q2.question'),
          answer: t('category2.q2.answer')
        },
        {
          question: t('category2.q3.question'),
          answer: t('category2.q3.answer')
        },
        {
          question: t('category2.q4.question'),
          answer: t('category2.q4.answer')
        },
        {
          question: t('category2.q5.question'),
          answer: t('category2.q5.answer')
        }
      ]
    },
    {
      category: t('category3.title'),
      icon: 'ri-gamepad-line',
      questions: [
        {
          question: t('category3.q1.question'),
          answer: t('category3.q1.answer')
        },
        {
          question: t('category3.q2.question'),
          answer: t('category3.q2.answer')
        },
        {
          question: t('category3.q3.question'),
          answer: t('category3.q3.answer')
        },
        {
          question: t('category3.q4.question'),
          answer: t('category3.q4.answer')
        },
        {
          question: t('category3.q5.question'),
          answer: t('category3.q5.answer')
        }
      ]
    },
    {
      category: t('category4.title'),
      icon: 'ri-gift-line',
      questions: [
        {
          question: t('category4.q1.question'),
          answer: t('category4.q1.answer')
        },
        {
          question: t('category4.q2.question'),
          answer: t('category4.q2.answer')
        },
        {
          question: t('category4.q3.question'),
          answer: t('category4.q3.answer')
        },
        {
          question: t('category4.q4.question'),
          answer: t('category4.q4.answer')
        }
      ]
    },
    {
      category: t('category5.title'),
      icon: 'ri-shield-check-line',
      questions: [
        {
          question: t('category5.q1.question'),
          answer: t('category5.q1.answer')
        },
        {
          question: t('category5.q2.question'),
          answer: t('category5.q2.answer')
        },
        {
          question: t('category5.q3.question'),
          answer: t('category5.q3.answer')
        },
        {
          question: t('category5.q4.question'),
          answer: t('category5.q4.answer')
        },
        {
          question: t('category5.q5.question'),
          answer: t('category5.q5.answer')
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                    <i className={`${category.icon} text-2xl text-white`}></i>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={faqIndex}
                        className="border border-gray-200 rounded-xl overflow-hidden hover:border-amber-300 transition-colors"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                          <span className="text-left font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          <i
                            className={`ri-arrow-down-s-line text-2xl text-amber-600 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          ></i>
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
            <p className="text-xl text-amber-100 mb-8">
              {t('ctaSubtitle')}
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-amber-600 rounded-full font-bold hover:bg-amber-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              {t('contactButton')}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
