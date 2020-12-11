const express = require('express');
const router = express.Router();
const {
  createCategory,
  getCategories,
} = require('../controllers/categoryController');
const { requireSignin } = require('../middlewares/authMiddleware');

router.get('/', getCategories);
router.post('/create', createCategory);

module.exports = router;
