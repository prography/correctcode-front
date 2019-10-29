import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'query-string';
import { setAuthToken } from 'utils/auth';
import { meSaga } from 'store/auth/action';

const AuthCheckPage = () => {
  const { search } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const { token } = qs.parse(search);
    setAuthToken(token);
    dispatch(meSaga());
    history.push('/');
  }, []);

  return null;
};

export default AuthCheckPage;
