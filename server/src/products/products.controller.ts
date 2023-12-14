import {Body, Controller, Get, Post} from '@nestjs/common';
import {ProductsService} from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService:ProductsService) {}

    @Get()
    async createAndFind(){
         return await this.productsService.findMany()
    }
    @Post()
    async findOne(@Body() title:string){

        return await this.productsService.findOne(title)
    }

}
