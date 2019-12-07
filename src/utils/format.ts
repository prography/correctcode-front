import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';

const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';

export const formatDate = (
  date: string,
  dateFormat: string = DEFAULT_DATE_FORMAT,
) => {
  return format(parseISO(date), dateFormat);
};
