import { Module } from '@nestjs/common';
import { StatusesController } from './statuses.controller';
import { StatusesService } from './statuses.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Semester} from "../semesters/semesters.model";
import {Game} from "../games/game.model";
import {Status} from "./statuses.model";

@Module({
  controllers: [StatusesController],
  providers: [StatusesService],
  imports:[SequelizeModule.forFeature([Status, Game])],
  exports: []
})
export class StatusesModule {}
