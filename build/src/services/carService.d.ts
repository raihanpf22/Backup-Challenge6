import { ICar } from "../interface/ICar";
declare class carService {
    static list(): Promise<{
        status_code: number;
        message: string;
        data: import("../../db/models/Car").Car[];
    } | {
        status_code: number;
        message: any;
        data: string;
    }>;
    static create({ no_police, brand, model, image, price_perday, capacity, status, transmision, type, createdBy, updatedBy, }: ICar): Promise<{
        status_code: number;
        message: string;
        data: import("../../db/models/Car").Car;
    } | {
        status_code: number;
        message: any;
        data: string;
    }>;
    static update({ id, no_police, brand, model, image, price_perday, capacity, status, transmision, type, updatedBy, UpdatedAt }: ICar): Promise<{
        status_code: number;
        message: string;
        data: [affectedCount: number];
    } | {
        status_code: number;
        message: any;
        data: string;
    }>;
    static getById({ id }: ICar): Promise<{
        status_code: number;
        message: string;
        data: import("../../db/models/Car").Car;
    } | {
        status_code: number;
        message: any;
        data: string;
    }>;
    static deleted({ id }: ICar): Promise<{
        status_code: number;
        message: any;
        data: string;
    }>;
    static getCarAvailable(): Promise<{
        status_code: number;
        message: string;
        data: {
            rows: import("../../db/models/Car").Car[];
            count: number;
        };
    } | {
        status_code: number;
        message: any;
        data: string;
    }>;
}
export default carService;
