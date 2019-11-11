import React from 'react';
import 'components/Nav.scss';
import logo from 'assets/img/logo.png';
import profileImg from 'assets/img/TemporaryProfileImg.png';
const Nav = () => {
  return (
    <div className="NavBox">
      <img src={logo} className="logo" />
      <div className="profile">
        <img src={profileImg} className="profileImg" />
        <p>George</p>
      </div>
    </div>
  );
};

export default Nav;
