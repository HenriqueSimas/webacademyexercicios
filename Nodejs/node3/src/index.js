
const express = require('express');
const fsPromises = require('fs').promises;
const path = require('path');
const app = express();
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
dotenv = require('dotenv');
dotenv.config({path: `.env.${process.env.NODE_ENV}`});
console.log(process.env.NODE_ENV);
app.use(express.static('public'));

const PORT = process.env.PORT;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 10,
    min: 4
  },
  wordsPerSentence: {
    max: 50,
    min: 4
  }
});

async function generateHtmlParagraphs(numParagraphs) {
    let html = '';
    for (let i = 0; i < numParagraphs; i++) {
        html += `<p>${lorem.generateParagraphs(numParagraphs)}</p>\n`;
    }
    return html;
}

app.get('/generate-ipsum', async (req, res) => {
    const count = req.query.count || 5;
    const loremIpsum = await generateHtmlParagraphs(count);
    res.json({ loremIpsum });
});

const readFile = async (filePath) => {
    try {
        return await fsPromises.readFile(filePath, 'utf8');
    }
    catch(err) {
        console.log(err);
    }
}

app.get('/', function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    res.end(readFile(path.join(__dirname, 'public', 'index.html')));
});

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});