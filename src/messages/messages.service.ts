import { MessageRepository } from './messages.repository';

export class MessageService {
  messageRepo: MessageRepository;
  constructor() {
    // service creating the own dependency
    this.messageRepo = new MessageRepository();
  }
}
