# nestjs
import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';

@Controller()
export class AppController {
  @Get('/message')
  getMessage(): string {
    return 'This is the /message endpoint!';
  }
}

@Module({
  controllers: [AppController],
})
export class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();