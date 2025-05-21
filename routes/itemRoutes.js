"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sendEmail = require('../email/send-email');
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const formData = await req.body;
        await sendEmail(formData);
        res.status(200).json({ mensagem: 'Email enviado com sucesso!!' });
    }
    catch (error) {
        console.error(`Erro ao enviar o email erro: ${error}!!`);
    }
});
exports.default = router;
//# sourceMappingURL=itemRoutes.js.map