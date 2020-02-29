import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';

const useLocationSearch = () => {
  const { search } = useLocation();
  const query = useMemo(() => qs.parse(search), [search]);

  return query;
};

export default useLocationSearch;
