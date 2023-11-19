import UserInfo from '../UserInfo';
import PropTypes from 'prop-types';
import styles from './CommentList.module.css';

const CommentList = ({ comments }) => (
  <article className={styles.root}>
    {comments?.map(({ id, user, createdAt, desc }) => (
      <div key={`article-comment-${id}`}>
        <UserInfo user={user} createdAt={createdAt} classes={styles.userProfile} />
        <p className={styles.comment}>{desc}</p>
      </div>
    ))}
  </article>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
      createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
      desc: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CommentList;
