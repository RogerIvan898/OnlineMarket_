import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {PrismaClient} from "../../prisma/prisma-client";
const bcrypt = require('bcrypt')

@Injectable()
export class AuthService {
    private salt = bcrypt.genSaltSync(10)
    private prisma:PrismaClient = new PrismaClient()

    async createOne(data){
        let isSuccess:boolean = true
        const user = await this.prisma.user.findFirst({where:{email:{contains:data.email}}})

        if(user) {
            isSuccess = false
        }

        if(isSuccess){
            data.password = await bcrypt.hash(data.password,this.salt)
            const newUser = await this.prisma.user.create({data})
            await this.prisma.cart.create({data:{userId:newUser.id}})
        }
        else {
            throw new HttpException({res:'Bad request'},HttpStatus.BAD_REQUEST)
        }
    }


   async findOne(data){
        const user = await this.prisma.user.findFirst({where:{email:{contains:data.email}}})


        if (user){
            const isValid = await bcrypt.compare(data.password,user.password)

            if(isValid){
                return user
            }
            else {
                throw new HttpException({res:'Bad request'},HttpStatus.BAD_REQUEST)
            }
        }
        else {
            throw new HttpException({res:'Bad request'},HttpStatus.BAD_REQUEST)
        }

    }
}
