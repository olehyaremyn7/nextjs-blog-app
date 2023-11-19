'use client';

import clsx from 'clsx';
import { useEffect, useState, useRef } from 'react';
import FabButton from '../UI/FabButton';
import { getProgressStrokeDashoffset } from './utils';
import { MEDIA_OPTIONS } from './data';
import PropTypes from 'prop-types';
import styles from './MediaOptions.module.css';

const MediaOptions = ({ id, progress, isUploading, onFileChange }) => {
  const fileInputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mediaOptions, setMediaOptions] = useState(MEDIA_OPTIONS);
  const [fileInputAccept, setFileInputAccept] = useState(null);
  const openMediaOptionsButtonLabel = `${isOpen ? 'Close' : 'Open'} media options`;
  const strokeDashoffsetProgress = getProgressStrokeDashoffset(progress);

  useEffect(() => {
    if (!fileInputAccept) {
      return;
    }

    setMediaOptions((prevState) =>
      prevState.map((option) => ({
        ...option,
        [option.accept === fileInputAccept ? 'isLoading' : 'disabled']: isUploading,
      })),
    );
  }, [isUploading]);

  const handleOpenOptionButtonClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionButtonClick = ({ target: { dataset } }) => {
    if (fileInputRef.current) {
      const { accept } = dataset;

      if (accept) {
        setFileInputAccept(accept);
        fileInputRef.current.click();
      }
    }
  };

  return (
    <div className={clsx(styles.mediaOptions, isOpen && styles.mediaOptionsActive)}>
      <FabButton
        id={id}
        imageSrc="/plus.png"
        alt="add media option button image"
        title={openMediaOptionsButtonLabel}
        ariaLabel={openMediaOptionsButtonLabel}
        width={26}
        height={26}
        classes={styles.mediaOptionsFab}
        onClick={handleOpenOptionButtonClick}
      />
      <div className={styles.menu}>
        <input
          ref={($el) => {
            fileInputRef.current = $el;
          }}
          type="file"
          hidden
          id="media"
          name="media"
          accept={fileInputAccept}
          onChange={onFileChange}
          aria-hidden
        />
        {mediaOptions.map(({ id, className, iconSrc, alt, title, ariaLabel, accept, disabled, isLoading }) =>
          isLoading ? (
            <div key={`media-option-loading-${id}`} role="alert" className={styles.loading} aria-live="assertive">
              <svg className={styles.rail} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle cx="100" cy="100" r="80" />
              </svg>
              <svg className={styles.bar} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle cx="100" cy="100" r="80" style={{ strokeDashoffset: strokeDashoffsetProgress }} />
              </svg>
              <span className="visually-hidden">{progress}</span>
              <div
                className={clsx(styles.checkmark, styles.draw, {
                  [styles.showCheck]: isUploading && strokeDashoffsetProgress === 0,
                })}
                aria-hidden
              ></div>
            </div>
          ) : (
            <FabButton
              key={`media-option-${id}`}
              imageSrc={iconSrc}
              alt={alt}
              classes={clsx(styles.mediaOptionFab, styles[className])}
              tooltip={title}
              disabled={disabled}
              width={20}
              height={20}
              ariaLabel={ariaLabel}
              data-accept={accept}
              onClick={handleOptionButtonClick}
              aria-hidden={!isOpen}
            />
          ),
        )}
      </div>
    </div>
  );
};

MediaOptions.propTypes = {
  id: PropTypes.string.isRequired,
  onFileChange: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  isUploading: PropTypes.bool.isRequired,
};

export default MediaOptions;
