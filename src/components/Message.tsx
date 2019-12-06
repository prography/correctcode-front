import React from 'react';
import styles from 'scss/components/Card.module.scss';

type Props = {
  title: string;
  message: string;
  subMessage: string;
  children?: React.ReactNode;
};

const Message: React.FC<Props> = ({ title, message, subMessage, children }) => {
  return (
    <div className={styles.box_request}>
      <p className={styles.requestTitle}>{title}</p>
      <p>
        {message}
        <br />
        {subMessage}
      </p>
      {children}
    </div>
  );
};

export default Message;
