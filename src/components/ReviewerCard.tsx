import React, { FC } from 'react';
import { Review } from 'models/review';
import { CommonCard } from 'components';
import cx from 'classnames';
import styles from 'scss/components/Card.module.scss';

type Props = Review;

type SubCardProps = Pick<Review, 'reviewee' | 'status'>;

const PendingCard: FC<SubCardProps> = ({ reviewee }) => {
  return (
    <div className="absolute inline-flex w-full h-16 bottom-0 items-center bg-lightergray rounded-b-lg">
      <img
        className="w-8 h-8 rounded-full ml-8"
        src={reviewee.profileImg}
        alt="Profile"
      />
      <p className="tracking-tight text-gray-850 ml-3">{reviewee.name}</p>
    </div>
  );
};
const MatchedCard: FC<SubCardProps> = ({ reviewee, status }) => {
  return (
    <div className="absolute inline-flex w-full h-16 bottom-0 items-center bg-lightergray rounded-b-lg">
      <img
        className="w-8 h-8 rounded-full ml-8"
        src={reviewee.profileImg}
        alt="Profile"
      />

      <p className="tracking-tight text-gray-850 ml-3">{reviewee.name}</p>
      <div
        className={cx(
          'float-right ml-auto w-6 h-6 rounded border border-primaryDark',
          {
            'bg-primaryDark': status === 'completed',
          },
        )}
      />
      <div className="float-right text-sm font-bold text-primaryDark mr-6 ml-2">
        {status}
      </div>
    </div>
  );
};

const ReviewerCard: React.FC<Props> = ({
  status,
  repositoryUrl,
  description,
  head,
  createdAt,
  language,
  reviewee,
  number,
}) => {
  const isPending = status === 'pending';
  const StatusComponent = isPending ? PendingCard : MatchedCard;
  return (
    <div className="relative w-auto max-w-screen-md h-64 mb-8 pt-7 pb-5 rounded-md bg-white shadow-md first:flex first:items-center">
      <CommonCard
        number={number}
        language={language}
        createdAt={createdAt}
        repositoryUrl={repositoryUrl}
        head={head}
        description={description}
      />
      <StatusComponent reviewee={reviewee} status={status} />
    </div>
  );
};

export default ReviewerCard;
