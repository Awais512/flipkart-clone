const express = require('express');
const router = express.Router();

const {
  signin,
  signup,
} = require('../../controllers/admin/adminAuthController');
const {
  validateRequest,
  isRequestValidated,
  validateSigninRequest,
} = require('../../validators/authValidators');

router.post('/signin', validateSigninRequest, isRequestValidated, signin);
router.post('/signup', validateRequest, isRequestValidated, signup);

module.exports = router;
