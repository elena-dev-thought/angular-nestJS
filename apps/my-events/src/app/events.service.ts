import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyEvent } from '@angular-nestJS/shared';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor( private httpService: HttpClient) {}

  getEvents(): Observable<Array<MyEvent>>{
    return this.httpService.get<Array<MyEvent>>('http://localhost:3333/events');
  }
  addEvent(event: MyEvent) : Observable<MyEvent>{
    return this.httpService.post<MyEvent>('http://localhost:3333/events', event);
  }
}
