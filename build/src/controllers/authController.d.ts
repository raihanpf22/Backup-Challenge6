import { Request, Response } from "express";
export declare const register: (req: Request, res: Response) => Promise<Response>;
export declare const registerAdmin: (req: Request, res: Response) => Promise<Response>;
export declare const login: (req: Request, res: Response) => Promise<Response>;
export declare const googleLogin: (req: Request, res: Response) => Promise<Response>;
