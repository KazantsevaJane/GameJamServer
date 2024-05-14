import { Module } from '@nestjs/common';
import { VerifyController } from './verify.controller';
import { VerifyService } from './verify.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/user.model";
import {Game} from "../games/game.model";
import {Semester} from "../semesters/semesters.model";
import {Status} from "../statuses/statuses.model";
import {Category} from "../categories/categories.model";
import {Team} from "../teams/teams.model";
import {TeamRole} from "../team-roles/team-roles.model";
import {TeamDist} from "../team-dist/team-dist.model";
import {RoleTeamDist} from "../team-dist/role-team-dist.model";
import {FilesModule} from "../files/files.module";
import {SemestersModule} from "../semesters/semesters.module";
import {StatusesModule} from "../statuses/statuses.module";
import {CategoriesModule} from "../categories/categories.module";

@Module({
  controllers: [VerifyController],
  imports: [
    SequelizeModule.forFeature([User, Game, Semester, Status, Category, Team, TeamRole, TeamDist, RoleTeamDist]),
    FilesModule,
    SemestersModule,
    StatusesModule,
    CategoriesModule,
  ],
  providers: [VerifyService]
})
export class VerifyModule {}
