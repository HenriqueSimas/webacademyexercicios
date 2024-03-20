const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const utils = require('./utils');
const dirPath = process.argv[2], dotenv = require('dotenv');
dotenv.config({path: `.env.${process.env.NODE_ENV}`});
console.log(process.env.NODE_ENV);
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    let reqUrl = url.parse(req.url, true);
    filePath = path.join(dirPath, reqUrl.pathname);

    fs.stat(filePath, (err, stats) => {
        
        if (err) { res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'}); 
        res.end('Arquivo não encontrado'); }
        
        else if (stats.isDirectory()) {
            fs.readdir(filePath, (err, files) => {
                if (err) { res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'});
                 return res.end('Erro ao ler o diretório'); }
                
                else {
                    let fileLinks = '';
                    files.forEach(file => { fileLinks += utils.createLink(file); });
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