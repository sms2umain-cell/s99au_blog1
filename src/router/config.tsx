import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const PokiesPage = lazy(() => import('../pages/pokies/page'));
const SlotsPage = lazy(() => import('../pages/slots/page'));
const LiveGamesPage = lazy(() => import('../pages/live-games/page'));
const SportsPage = lazy(() => import('../pages/sports/page'));
const BlogPage = lazy(() => import('../pages/blog/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/pokies',
    element: <PokiesPage />
  },
  {
    path: '/slots',
    element: <SlotsPage />
  },
  {
    path: '/live-games',
    element: <LiveGamesPage />
  },
  {
    path: '/sports',
    element: <SportsPage />
  },
  {
    path: '/blog',
    element: <BlogPage />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
