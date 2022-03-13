import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { week } from 'src/app/shared/constants/statics';
import { CalendarWidgetService } from '../calendar-widget.service';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss'],
})
export class MonthViewComponent implements OnInit {
  public weekDays: any[] = week;
  // static date to be removed
  // public selectedDate: Date = new Date(2022, 0, 24, 10, 33, 30, 0);
  @Input() selectedDate: Date;
  public today: number;
  @Input() monthDays: any[];
  @Output() openSelector: EventEmitter<any> = new EventEmitter<any>();
  @Output() openEvents: EventEmitter<any> = new EventEmitter<any>();

  constructor(public calendar: CalendarWidgetService) {}

  ngOnInit(): void {}
  ngOnChanges() {
    this.today = this.selectedDate.getDate();
  }
  monthName(): string {
    // selected Month
    return this.calendar.getMonthName(this.selectedDate);
  }
  showYearMonthSelector() {
    this.openSelector.emit();
  }
  // TO DO : Create type for the eventDetails and use it here
  showEventsView(eventDetails: any) {
    console.log('FIRST FROM MONTH VIEW');
    this.openEvents.emit(eventDetails);
  }
}
