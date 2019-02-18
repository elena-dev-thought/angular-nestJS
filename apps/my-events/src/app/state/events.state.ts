import { State, Action, StateContext, Selector } from '@ngxs/store';
import { EventsStateModel, initialEventsState } from './events.model.state';
import { LoadEvents, AddEvent } from './events.actions';
import { EventsService } from '../events.service';
import { tap } from 'rxjs/operators';

@State<EventsStateModel>({
  name: 'events',
  defaults: initialEventsState
})
export class EventsState {
  constructor(private eventsService: EventsService) {}

  @Selector()
  static getEvents(state: EventsStateModel) {
    return state.events;
  }

  @Action(LoadEvents)
  getEvents(ctx: StateContext<EventsStateModel>, action: LoadEvents) {
    return this.eventsService.getEvents().pipe(
      tap(events => {
        ctx.setState({ events });
      })
    );
  }

  @Action(AddEvent)
  postEvent(ctx: StateContext<EventsStateModel>, action: AddEvent) {
    return this.eventsService.addEvent(action.event).pipe(
      tap(event =>
        ctx.patchState({
          events: [...ctx.getState().events, event]
        })
      )
    );
  }
}
