import { Controller,Body,Put,Delete, Get, Post,Param } from '@nestjs/common';
import { AppService } from './app.service';

import { Todo } from './todo.model';
import { TodoUpdateDto } from './todoUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createTodo(@Body() todo:Todo){
    return this.appService.createTodo(todo)
  }

  @Get()
  readTodo(){
    return this.appService.readTodo()
  }

  @Put(':id')
  async updateUser(
    @Param('id') id:string ,@Body() updateData:TodoUpdateDto
    ):Promise<Todo>{
    return this.appService.updateTodo(id,updateData)
  }
  
  @Delete('id')
  async deleteTodo(
    @Param('id') id:string
  ){
    return this.appService.deleteTodo(id)
  }
  
}
