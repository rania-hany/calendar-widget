import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarWidgetComponent } from './calendar-widget.component';

const components = [CalendarWidgetComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class CalendarWidgetModule {}
