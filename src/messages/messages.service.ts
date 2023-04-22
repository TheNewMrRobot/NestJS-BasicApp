import { Injectable } from '@nestjs/common';
import { MessageRepository } from './messages.repository';
@Injectable()
export class MessageService {
  constructor(public messageRepo: MessageRepository) {}
  // constructor() {
  //   // service creating the own dependency
  //   // DON'T DO THIS IN REAL APPS
  //   // Use Dependency Injection
  //   this.messageRepo = new MessageRepository();
  // }
  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }
  findAll() {
    return this.messageRepo.findAll();
  }
  createMessage(message: string) {
    return this.messageRepo.createMessage(message);
  }
}
