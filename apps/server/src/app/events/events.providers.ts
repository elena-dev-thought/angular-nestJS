import { Connection } from 'mongoose';
import { EventsSchema } from './events.schema';

export const eventsProviders = [
  {
    // the name for my created model in the db
    provide: 'EventModel',
    useFactory: (connection: Connection) => connection.model('Event', EventsSchema),
    inject: ['DbConnectionToken'],
  },
];
