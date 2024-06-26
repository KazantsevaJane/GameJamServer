import { Injectable } from '@nestjs/common';
import {CreateGameDto} from "./dto/create-game.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Game} from "./game.model";
import {FilesService} from "../files/files.service";
import {UpdateGameDto} from "./dto/update-game.dto";

@Injectable()
export class GamesService {
    constructor(@InjectModel(Game) private gameRepository: typeof Game,
                private filesService: FilesService) {
    }
    async create(dto: CreateGameDto, file: any) {
        const fileName = await this.filesService.createFile(file);
        return await this.gameRepository.create({...dto, id: fileName});
    }

    async getAllGames(){
        const games = await this.gameRepository.findAll();
        return games;
    }

    async getGameById(id){
        return await this.gameRepository.findByPk(id)
    }

    async getGameByTeamId(teamid: string){
        return await this.gameRepository.findAll({where:{teamId: teamid}})
    }

    async putGameById(id, dto:UpdateGameDto){
        return await this.gameRepository.update(dto, {where: {id: id}})
    }

    async getGamesBySemesterId(semesterId){
        return await this.gameRepository.findAll({where: {semesterId: semesterId}})
    }

    async test(){
        return await this.filesService.test()
    }
}
