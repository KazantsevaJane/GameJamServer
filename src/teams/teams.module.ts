import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/user.model";
import {Team} from "./teams.model";
import {UsersModule} from "../users/users.module";
import {TeamDist} from "../team-dist/team-dist.model";

@Module({
  controllers: [TeamsController],
  providers: [TeamsService],
  imports: [SequelizeModule.forFeature([Team, User, TeamDist]),
  UsersModule]
})
export class TeamsModule {}
