import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CalendarWidgetService } from '../services/calendar-widget.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  public isAddEvent: boolean = false;

  @Input() selectedDate: Date;

  @Output() public showEventsView: EventEmitter<any> = new EventEmitter<any>();

  @Input() events: any[];

  constructor(public calendar: CalendarWidgetService) {}

  ngOnInit(): void {}

  showAddEvent() {
    this.isAddEvent = !this.isAddEvent;
  }

  closeEvents() {
    this.showEventsView.emit();
  }
  checkEvents() {
    return this.events.filter((item) => item.date.getTime() == this.selectedDate.getTime());
  }
}
