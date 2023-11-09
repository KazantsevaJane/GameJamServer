import {Column, DataType, Model, Table} from "sequelize-typescript";

interface GameCreationAttrs{
    id: string
    name: string;
    file_name: string;
}

@Table({tableName:'games'})
export class Game extends Model<Game, GameCreationAttrs>{
    @Column({type: DataType.STRING, unique:true, primaryKey:true})
    id: number;
    @Column({type: DataType.STRING})
    name: string
    @Column({type: DataType.STRING})
    file_name: string;

}