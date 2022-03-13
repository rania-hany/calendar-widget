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
  events: CalendarEvent[] = [];
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
          this.mapData(response as []);
          return this.events;
        })
      )
      .pipe(
        catchError((_) => {
          return of(events).pipe(
            map((response) => {
              this.mapData(response);
              return this.events;
            })
          );
        })
      );
  }

  mapData(data: any[]) {
    (Array.isArray(data) ? data.forEach((item) => {
      let event: CalendarEvent = {
        name: item.name,
        date: new Date(item.date),
        time: item.time,
        type: item.type,
      };
      this.events.push(event);
    }) : Object.entries(data).forEach((item: any) => {
      let event: CalendarEvent = {
        name: item[1].name,
        date: new Date(item[1].date),
        time: item[1].time,
        type: item[1].type,
      };
      this.events.push(event);
    }))
  }

  addEvent(event: CalendarEvent, save: boolean) {
    this.events.push(event);

    if (save) {
      const headers = new HttpHeaders();
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
      headers.set('Access-Control-Allow-Headers', '*');

      this.http
        .post(routes.events, event, { headers })
        .subscribe((response) => {
        });
    }
  }
}
