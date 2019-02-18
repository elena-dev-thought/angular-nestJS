import { MyEvent } from '@angular-nestJS/shared';

export interface EventsStateModel {
  events: MyEvent[];
}

export const initialEventsState: EventsStateModel = {
  events: []
};
