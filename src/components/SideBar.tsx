import React from 'react';
import profileImg from 'assets/img/TemporaryProfileImg.png';
import 'components/SideBar.scss';
const SideBar = () => {
	return (
		<div className="SideBarBox">
			<img src={profileImg} />
			<p className="name">name</p>
			<p className="description">descriptrion</p>
		</div>
	);
};

export default SideBar;
