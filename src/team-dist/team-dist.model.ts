import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Team} from "../teams/teams.model";
import {User} from "../users/user.model";
import {TeamRole} from "../team-roles/team-roles.model";


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
    @Column({type: DataType.STRING, unique: false})
    teamId: string
    @Column({type: DataType.STRING, unique:false})
    userId: string
    @Column({type: DataType.STRING, unique:false})
    roleId: string
    @Column({type: DataType.STRING, unique:false})
    semesterId: string

}