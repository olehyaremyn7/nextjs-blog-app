import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

export const formatDate = (date, format = 'LLL') => {
  dayjs.extend(localizedFormat);

  return dayjs(date).format(format);
};
