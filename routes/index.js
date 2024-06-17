import express from 'express';
import articles from '../data/articles.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'Product Listing', articles: articles});
});

router.get('/article/:id', (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));

  res.render('article', { title: article.name, article });
});

export default router;

