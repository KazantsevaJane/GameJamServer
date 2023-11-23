import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Game} from "../games/game.model";

interface StatusesCreationAttrs{
    name: string
}


@Table({tableName:'statuses'})
export class Status extends Model<Status, StatusesCreationAttrs>{
    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
    id: number;
    @Column({type: DataType.STRING})
    name:string;
    @HasMany(()=> Game)
    games: Game[]
}