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
import {ConfigModule} from "@nestjs/config";
import { TeamsModule } from './teams/teams.module';
import { TeamRolesController } from './team-roles/team-roles.controller';
import { TeamRolesService } from './team-roles/team-roles.service';
import { TeamRolesModule } from './team-roles/team-roles.module';
import * as process from "process";
import {TeamRole} from "./team-roles/team-roles.model";
import { TeamDistModule } from './team-dist/team-dist.module';
import {TeamDist} from "./team-dist/team-dist.model";
import {Team} from "./teams/teams.model";
import {RoleTeamDist} from "./team-dist/role-team-dist.model";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
      ConfigModule.forRoot({
        envFilePath: '.env'
      }),
      ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: "test",
      models: [Game, CategoryThemes, User, Semester, Status, Category, Theme, CategoryThemes, TeamRole, TeamDist, Team, RoleTeamDist], //Возможно имеет смысл прописать сюда все модели
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
    TeamsModule,
    TeamRolesModule,
    TeamDistModule,
  ]
})
export class AppModule {}
