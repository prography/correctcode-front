import React from 'react';
import styles from 'scss/components/Dimmed.module.scss';

const Dimmed: React.FC = ({ children }) => {
  return <div className={styles.dimmed}>{children}</div>;
};

export default Dimmed;
