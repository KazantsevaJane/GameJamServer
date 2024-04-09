import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Team} from "../teams/teams.model";
import {User} from "../users/user.model";
import {TeamRole} from "../team-roles/team-roles.model";
import {RoleTeamDist} from "./role-team-dist.model";

interface TeamDistCreationAttrs{
    id: string
    teamRoleId: string
    teamId: string
    userId: string

}
@Table({tableName: 'teamdist'})
export class TeamDist extends Model<TeamDist, TeamDistCreationAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: string;
    // @ForeignKey(()=> TeamRole)
    // @Column({type: DataType.STRING, unique:false})
    // teamRoleId: string
    @ForeignKey(()=> Team)
    @Column({type: DataType.STRING, unique: false})
    teamId: string
    @ForeignKey(()=> User)
    @Column({type: DataType.STRING, unique:false})
    userId: string
    // @BelongsTo(()=> TeamRole)
    // teamRole: TeamRole
    @BelongsTo(()=> Team)
    team: Team
    @BelongsTo(()=> User)
    user: User
    @BelongsToMany(()=> TeamDist, ()=> RoleTeamDist)
    teamDist: TeamDist[]
    @HasMany(()=> RoleTeamDist)
    roleTeamDist: RoleTeamDist[]
}