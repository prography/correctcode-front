import React from 'react';
import styles from 'scss/components/Loading.module.scss';

const FetchingCardModel = () => {
  return (
    <div className="w-full h-64 rounded-md shadow-md inline-block mb-6 relative pt-8 pb-5 bg-placeholderBackground first:flex first:items-center">
      <div className="flex">
        <div className="w-16 h-5 bg-placeholder mb-1 ml-8"> </div>
        <div className="w-32 h-5 bg-placeholder mr-6 ml-auto float-right">
          {' '}
        </div>
      </div>

      <div className="w-64 h-6 bg-placeholder ml-8 mt-2"> </div>
      <div className="w-32 h-5 bg-placeholder my-2 mx-8"></div>
      <div className="absolute w-full h-16 bg-placeholderBackgroundTwo rounded-b-lg bottom-0 inline-flex items-center ">
        <div className="w-40 h-5 bg-placeholder ml-8"> </div>
      </div>
    </div>
  );
};
const FetchingCardNotiModel = () => {
  return (
    <div className="w-full h-48 rounded-md shadow-md inline-block mb-6 relative pt-8 pb-5 bg-placeholderBackground first:flex first:items-center">
      <div className="w-56 h-6 bg-placeholder ml-8"> </div>
      <div className="w-48 h-4 bg-placeholder mt-3 ml-8"> </div>
      <div className="w-64 h-4 bg-placeholder mt-2 ml-8"> </div>
    </div>
  );
};
const FetchingCard: React.FC = () => {
  return (
    <div>
      <FetchingCardNotiModel />
      <FetchingCardModel />
      <FetchingCardModel />
      <FetchingCardModel />
    </div>
  );
};

export default FetchingCard;
