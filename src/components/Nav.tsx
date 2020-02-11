import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from 'assets/img/logo.png';
import profileImg from 'assets/img/TemporaryProfileImg.png';

type Props = {
  isStartPage?: boolean;
  isReviewer?: boolean;
};

const Nav: React.FC<Props> = ({ isStartPage = false, isReviewer }) => {
  const user = useSelector((state: StoreState) => state.auth.user);
  const logoToReviewerDash = isReviewer ? '/reviewer' : '/reviewee';

  return (
    <div
      className={`fixed top-0 w-screen h-20 z-10 ${
        isStartPage ? 'text-white bg-primaryBlack' : 'text-gray-800 bg-white'
      }`}
    >
      <div className="h-full my-0 md:mx-32 mx-5 flex items-center">
        <Link className="flex-1" to={logoToReviewerDash}>
          <img src={logo} className="md:w-56 w-32" alt="logo" />
        </Link>
        <div className="w-auto h-8 flex items-center">
          <a href="https://forms.gle/n8poWfpe1wLhrWQ26" target="blank">
            <div
              className={`hidden sm:flex justify-center items-center w-24 h-8 rounded-lg border mr-4 cursor-pointer
            ${
              isStartPage
                ? 'border-white hover:border-primaryDark text-white hover:text-primaryDark'
                : 'border-black hover:border-primary text-dark hover:text-primary'
            }`}
            >
              CONTACT
            </div>
          </a>
          <img
            src={user.profileImg ? user.profileImg : profileImg}
            className="w-8"
            alt="profile"
          />
          <span className="inline-block text-lg font-medium ml-2">
            {user.displayName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
