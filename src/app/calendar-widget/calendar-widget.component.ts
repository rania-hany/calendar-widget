import { Component, OnInit } from '@angular/core';
import { months } from '../shared/constants/statics';
import { CalendarWidgetService } from './services/calendar-widget.service';


@Component({
  selector: 'app-calendar-widget',
  templateUrl: './calendar-widget.component.html',
  styleUrls: ['./calendar-widget.component.scss'],
})
export class CalendarWidgetComponent implements OnInit {
  public years: Number[] = [];
  public months: any[] = months;
  public openSelector: boolean = false;
  public showEventsView: boolean = false;
  public selectedYear: number = 2022;
  public selectedMonth: string = '';
  public selectedDate: Date = new Date();
  public monthDays: any[] = [];

  constructor(public calendar: CalendarWidgetService) {}

  ngOnInit(): void {
    this.monthDays = this.calendar.getMonthDays(this.selectedDate);
  }

  toggleYearMonthSelector() {
    this.openSelector = !this.openSelector;
  }

  toggleEventsView() {
    this.showEventsView = !this.showEventsView;
  }

  previousYear() {
    this.selectedYear--;
  }
  nextYear() {
    this.selectedYear++;
  }
  selectMonth(month: string) {
    this.selectedMonth = month;
    this.selectedDate = this.calendar.createSelectedDate(month,this.selectedYear.toString())
    this.ngOnInit();
  }
  
}
