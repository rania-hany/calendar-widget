import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortWeekNamePipe } from './pipes/short-week-name.pipe';

@NgModule({
  declarations: [ShortWeekNamePipe],
  imports: [CommonModule],
  exports: [ShortWeekNamePipe],
})
export class SharedModule {}
