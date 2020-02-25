import React, { useState } from 'react';
import classnames from 'classnames';
import styles from 'scss/components/Pagination.module.scss';

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
      className={classnames(styles.pageNum, {
        [styles.currentPage]: currentPage === pageNum,
      })}
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
        <div className={styles.pageDots}>···</div>
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
        <div className={styles.pageDots}>···</div>
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
    <div className={styles.paginationLayout}>
      <div
        className={styles.moveNumList}
        onClick={() => handlePageNum(currentPage - 10)}
      >
        <div>&#60;</div>
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
        className={styles.moveNumList}
        onClick={() => handlePageNum(currentPage + 10)}
      >
        <div>&#62;</div>
      </div>
    </div>
  );
};

export default Pagination;
