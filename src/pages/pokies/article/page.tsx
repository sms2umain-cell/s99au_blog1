import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import { pokiesArticleContents } from '../pokiesArticleContents';

export default function PokiesArticlePage() {
  const { t, i18n } = useTranslation(['pokies', 'common']);
  const [searchParams] = useSearchParams();
  const articleId = parseInt(searchParams.get('id') || '1', 10);
  const article = pokiesArticleContents.find(a => a.id === articleId);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (article) {
      const title = t(`articles.article${articleId}.title`);
      const titleSuffix = i18n.language === 'en' 
        ? 'Super99au Pokies Blog'
        : 'Super99au Pokies 博客';
      document.title = `${title} | ${titleSuffix}`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        const excerpt = t(`articles.article${articleId}.excerpt`);
        metaDescription.setAttribute('content', excerpt);
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article, articleId, t, i18n.language]);

  if (!article) {
    const notFoundText = i18n.language === 'en' ? 'Article not found' : '文章未找到';
    return <div>{notFoundText}</div>;
  }

  const articleTitle = t(`articles.article${articleId}.title`);
  const articleExcerpt = t(`articles.article${articleId}.excerpt`);
  const articleTags = t(`articles.article${articleId}.tags`, { returnObjects: true }) as string[];
  const articleContent = t(`articles.article${articleId}.content`);
  const articleAuthor = t(`articles.article${articleId}.author`);
  const articleReadTime = t(`articles.article${articleId}.readTime`);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar scrolled={scrolled} />
      
      <main className="pt-32 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/pokies"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8 transition-colors"
          >
            <i className="ri-arrow-left-line"></i>
            {t('article.backToBlog')}
          </Link>

          <header className="mb-8">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full">
                {t(`page.categories.${article.category}`)}
              </span>
              {articleTags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {articleTitle}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <i className="ri-user-line"></i>
                <span>{articleAuthor}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-calendar-line"></i>
                <time dateTime={article.date}>{article.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-time-line"></i>
                <span>{articleReadTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-eye-line"></i>
                <span>{article.views} {t('article.views')}</span>
              </div>
            </div>
          </header>

          <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden">
            <img
              src={article.image}
              alt={articleTitle}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-gray-700 mb-8 font-medium">
              {articleExcerpt}
            </div>
            
            <div 
              className="article-content text-gray-800 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: articleContent.replace(/\n/g, '<br/>') }}
            />
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">{t('article.readyToStart')}</h3>
              <p className="text-lg mb-6 text-white/90">
                {t('article.readyDescription')}
              </p>
              <button className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                {t('article.startPlaying')}
              </button>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
