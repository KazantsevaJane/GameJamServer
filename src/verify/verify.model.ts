import {Column, DataType, Model, Table} from "sequelize-typescript";

interface VerifyCreationAttrs{
    id: string;
    userId: string;
    password: string;
}

@Table({tableName: 'verify'})
export class Verify extends Model<Verify, VerifyCreationAttrs>{
    @Column({type: DataType.NUMBER, autoIncrement: true, unique:true, primaryKey:true})
    id: string;
    @Column({type: DataType.STRING})
    userId: string
    @Column({type: DataType.STRING})
    verifyPassword: string
}