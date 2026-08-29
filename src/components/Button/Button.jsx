import React from 'react';
import styles from './styles.module.scss';

const Button = ({ children, ...props }) => (
  <button className={styles.animatedButton} {...props}>
    {/* Nested Spans are required for styling */}
    <span>
      <span>
        <span>{children}</span>
      </span>
    </span>
  </button>
);

export default Button;
