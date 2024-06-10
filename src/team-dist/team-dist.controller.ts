import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {TeamDistService} from "./team-dist.service";
import {DistPostDto} from "./dto/dist-post.dto";
import {DistAddroleDto} from "./dto/dist-addrole.dto";
import {GetroleDto} from "./dto/getrole.dto";

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
        return this.distService.getStudentsByTeamId(params.id)
    }


    @Get('/getrolebyusersemid')
    getrolebyusersemid(@Body() dto: GetroleDto){
        return this.distService.getRoleByUserSemId(dto.userId, dto.semesterId)
    }
}
