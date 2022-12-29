import { User } from "../../db/models/User";
import { IUser } from "../interface/IUser";
declare class userRepository {
    static list(): Promise<User[]>;
    static create({ name, email, role, password }: IUser): Promise<User>;
    static getByEmail({ email }: any): Promise<User | null>;
    static deletedByID({ id }: any): Promise<number>;
}
export default userRepository;
