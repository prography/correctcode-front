import React from 'react';
import Nav from 'components/Nav';
import CardList from 'components/CardList';
import SideBar from 'components/SideBar';
import pageStyles from 'scss/pages.module.scss';

const DashReviewee = () => {
  
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
