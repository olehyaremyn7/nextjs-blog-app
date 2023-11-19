import MenuPosts from '../MenuPosts';
import MenuCategories from '../MenuCategories';
import { createUID } from '@/utils/index';

export const MENU_SECTIONS = [
  {
    id: createUID(),
    title: 'Most Popular',
    subtitle: "What's hot",
    component: MenuPosts,
    isCategory: false,
    isImage: false,
    popular: true,
  },
  {
    id: createUID(),
    title: 'Categories',
    subtitle: 'Discover by topic',
    component: MenuCategories,
    isCategory: true,
  },
  {
    id: createUID(),
    title: 'Editors Pick',
    subtitle: 'Chosen by the editor',
    component: MenuPosts,
    isCategory: false,
    isImage: true,
    editors: true,
  },
  {
    id: createUID(),
    title: 'Most Commented',
    subtitle: 'What is most discussed',
    component: MenuPosts,
    isCategory: false,
    isImage: false,
    comments: true,
  },
];
