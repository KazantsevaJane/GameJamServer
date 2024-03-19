import {Body, Controller, Get, Post} from '@nestjs/common';
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

    @Get()
    getAllTeamDist(){
        return this.distService.getStudentsByTeamId('b15d5d4b-fd78-4d3b-9b11-869da7922355')
    }

}
