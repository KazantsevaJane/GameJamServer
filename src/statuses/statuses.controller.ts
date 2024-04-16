import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {StatusesService} from "./statuses.service";
import {CreateSemesterDto} from "../semesters/dto/create-semester.dto";
import {CreateStatusDto} from "./dto/create-status.dto";

@Controller('statuses')
export class StatusesController {
    constructor(private statusService: StatusesService) {
    }

    @Post()
    createStatus(@Body() dto: CreateStatusDto){
        return this.statusService.create(dto)
    }
    @Get()
    getAll(){
        return this.statusService.getAllStatuses()
    }

    @Get(':id')
    getStatusesById(@Param() params: any){
        return this.statusService.getStatusById(params.id)
    }

}
