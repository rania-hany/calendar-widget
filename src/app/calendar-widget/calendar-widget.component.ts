import { Component, OnInit } from '@angular/core';
import { months } from '../shared/constants/statics';
import { CalendarWidgetService } from './services/calendar-widget.service';
import { EventsService } from './services/events.service';

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
  public currentDate: Date = new Date();
  public selectedDate: Date;
  public selectedDay: string;
  public monthDays: any[] = [];
  public events:any;
  constructor(public calendar: CalendarWidgetService, public eventsService: EventsService) {
    const todayDate = new Date();
    this.selectedMonth = this.calendar.getMonthName(todayDate);
    this.eventsService.getEvents().subscribe(events=>{ 
      this.events = events
    });
  }

  ngOnInit(): void {
    this.monthDays = this.calendar.getMonthDays(this.currentDate);
  }
  previousYear() {
    this.selectedYear--;
  }
  nextYear() {
    this.selectedYear++;
  }
  selectMonth(month: string) {
    this.selectedMonth = month;
    this.currentDate = this.calendar.createDate(
      month,
      this.selectedYear.toString()
    );
    this.ngOnInit();
  }
  toggleYearMonthSelector() {
    this.openSelector = !this.openSelector;
  }

  switchEvent(day: any) {
    this.showEventsView = true;
    this.selectedDate = this.calendar.createDate(
      this.selectedMonth,
      this.selectedYear.toString(),
      day
    );
  }
  closeEventsView() {
    this.showEventsView = false;
    this.selectedDay = ''
  }
}
