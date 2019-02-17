import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { eventsProviders } from './events.providers';
import { DatabaseModule } from './../mongoose/db.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EventsController],
  providers: [
    EventsService,
    ...eventsProviders,
  ],
})
export class EventsModule {}
