import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { log } from 'console';
import { CreateMessageDto } from './DTO/create-message.dto';

// we added it in global level we can remove in method level
@Controller('/messages')
export class MessagesController {
  @Get()
  listMessage() {
    return 'HELLO';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    log(id);
  }
}
