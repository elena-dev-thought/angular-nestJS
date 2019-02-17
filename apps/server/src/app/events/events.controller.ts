import { Controller, Get, Post, Body } from '@nestjs/common';
import { EventsService } from './events.service';
import { MyEvent } from '@angular-nestJS/shared';

// prefix optional- events
@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Post()
  createEvent(@Body() event: MyEvent) {
    return this.eventsService.create(event);
  }
}
