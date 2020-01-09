import React, { useState } from 'react';
import { PageNum } from 'components';
import styles from 'scss/components/Pagination.module.scss';

type Props = {
  isCurrentPage?: boolean;
  pageAmount: number;
  currentPage: number;
  handlePageNum: (value: number) => void;
};

const UnderPagination = ({ pageAmount, currentPage, handlePageNum }: Props) => {
  var rows = [];
  for (var i = 1; i < pageAmount + 1; i++) {
    rows.push(
      <PageNum
        pageNum={i}
        currentPage={currentPage}
        handlePageNum={handlePageNum}
      />,
    );
  }
  return (
    <>
      <div
        className={styles.moveNumList}
        onClick={() => handlePageNum(currentPage - 1)}
      >
        <div>&#60;</div>
      </div>
      {rows}
      <div
        className={styles.moveNumList}
        onClick={() => handlePageNum(currentPage + 1)}
      >
        <div>&#62;</div>
      </div>
    </>
  );
};
const SidePagination = ({ pageAmount, currentPage, handlePageNum }: Props) => {
  const isDots = currentPage < 6;
  const middleNum = currentPage < 6 ? 5 : pageAmount - 4;

  return (
    <>
      <div
        className={styles.moveNumList}
        onClick={() => handlePageNum(currentPage - 1)}
      >
        <div>&#60;</div>
      </div>
      <div className={styles.numList}>
        <PageNum
          pageNum={1}
          currentPage={currentPage}
          handlePageNum={handlePageNum}
        />
        {!isDots ? (
          <div className={styles.pageDots}>···</div>
        ) : (
          <PageNum
            pageNum={2}
            currentPage={currentPage}
            handlePageNum={handlePageNum}
          />
        )}

        <PageNum
          pageNum={middleNum - 2}
          currentPage={currentPage}
          handlePageNum={handlePageNum}
        />
        <PageNum
          pageNum={middleNum - 1}
          currentPage={currentPage}
          handlePageNum={handlePageNum}
        />
        <PageNum
          pageNum={middleNum}
          currentPage={currentPage}
          handlePageNum={handlePageNum}
        />
        <PageNum
          pageNum={middleNum + 1}
          currentPage={currentPage}
          handlePageNum={handlePageNum}
        />
        <PageNum
          pageNum={middleNum + 2}
          currentPage={currentPage}
          handlePageNum={handlePageNum}
        />
        {isDots ? (
          <div className={styles.pageDots}>···</div>
        ) : (
          <PageNum
            pageNum={pageAmount - 1}
            currentPage={currentPage}
            handlePageNum={handlePageNum}
          />
        )}
        <PageNum
          pageNum={pageAmount}
          currentPage={currentPage}
          handlePageNum={handlePageNum}
        />
      </div>
      <div
        className={styles.moveNumList}
        onClick={() => handlePageNum(currentPage + 1)}
      >
        <div>&#62;</div>
      </div>
    </>
  );
};
const MiddlePagination = ({
  pageAmount,
  currentPage,
  handlePageNum,
}: Props) => {
  return (
    <>
      <div
        className={styles.moveNumList}
        onClick={() => handlePageNum(currentPage - 1)}
      >
        <div>&#60;</div>
      </div>
      <div className={styles.numList}>
        <PageNum pageNum={1} handlePageNum={handlePageNum} />
        <div className={styles.pageDots}>···</div>
        <PageNum pageNum={currentPage - 2} handlePageNum={handlePageNum} />
        <PageNum pageNum={currentPage - 1} handlePageNum={handlePageNum} />
        <PageNum
          pageNum={currentPage}
          isCurrentPage={true}
          handlePageNum={handlePageNum}
        />
        <PageNum pageNum={currentPage + 1} handlePageNum={handlePageNum} />
        <PageNum pageNum={currentPage + 2} handlePageNum={handlePageNum} />
        <div className={styles.pageDots}>···</div>
        <PageNum pageNum={pageAmount} handlePageNum={handlePageNum} />
      </div>
      <div
        className={styles.moveNumList}
        onClick={() => handlePageNum(currentPage + 1)}
      >
        <div>&#62;</div>
      </div>
    </>
  );
};

const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageAmount = 23;
  //각종 함수들
  const handlePageNum = (value: number) => {
    if (value < 1 || value > pageAmount) {
      return 0;
    }
    setCurrentPage(value);
  };
  const StatusPagination =
    pageAmount < 10
      ? UnderPagination
      : 5 < currentPage && currentPage < pageAmount - 5
      ? MiddlePagination
      : SidePagination;
  return (
    <div className={styles.paginationLayout}>
      <StatusPagination
        currentPage={currentPage}
        pageAmount={pageAmount}
        handlePageNum={handlePageNum}
      />
    </div>
  );
};

export default Pagination;
