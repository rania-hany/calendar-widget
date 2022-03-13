import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { week } from 'src/app/shared/constants/statics';
import { CalendarWidgetService } from '../services/calendar-widget.service';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss'],
})
export class MonthViewComponent implements OnInit {
  public weekDays: any[] = week;
  // static date to be removed
  // public selectedDate: Date = new Date(2022, 0, 24, 10, 33, 30, 0);
  @Input() currentDate: Date;
  @Input() selectedYear: number;
  @Input() selectedMonth: string;
  @Input() selectedDay: string;
  public today: number;
  @Input() monthDays: any[];
  @Input() events: any[];
  @Output() openSelector: EventEmitter<any> = new EventEmitter<any>();
  @Output() openEvents: EventEmitter<any> = new EventEmitter<any>();

  constructor(public calendar: CalendarWidgetService) {}

  ngOnInit(): void {
    this.today = this.currentDate.getDate();
  }
  monthName(): string {
    return this.calendar.getMonthName(this.currentDate);
  }
  showYearMonthSelector() {
    this.openSelector.emit();
  }
  showEventsView(day: any) {
    this.selectedDay = day;
    this.openEvents.emit(day);
  }

  checkEvents(day: any) {
    const date = this.calendar.createDate(
      this.selectedMonth,
      this.selectedYear.toString(),
      day
    );
    return this.events.filter((item) => item.date.getTime() == date.getTime());
  }

  todayDate(day: any) {
    return (
      day == this.today &&
      this.currentDate.getFullYear() == new Date().getFullYear() &&
      this.currentDate.getMonth() == new Date().getMonth()
    );
  }
}
