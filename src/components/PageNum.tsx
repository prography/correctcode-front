import React from 'react';
import classnames from 'classnames';
import styles from 'scss/components/Pagination.module.scss';

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

export default PageNum;
