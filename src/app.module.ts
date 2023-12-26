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
import { UsersModule } from './users/users.module';
import { ThemesModule } from './themes/themes.module';
import { AuthModule } from './auth/auth.module';
import * as path from "path";
import {CategoryThemes} from "./themes/categorythemes.model";
import {Semester} from "./semesters/semesters.model";
import {Status} from "./statuses/statuses.model";
import {Category} from "./categories/categories.model";
import {Theme} from "./themes/themes.model";
import {User} from "./users/user.model";

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
      models: [Game, CategoryThemes, User, Semester, Status, Category, Theme, CategoryThemes], //Возможно имеет смысл прописать сюда все модели
      autoLoadModels: true
    }),
    GamesModule,
    FilesModule,
    SemestersModule,
    StatusesModule,
    CategoriesModule,
    UsersModule,
    ThemesModule,
    AuthModule,
  ]
})
export class AppModule {}
