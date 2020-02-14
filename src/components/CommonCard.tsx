import React from 'react';
import { Review } from 'models/review';
import { formatDate } from 'utils/format';
import cx from 'classnames';
import lineEffect from 'scss/components/LinerEffect.module.scss';
type Props = Pick<
  Review,
  'language' | 'createdAt' | 'repositoryUrl' | 'head' | 'description' | 'number'
>;
const CommonCard: React.FC<Props> = ({
  language,
  createdAt,
  repositoryUrl,
  head,
  description,
  number,
}) => {
  return (
    <>
      <div className="flex ">
        <p className="font-bold tracking-tight text-gray-850 mb-1 ml-8 underline ">
          {language}
        </p>
        <p className="tracking-tight text-gray-850 float-right mr-6 ml-auto">
          {formatDate(createdAt)}
        </p>
      </div>
      <a
        className={cx(
          'text-lg font-bold text-gray-850 ml-8 no-underline',
          lineEffect.basic,
        )}
        href={`${repositoryUrl}/pull/${number}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {head}
      </a>
      <p className="text-base text-description mx-8 my-4 h-24">{description}</p>
    </>
  );
};

export default CommonCard;
