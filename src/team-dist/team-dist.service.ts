import { Injectable } from '@nestjs/common';
import {TeamDist} from "./team-dist.model";
import {InjectModel} from "@nestjs/sequelize";
import {DistPostDto} from "./dto/dist-post.dto";
import {Op, where} from "sequelize";
import {User} from "../users/user.model";
import * as uuid from 'uuid';
import {DistAddroleDto} from "./dto/dist-addrole.dto";


@Injectable()
export class TeamDistService {
    constructor(@InjectModel(TeamDist) private teamDistRepository: typeof TeamDist) {
    }

    async create(dto: DistAddroleDto){
        return await this.teamDistRepository.create(dto)
    }

    async getAllDist(){
        return await this.teamDistRepository.findAll()
    }

    async putTeamDistById(id, dto:DistPostDto){
        return await this.teamDistRepository.update(dto, {where: {id: id}})
    }
    async getStudentsByTeamId(teamId){
        return await this.teamDistRepository.findAll({where: {id: teamId}})
    }
    async getRoleByUserSemId(userId, semId){
        return await this.teamDistRepository.findAll({where: {[Op.and]: [{userId: userId}, {semesterId: semId}]}})
    }
}