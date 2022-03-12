import { Component, OnInit } from '@angular/core';
import { CalendarWidgetService } from './calendar-widget.service';

@Component({
  selector: 'app-calendar-widget',
  templateUrl: './calendar-widget.component.html',
  styleUrls: ['./calendar-widget.component.scss'],
})
export class CalendarWidgetComponent implements OnInit {
  public years: Number[] = [];
  public month: any[] = [];
  constructor(public calendar: CalendarWidgetService) {}

  ngOnInit(): void {
    this.month = this.calendar.getMonthDays(new Date());
    console.log(this.month)
  }
}
