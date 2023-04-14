const UserService = require('./user.service');

const createUser = async (req, res) => {
  const payload = req.body;
  const message = await UserService.createUser(payload);
  return res.json(message);
};

module.exports = {
  createUser,
};
