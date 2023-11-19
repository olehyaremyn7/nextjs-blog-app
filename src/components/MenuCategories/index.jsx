import clsx from 'clsx';
import Link from 'next/link';
import { categoryService } from '@/services/index';
import { isArrayEmpty } from '@/utils/index';
import styles from './MenuCategories.module.css';

const { fetchCategories } = categoryService;

const MenuCategories = async () => {
  const categories = await fetchCategories();

  if (!isArrayEmpty(categories)) {
    return <p className={styles.noCategories}>Categories are not available</p>;
  }

  return (
    <ul className={styles.root}>
      {categories?.map(({ id, slug, title, label }) => (
        <li key={`menu-${slug}-category-${id}`} className={clsx(styles.category, styles[slug])}>
          <Link href={`/blog?cat=${slug}`} aria-label={label ? label : `Discover ${title} topic articles`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuCategories;
