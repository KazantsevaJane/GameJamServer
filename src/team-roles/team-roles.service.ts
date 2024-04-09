import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {TeamRole} from "./team-roles.model";
import {TeamRoleCreateDto} from "./dto/team-role-create.dto";
import * as uuid from 'uuid';

@Injectable()
export class TeamRolesService {
    constructor(@InjectModel(TeamRole) private teamRoleRepository: typeof TeamRole) {
    }

    async create(dto: TeamRoleCreateDto) {
        const roleId = uuid.v4();
        return await this.teamRoleRepository.create({...dto, id: roleId});
    }

    async getAllTeam(){
        return await this.teamRoleRepository.findAll();
    }

    async getTeamRoleById(id){
        return await this.teamRoleRepository.findByPk(id)
    }
}
