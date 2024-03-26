import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {TeamDist} from "../team-dist/team-dist.model";
import {Team} from "../teams/teams.model";

interface UserCreationAttrs{
    id: string
    email: string
    password:string
    name: string
    surname: string
    academicGroup: string
}

@Table({tableName:'users'})
export class User extends Model<User, UserCreationAttrs>{
    @Column({type: DataType.STRING, unique:true, primaryKey:true})
    id: string;
    @Column({type: DataType.STRING})
    email: string
    @Column({type: DataType.STRING})
    password: string
    @Column({type: DataType.STRING})
    name: string
    @Column({type: DataType.STRING})
    surname: string
    @Column({type: DataType.STRING})
    academicGroup: string
    @BelongsToMany(()=> Team, ()=>TeamDist)
    team: Team[]
}