import React from 'react';
import { Review } from 'models/review';
import { formatDate } from 'utils/format';
import { Link } from 'react-router-dom';
import styles from 'scss/components/Card.module.scss';

type Props = Pick<
  Review,
  'language' | 'createdAt' | 'repositoryUrl' | 'head' | 'description'
>;
const CommonCard: React.FC<Props> = ({
  language,
  createdAt,
  repositoryUrl,
  head,
  description,
}) => {
  return (
    <>
      <div>
        <p className={styles.language}>{language}</p>
        <p className={styles.time}>{formatDate(createdAt)}</p>
      </div>
      <Link className={styles.repo} to={repositoryUrl}>
        {head}
      </Link>
      <p className={styles.description}>{description}</p>
    </>
  );
};

export default CommonCard;
