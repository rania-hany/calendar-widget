import { TestBed } from '@angular/core/testing';

import { CalendarWidgetService } from './calendar-widget.service';

describe('CalendarWidgetService', () => {
  let service: CalendarWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
