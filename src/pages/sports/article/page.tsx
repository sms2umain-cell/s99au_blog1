import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import { useSportsArticles } from '../sportsArticleContents';
import { useTranslation } from 'react-i18next';

export default function SportsArticlePage() {
  const [searchParams] = useSearchParams();
  const articleId = parseInt(searchParams.get('id') || '1');
  const sportsArticles = useSportsArticles();
  const article = sportsArticles.find(a => a.id === articleId);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation('sports');

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Super99au Sports 博客`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.excerpt);
      }

      // 添加 Article Schema.org 结构化数据
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.excerpt,
        "image": article.image,
        "datePublished": article.date,
        "dateModified": article.date,
        "author": {
          "@type": "Person",
          "name": article.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Super99au",
          "logo": {
            "@type": "ImageObject",
            "url": "https://static.readdy.ai/image/31a1107996a99a56af02e61b22b1b81c/d5a1169527fb3b33d0026e1f33b31cf5.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": window.location.href
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(articleSchema);
      document.head.appendChild(script);

      // 更新 last-modified
      const lastModified = document.getElementById('last-modified');
      if (lastModified) {
        lastModified.setAttribute('content', new Date().toISOString());
      }

      return () => {
        if (script.parentNode) {
          document.head.removeChild(script);
        }
      };
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  if (!article) {
    return <div>文章未找到</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar scrolled={scrolled} />
      
      <main className="pt-32 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 面包屑导航 */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="/" className="hover:text-amber-600 transition-colors" itemProp="item">
                  <span itemProp="name">{i18n.language === 'en' ? 'Home' : '首页'}</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li><i className="ri-arrow-right-s-line"></i></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="/sports" className="hover:text-amber-600 transition-colors" itemProp="item">
                  <span itemProp="name">Sports</span>
                </a>
                <meta itemProp="position" content="2" />
              </li>
              <li><i className="ri-arrow-right-s-line"></i></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-gray-900 font-medium" itemProp="name">{article.title}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <Link 
            to="/sports"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8 transition-colors"
          >
            <i className="ri-arrow-left-line"></i>
            {t('backToSports')}
          </Link>

          <header className="mb-8">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full">
                {article.category}
              </span>
              {article.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <i className="ri-user-line"></i>
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-calendar-line"></i>
                <time dateTime={article.date}>{article.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-time-line"></i>
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-eye-line"></i>
                <span>{article.views} {t('views')}</span>
              </div>
            </div>
          </header>

          <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden">
            <img
              src={article.image}
              alt={`${article.title} - Super99au Sports 体育博彩`}
              title={`${article.title} - Sports 博彩攻略技巧`}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-gray-700 mb-8 font-medium">
              <strong>{article.excerpt}</strong>
            </div>
            
            <div 
              className="article-content text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }}
            />
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">{t('ctaTitle')}</h3>
              <p className="text-lg mb-6 text-white/90">
                {t('ctaDescription')}
              </p>
              <a
                href="https://t.ly/s99auBlog"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                {t('ctaButton')}
              </a>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
