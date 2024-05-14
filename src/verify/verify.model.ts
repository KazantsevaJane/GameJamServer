import {Model, Table} from "sequelize-typescript";

interface VerifyCreationAttrs{
    id: string;
    userId: string;
    password: string;
}

@Table({tableName: 'verify'})
export class Verify extends Model<Verify, VerifyCreationAttrs>{

}