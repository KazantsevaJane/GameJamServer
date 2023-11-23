import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Status} from "./statuses.model";
import {CreateSemesterDto} from "../semesters/dto/create-semester.dto";

@Injectable()
export class StatusesService {
    constructor(@InjectModel(Status) private statusRepository: typeof Status) {
    }

    async create(dto: CreateSemesterDto) {
        const status = await this.statusRepository.create(dto)
        return status
    }

    async getAllStatuses(){
        const statuses = await this.statusRepository.findAll()
        return statuses
    }
}
