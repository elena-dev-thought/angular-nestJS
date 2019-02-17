import { Component, OnInit, Input } from '@angular/core';
import { MyEvent } from '@angular-nestJS/shared';

@Component({
  selector: 'angular-nestJS-events-item',
  templateUrl: './events-item.component.html',
  styleUrls: ['./events-item.component.scss']
})
export class EventsItemComponent implements OnInit {
  @Input() event: MyEvent;
  constructor() {}

  ngOnInit() {}
}
