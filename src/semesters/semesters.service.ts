import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Semester} from "./semesters.model";
import {CreateSemesterDto} from "./dto/create-semester.dto";

@Injectable()
export class SemestersService {
    constructor(@InjectModel(Semester) private semesterRepository: typeof Semester) {
    }

    async create(dto: CreateSemesterDto) {
        const semester = await this.semesterRepository.create(dto)
        return semester
    }

    async getAllSemesters() {
        const semesters = await this.semesterRepository.findAll({include: {all: true, nested: true}});
        return semesters;
    }
}
