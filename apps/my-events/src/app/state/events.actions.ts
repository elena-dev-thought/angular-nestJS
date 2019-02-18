import { MyEvent } from '@angular-nestJS/shared';

export class AddEvent {
  static readonly type = 'ADD_EVENT';
  constructor(public event: MyEvent) {}
}

export class LoadEvents {
  static readonly type = 'GET_EVENTS';
}
