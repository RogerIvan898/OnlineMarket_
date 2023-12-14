import {Body, Controller, Param, Put, Get, Post} from '@nestjs/common';
import {CartService} from "./cart.service";

@Controller('cart')
export class CartController {
    constructor(private readonly cartService:CartService) {}

    @Put(':id')
    addOneItem(@Body() content, @Param() param){
        return this.cartService.addOneProduct(content,param.id)
    }
    @Get(':id')
    findManyCartProducts(@Param() param){
        return this.cartService.findAllCartProducts(param.id)
    }
}
