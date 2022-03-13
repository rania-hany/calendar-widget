import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { routes } from 'src/app/shared/constants/url-config';
import { CalendarEvent } from 'src/app/shared/models/event';
import * as events from '../../shared/constants/events.json';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<CalendarEvent[]> {
    const headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
    headers.set('Access-Control-Allow-Headers', '*');
    return this.http
      .get(routes.events, { headers })
      .pipe(
        map((response) => {
          return this.mapData(response as []);
        })
      )
      .pipe(
        catchError((_) => {
          return of(events).pipe(
            map((response) => {
              return this.mapData(response);
            })
          );
        })
      );
  }

  mapData(data: any[]): CalendarEvent[] {
    let events: CalendarEvent[] = [];
    data.forEach((item) => {
      let event: CalendarEvent = {
        eventName: item.eventname,
        date: new Date(item.date),
        time: item.time,
        type: item.type,
      };
      events.push(event);
    });
    return events;
  }
}
