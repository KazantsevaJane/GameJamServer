import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Semester} from "../semesters/semesters.model";
import {Status} from "../statuses/statuses.model";

interface GameCreationAttrs{
    id: string
    teamId: string
    name: string;
    semesterId: number;
    category: number;
    theme: number;
    rating: number;
    statusId: number;
    shortDescription: string;
    playDescription: string;
    gitHubLink: string;
}

@Table({tableName:'games'})
export class Game extends Model<Game, GameCreationAttrs>{
    @Column({type: DataType.STRING, unique:true, primaryKey:true})
    id: number;
    @Column({type: DataType.STRING})
    teamId: string
    @Column({type: DataType.STRING})
    name: string
    @Column({type: DataType.INTEGER})
    @ForeignKey(()=> Semester)
    semesterId: number;
    @Column({type: DataType.INTEGER})
    category: number;
    @Column({type: DataType.INTEGER})
    theme: number;
    @Column({type: DataType.INTEGER})
    rating: number;
    @Column({type: DataType.INTEGER})
    @ForeignKey(()=> Status)
    statusId: number;
    @Column({type: DataType.STRING})
    shortDescription: string;
    @Column({type: DataType.STRING})
    playDescription: string;
    @Column({type: DataType.STRING})
    gitHubLink: string;

}