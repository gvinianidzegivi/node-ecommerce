const router = require('express').Router();

const authRoutes = require('./auth/auth.routes');
const userRoutes = require('./user/user.routes');
const { checkToken } = require('./auth/auth.middleware');

router.use('/auth', authRoutes);
router.use(checkToken);
router.use('/users', userRoutes);

module.exports = router;
