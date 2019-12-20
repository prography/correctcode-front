import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from 'scss/pages/AuthCheck.module.scss';
import { Loading } from 'components';
import { useHistory } from 'react-router-dom';

const AuthCheckPage = () => {
  const authenticateStatus = useSelector(
    (state: StoreState) => state.auth.meStatus,
  );
  const history = useHistory();

  useEffect(() => {
    if (authenticateStatus === 'SUCCESS') {
      history.push('/reviewee');
    }
    if (authenticateStatus === 'FAILURE') {
      history.push('/');
    }
  }, [authenticateStatus, history]);

  return (
    <div className={style.container}>
      <div>
        <Loading />
      </div>
    </div>
  );
};

export default AuthCheckPage;
