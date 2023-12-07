import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Game} from "../games/game.model";
import {FilesModule} from "../files/files.module";
import {SemestersModule} from "../semesters/semesters.module";
import {Category} from "./categories.model";

@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController],
  imports: [
    SequelizeModule.forFeature([Game, Category]),
    FilesModule,
    CategoriesModule,
  ],
  exports: []
})
export class CategoriesModule {}
