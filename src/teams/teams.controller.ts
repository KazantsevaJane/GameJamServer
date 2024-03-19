import {Body, Controller, Get, Post} from '@nestjs/common';
import {TeamsService} from "./teams.service";
import {TeamsCreateDto} from "./dto/teams-create.dto";

@Controller('api/teams')
export class TeamsController {
    constructor(private teamService: TeamsService) {
    }

    @Post()
    createTeam(@Body() dto: TeamsCreateDto){
        return this.teamService.create(dto)
    }

    @Get()
    getAllTeam(){
        return this.teamService.getAllTeam()
    }
}
