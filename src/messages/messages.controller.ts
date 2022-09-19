import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMessageDto } from 'src/dto/createMessage.dto';
import MessageEntity from 'src/entities/message.entity';
import { MessagesService } from './messages.service';

@Controller('api/messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async create(
    @Body() createMessageDto: CreateMessageDto,
  ): Promise<MessageEntity> {
    return this.messagesService.create(createMessageDto);
  }

  @Get()
  async findAll(): Promise<MessageEntity[]> {
    return this.messagesService.findAll();
  }
}
