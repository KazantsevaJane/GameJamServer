import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Team} from "../teams/teams.model";
import {User} from "../users/user.model";
import {TeamRole} from "../team-roles/team-roles.model";

interface TeamDistCreationAttrs{
    id: string
    teamId: string
    userId: string
    teamRoleId: string
}
@Table({tableName: 'teamdist'})
export class TeamDist extends Model<TeamDist, TeamDistCreationAttrs>{
    @Column({type: DataType.STRING, unique:true, primaryKey:true})
    id: string;
    @Column({type: DataType.STRING, unique: false})
    @ForeignKey(()=> Team)
    teamId: string
    @Column({type: DataType.STRING, unique:false})
    @ForeignKey(()=> User)
    userId: string
    @Column({type: DataType.STRING, unique:false})
    @ForeignKey(()=> TeamRole)
    teamRoleId: string
}