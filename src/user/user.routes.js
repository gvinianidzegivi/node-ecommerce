const router = require('express').Router();

const UserController = require('./user.controller');

router.post('/', UserController.createUser);

module.exports = router;
