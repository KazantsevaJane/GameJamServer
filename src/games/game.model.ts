import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Semester} from "../semesters/semesters.model";
import {Status} from "../statuses/statuses.model";
import {Category} from "../categories/categories.model";

interface GameCreationAttrs{
    id: string
    teamId: string;
    name: string;
    semesterId: string;
    categoryId: string;
    theme: string;
    rating: number;
    statusId: string;
    shortDescription: string;
    playDescription: string;
    gitHubLink: string;
}

@Table({tableName:'games'})
export class Game extends Model<Game, GameCreationAttrs>{
    @Column({type: DataType.STRING, unique:true, primaryKey:true})
    id: string;
    @Column({type: DataType.STRING})
    teamId: string
    @Column({type: DataType.STRING})
    name: string
    @Column({type: DataType.STRING})
    @ForeignKey(()=> Semester)
    semesterId: string;
    @Column({type: DataType.STRING})
    @ForeignKey(()=> Category)
    categoryId: string;
    @Column({type: DataType.INTEGER})
    theme: number;
    @Column({type: DataType.STRING})
    rating: string;
    @Column({type: DataType.STRING})
    @ForeignKey(()=> Status)
    statusId: string;
    @Column({type: DataType.STRING})
    shortDescription: string;
    @Column({type: DataType.STRING})
    playDescription: string;
    @Column({type: DataType.STRING})
    gitHubLink: string;

}