import {Body, Controller, Get, Param, Patch, Post, Put, Query} from '@nestjs/common';
import {TeamDistService} from "./team-dist.service";
import {DistPostDto} from "./dto/dist-post.dto";
import {DistAddroleDto} from "./dto/dist-addrole.dto";
import {GetroleDto} from "./dto/getrole.dto";
import {AddstudentsDto} from "./dto/addstudents.dto";

@Controller('team-dist')
export class TeamDistController {
    constructor(private distService: TeamDistService) {
    }

    @Post()
    createTeamDist(@Body() dto: DistAddroleDto){
        return this.distService.create(dto)
    }

    @Put(':id')
    putTeamDistById(@Param() params: any, @Body() dto: DistPostDto){
        return this.distService.putTeamDistById(params.id, dto)
    }

    @Get('/getteam/:id')
    getAllStudentInTeamById(@Param() params: any){
        return this.distService.getAllStudentsByTeamId(params.id)
    }

    @Get('/getrolebyusersemid')
    getrolebyusersemid(
        @Query('userId') userId: string,
        @Query('semesterId') semesterId: string
    ){
        return this.distService.getRoleByUserSemId(userId, semesterId)
    }

    @Patch('/addTeamIdForStudents')
    putTeamIdForStudents(@Body() dto: AddstudentsDto){
        return this.distService.putTeamIdForStudents(dto)
    }

    @Get('/getProjectByUserSemId')
    getProjectByUserSemId(
        @Query('userId') userId: string,
        @Query('semesterId') semesterId: string
    ){
        return this.distService.getProjectByUserSemId(userId, semesterId)
    }
}
