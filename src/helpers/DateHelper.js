import dayjs from 'dayjs';

const dateFormat = 'dddd DD MMMM YYYY';

export const FormatDate = date => dayjs(date).format(dateFormat);
