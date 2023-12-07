import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Game} from "./game.model";
import {FilesModule} from "../files/files.module";
import {SemestersModule} from "../semesters/semesters.module";
import {Semester} from "../semesters/semesters.model";
import {Status} from "../statuses/statuses.model";
import {StatusesModule} from "../statuses/statuses.module";
import {CategoriesModule} from "../categories/categories.module";
import {Category} from "../categories/categories.model";
import {UsersModule} from "../users/users.module";
import {User} from "../users/user.model";

@Module({
  controllers: [GamesController],
  providers: [GamesService],
  imports: [
      SequelizeModule.forFeature([Game, Semester, Status, Category, User]),
      FilesModule,
      SemestersModule,
      StatusesModule,
      CategoriesModule,
      UsersModule
  ]
})
export class GamesModule {}
