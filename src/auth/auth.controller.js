const UserService = require('../user/user.service');
const AuthService = require('../auth/auth.service');
const { log } = require('console');

const register = async (req, res) => {
  const payload = req.body;
  const message = await UserService.createUser(payload);
  return res.json(message);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await AuthService.login({ email, password });
  return res.json({ token });
};

module.exports = { register, login };
