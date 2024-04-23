import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {TeamDistService} from "./team-dist.service";
import {DistPostDto} from "./dto/dist-post.dto";

@Controller('team-dist')
export class TeamDistController {
    constructor(private distService: TeamDistService) {
    }

    @Post()
    createTeamDist(@Body() dto: DistPostDto){
        return this.distService.create(dto)
    }

    @Put(':id')
    putTeamDistById(@Param() params: any, @Body() dto: DistPostDto){
        return this.distService.putTeamDistById(params.id, dto)
    }


}
