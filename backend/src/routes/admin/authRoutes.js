const express = require('express');
const router = express.Router();

const {
  signin,
  signup,
  requireSignin,
} = require('../../controllers/admin/adminAuthController');

router.post('/signin', signin);
router.post('/signup', signup);

module.exports = router;
