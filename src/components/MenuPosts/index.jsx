import Image from 'next/image';
import Link from 'next/link';
import CategoryChip from '../CategoryChip';
import { postService } from '@/services/index';
import { formatDate } from '@/utils/dates';
import { isArrayEmpty } from '@/utils/index';
import PropTypes from 'prop-types';
import styles from './MenuPosts.module.css';

const { fetchPosts } = postService;

const MenuPosts = async ({ isImage, popular, editors, comments }) => {
  const { posts } = await fetchPosts({ popular, editors, comments });

  if (!isArrayEmpty(posts)) {
    return <p className={styles.noPosts}>Articles are not available</p>;
  }

  return (
    <ul className={styles.root}>
      {posts?.map(({ id, img, slug, catSlug, title, user, createdAt }) => (
        <li
          key={`${
            (popular ? 'popular' : '', editors ? 'editor-pick' : '', comments ? 'commented' : '')
          }-menu-article-${id}`}
          className={styles.post}
        >
          {isImage && img && (
            <figure className={styles.imageContainer}>
              <Image src={img} alt={`${title} article image`} fill className={styles.image} />
            </figure>
          )}
          <div className={styles.textContainer}>
            <CategoryChip category={catSlug} isMenu />
            <h3 className={styles.title}>
              <Link href={`/post/${slug}`} aria-label={`Discover one of most popular articles ${title}`}>
                {title}
              </Link>
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>{user?.name}</span>
              <span className={styles.dash} aria-hidden>
                -
              </span>
              <time className={styles.date}>{formatDate(createdAt, 'M.D.YYYY')}</time>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

MenuPosts.propTypes = {
  isImage: PropTypes.bool.isRequired,
  popular: PropTypes.bool,
  editors: PropTypes.bool,
  comments: PropTypes.bool,
};

export default MenuPosts;
