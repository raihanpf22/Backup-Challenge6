import { Model } from "sequelize-typescript";
export declare class User extends Model {
    id: number;
    name: string;
    email: string;
    role: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
