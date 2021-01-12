import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  description: string;

  @Prop({
    required: true,
    default: 'pending',
    enum: ['pending', 'running', 'done', 'cancelled'],
  })
  status: string;

  @Prop()
  id: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task)
  .index({ name: 1 }, { unique: true })
  .set('toObject', {
    transform: function (doc, ret) {
      (ret.id = ret._id), delete ret._id, delete ret._v;
      return ret;
    },
  });
