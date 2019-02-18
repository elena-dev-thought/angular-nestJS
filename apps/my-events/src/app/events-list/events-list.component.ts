import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { MyEvent } from '@angular-nestJS/shared';
import { Observable } from 'rxjs';
import { LoadEvents } from '../state/events.actions';
import { EventsState } from '../state/events.state';

@Component({
  selector: 'angular-nestJS-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  @Select(EventsState.getEvents) events$: Observable<MyEvent[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new LoadEvents());
  }
}
