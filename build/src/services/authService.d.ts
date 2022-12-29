import { IUser } from "../interface/IUser";
declare class authService {
    static register({ name, email, password }: IUser): Promise<{
        status_code: number;
        messsage: string;
        data: null;
        message?: undefined;
    } | {
        status_code: number;
        message: string;
        data: null;
        messsage?: undefined;
    } | {
        status_code: number;
        message: string;
        data: import("../../db/models/User").User;
        messsage?: undefined;
    } | {
        status_code: number;
        message: any;
        data: string;
        messsage?: undefined;
    }>;
    static registerAdmin({ name, email, password }: IUser): Promise<{
        status_code: number;
        message: string;
        data: import("../../db/models/User").User;
    } | {
        status_code: number;
        message: any;
        data: string;
    }>;
    static login({ email, password }: IUser): Promise<{
        status_code: number;
        message: string;
        token: string;
        data: import("../../db/models/User").User;
    } | {
        status_code: number;
        message: any;
        data: string;
        token?: undefined;
    }>;
    static loginGoogle(googleCredential: any): Promise<{
        status_code: number;
        message: any;
        data: string;
    }>;
}
export default authService;
