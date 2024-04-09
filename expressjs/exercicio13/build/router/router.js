"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_1 = __importDefault(require("../controllers/main"));
const produto_1 = __importDefault(require("../controllers/produto"));
const router = (0, express_1.Router)();
// Main Controller
//router.get('/', mainController.index);
router.get('/hb1', main_1.default.hb1);
router.get('/', produto_1.default.index);
router.post('/', produto_1.default.index);
router.get('/produto', produto_1.default.index);
router.post('/produto', produto_1.default.index);
router.get('/produto/create', produto_1.default.create);
router.post('/produto/create', produto_1.default.create);
router.get('/produto/:id', produto_1.default.read);
router.post('/produto/:id', produto_1.default.read);
router.get('/produto/update/:id', produto_1.default.update);
router.post('/produto/update/:id', produto_1.default.update);
router.get('/produto/remove/:id', produto_1.default.remove);
router.post('/produto/remove/:id', produto_1.default.remove);
exports.default = router;
