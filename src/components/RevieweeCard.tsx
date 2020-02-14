import React, { FC } from 'react';
import { Review } from 'models/review';
import { CommonCard } from 'components';
import cx from 'classnames';

type Props = Review;
type MatchedCardProps = Pick<Review, 'reviewer' | 'status'>;

const MatchedCard: FC<MatchedCardProps> = ({ reviewer, status }) => {
  return (
    <div className="absolute inline-flex w-full h-20 bottom-0 items-center bg-lightergray rounded-b-lg">
      <img
        className="w-8 h-8 rounded-full ml-8"
        src={reviewer.profileImg}
        alt="Profile"
      />
      <p className="ml-2 tracking-tight text-gray-850">{reviewer.name}</p>
      <div
        className={cx(
          'ml-auto w-6 h-6 rounded border border-primaryDark float-right',
          {
            'bg-primaryDark': status === 'completed',
          },
        )}
      />
      <div className="text-sm font-bold text-primaryDark float-right mr-6 ml-2">
        {status}
      </div>
    </div>
  );
};

const RevieweeCard: React.FC<Props> = ({
  status,
  reviewer,
  createdAt,
  language,
  head,
  number,
  description,
  repositoryUrl,
}) => {
  const isPending = status === 'pending';

  return (
    <div className="relative w-auto max-w-screen-md h-64 mb-8 pt-7 pb-5 rounded-md bg-white shadow-md first:flex first:items-center">
      <CommonCard
        language={language}
        number={number}
        createdAt={createdAt}
        repositoryUrl={repositoryUrl}
        head={head}
        description={description}
      />
      {isPending ? (
        <div className="absolute inline-flex w-full h-16 bottom-0 items-center bg-lightergray rounded-b-lg">
          <p className="text-base font-bold text-primaryDark pl-8 tracking-tight">
            리뷰어를 기다리고 있어요.
          </p>
        </div>
      ) : (
        <MatchedCard status={status} reviewer={reviewer} />
      )}
    </div>
  );
};

export default RevieweeCard;
