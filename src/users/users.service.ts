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
}
