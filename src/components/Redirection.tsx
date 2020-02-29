import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import useLocationSearch from 'hooks/useLocationSearch';
import qs from 'query-string';

const DEFAULT_REDIRECT = '/reviewee';

type Props = {
  shouldRedirect?: boolean;
};

const Redirection: React.FC<Props> = ({ shouldRedirect, children }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { redirectUrl, ...otherQuery } = useLocationSearch();

  if (shouldRedirect) {
    const queryString = qs.stringify(otherQuery);
    history.replace(`${pathname}${queryString ? `?${queryString}` : ''}`);
    return <Redirect to={redirectUrl?.toString() || DEFAULT_REDIRECT} />;
  }

  return <>{children}</>;
};

export default Redirection;
