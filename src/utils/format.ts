import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import isBefore from 'date-fns/isBefore';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import subWeeks from 'date-fns/subWeeks';
import locale from 'date-fns/locale/ko';

const DEFAULT_DATE_FORMAT = 'yyyy-MM-dd';
/* 
  1주일 이전 - 날짜
  1주일 이내 - distance
*/
export const formatDate = (
  date: string,
  dateFormat: string = DEFAULT_DATE_FORMAT,
) => {
  const parsedDate = parseISO(date);
  if (isBefore(subWeeks(Date.now(), 1), parsedDate)) {
    return `${formatDistanceStrict(parsedDate, Date.now(), {
      locale,
      addSuffix: true,
    })}`;
  }
  return format(parseISO(date), dateFormat);
};
