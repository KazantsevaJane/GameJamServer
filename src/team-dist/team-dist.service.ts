import { Injectable } from '@nestjs/common';
import {TeamDist} from "./team-dist.model";
import {InjectModel} from "@nestjs/sequelize";
import {DistPostDto} from "./dto/dist-post.dto";
import {where} from "sequelize";
import {User} from "../users/user.model";
import * as uuid from 'uuid';
import {RoleTeamDist} from "./role-team-dist.model";

@Injectable()
export class TeamDistService {
    constructor(@InjectModel(TeamDist) private teamDistRepository: typeof TeamDist,
                @InjectModel(RoleTeamDist) private roleTeamDistRepository: typeof RoleTeamDist) {
    }

    async create(dto: DistPostDto){
        const createamdist = {teamId: dto.teamId,
            userId: dto.userId}
        const teamdist =  await this.teamDistRepository.create(createamdist)
        return await this.roleTeamDistRepository.create({teamRoleId: dto.teamRoleId, teamDistId: teamdist.id})
    }

    async getAllDist(){
        return await this.teamDistRepository.findAll()
    }

    async putTeamDistById(id, dto:DistPostDto){
        return await this.teamDistRepository.update(dto, {where: {id: id}})
    }

}
