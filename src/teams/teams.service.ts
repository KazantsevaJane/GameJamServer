import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Team} from "./teams.model";
import {TeamsCreateDto} from "./dto/teams-create.dto";
import * as uuid from 'uuid';
import {User} from "../users/user.model";
import sequelize from "sequelize";
import {TeamRole} from "../team-roles/team-roles.model";
import {TeamDist} from "../team-dist/team-dist.model";


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

    async getStudentsByTeamId(teamId){
        return await this.teamRepository.findAll({
            where: {id: teamId},
            include: [
                {
                model: User,
                through: {
                    attributes: []
                },
                attributes: ['id', 'name', 'surname', 'academicGroup']
            }],
            attributes: ['id', 'name']
        })
    }
}
