import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarWidgetComponent } from './calendar-widget.component';
import { SharedModule } from '../shared/shared.module';
import { MonthViewComponent } from './month-view/month-view.component';
import { EventsComponent } from './events/events.component';
import { FormsModule } from '@angular/forms';

const components = [
  CalendarWidgetComponent, 
  MonthViewComponent,
  EventsComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedModule,FormsModule],
  exports: [...components],
})
export class CalendarWidgetModule {}
