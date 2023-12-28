import { Module } from '@nestjs/common';
import { ThemesService } from './themes.service';
import { ThemesController } from './themes.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Game} from "../games/game.model";
import {FilesModule} from "../files/files.module";
import {Theme} from "./themes.model";
import {CategoryThemes} from "./categorythemes.model";
import {Category} from "../categories/categories.model";
import {CategoriesModule} from "../categories/categories.module";

@Module({
  providers: [ThemesService],
  controllers: [ThemesController],
  imports: [
    SequelizeModule.forFeature([Game, Theme, Category, CategoryThemes]),
    FilesModule,
    ThemesModule,
    CategoriesModule
  ]
})
export class ThemesModule {}
