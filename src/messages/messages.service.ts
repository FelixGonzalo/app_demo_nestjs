import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from 'src/dto/createMessage.dto';
import MessageEntity from 'src/entities/message.entity';

@Injectable()
export class MessagesService {
  private readonly messages: MessageEntity[] = [];
  private cont = 1;

  create(data: CreateMessageDto): MessageEntity {
    const message = new MessageEntity();
    message.id = this.cont++;
    message.email = data.email;
    message.name = data.name;
    message.lastName = data.lastName;
    message.nick = data.nick;
    message.avatar = data.avatar;
    message.text = data.text;
    message.age = data.age;
    this.messages.push(message);
    return message;
  }

  findAll(): MessageEntity[] {
    return this.messages;
  }
}
