import { Module } from '@nestjs/common';
import { TeamDistController } from './team-dist.controller';
import { TeamDistService } from './team-dist.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Semester} from "../semesters/semesters.model";
import {User} from "../users/user.model";
import {SemestersModule} from "../semesters/semesters.module";
import {UsersModule} from "../users/users.module";
import {TeamDist} from "./team-dist.model";
import {Team} from "../teams/teams.model";
import {TeamsModule} from "../teams/teams.module";
import {TeamRole} from "../team-roles/team-roles.model";
import {TeamRolesModule} from "../team-roles/team-roles.module";

@Module({
  controllers: [TeamDistController],
  providers: [TeamDistService],
  imports: [
    SequelizeModule.forFeature([TeamDist, User, Team, TeamRole]),
    UsersModule,
    TeamsModule,
    TeamRolesModule
  ]
})
export class TeamDistModule {}
