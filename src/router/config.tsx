
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const PokiesPage = lazy(() => import('../pages/pokies/page'));
const PokiesArticlePage = lazy(() => import('../pages/pokies/article/page'));
const SlotsPage = lazy(() => import('../pages/slots/page'));
const SlotsArticlePage = lazy(() => import('../pages/slots/article/page'));
const SportsPage = lazy(() => import('../pages/sports/page'));
const SportsArticlePage = lazy(() => import('../pages/sports/article/page'));
const LiveGamesPage = lazy(() => import('../pages/live-games/page'));
const LiveGamesArticlePage = lazy(() => import('../pages/live-games/article/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const GuidePage = lazy(() => import('../pages/guide/page'));
const StrategyPage = lazy(() => import('../pages/strategy/page'));
const FAQPage = lazy(() => import('../pages/faq/page'));
const ReviewsPage = lazy(() => import('../pages/reviews/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const PrivacyPage = lazy(() => import('../pages/privacy/page'));
const TermsPage = lazy(() => import('../pages/terms/page'));
const ResponsibleGamingPage = lazy(() => import('../pages/responsible-gaming/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/pokies',
    element: <PokiesPage />
  },
  {
    path: '/pokies/:slug',
    element: <PokiesArticlePage />
  },
  {
    path: '/slots',
    element: <SlotsPage />
  },
  {
    path: '/slots/:slug',
    element: <SlotsArticlePage />
  },
  {
    path: '/live-games',
    element: <LiveGamesPage />
  },
  {
    path: '/live-games/:slug',
    element: <LiveGamesArticlePage />
  },
  {
    path: '/sports',
    element: <SportsPage />
  },
  {
    path: '/sports/:slug',
    element: <SportsArticlePage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/guide',
    element: <GuidePage />
  },
  {
    path: '/strategy',
    element: <StrategyPage />
  },
  {
    path: '/faq',
    element: <FAQPage />
  },
  {
    path: '/reviews',
    element: <ReviewsPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/privacy',
    element: <PrivacyPage />
  },
  {
    path: '/terms',
    element: <TermsPage />
  },
  {
    path: '/responsible-gaming',
    element: <ResponsibleGamingPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export default routes;
