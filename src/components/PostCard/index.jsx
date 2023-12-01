import Image from 'next/image';
import Link from 'next/link';
import CategoryChip from '../CategoryChip';
import Markdown from '../UI/Markdown';
import { formatDate } from '@/utils/dates';
import PropTypes from 'prop-types';
import styles from './PostCard.module.css';

const PostCard = ({ img, catSlug, slug, title, desc, createdAt }) => (
  <article className={styles.root}>
    {img && (
      <figure className={styles.imageContainer}>
        <Image src={img} alt={`${title} article image`} fill className={styles.image} />
      </figure>
    )}
    <div className={styles.textContainer}>
      <div className={styles.detail}>
        <time className={styles.date}>{formatDate(createdAt, 'M.D.YYYY')}</time>
        <span className={styles.dash} aria-hidden>
          -
        </span>
        <CategoryChip category={catSlug} />
      </div>
      <h3>
        <Link href={`/post/${slug}`} aria-label={`Check out one of our recent articles ${title}`}>
          {title}
        </Link>
      </h3>
      <Markdown className={styles.desc} markdown={desc.substring(0, 60)} />
      <Link href={`/post/${slug}`} className={styles.link} aria-label="Read more">
        Read More
      </Link>
    </div>
  </article>
);

PostCard.propTypes = {
  img: PropTypes.string,
  catSlug: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
};

export default PostCard;
