import React from 'react';
import Card from './Card';
import CardRequest from './CardRequest';
import styles from 'scss/components/Card.module.scss';
const CardList = () => {
  return (
    <div className={styles.cardList}>
      <CardRequest />
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
