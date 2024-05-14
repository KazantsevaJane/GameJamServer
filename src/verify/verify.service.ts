import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Verify} from "./verify.model";
import {CreateVerifyDto} from "./dto/create-verify.dto";
import {where} from "sequelize";

@Injectable()
export class VerifyService {
    constructor(@InjectModel(Verify) private verifyRepository: typeof Verify) {
    }


    async create(dto: CreateVerifyDto){
        return await this.verifyRepository.create(dto)
    }

    async getVerifyByUserId(id) {
        return await this.verifyRepository.findOne({where: {userId: id}})
    }
}
