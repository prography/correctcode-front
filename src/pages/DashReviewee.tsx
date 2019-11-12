import React, { useEffect } from 'react';
import Nav from 'components/Nav';
import CardList from 'components/CardList';
import SideBar from 'components/SideBar';
import pageStyles from 'scss/pages.module.scss';
import { useDispatch } from 'react-redux';
import { reviewListSaga } from 'store/review/action';

const DashReviewee = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(reviewListSaga())
  }, []);

  return (
    <div>
      <Nav />
      <div className={pageStyles.underNav}>
        <SideBar />
        <CardList />
      </div>
    </div>
  );
};

export default DashReviewee;
