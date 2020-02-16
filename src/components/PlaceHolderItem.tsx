import React from 'react';

/* 카드 플레이스 홀더 */
const FetchingCardModel = () => {
  return (
    <div className="w-full h-64 rounded-md shadow-md inline-block mb-6 relative pt-8 pb-5 bg-white first:flex first:items-center">
      {/* Tag 랑 Date */}
      <div className="flex">
        <div className="w-16 h-3 bg-placeholder mb-1 ml-8 rounded"> </div>
        <div className="w-32 h-3 bg-placeholder mr-6 ml-auto float-right rounded">
          {' '}
        </div>
      </div>
      {/* Title */}
      <div className="w-64 h-3 bg-placeholder ml-8 mt-2 rounded"> </div>
      {/* Contents */}
      <div className="w-48 h-3 bg-placeholder ml-8 mt-8 rounded"> </div>
      <div className="w-64 h-3 bg-placeholder ml-8 mt-2 rounded"> </div>
      <div className="w-32 h-3 bg-placeholder my-2 mx-8 rounded"></div>
      {/* Message */}
      <div className="absolute w-full h-16 rounded-b-lg bottom-0 inline-flex items-center">
        <div className="w-40 h-3 bg-placeholder ml-8 rounded"> </div>
      </div>
    </div>
  );
};

export const CardPlaceHolder: React.FC = () => {
  return (
    <div>
      <FetchingCardModel />
      <FetchingCardModel />
      <FetchingCardModel />
    </div>
  );
};

/* 레포 플레이스 홀더 */

const FetchingRepoItem = () => {
  return (
    <div className="w-full px-2 py-6 bg-white flex items-center border-b border-placeholder">
      {/* Icon */}
      <div className="w-8 h-8 bg-placeholder rounded" />
      {/* Title */}
      <div className="flex-1 ml-3">
        <div className="w-24 h-5 bg-placeholder rounded" />
        <div className="mt-2 w-36 h-5 bg-placeholder rounded" />
      </div>
      <div className="w-4 h-4 bg-placeholder rounded" />
    </div>
  );
};

export const RepoPlaceHolder = () => (
  <>
    {[...new Array(3)].map((_, i) => (
      <FetchingRepoItem key={i} />
    ))}
  </>
);
