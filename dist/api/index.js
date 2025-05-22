"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../src/app"));
// Não use app.listen() aqui - o ambiente serverless da Vercel cuida disso
exports.default = app_1.default;
//# sourceMappingURL=index.js.map