import {BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {TeamDist} from "../team-dist/team-dist.model";
import {User} from "../users/user.model";
import {RoleTeamDist} from "../team-dist/role-team-dist.model";

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
    @BelongsToMany(()=> TeamDist, ()=> RoleTeamDist)
    teamDist: TeamDist[]
    @HasMany(()=> RoleTeamDist)
    roleTeamDist: RoleTeamDist[]
}