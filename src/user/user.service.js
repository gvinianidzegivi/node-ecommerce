const bcrypt = require('bcrypt');
const ApiError = require('../error/apiError');

const UserModel = require('../database/user.model');
const { log } = require('console');

const createUser = async ({
  firstName,
  lastName,
  balance,
  email,
  password,
  roleId,
  deletedAt,
}) => {
  const user = await UserModel.findOne({
    where: {
      email,
    },
  });

  if (user) return { message: 'User Already Exist' };

  const hashedPassword = bcrypt.hashSync(password, +process.env.SALT_AMOUNT);

  const createdUser = await UserModel.create({
    firstName,
    lastName,
    balance,
    email,
    password: hashedPassword,
    roleId,
    deletedAt,
  });

  return { message: 'User created' };
};

module.exports = {
  createUser,
};
