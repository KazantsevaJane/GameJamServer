import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Category} from "../categories/categories.model";
import {Theme} from "./themes.model";

@Table({tableName: 'category_themes', createdAt: false, updatedAt: false})
export class CategoryThemes extends Model<CategoryThemes>{
    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
    id: number;
    @ForeignKey(()=> Category)
    @Column({type: DataType.STRING})
    categoryId:string;
    @ForeignKey(()=> Theme)
    @Column({type: DataType.STRING})
    themeId:string;
}