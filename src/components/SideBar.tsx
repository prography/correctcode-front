import React from 'react';
import { useSelector } from 'react-redux';
import profileImg from 'assets/img/TemporaryProfileImg.png';

const SideBar: React.FC = () => {
  const user = useSelector((state: StoreState) => state.auth.user);
  return (
    <div className="float-left mr-20 hidden sm:block">
      <img
        className="ml-12 w-40 h-40 rounded-full"
        src={user.profileImg || profileImg}
        alt="profile"
      />
      <p className="ml-12 mt-8 text-xl text-gray-850">{user.displayName}</p>
      <p className="ml-12 mt-3 text-base text-description">{user.email}</p>
    </div>
  );
};

export default SideBar;
