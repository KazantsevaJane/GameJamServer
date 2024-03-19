import {Body, Controller, Get, Post} from '@nestjs/common';
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
}
