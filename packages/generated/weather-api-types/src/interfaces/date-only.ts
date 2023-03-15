import { DayOfWeek } from './day-of-week';

export interface DateOnly {
  year: number;
  month: number;
  day: number;
  dayOfWeek?: DayOfWeek;
  dayOfYear: number;
  dayNumber: number;
}
