import {BelongsTo, BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Game} from "../games/game.model";
import {Category} from "../categories/categories.model";
import {CategoryThemes} from "./categorythemes.model";

interface ThemesCreationAttrs{
    id: string
    name:string
    categoryId: string
}

@Table({tableName: 'themes'})
export class Theme extends Model<Theme, ThemesCreationAttrs>{
    @Column({type: DataType.STRING, unique:true, primaryKey:true})
    id: string;
    @Column({type: DataType.STRING})
    name:string;
    @HasMany(()=> Game)
    games: Game[]
    @BelongsToMany(()=> Category, ()=> CategoryThemes)
    category: Category[]
}