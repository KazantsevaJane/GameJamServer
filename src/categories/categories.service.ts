import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Category} from "./categories.model";
import {CreateCategoryDto} from "./dto/create-category.dto";
import * as uuid from 'uuid';
import {Theme} from "../themes/themes.model";

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category) private categoryRepository: typeof Category) {
    }

    async create(dto: CreateCategoryDto) {
        const newId = uuid.v4()
        const category = await this.categoryRepository.create({...dto, id: newId})
        return category
    }

    async getAllCategories() {
        const category = await this.categoryRepository.findAll({include: Theme});
        return category;
    }

    async getCategoryById(id){
        const category = await this.categoryRepository.findByPk(id)
        return category
    }
}
