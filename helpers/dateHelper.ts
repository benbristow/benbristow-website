import dayjs from 'dayjs';

const dateFormat = 'dddd DD MMMM YYYY';

export const FormatDate = (date: Date) => dayjs(date).format(dateFormat);