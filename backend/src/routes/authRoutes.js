const express = require('express');
const router = express.Router();
const {
  validateRequest,
  isRequestValidated,
  validateSigninRequest,
} = require('../validators/authValidators');

const { signin, signup } = require('../controllers/authController');

router.post('/signin', validateSigninRequest, isRequestValidated, signin);
router.post('/signup', validateRequest, isRequestValidated, signup);

module.exports = router;
