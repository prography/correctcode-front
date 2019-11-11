import React from 'react';
import styles from 'components/Card.module.scss';

const Card = () => {
	return (
		<div className={styles.box_new}>
			<p className={styles.language}>Language Name</p>
			<p className={styles.time}>time</p>
			<p className={styles.repo}>Github Repository</p>
			<p className={styles.description}>Description</p>

			<div className={styles.statusBox}>
				<div className={styles.profileImg} />
				<p className={styles.user}>userID</p>
				<div className={styles.statusColor} />
				<div className={styles.status}>status</div>
			</div>
		</div>
	);
};

export default Card;
