"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sendEmail = require('../email/send-email');
const router = (0, express_1.Router)();
router.get('/test', (req, res) => {
    res.status(200).json({ message: 'Rotas funcionando!!!' });
});
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formData = yield req.body;
        yield sendEmail(formData);
        res.status(200).json({ mensagem: 'Email enviado com sucesso!!' });
    }
    catch (error) {
        console.error(`Erro ao enviar o email erro: ${error}!!`);
    }
}));
exports.default = router;
//# sourceMappingURL=itemRoutes.js.map