import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {TeamDistService} from "./team-dist.service";
import {DistCreateDto} from "./dto/dist-create.dto";

@Controller('team-dist')
export class TeamDistController {
    constructor(private distService: TeamDistService) {
    }

    @Post()
    createTeamDist(@Body() dto: DistCreateDto){
        return this.distService.create(dto)
    }



}
