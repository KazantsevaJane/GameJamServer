import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Game} from "./game.model";
import {FilesModule} from "../files/files.module";

@Module({
  controllers: [GamesController],
  providers: [GamesService],
  imports: [
      SequelizeModule.forFeature([Game]),
      FilesModule
  ]
})
export class GamesModule {}
