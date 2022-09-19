import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';

import { getEnvPath } from './common/helper/env.helper';
import { MessagesModule } from './messages/messages.module';
import { SystemModule } from './system/system.module';
import { RandomModule } from './random/random.module';
import { AuthModule } from './auth/auth.module';
const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    ProductsModule,
    MessagesModule,
    SystemModule,
    RandomModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
