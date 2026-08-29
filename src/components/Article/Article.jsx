import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
const cx = classNames.bind(styles);

const Article = ({
  id,
  title,
  article,
  timeout,
  onClose,
  children,
  img,
  ...props
}) => {
  const classes = cx(styles.article, {
    [styles.active]: article === id,
    [styles.timeout]: !!timeout,
  });
  return (
    <article className={classes} style={{ display: 'none' }} {...props}>
      <Toolbar title={title} onClose={onClose} />
      <div className={styles.content}>
        <>
          {img && (
            <span className={cx('image', 'main', styles.imgContainer)}>
              {img}
            </span>
          )}
          {children}
        </>
      </div>
    </article>
  );
};

function Toolbar({ title, onClose }) {
  const handleCloseKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClose();
    }
  };

  return (
    <div className={styles.titleBar}>
      <div className={styles.buttons}>
        <span
          className={styles.close}
          role="button"
          tabIndex={0}
          aria-label={`Close ${title}`}
          onClick={onClose}
          onKeyDown={handleCloseKeyDown}
        />
        <span className={styles.mini} aria-hidden="true" />
        <span className={styles.max} aria-hidden="true" />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
}

export default Article;
