import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @Post()
    createUser(@Body() dto: CreateUserDto){
        return this.usersService.create(dto)
    }

    @Get()
    getAll(){
        return this.usersService.getAllUsers()
    }

    @Get(':id')
    getUserById(@Param() params: any){
        return this.usersService.getUserById(params.id)
    }

    @Put(':id')
    putUserById(@Param() params: any, @Body() dto: CreateUserDto){
        return this.usersService.putUserById(params.id, dto)
    }
}
