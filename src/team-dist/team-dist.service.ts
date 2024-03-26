import { Injectable } from '@nestjs/common';
import {TeamDist} from "./team-dist.model";
import {InjectModel} from "@nestjs/sequelize";
import {DistCreateDto} from "./dto/dist-create.dto";
import {where} from "sequelize";
import {User} from "../users/user.model";

@Injectable()
export class TeamDistService {
    constructor(@InjectModel(TeamDist) private teamDistRepository: typeof TeamDist) {
    }

    async create(dto: DistCreateDto){
        return await this.teamDistRepository.create(dto)
    }

    async getAllDist(){
        return await this.teamDistRepository.findAll()
    }



}
