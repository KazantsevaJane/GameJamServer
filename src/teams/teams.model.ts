import {BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {TeamDist} from "../team-dist/team-dist.model";
import {User} from "../users/user.model";

interface TeamCreationAttrs{
    id: string
    name: string
}

@Table({tableName:'teams'})
export class Team extends Model<Team, TeamCreationAttrs>{
    @Column({type: DataType.STRING, unique:true, primaryKey:true})
    id: string;
    @Column({type: DataType.STRING})
    name: string
    @BelongsToMany(()=> User, ()=> TeamDist)
    user: User[]
    @HasMany(()=> TeamDist)
    teamDist: TeamDist[]
}