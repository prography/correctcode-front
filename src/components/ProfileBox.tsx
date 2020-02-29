import React from 'react';
import { useSelector } from 'react-redux';

const ProfileBox = () => {
  const { profileImg, name } = useSelector(
    (state: StoreState) => state.auth.user,
  );
  return (
    <div className="flex items-center bg-gray-200 p-2 rounded">
      <img src={profileImg} alt="profile" className="w-8 h-8" />
      <span className="ml-2 font-bold">{name}</span>
    </div>
  );
};

export default ProfileBox;
