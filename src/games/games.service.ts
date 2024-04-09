import { Injectable } from '@nestjs/common';
import {CreateGameDto} from "./dto/create-game.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Game} from "./game.model";
import {FilesService} from "../files/files.service";

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
}
