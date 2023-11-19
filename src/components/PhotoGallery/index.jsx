import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './PhotoGallery.module.css';

const PhotoGallery = ({ classes, subject = 'gallery', photos }) => (
  <div className={clsx(styles.root, classes)}>
    {photos.map(({ id, size, src, alt }) => (
      <figure key={`${subject}-photo-${id}`} className={clsx(styles.imageContainer, styles[size])}>
        <Image src={src} alt={alt} fill className={styles.image} />
      </figure>
    ))}
  </div>
);

PhotoGallery.propTypes = {
  classes: PropTypes.string,
  subject: PropTypes.string,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default PhotoGallery;
