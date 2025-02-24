import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log("Hola mundo")
    return `${this.appService.getHello()} - from the controller`;
  }

  @Get('products')
  getProducts(): string {
    return 'Lista de productos';
  }
}
