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
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${process.env.URL_DB}/produtos`);
        const produtos = yield response.json();
        res.render('produto/index', { produtos });
    }
    catch (err) {
        console.log(err);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.method === 'GET') {
        res.render('produto/create');
    }
    else {
        const produto = req.body;
        try {
            const response = yield fetch(`${process.env.URL_DB}/produtos`, {
                method: 'POST',
                body: JSON.stringify(produto)
            });
            res.redirect("/produto");
        }
        catch (err) {
            console.log(err);
        }
    }
});
const read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const response = yield fetch(`${process.env.URL_DB}/produtos/${id}`);
        const produto = yield response.json();
        res.render("produto/view", { produto });
    }
    catch (err) {
        console.log(err);
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (req.method === 'GET') {
        const response = yield fetch(`${process.env.URL_DB}/produtos/${id}`);
        const produto = yield response.json();
        res.render("produto/update", { produto });
    }
    else {
        const produtoAtualizado = req.body;
        try {
            const response = yield fetch(`${process.env.URL_DB}/produtos/${id}`, {
                method: 'PUT',
                body: JSON.stringify(produtoAtualizado),
                headers: { 'Content-Type': 'application/json' },
            });
            const data = yield response.json();
            console.log(data);
            res.redirect(`/produto/${id}`);
        }
        catch (error) {
            console.error('Erro ao atualizar o produto:', error);
        }
    }
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Extraímos o 'id' dos parâmetros da requisição
    const { id } = req.params;
    try {
        yield fetch(`${process.env.URL_DB}/produtos/${id}`, {
            method: 'DELETE'
        });
        res.redirect('/produto');
    }
    catch (err) {
        // Registramos quaisquer erros
        console.log(err);
    }
});
exports.default = { index, create, read, update, remove };
