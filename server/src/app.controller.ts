import { Controller, Get,Res,Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import {PrismaClient} from "../prisma/prisma-client";

@Controller()
export class AppController {
  private prisma
  constructor(private readonly appService: AppService) {
    this.prisma = new PrismaClient()
  }
  @Get()
  getHello(@Res() res) {
    res.json({message:'Hello'})
  }
  @Post()
  root(@Body() data){
    console.log(data)
    this.prisma.user.deleteMany({})
    return this.prisma.user.create({data})
  }

}
