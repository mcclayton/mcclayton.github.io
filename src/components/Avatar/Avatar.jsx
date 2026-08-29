import React from 'react';
import styles from './styles.module.scss';
import portrait from '../../images/portrait.png';

const Avatar = () => (
  <div className={styles.container}>
    <div className={styles.scrollWrapper}>
      <div className={styles.scrollingBackground} />
    </div>
    <img
      src={portrait}
      className={styles.portrait}
      alt="Portrait of Michael Clayton"
    />
  </div>
);

export default Avatar;
