import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./user.model";
import {CreateUserDto} from "./dto/create-user.dto";
import * as uuid from 'uuid';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository:typeof User) {
    }

    async create(dto: CreateUserDto){
        const newId = uuid.v4()
        return await this.userRepository.create({...dto, id: newId})
    }

    async getAllUsers() {
        return await this.userRepository.findAll()
    }

    async getUserByEmail(email: string){
        const user = await this.userRepository.findOne({where: {email}, include:{all:true}})
        return user
    }

    async getUserById(id){
        return await this.userRepository.findByPk(id)
    }

    async putUserById(id, dto:CreateUserDto){
        return await this.userRepository.update(dto, {where: {id: id}})
    }

    async changePassword(id, newPassword){
        return await this.userRepository.update({password: newPassword}, {where: {id: id}})
    }
}
