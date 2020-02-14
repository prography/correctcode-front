import React from 'react';

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

const FetchingCard: React.FC = () => {
  return (
    <div>
      <FetchingCardModel />
      <FetchingCardModel />
      <FetchingCardModel />
    </div>
  );
};

export default FetchingCard;
