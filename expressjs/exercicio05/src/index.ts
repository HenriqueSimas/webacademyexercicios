import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Crie um stream de gravação no modo de anexar
const logDirectory = process.env.LOG_DIRECTORY || './Middleware';
const accessLogStream = fs.createWriteStream(path.join(__dirname, logDirectory, 'access.log'), { flags: 'a' });

// Escolha o formato do log baseado no parâmetro
const format = process.env.LOG_FORMAT === 'completo' ? ':date[iso] :url :method :http-version :user-agent' : ':date[iso] :url :method';

// Configure o middleware do morgan
app.use(morgan(format, { stream: accessLogStream }));

app.get('/', (req, res) => {
  res.send('Exercicio 05');
});

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
});
