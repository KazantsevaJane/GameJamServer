import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Status} from "./statuses.model";
import * as uuid from 'uuid';
import {CreateStatusDto} from "./dto/create-status.dto";

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

    async putStatusById(id, dto:CreateStatusDto){
        return await this.statusRepository.update(dto, {where: {id: id}})
    }
}
