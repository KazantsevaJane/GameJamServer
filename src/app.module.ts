import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SequelizeModule} from "@nestjs/sequelize";
import { GamesModule } from './games/games.module';
import {Game} from "./games/game.model";
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import { SemestersModule } from './semesters/semesters.module';
import { StatusesModule } from './statuses/statuses.module';
import { CategoriesModule } from './categories/categories.module';
import * as path from "path";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
      ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'test',
      models: [Game],
      autoLoadModels: true
    }),
    GamesModule,
    FilesModule,
    SemestersModule,
    StatusesModule,
    CategoriesModule,
  ]
})
export class AppModule {}
