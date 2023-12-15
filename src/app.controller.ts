import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
export class AppController {
  @Get('/abc')
  getRootRoute() {
    return 'hi there!';
  }

  @Get('/aff')
  getAff() {
    return 'aff';
  }
}
