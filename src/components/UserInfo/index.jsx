import clsx from 'clsx';
import Image from 'next/image';
import { formatDate } from '@/utils/dates';
import PropTypes from 'prop-types';
import styles from './UserInfo.module.css';

const UserInfo = ({ classes, user, createdAt }) => {
  const { image, name } = user;

  return (
    <section className={clsx(styles.root, classes)}>
      {image && (
        <figure className={styles.avatarContainer}>
          <Image src={image} alt={`${name} profile photo`} className={styles.avatar} width={50} height={50} />
        </figure>
      )}
      <div className={styles.info}>
        <span className={styles.username}>{name}</span>
        <time className={styles.createdAt}>{formatDate(createdAt)}</time>
      </div>
    </section>
  );
};

UserInfo.propTypes = {
  classes: PropTypes.string,
  user: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
};

export default UserInfo;
