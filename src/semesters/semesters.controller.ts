import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {SemestersService} from "./semesters.service";
import {CreateSemesterDto} from "./dto/create-semester.dto";

@Controller('semesters')
export class SemestersController {
    constructor(private semesterService: SemestersService) {
    }
    @Post()
    createSemester(@Body() dto: CreateSemesterDto){
        return this.semesterService.create(dto)
    }

    @Get()
    getAll(){
        return this.semesterService.getAllSemesters()
    }

    @Get(':id')
    getSemesterById(@Param() params: any){
        return this.semesterService.getSemesterById(params.id)
    }
}
