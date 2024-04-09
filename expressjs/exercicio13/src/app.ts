import router from './router/router'; 
import express from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import { engine } from 'express-handlebars';
import sass from 'node-sass-middleware';
import path from 'path';
import morgan from 'morgan' ;
dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3333

app.engine('handlebars', engine({
  layoutsDir: `${__dirname}/views/layouts`,
  defaultLayout: 'main',
}));

app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.use(
  sass({
    src: path.join(__dirname, "public/scss"),
    dest: path.join(__dirname, "public/css"),
    outputStyle: "compressed",
    prefix: "/css",
  })
);

app.use("/css", express.static(path.join(__dirname, "public/css")));

app.use("/js", [
  express.static(path.join(__dirname, '../public/js')),
  express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')),
]);
app.use(morgan('short'));
app.use(express.urlencoded({extended:false}));
app.use(router);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});