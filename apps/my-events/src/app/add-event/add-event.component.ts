import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(public eventService: EventsService) {}

  ngOnInit() {}

  onSubmit() {
    const myEvent = this.eventItem.value;
    this.eventService
      .addEvent({
        title: myEvent.eventTitle,
        date: myEvent.eventDate,
        venue: myEvent.eventVenue
      })
      .subscribe();
  }
}
