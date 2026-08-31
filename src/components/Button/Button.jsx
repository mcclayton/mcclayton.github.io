import React from 'react';
import * as styles from './styles.css';

const Button = ({ children, ...props }) => (
  <button className={styles.animatedButton} {...props}>
    {/* Nested Spans are required for styling */}
    <span className={styles.verticalBorder}>
      <span className={styles.horizontalHoverBorder}>
        <span className={styles.verticalHoverBorder}>{children}</span>
      </span>
    </span>
  </button>
);

export default Button;
