import React from 'react';
import classnames from 'classnames';
import styles from 'scss/components/PageLayout.module.scss';

type Props = {
  isStartPage?: boolean;
};

const PageLayout: React.FC<Props> = ({ isStartPage = false, children }) => {
  return (
    <div
      className={classnames(styles.page, { [styles.isStartPage]: isStartPage })}
    >
      <div className={styles.fakeNav} />
      {children}
    </div>
  );
};

export default PageLayout;
