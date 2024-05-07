import {Body, HttpException, HttpStatus, Injectable, Post, UnauthorizedException} from '@nestjs/common';
import {LoginUserDto} from "../users/dto/login-user.dto";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bycrypt from 'bcryptjs'
import {ChangePasswordDto} from "../users/dto/change-passwrd.dto";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
                private jwtService: JwtService) {
    }
    async login(loginUserDto: LoginUserDto){
        const user = await this.validateUser(loginUserDto)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto){
        const candidate = await this.usersService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bycrypt.hash(userDto.password, 5)
        const user = await this.usersService.create({...userDto, password:hashPassword})
        return this.generateToken(user)
    }

    private async generateToken(user){
        const payload = {email: user.email, id: user.id}
        return {
            token: this.jwtService.sign(payload),
            user: user
        }
    }

    private async validateUser(loginUserDto: LoginUserDto){
        const user = await this.usersService.getUserByEmail(loginUserDto.email)
        const passwordEquals = await bycrypt.compare(loginUserDto.password, user.password)
        if (user && passwordEquals) {
            return user
        }
        throw new UnauthorizedException({message: 'Некорректный email или пароль'})
    }

    async changePassword(changePasswordDto:ChangePasswordDto){
        const user = await this.usersService.getUserById(changePasswordDto.id)
        const passwordEquals = await bycrypt.compare(changePasswordDto.password, user.password)
        if (user && passwordEquals) {
            const hashPassword = await bycrypt.hash(changePasswordDto.newPassword, 5)
            return this.usersService.changePassword(changePasswordDto.id, hashPassword)
        }
    }
}
