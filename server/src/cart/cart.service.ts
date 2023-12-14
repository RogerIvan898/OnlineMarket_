import { Injectable } from '@nestjs/common';
import {PrismaClient} from "../../prisma/prisma-client";

@Injectable()
export class CartService {
    private prisma:PrismaClient = new PrismaClient()
    async addOneProduct(data,id){
        if(data) {
            const product = await this.prisma.product.findFirst({where: {title: {contains: data.content}}})
            let cartIdArray = id.split('')
            cartIdArray.splice(id.length-1,1)
            const cartId = Number(cartIdArray.join(''))
            console.log(id,cartId)

            const cartProduct = await this.prisma.cartProduct.findFirst({
                where: {
                    productId: {equals: product.id}, AND: {cartId: {equals: cartId}}
                }
            })

            if(cartProduct){
                await this.prisma.cartProduct.update({
                    where: {id:cartProduct.id},
                    data:{quantity:cartProduct.quantity+1}
                })
            } else {
                await this.prisma.cartProduct.create({
                    data: {
                        product: {connect: {id: product.id}},
                        quantity: 1,
                        cart: {connect: {id: cartId}}
                    }
                })
            }
        }

    }

    async findAllCartProducts(data){
        console.log(data)
       const cart = await this.prisma.cart.findFirst({where:{userId:{equals:data.id}}})
        if(cart){
           const cartProducts = await this.prisma.cartProduct.findMany({where:{cartId:{equals:cart.id}}})
            return cartProducts
        }
    }
}
