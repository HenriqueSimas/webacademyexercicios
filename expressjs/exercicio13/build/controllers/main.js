"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index = (req, res) => {
    res.render('main/', {
        mensagem: 'Página Inicial',
    });
};
const hb1 = (req, res) => {
    res.render('main/hb1', {
        mensagem: 'Olá, você está aprendendo Express + HBS!',
    });
};
exports.default = { index, hb1 };
