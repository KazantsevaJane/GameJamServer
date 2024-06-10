import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Game} from "../games/game.model";
import {Semester} from "../semesters/semesters.model";
import {Status} from "../statuses/statuses.model";
import {Category} from "../categories/categories.model";
import {FilesModule} from "../files/files.module";
import {SemestersModule} from "../semesters/semesters.module";
import {StatusesModule} from "../statuses/statuses.module";
import {CategoriesModule} from "../categories/categories.module";
import {User} from "./user.model";
import {Team} from "../teams/teams.model";
import {TeamsModule} from "../teams/teams.module";
import {TeamRole} from "../team-roles/team-roles.model";
import {TeamDist} from "../team-dist/team-dist.model";


@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    SequelizeModule.forFeature([User, Game, Semester, Status, Category, Team, TeamRole, TeamDist]),
    FilesModule,
    SemestersModule,
    StatusesModule,
    CategoriesModule,
  ],
  exports: [UsersService]
})
export class UsersModule {}
