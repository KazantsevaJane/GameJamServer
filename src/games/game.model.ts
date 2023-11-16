import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Semester} from "../semesters/semesters.model";

interface GameCreationAttrs{
    id: string
    team_id: string
    name: string;
    semesterId: number;
    category: number;
    theme: number;
    rating: number;
    status: number;
    shortDescription: string;
    playDescription: string;
    gitHubLink: string;
}

@Table({tableName:'games'})
export class Game extends Model<Game, GameCreationAttrs>{
    @Column({type: DataType.STRING, unique:true, primaryKey:true})
    id: number;
    @Column({type: DataType.STRING})
    team_id: string
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
    status: number;
    @Column({type: DataType.STRING})
    shortDescription: string;
    @Column({type: DataType.STRING})
    playDescription: string;
    @Column({type: DataType.STRING})
    gitHubLink: string;

}