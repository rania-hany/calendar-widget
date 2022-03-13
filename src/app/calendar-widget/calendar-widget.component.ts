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
  public months: any[] = months;
  public openSelector: boolean = false;
  public showEventsView: boolean = false; 
  constructor(public calendar: CalendarWidgetService) {}

  ngOnInit(): void {
  }

  toggleYearMonthSelector() {
    this.openSelector = !this.openSelector;
  }

  toggleEventsView() {
    this.showEventsView = !this.showEventsView;

  }
}
