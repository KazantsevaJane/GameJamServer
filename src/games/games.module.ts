import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Game} from "./game.model";
import {FilesModule} from "../files/files.module";
import {SemestersModule} from "../semesters/semesters.module";
import {Semester} from "../semesters/semesters.model";

@Module({
  controllers: [GamesController],
  providers: [GamesService],
  imports: [
      SequelizeModule.forFeature([Game, Semester]),
      FilesModule,
      SemestersModule
  ]
})
export class GamesModule {}
