import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Semester} from "./semesters.model";
import {CreateSemesterDto} from "./dto/create-semester.dto";
import * as uuid from 'uuid';

@Injectable()
export class SemestersService {
    constructor(@InjectModel(Semester) private semesterRepository: typeof Semester) {
    }

    async create(dto: CreateSemesterDto) {
        const newId = uuid.v4()
        const semester = await this.semesterRepository.create({...dto, id: newId})
        return semester
    }

    async getAllSemesters() {
        const semesters = await this.semesterRepository.findAll({include: {all: true, nested: true}});
        return semesters;
    }

    async getSemesterById(id){
        return await this.semesterRepository.findByPk(id)
    }
}
