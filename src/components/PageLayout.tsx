import React from 'react';
import styles from 'scss/components/PageLayout.module.scss';

const PageLayout: React.FC = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};

export default PageLayout;
