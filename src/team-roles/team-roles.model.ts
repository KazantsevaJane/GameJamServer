import {Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {TeamDist} from "../team-dist/team-dist.model";

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
    @HasMany(()=> TeamDist)
    teamDist: TeamDist[]
}