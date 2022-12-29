import { Request, Response } from "express";
export declare const carList: (req: Request, res: Response) => Promise<Response>;
export declare const carCreate: (req: Request, res: Response) => Promise<Response>;
export declare const carUpdate: (req: Request, res: Response) => Promise<Response>;
export declare const carDelete: (req: Request, res: Response) => Promise<Response>;
export declare const carAvailable: (req: Request, res: Response) => Promise<Response>;
