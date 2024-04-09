"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("./router/router"));
const express_1 = __importDefault(require("express"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_handlebars_1 = require("express-handlebars");
const node_sass_middleware_1 = __importDefault(require("node-sass-middleware"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
(0, validateEnv_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3333;
app.engine('handlebars', (0, express_handlebars_1.engine)({
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: 'main',
}));
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);
app.use((0, node_sass_middleware_1.default)({
    src: path_1.default.join(__dirname, "public/scss"),
    dest: path_1.default.join(__dirname, "public/css"),
    outputStyle: "compressed",
    prefix: "/css",
}));
app.use("/css", express_1.default.static(path_1.default.join(__dirname, "public/css")));
app.use("/js", [
    express_1.default.static(path_1.default.join(__dirname, '../public/js')),
    express_1.default.static(path_1.default.join(__dirname, '../node_modules/bootstrap/dist/js')),
]);
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/', router_1.default);
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});
