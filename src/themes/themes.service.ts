import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Theme} from "./themes.model";
import {CreateThemeDto} from "./dto/create-theme.dto";
import * as uuid from 'uuid';

@Injectable()
export class ThemesService {
    constructor(@InjectModel(Theme) private  themeRepository: typeof Theme) {
    }

    async create(dto: CreateThemeDto) {
        const newId = uuid.v4()
        const theme = await this.themeRepository.create({...dto, id: newId})
        return theme
    }

    async getAllThemes() {
        const theme = await this.themeRepository.findAll({include: {all: true, nested: true}});
        return theme;
    }
}
