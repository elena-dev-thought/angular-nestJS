import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { MyEvent } from '@angular-nestJS/shared';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable()
export class EventsService {
  constructor(
    @Inject('EventModel')
    private readonly eventModel: Model<Event>
  ) {}

  async create(createEventDto: MyEvent): Promise<MyEvent> {
    return await this.eventModel.create(createEventDto);
  }

  async findAll(): Promise<MyEvent[]> {
    return await this.eventModel.find({}).exec();
  }
}
