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
  isCurrentPage?: boolean;
  pageNum: number;
  currentPage?: number;
  handlePageNum: (value: number) => void;
};

const PageNum: React.FC<PageNumProps> = ({
  pageNum,
  isCurrentPage,
  currentPage,
  handlePageNum,
}) => {
  if (currentPage) {
    isCurrentPage = currentPage === pageNum;
  }
  return (
    <div
      className={classnames(styles.pageNum, {
        [styles.currentPage]: isCurrentPage,
      })}
      onClick={() => handlePageNum(pageNum)}
    >
      {pageNum}
    </div>
  );
};

const UpdatedPagination = ({
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
    if (value < 1 || value > pageAmount) {
      return 0;
    }
    setCurrentPage(value);
  };

  return (
    <div className={styles.paginationLayout}>
      <div
        className={styles.moveNumList}
        onClick={() => handlePageNum(currentPage - 1)}
      >
        <div>&#60;</div>
      </div>
      <PageNum
        pageNum={1}
        currentPage={currentPage}
        handlePageNum={handlePageNum}
      />

      <UpdatedPagination
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
        onClick={() => handlePageNum(currentPage + 1)}
      >
        <div>&#62;</div>
      </div>
    </div>
  );
};

export default Pagination;
