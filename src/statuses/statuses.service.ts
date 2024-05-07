import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Status} from "./statuses.model";
import * as uuid from 'uuid';
import {CreateStatusDto} from "./dto/create-status.dto";
import {User} from "../users/user.model";
import {Game} from "../games/game.model";

@Injectable()
export class StatusesService {
    constructor(@InjectModel(Status) private statusRepository: typeof Status) {
    }

    async create(dto: CreateStatusDto) {
        const newId = uuid.v4()
        const status = await this.statusRepository.create({...dto, id: newId})
        return status
    }

    async getAllStatuses(){
        const statuses = await this.statusRepository.findAll()
        return statuses
    }

    async getStatusById(id){
        return await this.statusRepository.findByPk(id)
    }

    async getGamesByStatusId(id){
        return await this.statusRepository.findByPk(id, {
            include: [
                {
                    model: Game
                }],
            attributes: ['id', 'name']
        });
    }

    async putStatusById(id, dto:CreateStatusDto){
        return await this.statusRepository.update(dto, {where: {id: id}})
    }
}
