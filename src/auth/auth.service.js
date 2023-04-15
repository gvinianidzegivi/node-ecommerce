const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { StatusCodes } = require('http-status-codes');

const UserModel = require('../database/user.model');
const ApiError = require('../error/apiError');

const validateUserPassword = ({ userPassword, passwordPayload }) =>
  bcrypt.compareSync(passwordPayload, userPassword, process.env.SALT_AMOUNT);

const login = async ({ email, password }) => {
  const user = await UserModel.findOne({
    where: {
      email,
    },
  });

  if (!user) throw new ApiError({ error: StatusCodes.NOT_FOUND });

  const isValidated = validateUserPassword({
    passwordPayload: password,
    userPassword: user.password,
  });

  if (isValidated) {
    const payload = {
      userId: user.id,
    };

    const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: '24h',
    });

    return token;
  }
  throw new ApiError(StatusCodes.BAD_REQUEST, 'Email or Password is incorrect');
};
module.exports = { login };
