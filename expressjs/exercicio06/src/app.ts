import express from 'express';
import routes from './router/lorem';
import router from './router/main';

const app = express();


app.use('/', routes);
app.use('/', router);

const port = 3333;
app.listen(port, () => {
  console.log(`Express app iniciada na porta http://localhost:${port}`);
});
