
import routes from './router/router'; 
import express, { Request, Response } from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import { engine } from 'express-handlebars';
dotenv.config();
validateEnv();
const app = express();
const PORT = process.env.PORT || 3333
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);



app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
  });
