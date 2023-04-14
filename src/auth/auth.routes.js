const { register, login } = require('./auth.controller');
const validateRegister = require('./validateSchemas/register.validator');

const router = require('express').Router();

router.post('/register', validateRegister, register);
router.post('/login', login);

module.exports = router;
