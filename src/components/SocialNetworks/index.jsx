import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { SOCIAL_NETWORKS } from '@/constants/socialNetworks';
import PropTypes from 'prop-types';
import styles from './SocialNetworks.module.css';

const SocialNetworks = ({ classes, width = 24, height = 24 }) => (
  <ul className={clsx(styles.root, classes)}>
    {SOCIAL_NETWORKS.map(({ id, src, alt, title, link, label }) => (
      <li key={`${title}-social-network-${id}`} className={styles.listItem}>
        <Link href={link} target="_blank" aria-label={label}>
          <Image className={styles.socialIcon} src={src} alt={alt} title={title} width={width} height={height} />
        </Link>
      </li>
    ))}
  </ul>
);

SocialNetworks.propTypes = {
  classes: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default SocialNetworks;
