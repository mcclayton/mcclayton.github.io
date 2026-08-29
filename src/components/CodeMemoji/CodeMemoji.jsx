import React from 'react';
import styles from './styles.module.scss';
import memoji from '../../images/memoji_coding.png';
import stickers from '../../images/stickers.png';

function CodeMemoji() {
  return (
    <span className={styles.container}>
      <img src={memoji} alt="Michael Memoji With Laptop" className={styles.memoji} />
      <img src={stickers} alt="Laptop Stickers" className={styles.stickers} />
    </span>
  );
};

export default CodeMemoji;
