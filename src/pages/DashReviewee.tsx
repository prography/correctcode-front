import React from 'react';
import Nav from 'components/Nav';
import CardList from 'components/CardList';
import SideBar from 'components/SideBar';
const DashReviewee = () => {
  return (
    <div>
      <Nav />
      <div
        style={{
          width: 1119,
          margin: 'auto',
          display: 'flex',
          marginTop: '116px',
        }}
      >
        <SideBar />
        <CardList />
      </div>
    </div>
  );
};

export default DashReviewee;
