import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { MyEvent } from '@angular-nestJS/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-nestJS-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: Observable<MyEvent[]>;
  constructor(public eventsService: EventsService) {}

  ngOnInit() {
    this.retrieveEvents();
  }

  retrieveEvents() {
   this.events =  this.eventsService.getEvents();
  }
}
