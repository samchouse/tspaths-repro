import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(utc);
dayjs.extend(duration);
