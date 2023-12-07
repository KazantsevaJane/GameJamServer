import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Game} from "../games/game.model";

interface SemestersCreationAttrs {
    id: string
    name: string
}

@Table({tableName: 'semesters'})
export class Semester extends Model<Semester, SemestersCreationAttrs> {
    @Column({type: DataType.STRING, unique:true, primaryKey:true})
    id: string;
    @Column({type: DataType.STRING})
    name:string;
    @HasMany(()=> Game)
    games: Game[]
}