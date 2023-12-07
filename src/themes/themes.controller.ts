import {Body, Controller, Get, Post} from '@nestjs/common';
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
}
