import {Controller, Post, Body,} from '@nestjs/common';
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    createUser(@Body() data){
        try {
            const res = this.authService.createOne(data)
            return res
        }
        catch (err){
            throw err
        }
    }




    @Post('login')
    async findUser(@Body() data){
        try {
            const res = await this.authService.findOne(data)
            if (res) {
                return res
            }
        }
        catch (err)
        {
            throw err
        }
    }
}
