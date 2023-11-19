import PostCard from '../PostCard';
import Pagination from '../Pagination';
import { postService } from '@/services/index';
import { isArrayEmpty } from '@/utils/index';
import PropTypes from 'prop-types';
import styles from './PostList.module.css';

const { fetchPosts } = postService;

const PostList = async ({ page, cat = '' }) => {
  const { posts, count } = await fetchPosts({ page, cat });

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Recent Posts</h2>
      {isArrayEmpty(posts) ? (
        <ul className={styles.posts}>
          {posts?.map(({ id, ...rest }) => (
            <li key={`recent-article-${id}`} className={styles.post}>
              <PostCard {...rest} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.noPosts}>
          <p>Recent posts are not available</p>
        </div>
      )}
      <Pagination page={page} count={count} cat={cat} />
    </section>
  );
};

PostList.propTypes = {
  page: PropTypes.number.isRequired,
  cat: PropTypes.string,
};

export default PostList;
