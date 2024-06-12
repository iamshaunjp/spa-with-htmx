import express from 'express';
import routes from './routes/index.js';

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view engine
app.set('view engine', 'pug');

// routes
app.use('/', routes);

// listen to port
app.listen(3000, () => {
  console.log('Server running on port 3000');
});