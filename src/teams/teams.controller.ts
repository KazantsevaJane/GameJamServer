import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
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

    @Get('students/:id')
    getTeamById(@Param() params: any){
        return this.teamService.getTeamById(params.id)
    }

    @Get('students/:id')
    getStudentsByTeamId(@Param() params: any){
        return this.teamService.getStudentsByTeamId(params.id)
    }

    @Put(':id')
    putTeamById(@Param() params:any, @Body() dto:TeamsCreateDto){
        return this.teamService.putTeamById(params.id, dto)
    }
}
