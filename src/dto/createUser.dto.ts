import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(0, 255)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 255)
  password: string;
}
