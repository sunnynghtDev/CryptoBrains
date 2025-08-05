import type { NavigationData } from "./navigationInterface";

const navData: NavigationData = [
  {
    title: 'Market',
    path: '/',
    subItems: [
      { title: 'Продукт 1', path: '/products/1' },
      { title: 'Продукт 2', path: '/products/2' },
    ],
  },
  {
    title: 'Trade',
    path: '/',
    subItems: [
      { title: 'Услуга 1', path: '/services/1' },
      { title: 'Услуга 2', path: '/services/2' },
      { title: 'Услуга 3', path: '/services/3' },
    ],
  },
  {
    title: 'Earn',
    path: '/',
    subItems: [
      { title: 'Новости', path: '/blog/news' },
      { title: 'Статьи', path: '/blog/articles' },
    ],
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Career',
    path: '/',
  },
];

export default navData;