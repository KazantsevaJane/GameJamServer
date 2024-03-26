import {Body, Controller, Get, Param, Post} from '@nestjs/common';
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

    @Get(':id')
    getAllTeamDist(@Param() params: any){
        return this.teamService.getStudentsByTeamId(params.id)
    }
}
