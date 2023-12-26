import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Game} from "../games/game.model";
import {CategoryThemes} from "../themes/categorythemes.model";
import {Theme} from "../themes/themes.model";

interface CategoriesCreationAttrs{
    id: string
    name:string
}

@Table({tableName: 'categories'})
export class Category extends Model<Category, CategoriesCreationAttrs>{
    @Column({type: DataType.STRING, unique:true, primaryKey:true})
    id: string;
    @Column({type: DataType.STRING})
    name:string;
    @HasMany(()=> Game)
    games: Game[]
    @BelongsToMany(()=> Theme, ()=> CategoryThemes)
    themes: Theme[]
}