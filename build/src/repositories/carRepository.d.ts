import { Car } from "../../db/models/Car";
import { ICar } from "../interface/ICar";
declare class carRepository {
    static list(): Promise<Car[]>;
    static create({ no_police, brand, model, image, price_perday, capacity, status, transmision, type, createdBy, updatedBy, }: ICar): Promise<Car>;
    static update({ id, no_police, brand, model, image, price_perday, capacity, status, transmision, type, createdBy, updatedBy, }: ICar): Promise<[affectedCount: number]>;
    static getById({ id }: ICar): Promise<Car | null>;
    static deleted({ id }: ICar): Promise<number>;
    static getCarAvailable(): Promise<{
        rows: Car[];
        count: number;
    }>;
}
export default carRepository;
