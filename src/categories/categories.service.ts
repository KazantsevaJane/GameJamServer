import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Category} from "./categories.model";
import {CreateCategoryDto} from "./dto/create-category.dto";

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category) private categoryRepository: typeof Category) {
    }

    async create(dto: CreateCategoryDto) {
        const category = await this.categoryRepository.create(dto)
        return category
    }

    async getAllCategories() {
        const category = await this.categoryRepository.findAll({include: {all: true, nested: true}});
        return category;
    }
}
