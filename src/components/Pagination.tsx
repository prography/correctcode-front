import React, { useState } from 'react';
import classnames from 'classnames';

type Props = {
  isCurrentPage?: boolean;
  pageAmount: number;
  currentPage: number;
  handlePageNum: (value: number) => void;
};
type PageNumProps = {
  pageNum: number;
  currentPage: number;
  handlePageNum: (value: number) => void;
};

const PageNum: React.FC<PageNumProps> = ({
  pageNum,
  currentPage,
  handlePageNum,
}) => {
  return (
    <div
      className={classnames(
        'w-7 h-7 rounded mr-1 font-medium flex justify-center items-center cursor-pointer',
        {
          'transition duration-500 bg-primary hover:bg-primary':
            currentPage === pageNum,
          'hover:bg-reviewergray': currentPage !== pageNum,
        },
      )}
      onClick={() => handlePageNum(pageNum)}
    >
      {pageNum}
    </div>
  );
};

const MiddlePagination = ({
  pageAmount,
  currentPage,
  handlePageNum,
}: Props) => {
  const leftDots = currentPage - 1 > 4;
  const rightDots = pageAmount - currentPage > 4 && pageAmount > 9;
  const rows = [];
  const pageNum =
    currentPage < 6
      ? 3
      : pageAmount - currentPage < 5
      ? pageAmount - 6
      : currentPage - 2;
  if (pageAmount < 10) {
    for (let i = 2; i < pageAmount; i++) {
      rows.push(
        <PageNum
          key={i}
          pageNum={i}
          currentPage={currentPage}
          handlePageNum={handlePageNum}
        />,
      );
    }
  } else {
    for (let i = pageNum; i < pageNum + 5; i++) {
      rows.push(
        <PageNum
          key={i}
          pageNum={i}
          currentPage={currentPage}
          handlePageNum={handlePageNum}
        />,
      );
    }
  }

  return (
    <>
      {pageAmount < 10 ? (
        ''
      ) : leftDots ? (
        <div className="w-7 h-7 rounded mr-1 flex justify-center items-center">
          ···
        </div>
      ) : (
        <PageNum
          pageNum={2}
          currentPage={currentPage}
          handlePageNum={handlePageNum}
        />
      )}
      {rows}
      {pageAmount < 10 ? (
        ''
      ) : rightDots ? (
        <div className="w-7 h-7 rounded mr-1 flex justify-center items-center">
          ···
        </div>
      ) : (
        <PageNum
          pageNum={pageAmount - 1}
          currentPage={currentPage}
          handlePageNum={handlePageNum}
        />
      )}
    </>
  );
};

const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageAmount = 13;

  //각종 함수들
  const handlePageNum = (value: number) => {
    if (value < 1) {
      setCurrentPage(1);
    } else if (value > pageAmount) {
      setCurrentPage(pageAmount);
    } else {
      setCurrentPage(value);
    }
  };

  return (
    <div className="w-3/5 h-12 mt-10 mb-8 mr-auto ml-auto rounded border border-placeholder bg-white flex justify-center items-center text-base font-bold">
      <div
        className="w-12 h-10 rounded flex justify-center items-center"
        onClick={() => handlePageNum(currentPage - 10)}
      >
        <div className="w-7 h-7 rounded mr-1 hover:bg-primary cursor-pointer flex justify-center items-center">
          &#60;
        </div>
      </div>
      <PageNum
        pageNum={1}
        currentPage={currentPage}
        handlePageNum={handlePageNum}
      />

      <MiddlePagination
        currentPage={currentPage}
        pageAmount={pageAmount}
        handlePageNum={handlePageNum}
      />
      {pageAmount < 2 ? (
        ''
      ) : (
        <PageNum
          pageNum={pageAmount}
          currentPage={currentPage}
          handlePageNum={handlePageNum}
        />
      )}
      <div
        className="w-12 h-10 rounded flex justify-center items-center"
        onClick={() => handlePageNum(currentPage + 10)}
      >
        <div className="w-7 h-7 rounded hover:bg-primary cursor-pointer flex justify-center items-center">
          &#62;
        </div>
      </div>
    </div>
  );
};

export default Pagination;
