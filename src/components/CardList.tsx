import React from 'react';
import Card from './Card';
import styles from 'components/Card.module.scss';
const CardList = () => {
  return (
    <div className={styles.cardList}>
      <Card />
      <br />
      <Card />
      <br />
      <Card />
      <br />
      <Card />
      <br />
    </div>
  );
};

export default CardList;
