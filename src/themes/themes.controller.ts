import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {ThemesService} from "./themes.service";
import {CreateThemeDto} from "./dto/create-theme.dto";


@Controller('themes')
export class ThemesController {
    constructor(private themeService: ThemesService) {
    }

    @Post()
    createTheme(@Body() dto: CreateThemeDto){
        return this.themeService.create(dto)
    }

    @Get()
    getAll(){
        return this.themeService.getAllThemes()
    }

    @Get(':id')
    getThemeById(@Param() params: any){
        return this.themeService.getThemesById(params.id)
    }

    @Put(':id')
    putThemeById(@Param() params: any, @Body() dto: CreateThemeDto){
        return this.themeService.putThemeById(params.id, dto)
    }
}
