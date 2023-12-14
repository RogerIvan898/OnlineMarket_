import { Injectable } from '@nestjs/common';
import {PrismaClient, Product} from "../../prisma/prisma-client";


@Injectable()
export class ProductsService {
    private prisma:PrismaClient = new PrismaClient()



    async create(data){
       return this.prisma.product.create({data})
    }
    async findMany(){

       return this.prisma.product.findMany()
    }
    async findOne(data){
        return this.prisma.product.findFirst({where:{title:{contains:data.title}}})
    }
}
