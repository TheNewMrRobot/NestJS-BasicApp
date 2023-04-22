import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { log } from 'console';
import { CreateMessageDto } from './DTO/create-message.dto';
import { MessageService } from './messages.service';

// we added it in global level we can remove in method level
@Controller('/messages')
export class MessagesController {
  constructor(public messageService: MessageService) {}
  // messageSrvc: MessageService
  // constructor(){
  //   this.messageSrvc = new MessageService();
  // }
  @Get()
  listMessage() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    log(body);
    return this.messageService.createMessage(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    log(id);
    const message = this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message Not Found')
    }
    return message;
  }
}
