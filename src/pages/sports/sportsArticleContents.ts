
import { useTranslation } from 'react-i18next';

export interface SportsArticleContent {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  views: number;
  image: string;
  tags: string[];
  content: string;
}

export const useSportsArticles = (): SportsArticleContent[] => {
  const { t } = useTranslation('sports');

  return [
    {
      id: 1,
      title: t('articles.1.title'),
      category: 'beginner',
      excerpt: t('articles.1.excerpt'),
      author: t('articles.1.author'),
      date: t('articles.1.date'),
      readTime: t('articles.1.readTime'),
      views: t('articles.1.views') as unknown as number,
      image: 'https://readdy.ai/api/search-image?query=Sports%20betting%20beginner%20guide%20with%20stadium&width=1200&height=600&seq=sports1&orientation=landscape',
      tags: t('articles.1.tags', { returnObjects: true }) as string[],
      content: t('articles.1.content')
    },
    {
      id: 2,
      title: t('articles.2.title'),
      category: 'strategy',
      excerpt: t('articles.2.excerpt'),
      author: t('articles.2.author'),
      date: t('articles.2.date'),
      readTime: t('articles.2.readTime'),
      views: t('articles.2.views') as unknown as number,
      image: 'https://readdy.ai/api/search-image?query=Football%20betting%20strategy%20with%20soccer%20field&width=1200&height=600&seq=sports2&orientation=landscape',
      tags: t('articles.2.tags', { returnObjects: true }) as string[],
      content: t('articles.2.content')
    },
    {
      id: 3,
      title: t('articles.3.title'),
      category: 'beginner',
      excerpt: t('articles.3.excerpt'),
      author: t('articles.3.author'),
      date: t('articles.3.date'),
      readTime: t('articles.3.readTime'),
      views: t('articles.3.views') as unknown as number,
      image: 'https://readdy.ai/api/search-image?query=Sports%20betting%20odds%20comparison%20with%20numbers&width=1200&height=600&seq=sports3&orientation=landscape',
      tags: t('articles.3.tags', { returnObjects: true }) as string[],
      content: t('articles.3.content')
    },
    {
      id: 4,
      title: t('articles.4.title'),
      category: 'analysis',
      excerpt: t('articles.4.excerpt'),
      author: t('articles.4.author'),
      date: t('articles.4.date'),
      readTime: t('articles.4.readTime'),
      views: t('articles.4.views') as unknown as number,
      image: 'https://readdy.ai/api/search-image?query=NBA%20basketball%20betting%20analysis%20with%20court&width=1200&height=600&seq=sports4&orientation=landscape',
      tags: t('articles.4.tags', { returnObjects: true }) as string[],
      content: t('articles.4.content')
    },
    {
      id: 5,
      title: t('articles.5.title'),
      category: 'strategy',
      excerpt: t('articles.5.excerpt'),
      author: t('articles.5.author'),
      date: t('articles.5.date'),
      readTime: t('articles.5.readTime'),
      views: t('articles.5.views') as unknown as number,
      image: 'https://readdy.ai/api/search-image?query=Live%20in-play%20sports%20betting%20with%20real-time%20odds&width=1200&height=600&seq=sports5&orientation=landscape',
      tags: t('articles.5.tags', { returnObjects: true }) as string[],
      content: t('articles.5.content')
    },
    {
      id: 6,
      title: t('articles.6.title'),
      category: 'analysis',
      excerpt: t('articles.6.excerpt'),
      author: t('articles.6.author'),
      date: t('articles.6.date'),
      readTime: t('articles.6.readTime'),
      views: t('articles.6.views') as unknown as number,
      image: 'https://readdy.ai/api/search-image?query=Tennis%20betting%20guide%20with%20grand%20slam%20court&width=1200&height=600&seq=sports6&orientation=landscape',
      tags: t('articles.6.tags', { returnObjects: true }) as string[],
      content: t('articles.6.content')
    },
    {
      id: 7,
      title: t('articles.7.title'),
      category: 'tips',
      excerpt: t('articles.7.excerpt'),
      author: t('articles.7.author'),
      date: t('articles.7.date'),
      readTime: t('articles.7.readTime'),
      views: t('articles.7.views') as unknown as number,
      image: 'https://readdy.ai/api/search-image?query=Sports%20betting%20bankroll%20management%20with%20Kelly%20criterion&width=1200&height=600&seq=sports7&orientation=landscape',
      tags: t('articles.7.tags', { returnObjects: true }) as string[],
      content: t('articles.7.content')
    },
    {
      id: 8,
      title: t('articles.8.title'),
      category: 'beginner',
      excerpt: t('articles.8.excerpt'),
      author: t('articles.8.author'),
      date: t('articles.8.date'),
      readTime: t('articles.8.readTime'),
      views: t('articles.8.views') as unknown as number,
      image: 'https://readdy.ai/api/search-image?query=Esports%20betting%20guide%20with%20gaming%20arena&width=1200&height=600&seq=sports8&orientation=landscape',
      tags: t('articles.8.tags', { returnObjects: true }) as string[],
      content: t('articles.8.content')
    },
    {
      id: 9,
      title: t('articles.9.title'),
      category: 'strategy',
      excerpt: t('articles.9.excerpt'),
      author: t('articles.9.author'),
      date: t('articles.9.date'),
      readTime: t('articles.9.readTime'),
      views: t('articles.9.views') as unknown as number,
      image: 'https://readdy.ai/api/search-image?query=Parlay%20accumulator%20betting%20strategy%20with%20multiple%20games&width=1200&height=600&seq=sports9&orientation=landscape',
      tags: t('articles.9.tags', { returnObjects: true }) as string[],
      content: t('articles.9.content')
    },
    {
      id: 10,
      title: t('articles.10.title'),
      category: 'analysis',
      excerpt: t('articles.10.excerpt'),
      author: t('articles.10.author'),
      date: t('articles.10.date'),
      readTime: t('articles.10.readTime'),
      views: t('articles.10.views') as unknown as number,
      image: 'https://readdy.ai/api/search-image?query=Ice%20hockey%20betting%20guide%20with%20NHL%20arena%20and%20puck&width=1200&height=600&seq=sports10&orientation=landscape',
      tags: t('articles.10.tags', { returnObjects: true }) as string[],
      content: t('articles.10.content')
    },
    {
      id: 11,
      title: t('articles.11.title'),
      category: 'analysis',
      excerpt: t('articles.11.excerpt'),
      author: t('articles.11.author'),
      date: t('articles.11.date'),
      readTime: t('articles.11.readTime'),
      views: t('articles.11.views') as unknown as number,
      image: 'https://readdy.ai/api/search-image?query=Baseball%20betting%20guide%20with%20MLB%20stadium%20and%20bat&width=1200&height=600&seq=sports11&orientation=landscape',
      tags: t('articles.11.tags', { returnObjects: true }) as string[],
      content: t('articles.11.content')
    },
    {
      id: 12,
      title: t('articles.12.title'),
      category: 'beginner',
      excerpt: t('articles.12.excerpt'),
      author: t('articles.12.author'),
      date: t('articles.12.date'),
      readTime: t('articles.12.readTime'),
      views: t('articles.12.views') as unknown as number,
      image: 'https://readdy.ai/api/search-image?query=Boxing%20and%20MMA%20betting%20guide%20with%20fighting%20ring&width=1200&height=600&seq=sports12&orientation=landscape',
      tags: t('articles.12.tags', { returnObjects: true }) as string[],
      content: t('articles.12.content')
    },
    {
      id: 13,
      title: t('articles.13.title'),
      category: 'analysis',
      excerpt: t('articles.13.excerpt'),
      author: t('articles.13.author'),
      date: t('articles.13.date'),
      readTime: t('articles.13.readTime'),
      views: t('articles.13.views') as unknown as number,
      image: 'https://readdy.ai/api/search-image?query=Horse%20racing%20betting%20guide%20with%20racetrack%20and%20horses&width=1200&height=600&seq=sports13&orientation=landscape',
      tags: t('articles.13.tags', { returnObjects: true }) as string[],
      content: t('articles.13.content')
    },
    {
      id: 14,
      title: t('articles.14.title'),
      category: 'analysis',
      excerpt: t('articles.14.excerpt'),
      author: t('articles.14.author'),
      date: t('articles.14.date'),
      readTime: t('articles.14.readTime'),
      views: t('articles.14.views') as unknown as number,
      image: 'https://readdy.ai/api/search-image?query=Golf%20betting%20guide%20with%20green%20course%20and%20flag&width=1200&height=600&seq=sports14&orientation=landscape',
      tags: t('articles.14.tags', { returnObjects: true }) as string[],
      content: t('articles.14.content')
    },
    {
      id: 15,
      title: t('articles.15.title'),
      category: 'tips',
      excerpt: t('articles.15.excerpt'),
      author: t('articles.15.author'),
      date: t('articles.15.date'),
      readTime: t('articles.15.readTime'),
      views: t('articles.15.views') as unknown as number,
      image: 'https://readdy.ai/api/search-image?query=Sports%20betting%20psychology%20with%20brain%20and%20decision%20making&width=1200&height=600&seq=sports15&orientation=landscape',
      tags: t('articles.15.tags', { returnObjects: true }) as string[],
      content: t('articles.15.content')
    },
    {
      id: 16,
      title: t('articles.16.title'),
      category: 'strategy',
      excerpt: t('articles.16.excerpt'),
      author: t('articles.16.author'),
      date: t('articles.16.date'),
      readTime: t('articles.16.readTime'),
      views: t('articles.16.views') as unknown as number,
      image: 'https://readdy.ai/api/search-image?query=Sports%20betting%20data%20analysis%20with%20charts%20and%20statistics&width=1200&height=600&seq=sports16&orientation=landscape',
      tags: t('articles.16.tags', { returnObjects: true }) as string[],
      content: t('articles.16.content')
    }
  ];
};
