import React from 'react';
import { ReactComponent as EmptyImg } from 'assets/img/empty.svg';
import styles from 'scss/components/EmptySection.module.scss';

type Props = {
  message: string;
};

const EmptySection: React.FC<Props> = ({ message }) => {
  return (
    <div className={styles.container}>
      <div>
        <EmptyImg width={100} />
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default EmptySection;
