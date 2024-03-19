import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Team} from "./teams.model";
import {TeamsCreateDto} from "./dto/teams-create.dto";
import * as uuid from 'uuid';

@Injectable()
export class TeamsService {
    constructor(@InjectModel(Team) private teamRepository: typeof Team) {
    }

    async create(dto: TeamsCreateDto) {
        const teamId = uuid.v4();
        return await this.teamRepository.create({...dto, id: teamId});
    }

    async getAllTeam(){
        return await this.teamRepository.findAll();
    }
}
