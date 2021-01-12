import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './validation.pipe';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './schemas/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers: [
    TaskService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class TaskModule {}
