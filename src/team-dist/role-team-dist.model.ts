import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Team} from "../teams/teams.model";
import {User} from "../users/user.model";
import {TeamRole} from "../team-roles/team-roles.model";
import {TeamDist} from "./team-dist.model";

interface RoleTeamDistCreationAttrs{
    id: string
    teamRoleId: string
    teamDistId: string

}
@Table({tableName: 'roleteamdist'})
export class RoleTeamDist extends Model<TeamDist, RoleTeamDistCreationAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: string;
    @ForeignKey(()=> TeamRole)
    @Column({type: DataType.STRING, unique:false})
    teamRoleId: string
    @ForeignKey(()=> TeamDist)
    @Column({type: DataType.STRING, unique: false})
    teamDistId: string
    @BelongsTo(()=> TeamRole)
    teamRole: TeamRole
    @BelongsTo(()=> TeamDist)
    teamDist: TeamDist
}