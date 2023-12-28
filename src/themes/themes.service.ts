import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Theme} from "./themes.model";
import {CreateThemeDto} from "./dto/create-theme.dto";
import * as uuid from 'uuid';
import {CategoriesService} from "../categories/categories.service";

@Injectable()
export class ThemesService {
    constructor(@InjectModel(Theme) private  themeRepository: typeof Theme,
                private categoryService: CategoriesService) {
    }

    async create(dto: CreateThemeDto) {
        const newId = uuid.v4()
        const theme = await this.themeRepository.create({...dto, id: newId})
        const category = await this.categoryService.getCategoryById(dto.categoryId)
        await theme.$set('categories', [category.id])
        theme.categories = []
        return theme
    }

    async getAllThemes() {
        const theme = await this.themeRepository.findAll();
        return theme;
    }
}
