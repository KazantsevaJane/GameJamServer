import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Game} from "../games/game.model";
import {FilesModule} from "../files/files.module";
import {SemestersModule} from "../semesters/semesters.module";
import {Category} from "./categories.model";
import {Theme} from "../themes/themes.model";
import {CategoryThemes} from "../themes/categorythemes.model";

@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController],
  imports: [
    SequelizeModule.forFeature([Game, Category, Theme, CategoryThemes]),
    FilesModule,
    CategoriesModule,
  ],
  exports: []
})
export class CategoriesModule {}
