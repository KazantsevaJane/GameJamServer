import {Body, Controller, Patch, Post} from '@nestjs/common';
import {LoginUserDto} from "../users/dto/login-user.dto";
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {ChangePasswordDto} from "../users/dto/change-passwrd.dto";

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

    @Patch('/changepsw')
    changePassword(@Body() changePasswordDto: ChangePasswordDto){
        return this.authService.changePassword(changePasswordDto)
    }
}
