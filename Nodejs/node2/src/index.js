import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';
import {createLink} from'./utils.js';
const dirPath = process.argv[2]
import dotenv from 'dotenv';
dotenv.config({path: `.env.${process.env.NODE_ENV}`});
console.log(process.env.NODE_ENV);
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    let reqUrl = url.parse(req.url, true);
    let filePath = path.join(dirPath, reqUrl.pathname);

    fs.stat(filePath, (err, stats) => {
        
        if (err) { res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'}); 
        res.end('Arquivo não encontrado'); }
        
        else if (stats.isDirectory()) {
            fs.readdir(filePath, (err, files) => {
                if (err) { res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'});
                 return res.end('Erro ao ler o diretório'); }
                
                else {
                    let fileLinks = '';
                    files.forEach(file => { fileLinks += createLink(file); });
                    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'}); 
                    res.end(fileLinks);
                }
            });
        } 
        else {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) { 
                res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'}); 
                return res.end('Erro ao ler o arquivo'); }
                
                res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'}); 
                res.end(`${data}<br><a href="/">Voltar</a>`);
            });
        }
    });
});

server.listen(PORT, () => { console.log(`Servidor rodando na porta ${PORT}`); });