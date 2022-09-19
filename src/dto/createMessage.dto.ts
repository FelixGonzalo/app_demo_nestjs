import { IsEmail, IsInt, IsNotEmpty, Length, Min } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  @Length(0, 255)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(0, 255)
  name: string;

  @IsNotEmpty()
  @Length(0, 255)
  lastName: string;

  @IsNotEmpty()
  @Length(0, 255)
  nick: string;

  @IsNotEmpty()
  @Length(0, 255)
  avatar: string;

  @IsNotEmpty()
  @Length(0, 255)
  text: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  age: number;
}
