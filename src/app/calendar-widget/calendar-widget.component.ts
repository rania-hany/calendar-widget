import { Component, OnInit } from '@angular/core';
import { months, week } from '../shared/constants/statics';
import { CalendarWidgetService } from './calendar-widget.service';

@Component({
  selector: 'app-calendar-widget',
  templateUrl: './calendar-widget.component.html',
  styleUrls: ['./calendar-widget.component.scss'],
})
export class CalendarWidgetComponent implements OnInit {
  public years: Number[] = [];
  public monthDays: any[] = [];
  public months: any[] = months;
  public weekDays: any[] = week;
  public openSelector: boolean = false;
  public selectedDate: Date = new Date();
  constructor(public calendar: CalendarWidgetService) {}

  ngOnInit(): void {
    this.monthDays = this.calendar.getMonthDays(this.selectedDate);
    console.log(this.monthDays)
  }

  monthName(): string{
    // selected Month
    return this.calendar.getMonthName(this.selectedDate);
  }


  showYearMonthSelector(){
    this.openSelector=  !this.openSelector;
  }
}
