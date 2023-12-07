import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Game} from "../games/game.model";

interface ThemesCreationAttrs{
    id: string
    name:string
}

@Table({tableName: 'themes'})
export class Theme extends Model<Theme, ThemesCreationAttrs>{
    @Column({type: DataType.STRING, unique:true, primaryKey:true})
    id: string;
    @Column({type: DataType.STRING})
    name:string;
    @HasMany(()=> Game)
    games: Game[]
}