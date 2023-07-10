import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoSchema } from './todo.model';
const url =
  'mongodb+srv://sohanur653:xEOCeD8sKE6bbwHT@cluster0.gmtdmww.mongodb.net/nest?retryWrites=true&w=majority';
@Module({
  imports: [
    MongooseModule.forRoot(url),
    MongooseModule.forFeature([{ name: 'todo', schema: TodoSchema }]),
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
