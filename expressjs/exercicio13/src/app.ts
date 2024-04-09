import routes from './router/router';
import express from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import { engine } from 'express-handlebars';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import morgan from 'morgan';

// Load environment variables from .env file
dotenv.config();

// Validate environment variables
validateEnv();

const app = express();
const PORT = process.env.PORT || 3333;

// Setup logging middleware
app.use(morgan('short'));

// Setup view engine and handlebars
app.engine(
  'handlebars',
  engine({
    layoutsDir: path.join(__dirname, 'views/layouts'),
    defaultLayout: 'main',
  }),
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Setup Sass middleware for compiling SCSS to CSS
app.use(
  sassMiddleware({
    src: path.join(__dirname, 'public', 'scss'),
    dest: path.join(__dirname, 'public', 'css'),
    outputStyle: 'compressed',
    prefix: '/css',
  }),
);

// Serve static files
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.use(
  '/js/bootstrap',
  express.static(
    path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js'),
  ),
);

// Parse incoming request bodies
app.use(express.urlencoded({ extended: false }));

// Setup routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});
