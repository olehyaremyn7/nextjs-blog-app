import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { categoryService } from '@/services/index';
import { isArrayEmpty } from '@/utils/index';
import styles from './CategoryList.module.css';

const { fetchCategories } = categoryService;

const CategoryList = async () => {
  const categories = await fetchCategories();

  return (
    <section className={styles.root}>
      <h2>Popular Categories</h2>
      {isArrayEmpty(categories) ? (
        <ul className={styles.list}>
          {categories?.map(({ id, slug, img, title, label }) => (
            <li key={`${slug}-category-${id}`} className={clsx(styles.listItem, styles[slug])}>
              <Link
                href={`/blog?cat=${slug}`}
                className={styles.link}
                aria-label={label ? label : `View ${title} category articles`}
              >
                {img && (
                  <Image src={img} alt={`${title} category image`} className={styles.image} width={32} height={32} />
                )}
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noCategories}>Categories are not available</p>
      )}
    </section>
  );
};

export default CategoryList;
