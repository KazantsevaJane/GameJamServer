import { Module } from '@nestjs/common';
import {TeamRolesController} from "./team-roles.controller";
import {TeamRolesService} from "./team-roles.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {TeamRole} from "./team-roles.model";
import {User} from "../users/user.model";
import {UsersModule} from "../users/users.module";
import {TeamDist} from "../team-dist/team-dist.model";
import {Team} from "../teams/teams.model";
import {TeamsModule} from "../teams/teams.module";


@Module({
    controllers: [TeamRolesController],
    providers: [TeamRolesService],
    imports: [SequelizeModule.forFeature([TeamRole, User, TeamDist, Team]),
    UsersModule,
    TeamsModule]
})
export class TeamRolesModule {}
