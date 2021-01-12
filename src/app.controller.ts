import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('tasks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  listAll(): string {
    return 'list all';
  }

  @Get(':id')
  getTask(@Param('id') id: string): string {
    return `get task with ${id}`;
  }

  @Post()
  createTask(@Body() taskDetails: any): string {
    return `create task with ${taskDetails}`;
  }

  @Put(':id')
  updateTask(@Param('id') id: string): string {
    return `update task with ${id}`;
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): string {
    return `delete task with ${id}`;
  }
}
