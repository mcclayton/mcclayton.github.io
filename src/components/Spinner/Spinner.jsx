import React from 'react';
import InitialsLogo from '../InitialsLogo';
import * as styles from './styles.css';

const Spinner = ({ children, ...props }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <InitialsLogo loader color="#2E333E" strokeWidth={3} />
      <div className={styles.label}>
        {children}
        <p>{props.label}</p>
      </div>
    </div>
  </div>
);

export default Spinner;
