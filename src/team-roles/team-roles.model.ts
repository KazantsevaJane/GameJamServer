import {BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {TeamDist} from "../team-dist/team-dist.model";
import {User} from "../users/user.model";

interface TeamRoleCreationAttrs{
    id: string
    name: string
}

@Table({tableName:'teamroles'})
export class TeamRole extends Model<TeamRole, TeamRoleCreationAttrs>{
    @Column({type: DataType.STRING, unique:true, primaryKey:true})
    id: string;
    @Column({type: DataType.STRING})
    name: string
    @BelongsToMany(()=> User, ()=> TeamDist)
    user: User[]
}