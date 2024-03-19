import {Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {TeamDist} from "../team-dist/team-dist.model";

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
    @HasMany(()=> TeamDist)
    teamDist: TeamDist[]
}