import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Game} from "../games/game.model";

interface CategoriesCreationAttrs{
    name:string
}

@Table({tableName: 'categories'})
export class Category extends Model<Category, CategoriesCreationAttrs>{
    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
    id: number;
    @Column({type: DataType.STRING})
    name:string;
    @HasMany(()=> Game)
    games: Game[]
}