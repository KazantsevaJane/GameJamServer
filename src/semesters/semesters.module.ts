import { Module } from '@nestjs/common';
import { SemestersService } from './semesters.service';
import { SemestersController } from './semesters.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Semester} from "./semesters.model";
import {Game} from "../games/game.model";

@Module({
  providers: [SemestersService],
  controllers: [SemestersController],
  imports:[SequelizeModule.forFeature([Semester, Game])],
  exports:[]
})
export class SemestersModule {}
