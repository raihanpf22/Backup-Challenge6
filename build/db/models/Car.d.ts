import { Model } from "sequelize-typescript";
export declare class Car extends Model {
    id: number;
    no_police: string;
    brand: string;
    model: string;
    image: string;
    price_perday: number;
    capacity: number;
    status: boolean;
    transmision: string;
    type: string;
    createdBy: string;
    updatedBy: string;
    createdAt: Date;
    updatedAt: Date;
}
