/// <reference types="node" />
import express from "express";
declare const app: express.Application;
export declare const server: import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
export default app;
