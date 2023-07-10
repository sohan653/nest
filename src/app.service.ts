import { Injectable } from '@nestjs/common';
import { Todo, TodoDocument } from './todo.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

 
@Injectable()
export class AppService {
  constructor(
    @InjectModel('todo') private readonly todoModel: Model<TodoDocument>
  ){}

  //  create 
  async createTodo(todo: Todo): Promise<Todo>{
     const newTodo = new this.todoModel(todo)
     return newTodo.save()
  }

  //  read
  async readTodo(){
    return this.todoModel.find({})
    .then((todo)=>{return todo})
    .catch((err)=>console.log(err))
  }

  // upadate
  async updateTodo(id,data):Promise<Todo>{
    return this.todoModel.findByIdAndUpdate(id,data,{new:true})
  }

  // delete
  async deleteTodo(id){
    return this.todoModel.findByIdAndRemove(id)
  }
}
