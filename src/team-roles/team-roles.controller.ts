import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {TeamRolesService} from "./team-roles.service";
import {TeamRoleCreateDto} from "./dto/team-role-create.dto";

@Controller('team-roles')
export class TeamRolesController {
    constructor(private teamRoleService: TeamRolesService) {
    }

    @Post()
    createTeamRole(@Body() dto: TeamRoleCreateDto){
        return this.teamRoleService.create(dto)
    }

    @Get()
    getAllTeamRole(){
        return this.teamRoleService.getAllTeam()
    }

    @Get(':id')
    getTeamRoleById(@Param() params: any){
        return this.teamRoleService.getTeamRoleById(params.id)
    }

    @Put(':id')
    putTeamRoleById(@Param() params: any, @Body() dto: TeamRoleCreateDto){
        return this.teamRoleService.putTeamRoleById(params.id, dto)
    }
}
