import {Body, Controller, Post} from '@nestjs/common';
import {LoginUserDto} from "../users/dto/login-user.dto";
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../users/dto/create-user.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }
    @Post('/login')
    login(@Body() loginUserDto: LoginUserDto){
        return this.authService.login(loginUserDto)
    }

    @Post('/register')
    registration(@Body() userDto: CreateUserDto){
        return this.authService.registration(userDto)
    }
}
