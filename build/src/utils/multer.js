"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerUpload = void 0;
const multer_1 = __importDefault(require("multer"));
const multerStorage = multer_1.default.diskStorage({
    destination: (request, file, callback) => {
        callback(null, "src/assets/");
    },
    filename: (request, file, callback) => {
        callback(null, file.originalname);
    },
});
exports.multerUpload = (0, multer_1.default)({ storage: multerStorage });
