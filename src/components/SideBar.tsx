import React from 'react';
import { useSelector } from 'react-redux';
import profileImg from 'assets/img/TemporaryProfileImg.png';

type Props = {
  isFetching: boolean;
};

const SideBar: React.FC<Props> = ({ isFetching }) => {
  const user = useSelector((state: StoreState) => state.auth.user);
  return (
    <div className="float-left mr-20 hidden sm:block">
      {isFetching ? (
        <>
          <div className="ml-12 w-40 h-40 mr-12 rounded-full bg-placeholder" />
          <div className="ml-12 mt-8 w-32 mr-12 h-4 bg-placeholder" />
          <div className="ml-12 mt-3 w-20 mr-12 h-4 bg-placeholder" />
        </>
      ) : (
        <>
          <img
            className="ml-12 w-40 h-40 rounded-full"
            src={user.profileImg ? user.profileImg : profileImg}
            alt="profile"
          />
          <p className="ml-12 mt-8 text-xl text-gray-850">{user.displayName}</p>
          <p className="ml-12 mt-3 text-base text-description">{user.email}</p>
        </>
      )}
    </div>
  );
};

export default SideBar;
