import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Category} from "./categories.model";
import {CreateCategoryDto} from "./dto/create-category.dto";
import * as uuid from 'uuid';

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
        const category = await this.categoryRepository.findAll({include: {all: true, nested: true}});
        return category;
    }
}
