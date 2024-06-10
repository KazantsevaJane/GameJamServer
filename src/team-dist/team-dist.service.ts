import { Injectable } from '@nestjs/common';
import {TeamDist} from "./team-dist.model";
import {InjectModel} from "@nestjs/sequelize";
import {DistPostDto} from "./dto/dist-post.dto";
import {Op, where} from "sequelize";
import {User} from "../users/user.model";
import * as uuid from 'uuid';
import {DistAddroleDto} from "./dto/dist-addrole.dto";
import {AddstudentsDto} from "./dto/addstudents.dto";
import {UsersService} from "../users/users.service";
import {GamesService} from "../games/games.service";
import {TeamRolesService} from "../team-roles/team-roles.service";


@Injectable()
export class TeamDistService {
    constructor(@InjectModel(TeamDist) private teamDistRepository: typeof TeamDist,
                private usersService: UsersService,
                private gameService: GamesService,
                private teamRoleService: TeamRolesService) {
    }

    async create(dto: DistAddroleDto){
        const isDist = await this.getRoleByUserSemId(dto.userId, dto.semesterId)
        console.log(isDist)
        if (isDist.length > 0) {
            return await  this.updateRole(dto)
        }
        else {
            return await this.teamDistRepository.create(dto)
        }
    }

    async getAllDist(){
        return await this.teamDistRepository.findAll()
    }

    async putTeamDistById(id, dto:DistPostDto){
        return await this.teamDistRepository.update(dto, {where: {id: id}})
    }

    async getRoleByUserSemId(userId, semId){
        return await this.teamDistRepository.findAll({where: {[Op.and]: [{userId: userId}, {semesterId: semId}]}})
    }

    async putTeamIdForStudents(dto: AddstudentsDto){
        for (let studentId of dto.studentsIds){
            await this.teamDistRepository.update({teamId: dto.teamId},{where: {[Op.and]: [{userId: studentId}, {semesterId: dto.semesterId}]}})
        }
    }

    async updateRole(dto: DistAddroleDto){
        return this.teamDistRepository.update({roleId: dto.roleId},{where: {[Op.and]: [{userId: dto.userId}, {semesterId: dto.semesterId}]}})
    }

    async getAllStudentsByTeamId(teamId: string){
        const dists = await this.teamDistRepository.findAll({where: {teamId: teamId}})
        const result = []
        for (let dist of dists){
            const user = await this.usersService.getUserById(dist.userId)
            const role = await this.teamRoleService.getTeamRoleById(dist.roleId)
            result.push({teamRole: role.name, user})
        }
        return result
    }
    async getProjectByUserSemId(userId, semId){
        const dist = await this.getRoleByUserSemId(userId, semId)
        return await this.gameService.getGameByTeamId(dist[0].teamId)
    }
}