import React from 'react';

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

const FetchingRepo = () => (
  <>
    {[...new Array(3)].map((_, i) => (
      <FetchingRepoItem key={i} />
    ))}
  </>
);

export default FetchingRepo;
