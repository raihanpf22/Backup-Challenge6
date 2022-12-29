import { IUser } from "../interface/IUser";
declare class userService {
    static list(): Promise<{
        status_code: number;
        message: string;
        data: import("../../db/models/User").User[];
    } | {
        status_code: number;
        message: any;
        data: string;
    }>;
    static create({ name, email, role, password }: IUser): Promise<{
        status_code: number;
        message: string;
        data: import("../../db/models/User").User;
    } | {
        status_code: number;
        message: any;
        data: string;
    }>;
    static delete({ id }: any): Promise<{
        status_code: number;
        message: any;
        data: string;
    }>;
}
export default userService;
