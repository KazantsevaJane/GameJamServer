import {Body, Controller, Get, Param, Post, Put, UploadedFile, UseInterceptors} from '@nestjs/common';
import {CreateGameDto} from "./dto/create-game.dto";
import {GamesService} from "./games.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {rethrow} from "@nestjs/core/helpers/rethrow";
import {UpdateGameDto} from "./dto/update-game.dto";

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

    @Put(':id')
    putGameById(@Param() params: any, @Body() dto: UpdateGameDto){
        return this.gamesService.putGameById(params.id, dto)
    }

    @Get('bysemester/:id')
    getGamesBySemester(@Param() params: any){
        return this.gamesService.getGamesBySemesterId(params.id)
    }
}
