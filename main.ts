import { Controller, Get, Module } from "@nestjs/common";

@Controller()
class AppController {
  @Get()
  getRootRouter() {
    return "Hi there";
  }
}
