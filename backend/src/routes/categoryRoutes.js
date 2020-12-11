const express = require('express');
const router = express.Router();
const {
  createCategory,
  getCategories,
} = require('../controllers/categoryController');
const {
  requireSignin,
  adminMiddleware,
} = require('../middlewares/authMiddleware');

router.get('/', getCategories);
router.post('/create', requireSignin, adminMiddleware, createCategory);

module.exports = router;
