import { Router } from 'express';
import { LoremIpsum } from "lorem-ipsum";

const router = Router();

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

router.get('/lorem/:paragraphs', (req, res) => {
  const paragraphs = parseInt(req.params.paragraphs);
  const text = lorem.generateParagraphs(paragraphs).split('\n').join('<br><br>');
  res.send(text);
});


export default router;
