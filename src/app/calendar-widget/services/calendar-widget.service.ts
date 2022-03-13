import { Injectable } from '@angular/core';
import { week } from '../../shared/constants/statics';

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
      )
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
    for (let iterator = 0; iterator < 42; iterator++) {
      if (iterator < monthFirstDayIndex) {
        count++;
        month.push('0');
      } else if (
        index < this.daysInMonth(date.getMonth() + 1, date.getFullYear())
      ) {
        index++;
        month.push(index);
      } else {
        month.push('0');
      }
    }
    return month;
  }

  createDate(month:string,year: string, day = 1){
    var date = Date.parse(`${month} ${day}, ${year}`);
    if(!isNaN(date)){
       return new Date(date);
    }
    return new Date();
  }
 
}
