import React from 'react';
import emptyImg from 'assets/img/backgroundLogo.png';
import styles from 'scss/components/EmptySection.module.scss';

type Props = {
  message: string;
}

const EmptySection: React.FC<Props> = ({ message }) => {
  return (
    <div className={styles.container}>
      <img src={emptyImg} alt="empty" />
      <p className={styles.message}>
        {message}
      </p>
    </div>
  )
}

export default EmptySection;