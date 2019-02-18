import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddEvent } from '../state/events.actions';

@Component({
  selector: 'angular-nestJS-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  eventItem = new FormGroup({
    eventTitle: new FormControl(),
    eventDate: new FormControl(),
    eventVenue: new FormControl()
  });

  constructor(private store: Store) {}

  ngOnInit() {}

  onSubmit() {
    const myEvent = this.eventItem.value;

    this.store
      .dispatch(
        new AddEvent({
          title: myEvent.eventTitle,
          date: myEvent.eventDate,
          venue: myEvent.eventVenue
        })
      )
      .subscribe(() => {
        this.eventItem.reset({ eventTitle: '', eventDate: '', eventVenue: '' });
      });
  }
}
