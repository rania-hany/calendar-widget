import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public isAddEvent: boolean = false;

  @Output() public showEventsView: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  
  showAddEvent() {
    this.isAddEvent = !this.isAddEvent;
  }

  closeEvents() {
    this.showEventsView.emit();
  }

}
