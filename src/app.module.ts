import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TaskModule, MongooseModule.forRoot('mongodb://localhost/nestdB')],
})
export class AppModule {}
