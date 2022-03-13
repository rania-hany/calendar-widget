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
  public monthDays: any[] = [];
  public events:any;
  constructor(public calendar: CalendarWidgetService, public eventsService: EventsService) {
    this.selectedMonth = this.calendar.getMonthName(new Date())
    this.eventsService.getEvents().subscribe(events=>{ 
      this.events = events
      console.log(this.events)
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

  toggleEventsView(day: any) {
    this.showEventsView = !this.showEventsView;
    this.selectedDate = this.calendar.createDate(
      this.selectedMonth,
      this.selectedYear.toString(),
      day
    );
    console.log(this.selectedDate);
  }
}
