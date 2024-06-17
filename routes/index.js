import express from 'express';
import articles from '../data/articles.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'Product Listing', articles: articles});
});

export default router;

