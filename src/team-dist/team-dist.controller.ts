import {Body, Controller, Get, Param, Post} from '@nestjs/common';
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



}
