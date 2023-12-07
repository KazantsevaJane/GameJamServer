import { Module } from '@nestjs/common';
import { ThemesService } from './themes.service';
import { ThemesController } from './themes.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Game} from "../games/game.model";
import {FilesModule} from "../files/files.module";
import {Theme} from "./temes.model";

@Module({
  providers: [ThemesService],
  controllers: [ThemesController],
  imports: [
    SequelizeModule.forFeature([Game, Theme]),
    FilesModule,
    ThemesModule,
  ]
})
export class ThemesModule {}
