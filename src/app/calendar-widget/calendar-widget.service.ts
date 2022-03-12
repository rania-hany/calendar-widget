import { Injectable } from '@angular/core';
import { week } from '../shared/constants/statics';

@Injectable({
  providedIn: 'root',
})
export class CalendarWidgetService {
  constructor() {}

  getDayName(date: Date) {
    return date.toLocaleString(undefined, { weekday: 'long' });
  }

  getMonthName(date: Date) {
    return date.toLocaleString(undefined, { month: 'long' });
  }

  getMonthFirstDayIndex(date: Date) {
    const day = this.getDayName(this.startOfMonth(date));
    return (
      week.findIndex(
        (item) => item.toLocaleLowerCase() == day.toLocaleLowerCase()
      ) + 1
    );
  }

  startOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }

  getMonthDays(date: Date) {
    const month = [];
    var monthFirstDayIndex = this.getMonthFirstDayIndex(date);
    var count = 0;
    var index = 0;
    for (let i = 0; i < 35; i++) {
      if (i < monthFirstDayIndex) {
        count++;
        month.push(undefined);
      } else if (
        index < this.daysInMonth(date.getMonth() + 1, date.getFullYear())
      ) {
        index++;
        month.push(index);
      } else {
        month.push(undefined);
      }
    }
    return month;
  }
}
