import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarEvent } from 'src/app/shared/models/event';
import { CalendarWidgetService } from '../services/calendar-widget.service';
import { EventsService } from '../services/events.service';

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

  save: boolean = false;
  
  name: string = '';
  type: string = '';
  time: string = '';
  
  constructor(
    public calendar: CalendarWidgetService,
    private eventsService: EventsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.save = params['save'];
    });
  }

  showAddEvent() {
    
    this.emptyAddEventFields();
    this.isAddEvent = !this.isAddEvent;
  }

  emptyAddEventFields() {
    this.name = '';
    this.type = '';
    this.time = '';
  }
  closeEvents() {
    this.emptyAddEventFields();
    this.showEventsView.emit();
  }
  checkEvents() {
    return this.events.filter(
      (item) => item.date.getTime() == this.selectedDate.getTime()
    );
  }
  addEvent() {
    if (this.name && this.type && this.time) {
      let event: CalendarEvent = {
        date: this.selectedDate,
        name: this.name,
        time: this.time,
        type: this.type,
      };
      this.eventsService.addEvent(event, this.save);
      this.isAddEvent = false;
      this.emptyAddEventFields();

    }
  }
}
