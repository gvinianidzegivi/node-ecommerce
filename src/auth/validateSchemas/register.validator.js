const Joi = require('joi');
const joiSchemaValidator = require('../../tools/joiSchemaValidator');

const validateRegister = async (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    balance: Joi.number().integer().min(0),
    email: Joi.string().email(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
    roleId: Joi.string(),
    deletedAt: Joi.date().allow(null),
  });

  return joiSchemaValidator(next, req.body, schema);
};

module.exports = validateRegister;
