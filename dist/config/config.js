"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    port: Number(process.env.PORT) || 5000,
    nodeEnv: process.env.NODE_ENV || 'development',
    mailTrap: process.env.MAILTRAP_API_KEY,
    googleApp: process.env.GOOGLE_APP_PASS,
    googleEmail: process.env.GOOGLE_EMAIL_SENDER,
    scout92: process.env.SCOUT92_EMAIL,
};
exports.default = config;
//# sourceMappingURL=config.js.map