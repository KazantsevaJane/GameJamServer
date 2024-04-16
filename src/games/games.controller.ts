import {Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {CreateGameDto} from "./dto/create-game.dto";
import {GamesService} from "./games.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {rethrow} from "@nestjs/core/helpers/rethrow";

@Controller('api/games')
export class GamesController {

    constructor(private gamesService: GamesService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('file_name'))
    createGame(@Body() dto: CreateGameDto, @UploadedFile() file_name){
        const a = this.gamesService.create(dto, file_name)
        return a
    }

    @Get()
    getAll() {
        return this.gamesService.getAllGames();
    }

    @Get(':id')
    getGameById(@Param() params: any){
        return this.gamesService.getGameById(params.id)
    }
}
