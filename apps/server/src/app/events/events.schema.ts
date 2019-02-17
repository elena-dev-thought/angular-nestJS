import * as mongoose from 'mongoose';

export const EventsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  }
});
