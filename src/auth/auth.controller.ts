import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/createUser.dto';
import UserEntity from 'src/entities/user.entity';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.authService.register(createUserDto);
  }

  @Post('/login')
  async login(@Body() createUserDto: CreateUserDto) {
    return this.authService.login(createUserDto);
  }

  @Get('/users')
  async findAll(): Promise<UserEntity[]> {
    return this.authService.findAll();
  }
}
