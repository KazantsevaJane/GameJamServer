import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Game} from "../games/game.model";

interface SemestersCreationAttrs {
    name: string
}

@Table({tableName: 'semesters'})
export class Semester extends Model<Semester, SemestersCreationAttrs> {
    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
    id: number;
    @Column({type: DataType.STRING})
    name:string;
    @HasMany(()=> Game)
    games: Game[]
}