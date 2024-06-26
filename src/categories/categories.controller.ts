import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CategoriesService} from "./categories.service";
import {CreateCategoryDto} from "./dto/create-category.dto";

@Controller('categories')
export class CategoriesController {
    constructor(private categoryService: CategoriesService) {
    }

    @Post()
    createCategory(@Body() dto: CreateCategoryDto){
        return this.categoryService.create(dto)
    }

    @Get()
    getAll(){
        return this.categoryService.getAllCategories()
    }

    @Get(':id')
    getCategoriesById(@Param() params: any){
        return this.categoryService.getCategoryById(params.id)
    }
}
