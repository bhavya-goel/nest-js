import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task as TaskEntity } from './entities/task.entity';
import { TaskDocument, Task } from './schemas/task.schema';

@Injectable()
export class TaskService {
  private tasks: TaskEntity[] = [];
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  create(createTaskDto: CreateTaskDto) {
    const id = Types.ObjectId();
    const task = {
      _id: id,
      id,
      ...createTaskDto,
    };
    const newTask = new this.taskModel(task);
    return newTask.save();
  }

  findAll() {
    return this.taskModel.find().lean();
  }

  findOne(id: string) {
    const res = this.taskModel.findOne({ id }).lean();
    return res;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskModel
      .findOneAndUpdate({ id }, updateTaskDto, {
        new: true,
      })
  }

  remove(id: string) {
    return this.taskModel.deleteOne({ _id: id });
  }
}
