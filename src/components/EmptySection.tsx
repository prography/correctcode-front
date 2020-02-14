import React from 'react';
import { ReactComponent as EmptyImg } from 'assets/img/empty.svg';
import styles from 'scss/components/EmptySection.module.scss';

type Props = {
  message: React.ReactNode;
};

const EmptySection: React.FC<Props> = ({ message }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
        <div className="w-full flex justify-center">
          <EmptyImg width={100} />
        </div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default EmptySection;
